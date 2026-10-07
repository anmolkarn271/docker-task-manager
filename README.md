# 🐳 Docker Task Manager

A simple full-stack Task Manager application built to learn and demonstrate **Docker, Docker Compose, container networking, and MongoDB**.

The application consists of three services:

* React frontend
* Node.js + Express backend
* MongoDB database

All services are managed using **Docker Compose**.

---

## 🚀 Project Architecture

```text
                    Docker Compose
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
     React Client    Node.js Server   MongoDB
       :5173            :5000         :27017
          │              │
          │              │
          └──────────────┘
                 API
```

### Services

| Service  | Technology        |  Port |
| -------- | ----------------- | ----: |
| Client   | React + Vite      |  5173 |
| Server   | Node.js + Express |  5000 |
| Database | MongoDB           | 27017 |

---

## 🛠️ Technologies Used

### Frontend

* React
* Vite
* JavaScript

### Backend

* Node.js
* Express.js
* Mongoose
* CORS

### DevOps / Infrastructure

* Docker
* Docker Compose
* Docker Networks
* Docker Volumes
* MongoDB Docker Image

---

## ✨ Features

* Create tasks
* View tasks
* Update task status
* Delete tasks
* REST API
* MongoDB database
* Persistent MongoDB volume
* Frontend and backend containers
* Docker Compose orchestration

---

## 📁 Project Structure

```text
docker-task-manager/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── docker-compose.yml
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 🐳 Dockerfiles

### Client Dockerfile

The frontend uses a Node.js Alpine image and runs the Vite development server.

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

### Server Dockerfile

The backend uses Node.js Alpine and runs the Express server.

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]
```

---

## 🐙 Docker Compose

The complete application can be started using Docker Compose.

```bash
docker compose up --build
```

This starts:

```text
Client   → localhost:5173
Server   → localhost:5000
MongoDB  → localhost:27017
```

To run in the background:

```bash
docker compose up -d --build
```

---

## 🔍 Check Running Containers

```bash
docker compose ps
```

View logs:

```bash
docker compose logs
```

View logs for a specific service:

```bash
docker compose logs client
```

```bash
docker compose logs server
```

```bash
docker compose logs mongodb
```

---

## 🛑 Stop the Application

```bash
docker compose down
```

To stop containers and also remove the database volume:

```bash
docker compose down -v
```

> ⚠️ `-v` removes the MongoDB volume and therefore deletes the stored database data.

---

## 🔌 API Endpoints

### Health Check

```http
GET /api/health
```

Example:

```bash
curl http://localhost:5000/api/health
```

### Get Tasks

```http
GET /api/tasks
```

### Create Task

```http
POST /api/tasks
```

Example body:

```json
{
  "title": "Learn Docker"
}
```

### Update Task

```http
PUT /api/tasks/:id
```

### Delete Task

```http
DELETE /api/tasks/:id
```

---

## 🌐 Application URLs

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

Health Check:

```text
http://localhost:5000/api/health
```

---

## 💾 MongoDB Persistence

MongoDB uses a Docker named volume:

```text
task-manager-mongo-data
```

This allows database data to remain available even when the MongoDB container is recreated.

Check volumes:

```bash
docker volume ls
```

---

## 🌐 Docker Networking

Docker Compose creates a network for the application.

The containers can communicate with each other using their **service names**.

For example:

```text
Server → MongoDB
```

can communicate through:

```text
mongodb:27017
```

instead of using:

```text
localhost:27017
```

This is an important Docker networking concept.

---

## 🧪 Useful Docker Commands

List containers:

```bash
docker ps
```

List all containers:

```bash
docker ps -a
```

List images:

```bash
docker images
```

List networks:

```bash
docker network ls
```

List volumes:

```bash
docker volume ls
```

Build images:

```bash
docker compose build
```

Start services:

```bash
docker compose up
```

Stop services:

```bash
docker compose down
```

---

## 🎯 Learning Go
