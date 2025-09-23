#!/bin/bash
echo "🚀 Starting deployment..."
cd /home/ec2-user/cicd-app

# Stop existing containers
sudo docker-compose down

# Pull latest changes (if using images)
sudo docker-compose pull || true

# Build and start new containers
sudo docker-compose up -d --build

# Clean up unused images
sudo docker system prune -f

echo "✅ Deployment completed!"
sudo docker ps