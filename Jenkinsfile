pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Repository cloned by Jenkins'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins-cicd-demo:v1 .'
            }
        }

    }
}