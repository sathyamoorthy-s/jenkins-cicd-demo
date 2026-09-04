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

        stage('Verify Container Health') {
            steps {
                sh '''
                    echo "Waiting for container to become healthy..."

                    for i in {1..12}; do
                        STATUS=$(docker inspect --format='{{.State.Health.Status}}' ${CONTAINER_NAME})

                        echo "Health status: $STATUS"

                        if [ "$STATUS" = "healthy" ]; then
                            echo "Container is healthy!"
                            exit 0
                        fi

                        if [ "$STATUS" = "unhealthy" ]; then
                            echo "Container is unhealthy!"
                            docker logs ${CONTAINER_NAME}
                            exit 1
                        fi

                        sleep 5
                    done

                    echo "Container did not become healthy within 60 seconds."
                    docker logs ${CONTAINER_NAME}
                    exit 1
                '''
            }
        }
    }

    post {

        success {
            echo 'Pipeline completed successfully - Docker container is healthy!'
        }

        failure {
            echo 'Deployment Failed!'
        }
    }
}