pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Pull the repository's dev branch
                git branch: 'dev', url: 'https://github.com/prathammore0025/nodejs-demo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }
        stage('Build Project') {
            steps {
                // Build the project
                sh 'npm run build'
            }
        }
        stage('Deploy Project') {
            steps {
                // Deploy the project by starting the server
                sh 'npm start'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}

