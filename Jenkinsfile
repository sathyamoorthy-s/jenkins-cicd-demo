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
                sh '''
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                '''
            }
        }

        stage('Run Docker Container') {
    steps {
        sh '''
            docker rm -f ${CONTAINER_NAME} 2>/dev/null || true

            docker run -d \
                -p 80:80 \
                --name ${CONTAINER_NAME} \
                ${IMAGE_NAME}:${IMAGE_TAG}
        '''
    }
}

        stage('Verify Container Health') {
            steps {
                sh '''
                    echo "Waiting for container to become healthy..."

                    i=1

                    while [ $i -le 12 ]; do

                        STATUS=$(docker inspect --format='{{if .State.Health}}{{.State.Health.Status}}{{else}}starting{{end}}' ${CONTAINER_NAME})

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
                        i=$((i + 1))
                    done

                    echo "Container did not become healthy within 60 seconds."
                    docker logs ${CONTAINER_NAME}
                    exit 1
                '''
            }
        }

        stage('Test Application') {
            steps {
                sh '''
                    echo "Testing application..."

                    STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost)

                    echo "HTTP Status: $STATUS"

                    if [ "$STATUS" = "200" ]; then
                        echo "Application test passed!"
                    else
                        echo "Application test failed!"
                        exit 1
                    fi
                '''
            }
        }
    }

    post {

        success {
            echo "Deployment successful!"
            echo "Docker image: ${IMAGE_NAME}:${IMAGE_TAG}"
            echo "Container: ${CONTAINER_NAME}"
        }

        failure {
            echo "Deployment failed!"
        }
    }
}