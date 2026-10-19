# Docker Task Manager

A containerized task management web application built using React, Node.js, Express, MongoDB, Docker Compose, and Nginx.

This project demonstrates practical DevOps concepts, including multi-container orchestration, reverse proxy configuration, load balancing, health checks, and container restart policies.

## Project Overview

Docker Task Manager allows users to manage tasks through a web interface. The application uses a React frontend, a Node.js backend, and MongoDB for data storage.

Nginx acts as a reverse proxy and distributes API requests between two backend instances.

## Architecture

```text
                    User / Browser
                          |
                          v
                     Nginx :8080
                    /           \
                   v             v
             React Frontend    API Requests
                :5173               |
                                    v
                              Nginx Upstream
                               /          \
                              v            v
                         Backend 1     Backend 2
                           :5000         :5000
                              \            /
                               v          v
                                  MongoDB
                                   :27017
```

## Technologies Used

* **Frontend:** React
* **Backend:** Node.js and Express.js
* **Database:** MongoDB
* **Containerization:** Docker
* **Orchestration:** Docker Compose
* **Reverse Proxy:** Nginx
* **Load Balancing:** Nginx upstream with round-robin distribution
* **Health Checks:** Docker health checks using Node.js
* **Container Recovery:** Docker restart policies
* **Version Control:** Git and GitHub
* **Development Environment:** Ubuntu on WSL

## Features

* Create and manage tasks through the frontend.
* Connect the frontend to the backend through Nginx.
* Run two backend instances for API requests.
* Distribute requests across backend instances using Nginx.
* Store application data in MongoDB.
* Persist MongoDB data using a Docker named volume.
* Monitor backend health using Docker health checks.
* Configure automatic container restarts.
* Run the application using Docker Compose.

## Project Structure

```text
docker-task-manager/
├── client/
│   ├── src/
│   └── Dockerfile
├── server/
│   ├── server.js
│   └── Dockerfile
├── nginx/
│   ├── Dockerfile
│   └── default.conf
├── docker-compose.yml
└── README.md
```

*The structure above illustrates the main project components. Additional files may exist in individual directories.*

## Prerequisites

Install the following tools:

* Docker Engine or Docker Desktop with Docker Compose
* Git
* A web browser

## Run the Application

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd docker-task-manager
```

Replace the placeholder with your repository URL.

### 2. Build and start the containers

```bash
docker compose up -d --build
```

### 3. Check container status

```bash
docker compose ps
```

### 4. Open the application

Frontend through Nginx:

```text
http://localhost:8080
```

The frontend development server may also be accessible directly at:

```text
http://localhost:5173
```

### 5. Test the backend API

Check backend health through Nginx:

```bash
curl http://localhost:8080/api/health
```

Retrieve tasks:

```bash
curl http://localhost:8080/api/tasks
```

### 6. Inspect backend health

```bash
docker inspect --format='{{.State.Health.Status}}' task-manager-server1
```

```bash
docker inspect --format='{{.State.Health.Status}}' task-manager-server2
```

### 7. View application logs

```bash
docker compose logs -f
```

View only backend logs:

```bash
docker compose logs -f backend1 backend2
```

## Docker Compose Services

| Service    | Purpose                             |
| ---------- | ----------------------------------- |
| `frontend` | Runs the React frontend             |
| `backend1` | First Node.js backend instance      |
| `backend2` | Second Node.js backend instance     |
| `mongodb`  | Stores application data             |
| `nginx`    | Reverse proxy and API load balancer |

## DevOps Concepts Demonstrated

### 1. Containerization

Each application component runs inside its own Docker container.

### 2. Multi-Container Orchestration

Docker Compose manages the frontend, backend instances, database, and Nginx.

### 3. Reverse Proxy

Nginx routes frontend traffic to React and API traffic to the backend service group.

### 4. Load Balancing

Nginx distributes API requests across the two backend instances using its default round-robin method.

### 5. Health Checks

Docker periodically checks whether each backend health endpoint returns a successful HTTP response.

### 6. Restart Policies

The `unless-stopped` restart policy helps Docker restart containers when their processes exit, unless they have been explicitly stopped.

### 7. Persistent Storage

A named Docker volume stores MongoDB data outside the database container's writable layer.

### 8. Internal Networking

Backend services communicate with MongoDB and Nginx through Docker Compose networking. The backend port does not need to be published directly on the host.

## Useful Commands

Start the application:

```bash
docker compose up -d
```

Rebuild and start services:

```bash
docker compose up -d --build
```

Stop the application:

```bash
docker compose down
```

Follow service logs:

```bash
docker compose logs -f
```

Check service status:

```bash
docker compose ps
```

> **Data safety:** `docker compose down` does not normally remove named volumes. Avoid using `docker compose down -v` unless you intentionally want to remove the Compose-managed volumes.

## Learning Outcomes

Through this project, I practiced:

* Building and running Docker images.
* Managing multiple containers with Docker Compose.
* Configuring Nginx as a reverse proxy.
* Implementing basic load balancing.
* Configuring Docker health checks and restart policies.
* Connecting backend services to MongoDB.
* Debugging container startup failures and HTTP 502 errors.
* Routing frontend API requests through Nginx.
* Managing project changes with Git and GitHub.

## Future Improvements

* Add automated testing and a GitHub Actions CI/CD pipeline.
* Deploy the application to AWS EC2.
* Introduce centralized logging and monitoring.
* Improve production configuration and secrets management.
* Add automated deployment and rollback procedures.

## Author

**Anmol Karn**

Aspiring DevOps Engineer

GitHub: [anmolkarn271](https://github.com/anmolkarn271)

---

Built as a hands-on project to practice Docker, Linux, networking, application deployment, and DevOps fundamentals.
