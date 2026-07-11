pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkins-cicd-demo"
        IMAGE_TAG = "${BUILD_NUMBER}"
        CONTAINER_NAME = "mywebsite"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh 'docker stop ${CONTAINER_NAME} || true'
                sh 'docker rm ${CONTAINER_NAME} || true'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 80:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}:${IMAGE_TAG}'
            }
        }

    }

    post {
        success {
            echo 'Pipeline Trigger Test'
        }

        failure {
            echo 'Deployment Failed!'
        }
    }
}