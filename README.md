# 🐳 Docker Task Manager

A simple full-stack Task Manager application built with **React, Node.js, Express, MongoDB, Docker, and Docker Compose**.

## 🏗️ Architecture

```text
React Client (:5173)
       │
       ▼
Node.js + Express (:5000)
       │
       ▼
MongoDB (:27017)
```

## 🛠️ Tech Stack

* React + Vite
* Node.js + Express
* MongoDB + Mongoose
* Docker
* Docker Compose

## ✨ Features

* Create, view, update and delete tasks
* REST API
* MongoDB persistence
* Dockerized frontend and backend
* Docker Compose for multi-container setup

## 📁 Project Structure

```text
docker-task-manager/
├── client/
│   ├── src/
│   └── Dockerfile
├── server/
│   ├── models/
│   ├── routes/
│   └── Dockerfile
├── docker-compose.yml
├── package.json
└── .gitignore
```

## 🚀 Run with Docker

Clone the repository and start the application:

```bash
docker compose up --build
```

Open:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:5000
Health:   http://localhost:5000/api/health
```

Stop the application:

```bash
docker compose down
```

## 🔌 API

| Method | Endpoint         | Description  |
| ------ | ---------------- | ------------ |
| GET    | `/api/health`    | Health check |
| GET    | `/api/tasks`     | Get tasks    |
| POST   | `/api/tasks`     | Create task  |
| PUT    | `/api/tasks/:id` | Update task  |
| DELETE | `/api/tasks/:id` | Delete task  |

## 🎯 Learning Goals

This project was built to practice:

* Dockerfiles
* Docker images & containers
* Docker networking
* Docker volumes
* Docker Compose
* Containerized full-stack applications

## 👨‍💻 Author

**Anmol Karn**
Aspiring DevOps Engineer

GitHub: `anmolkarn271`
