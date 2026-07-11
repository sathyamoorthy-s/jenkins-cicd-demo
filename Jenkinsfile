pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins-cicd-demo:v1 .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh 'docker stop mywebsite || true'
                sh 'docker rm mywebsite || true'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 80:80 --name mywebsite jenkins-cicd-demo:v1'
            }
        }
    }
}