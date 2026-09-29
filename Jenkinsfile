pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub...'
                git branch: 'main',
                    url: 'https://github.com/Atharv-AJ24/student-task-manager.git'
            }
        }

        stage('Check Node') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Student Task Manager...'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}

