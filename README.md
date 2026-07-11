# CI/CD Pipeline with Jenkins
## Project Overview

This project demonstrates an end-to-end CI/CD pipeline using GitHub, Jenkins, Docker, and AWS EC2.

Whenever code is pushed to GitHub, a GitHub Webhook automatically triggers Jenkins. Jenkins clones the repository, builds a Docker image, replaces the existing container, and deploys the latest version of the application on an AWS EC2 instance running Nginx.

## Architecture

```
Developer
    │
 git push
    │
GitHub Repository
    │
GitHub Webhook
    │
Jenkins (AWS EC2)
    │
Docker Build
    │
Docker Container
    │
Nginx
    │
Live Website
```

## Technologies Used

- Git
- GitHub
- GitHub Webhooks
- Jenkins
- Docker
- Nginx
- AWS EC2
- Linux
- HTML
- CSS
- JavaScript

## Folder Structure

```
jenkins-cicd-demo/
│
├── index.html
├── Dockerfile
├── Jenkinsfile
├── README.md
├── css/
├── js/
├── images/
├── resume/
└── screenshots/
```