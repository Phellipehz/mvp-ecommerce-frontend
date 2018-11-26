pipeline {
    environment {
        IMAGE = 'rest-api:latest'
        ECRURL = 'http://999999999999.dkr.ecr.eu-central-1.amazonaws.com'
        ECRCRED = 'ecr:eu-central-1:tap_ecr'
    }
    agent any
    stages {
	    stage('Checkout') { 
	    	steps{
                checkout scm  
	      	}
	   	}
        stage('Analise Lint'){
            steps {
                sh "mvn clean clover:setup test clover:aggregate clover:clover"
            }
        }
        stage('Testes') { 
            steps {
                sh "mvn clean clover:setup test clover:aggregate clover:clover"
            }
        }
        stage('Build and Implantação') { 
            steps{
                script{
                    docker.withRegistry("http://.dkr.ecr.us-east-2.amazonaws.com", "ecr:us-east-2:tap_ecr") {
                        def customImage = docker.build("rest-api:latest")
                        customImage.push()
                    }
                }
            }
        }
    }
    post{
        always{
           sh "docker rmi rest-api:latest | true"
        }
    }
}
