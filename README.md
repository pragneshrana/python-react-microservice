# Python-React-Microservice

This repository contains a Python backend using FastAPI and a React frontend. Both services are Dockerized for easy deployment.

## Backend (FastAPI)

### Build Docker Image

To build the Docker image for the FastAPI backend, run the following command:

```bash
docker build -t fastapi-backend .
```

### Test Docker Locally (Optional)

To test the backend Docker container locally, run:

```bash
docker run -p 8000:8000 fastapi-backend
```

### Push Docker Image to Docker Hub

To tag and push the backend Docker image to Docker Hub:

```bash
docker tag fastapi-backend:latest pragneshrana244/fastapi-backend:latest
docker push pragneshrana244/fastapi-backend:latest
```

## Frontend (React)

### Build Docker Image

To build the Docker image for the React frontend, run:

```bash
docker build -t react-frontend .
```

### Test Docker Locally

To test the frontend Docker container locally, run:

```bash
docker run -p 3000:3000 react-frontend
```

### Push Docker Image to Docker Hub

To tag and push the frontend Docker image to Docker Hub:

```bash
docker tag react-frontend:latest pragneshrana244/react-frontend:latest
docker push pragneshrana244/react-frontend:latest
```

## Notes

- Make sure Docker is installed and running on your machine before executing the commands.
- Replace `pragneshrana244` with your Docker Hub username if different.

---
Feel free to modify the instructions as per your project's needs.

