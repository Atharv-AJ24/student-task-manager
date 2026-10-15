🎓 Student Task Manager — End-to-End DevOps Project

An end-to-end DevOps project that combines a Student Task Manager web application with automated testing, containerization, CI/CD, Kubernetes deployment, and monitoring using industry-standard tools.

The project demonstrates how application code can move from a developer's local machine to a containerized deployment, with Jenkins automation and Prometheus and Grafana for observability.

📌 Table of Contents
Project Overview
Features
Technology Stack
Architecture
Project Structure
How the DevOps Pipeline Works
Application Setup
Git and GitHub
Testing with Jest
Docker Containerization
Jenkins CI/CD Pipeline
Kubernetes Deployment
Prometheus Monitoring
Grafana Dashboards
Useful Commands
Troubleshooting
Learning Outcomes
📖 Project Overview

The Student Task Manager is a web application designed to help students organize and manage their tasks through a simple user interface.

This project extends the application with a DevOps workflow covering source-code management, automated testing, Docker image creation, continuous integration and deployment, Kubernetes orchestration, and monitoring.

The main objective is to understand how DevOps tools work together to improve the consistency, repeatability, and observability of software delivery.

✨ Features
Application
Student task management through a web interface.
HTML, CSS, and JavaScript-based frontend.
JavaScript application logic.
Task-related automated tests using Jest.
DevOps
Git and GitHub for version control.
Docker for containerization.
Jenkins for CI/CD automation.
Kubernetes for application deployment and service discovery.
Prometheus for metrics collection.
Grafana for metrics visualization and dashboards.
🛠️ Technology Stack
Technology	Purpose
HTML5	Application structure
CSS3	Styling and responsive layout
JavaScript	Application functionality
Node.js	JavaScript runtime
npm	Dependency and package management
Jest	Automated testing
Git	Version control
GitHub	Remote repository and source-code hosting
Docker	Containerization
Jenkins	Continuous Integration and Continuous Delivery
Kubernetes	Container orchestration
Prometheus	Metrics collection and querying
Grafana	Monitoring dashboards and visualization
🏗️ Architecture
              Developer
                  |
                  v
          Git / GitHub Repository
                  |
                  v
             Jenkins CI/CD
                  |
          +-------+--------+
          |                |
          v                v
     Install npm       Run Jest Tests
     Dependencies          |
          |                |
          +-------+--------+
                  |
                  v
            Docker Build
                  |
                  v
          Docker Image
                  |
                  v
          Kubernetes Cluster
                  |
                  v
          Student Task Manager
                  |
                  v
          Application Service

       Monitoring and Observability
                  |
                  v
              Prometheus
          (Metrics Collection)
                  |
                  v
               Grafana
         (Dashboards and Graphs)


Note: The exact automation and deployment flow depends on the stages configured in Jenkinsfile and the deployment commands used in your environment.

📁 Project Structure
student-task-manager/
│
├── index.html                  # Application interface
├── style.css                   # Application styling
├── script.js                   # Frontend task logic
├── app.js                      # Application/server logic
│
├── package.json                # npm scripts and dependencies
├── package-lock.json           # Locked dependency versions
├── jest.config.js              # Jest configuration
├── test.js                     # Application tests
├── tests/
│   └── task.test.js            # Task-related tests
│
├── Dockerfile                  # Docker image instructions
├── .dockerignore               # Files excluded from Docker builds
├── .gitignore                  # Files excluded from Git
│
├── Jenkinsfile                 # CI/CD pipeline definition
│
├── deployment.yaml             # Kubernetes application deployment
├── service.yaml                # Kubernetes application service
│
├── prometheus.yml              # Prometheus scrape configuration
├── prometheus-deployment.yaml  # Prometheus deployment
├── prometheus-service.yaml     # Prometheus service
│
├── grafana-deployment.yaml     # Grafana deployment
├── grafana-service.yaml        # Grafana service
│
└── README.md                   # Project documentation

🔄 How the DevOps Pipeline Works
Step 1: Source Code Management — Git and GitHub

Git tracks changes to the application and DevOps configuration. GitHub hosts the repository and makes the source code accessible to developers and the CI/CD system.

Typical workflow:

git clone https://github.com/Atharv-AJ24/student-task-manager.git

cd student-task-manager

git status
git add .
git commit -m "Update application and DevOps configuration"
git push origin main


