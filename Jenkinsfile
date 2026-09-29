node {

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
