# CI/CD Pipeline using Jenkins, Docker & AWS

![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-red?logo=jenkins)
![Docker](https://img.shields.io/badge/Docker-Containerization-blue?logo=docker)
![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazonaws)
![GitHub](https://img.shields.io/badge/GitHub-Webhooks-black?logo=github)
![Status](https://img.shields.io/badge/Project-Completed-brightgreen)

> **An end-to-end CI/CD pipeline demonstrating automated application deployment using GitHub, Jenkins, Docker, and AWS EC2.**

---

## 📌 Project Overview

This project demonstrates the implementation of an automated Continuous Integration and Continuous Deployment (CI/CD) pipeline using **GitHub, Jenkins, Docker, and AWS EC2**.

Whenever code is pushed to the GitHub repository, a **GitHub Webhook** automatically triggers Jenkins. Jenkins retrieves the latest source code, builds a Docker image, replaces the existing container, and deploys the updated application to an AWS EC2 instance running Nginx.

The project demonstrates practical DevOps concepts including Pipeline as Code, automated deployments, containerization, and continuous delivery.

---

## 🎯 Project Objectives

- Implement an automated CI/CD pipeline
- Eliminate manual deployment
- Automate Docker image creation
- Deploy applications using Jenkins Pipeline
- Demonstrate continuous integration and deployment practices

---

## 💻 Skills Demonstrated

- Git
- GitHub
- GitHub Webhooks
- Jenkins
- Jenkins Pipeline
- Docker
- Dockerfile
- Nginx
- AWS EC2
- Linux
- CI/CD
- Pipeline as Code

---

## 🏗 Architecture

The following diagram illustrates the automated CI/CD workflow implemented in this project.

![CI/CD Architecture](architecture.png)

---

## ⚙️ Infrastructure Specifications

| Component | Configuration |
|-----------|---------------|
| Source Code | GitHub Repository |
| CI/CD Tool | Jenkins |
| Container Platform | Docker |
| Web Server | Nginx |
| Cloud Platform | AWS EC2 |
| Deployment Type | Automated |
| Trigger | GitHub Webhook |

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Git | Version Control |
| GitHub | Source Code Repository |
| GitHub Webhooks | Automatic Build Trigger |
| Jenkins | Continuous Integration & Deployment |
| Docker | Application Containerization |
| Nginx | Static Website Hosting |
| AWS EC2 | Deployment Server |
| Linux | Operating System |

---

## 🏛 CI/CD Pipeline Design

The pipeline follows an automated deployment workflow.

- Source code is maintained in GitHub.
- GitHub Webhooks trigger Jenkins automatically.
- Jenkins retrieves the latest code.
- Docker builds a new application image.
- Existing Docker container is stopped and removed.
- A new container is deployed automatically.
- Nginx serves the updated website.

---

## 🌐 CI/CD Workflow

```text
Developer
      │
   Git Push
      │
GitHub Repository
      │
GitHub Webhook
      │
Jenkins
      │
Docker Build
      │
Docker Container
      │
Nginx
      │
Live Website
```

---

## ✨ Key Features

- Automated build pipeline using Jenkins
- Pipeline as Code using Jenkinsfile
- GitHub Webhook integration
- Docker-based application deployment
- Zero manual deployment
- Containerized Nginx web server
- AWS EC2 deployment

---

## 🚀 Deployment Workflow

1. Developer pushes code to GitHub.
2. GitHub Webhook triggers Jenkins.
3. Jenkins clones the latest repository.
4. Docker builds a new image.
5. Existing container is stopped.
6. Existing container is removed.
7. A new container is created.
8. Nginx serves the updated application.

---

## ✅ Testing & Validation

The following validations were successfully completed:

- ✅ GitHub Webhook triggered automatically
- ✅ Jenkins pipeline executed successfully
- ✅ Docker image built successfully
- ✅ Existing container replaced automatically
- ✅ Updated application deployed successfully
- ✅ Website accessible through AWS EC2

---

## 📸 Project Screenshots

### 1. Jenkins Dashboard
![Jenkins Dashboard](screenshots/01-jenkins-dashboard.png)

### 2. GitHub Webhook
![GitHub Webhook](screenshots/02-github-webhook.png)

### 3. Jenkins Build Console
![Build Console](screenshots/03-build-console.png)

### 4. Successful Pipeline
![Pipeline](screenshots/04-pipeline-success.png)

### 5. Docker Images
![Docker Images](screenshots/05-docker-images.png)

### 6. Running Docker Container
![Docker Container](screenshots/06-running-container.png)

### 7. Live Website
![Live Website](screenshots/07-live-website.png)

---

## 📁 Repository Structure

```text
jenkins-cicd-demo/
│
├── Dockerfile
├── Jenkinsfile
├── README.md
├── index.html
├── css/
├── js/
├── images/
├── resume/
└── screenshots/
```

---

## 🎓 Skills Gained

- Implemented Jenkins Pipeline as Code
- Configured GitHub Webhooks
- Built Docker images automatically
- Automated application deployment
- Deployed applications on AWS EC2
- Learned CI/CD best practices
- Worked with containerized deployments

---

## ⭐ DevOps Best Practices Followed

- Pipeline as Code
- Automated deployment
- Containerization
- Version Control
- Continuous Integration
- Continuous Deployment
- Infrastructure consistency
- Reproducible deployments

---

## 🔮 Future Enhancements

- Push Docker images to Docker Hub
- Deploy to Private EC2 through a Bastion Host
- Add Terraform Infrastructure as Code
- Integrate Kubernetes deployment
- Implement Blue-Green Deployment
- Configure Monitoring using Prometheus and Grafana

---

## 👨‍💻 Author

**Sathya Moorthy S**

Cloud & DevOps Enthusiast

If you found this project useful, consider giving it a ⭐.

---

## 📄 License

This project is intended for learning and portfolio purposes.