A Jenkins pipeline can retrieve the latest source code from GitHub. Automatic execution on every push requires a configured webhook or another pipeline trigger.

Step 2: Dependency Management — Node.js and npm

Node.js provides the JavaScript runtime, while npm installs dependencies and runs the scripts defined in package.json.

Install dependencies:

npm install


For reproducible installation from the lockfile:

npm ci


Inspect the available scripts in package.json before running application or test commands.

Step 3: Automated Testing — Jest

Jest is used to run automated JavaScript tests and check application functionality.

Run the tests:

npm test


If the project defines a separate test script or custom Jest command, use the corresponding command from package.json.

Automated tests help identify regressions before a new version is packaged or deployed.

Step 4: Containerization — Docker

Docker packages the application and its required runtime into a container image.

Build the image:

docker build -t student-task-manager:latest .


Check the generated image:

docker images


Run the container:

docker run -d --name student-task-manager -p 3000:3000 student-task-manager:latest


Open http://localhost:3000 if the application listens on port 3000 inside the container. Otherwise, change the port mapping to match the application and Dockerfile configuration.

Check the container:

docker ps
docker logs student-task-manager


Stop the container:

docker stop student-task-manager


Remove the container:

docker rm student-task-manager

Step 5: Continuous Integration and Delivery — Jenkins

Jenkins automates the software delivery workflow using the Jenkinsfile.

A typical pipeline includes:

Checkout: Retrieve the source code from GitHub.
Install Dependencies: Install npm packages.
Test: Execute automated Jest tests.
Build: Create the Docker image.
Deploy: Apply Kubernetes manifests or update the deployed application, if configured.

The exact stages depend on the pipeline implementation in this repository.

Jenkins setup
Install and start Jenkins.
Open the Jenkins dashboard.
Install the required plugins for Git, Pipeline, Docker, and Kubernetes where applicable.
Create a Pipeline job.
Configure the repository URL and branch.
Select the option to load the pipeline definition from the repository's Jenkinsfile.
Configure any required credentials securely in Jenkins.
Run the pipeline and inspect the stage results and console output.

For automatic builds following GitHub pushes, configure a webhook or a supported polling trigger.

Important: Docker Hub credentials, Kubernetes access, and webhook settings are environment-specific and must be configured if the pipeline uses them.

Step 6: Container Orchestration — Kubernetes

Kubernetes manages the application deployment and exposes it through a Service.

The project contains:

deployment.yaml — describes the application deployment and pod configuration.
service.yaml — defines how the application is accessed through a Kubernetes Service.

Make sure a Kubernetes cluster is running and kubectl is configured before applying the manifests.

Apply the application Deployment and Service:

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml


Check the resources:

kubectl get deployments
kubectl get pods
kubectl get services


Inspect a pod if it fails to start:

kubectl describe pod <pod-name>
kubectl logs <pod-name>


Check the application Service:

kubectl describe service <service-name>


Access the application using the URL or port-forwarding method appropriate to the Service type and cluster environment.

Step 7: Metrics Collection — Prometheus

Prometheus collects time-series metrics from configured monitoring targets and allows them to be queried using PromQL.

The project contains:

prometheus.yml — specifies scrape intervals and monitoring targets.
prometheus-deployment.yaml — defines the Prometheus workload.
prometheus-service.yaml — exposes the Prometheus service.

Deploy Prometheus:

kubectl apply -f prometheus-deployment.yaml
kubectl apply -f prometheus-service.yaml


Check the resources:

kubectl get pods
kubectl get services


If the Prometheus Service is named prometheus-service, access its web interface locally using:

kubectl port-forward service/prometheus-service 9090:9090


Open:

http://localhost:9090

To inspect monitoring targets, visit:

http://localhost:9090/targets

Prometheus can only collect metrics from targets that are reachable and expose compatible metrics endpoints. Review prometheus.yml to confirm the configured targets.

Step 8: Visualization — Grafana

Grafana presents metrics in dashboards, panels, and graphs.

The project contains:

grafana-deployment.yaml — defines the Grafana workload.
grafana-service.yaml — exposes the Grafana service.

Deploy Grafana:

kubectl apply -f grafana-deployment.yaml
kubectl apply -f grafana-service.yaml


Check the deployment:

kubectl get pods
kubectl get services


If the Service is named grafana-service, access Grafana using:

