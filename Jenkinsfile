node {

    stage('Checkout') {
        echo 'Checking out source code from GitHub...'
        git branch: 'main',
            url: 'https://github.com/Atharv-AJ24/student-task-manager.git'
    }

    stage('Install Dependencies') {
        echo 'Installing dependencies...'
        sh 'npm install'
    }

    stage('Build') {
        echo 'Building Student Task Manager...'
        sh 'npm run build'
    }

    stage('Test') {
        echo 'Running automated tests...'
        sh 'npm test'
    }

    echo 'Pipeline completed successfully!'
}
