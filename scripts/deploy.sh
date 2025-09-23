#!/bin/bash

# Deployment Script for CICD Fullstack App
set -e  # Exit on error

echo "🚀 Starting CICD Fullstack Application Deployment"
echo "=============================================="

# Configuration
PROJECT_DIR="/home/ec2-user/cicd-app"
DOCKER_DIR="$PROJECT_DIR/docker-git-fullstackapp"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[WARN] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
    exit 1
}

# Check if required commands are available
check_dependencies() {
    log "Checking dependencies..."
    command -v docker >/dev/null 2>&1 || error "Docker is not installed"
    command -v docker-compose >/dev/null 2>&1 || error "Docker Compose is not installed"
    command -v git >/dev/null 2>&1 || error "Git is not installed"
}

# Create project directory
setup_directory() {
    log "Setting up project directory..."
    sudo mkdir -p $PROJECT_DIR
    sudo chown ec2-user:ec2-user $PROJECT_DIR
    cd $PROJECT_DIR
}

# Clone or update repository
update_code() {
    log "Updating application code..."
    if [ -d ".git" ]; then
        git pull origin main
    else
        git clone https://github.com/Kedharnath9381/hosipital-fullstack-app.git .
    fi
}

# Build and deploy application
deploy_app() {
    log "Building and deploying application..."
    cd $DOCKER_DIR
    
    # Stop existing containers
    log "Stopping existing containers..."
    sudo docker-compose down || true
    
    # Build and start new containers
    log "Building and starting new containers..."
    sudo docker-compose up -d --build
    
    # Wait for services to start
    log "Waiting for services to initialize..."
    sleep 30
}

# Health checks
health_check() {
    log "Performing health checks..."
    
    # Check if containers are running
    log "Checking container status:"
    sudo docker ps
    
    # Frontend health check
    if curl -s -f http://localhost:80/ >/dev/null; then
        log "✅ Frontend is healthy"
    else
        warn "⚠️ Frontend health check failed"
    fi
    
    # Backend health check
    if curl -s -f http://localhost:5050/actuator/health >/dev/null; then
        log "✅ Backend is healthy"
    else
        warn "⚠️ Backend health check failed"
    fi
}

# Cleanup unused images
cleanup() {
    log "Cleaning up unused Docker images..."
    sudo docker system prune -f
}

# Main deployment function
main() {
    log "Starting deployment process..."
    
    check_dependencies
    setup_directory
    update_code
    deploy_app
    health_check
    cleanup
    
    log "🎉 Deployment completed successfully!"
    log "🌐 Frontend: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"
    log "🔧 Backend API: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4):5050"
}

# Run main function
main "$@"