kubectl port-forward service/grafana-service 3000:3000


Open:

http://localhost:3000

Log in using the credentials configured for your Grafana deployment.

Configure Prometheus as a data source
Open Grafana.
Navigate to Connections → Data sources (the menu may vary by version).
Add Prometheus.
Set the URL to the address reachable from Grafana.
Save and test the connection.
Create dashboards and panels using available Prometheus metrics.

If Grafana and Prometheus run inside the same Kubernetes cluster, use the Prometheus Service's internal DNS name and port. The URL http://localhost:9090 inside the Grafana container would refer to Grafana's own container, not the Prometheus pod.

Grafana dashboards display only the metrics actually collected by the configured Prometheus targets.

🚀 Application Setup
Prerequisites

Install the tools needed for the parts of the project you want to run:

Git
Node.js and npm
Docker
Jenkins
Kubernetes cluster and kubectl
Prometheus
Grafana
Clone the repository
git clone https://github.com/Atharv-AJ24/student-task-manager.git

cd student-task-manager

Install dependencies
npm install

Run tests
npm test

Start the application

Use the start command defined in package.json, for example:

npm start


If no start script exists, check package.json for the correct entry point and command.

📊 Monitoring Workflow

The monitoring stack provides a central place to inspect the metrics exposed by configured targets.

Component	Responsibility
Prometheus	Scrapes, stores, and queries metrics
Grafana	Visualizes metrics using dashboards
Prometheus configuration	Defines scrape jobs and target addresses
Kubernetes Service	Provides network access to monitoring components

Example PromQL queries, when the corresponding metrics are available:

up


Shows whether configured scrape targets are reachable.

process_cpu_seconds_total


Queries process CPU time where the target exposes this metric.

process_resident_memory_bytes


Queries process resident memory where supported by the target.

These metrics are not automatically available just because Prometheus and Grafana are deployed. The application or monitoring target must expose them, and Prometheus must scrape the correct endpoint.

🧰 Useful Commands
Git
git status
git add .
git commit -m "Update project"
git push origin main
git pull origin main

Docker
docker build -t student-task-manager:latest .
docker ps
docker images
docker logs <container-name>

Kubernetes
kubectl get pods
kubectl get deployments
kubectl get services
kubectl get events
kubectl describe deployment <deployment-name>
kubectl logs <pod-name>

Jenkins
Check the latest build status.
Open the pipeline stage view.
Inspect console output when a stage fails.
Verify configured credentials and agent permissions.
Prometheus and Grafana
Check Prometheus targets at /targets.
Test Prometheus queries in the Prometheus UI.
Verify the Grafana data source connection.
Check that dashboards use metrics available in Prometheus.
🛠️ Troubleshooting
Problem	What to check
git push fails	Verify the remote with git remote -v and check repository permissions
npm tests fail	Inspect the Jest output, dependencies, and test configuration
Docker build fails	Check the Dockerfile, build context, and .dockerignore
Container exits	Inspect docker logs and the application startup command
Jenkins pipeline fails	Review the failed stage and console output
Kubernetes pod is pending	Inspect pod events, available resources, and scheduling constraints
Kubernetes pod crashes	Check kubectl logs and the container configuration
Prometheus target is down	Verify target address, port, endpoint, and network connectivity
Grafana shows no data	Check the Prometheus data source, scrape targets, and query
🎯 Learning Outcomes

This project demonstrates practical experience with:

Version control and collaboration using Git and GitHub.
JavaScript dependency management and automated testing.
Container image creation and container execution using Docker.
CI/CD concepts and pipeline automation using Jenkins.
Container orchestration and application exposure using Kubernetes.
Metrics collection and querying using Prometheus.
Dashboard creation and monitoring using Grafana.
Troubleshooting across application, container, deployment, and monitoring layers.
🔮 Future Improvements
Configure GitHub webhooks for automatic Jenkins pipeline triggers.
Publish versioned Docker images to a container registry.
Add health checks and readiness/liveness probes.
Add application-specific metrics and alerting rules.
Provision Grafana dashboards and data sources automatically.
Add security scanning and dependency vulnerability checks.
Implement resource requests, limits, and autoscaling where appropriate.
👨‍💻 Author

Atharv (Atharv-AJ24)

GitHub: Atharv-AJ24

Repository: student-task-manager

⭐ If you find this project useful, consider giving the repository a star.
