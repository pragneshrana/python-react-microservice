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

## Kubernetes Deployment

### 2.1 Deploy Backend on Kubernetes

1. Apply the backend deployment YAML file:

```bash
kubectl apply -f backend-deployment.yaml
```

2. Verify the backend pod is running:

```bash
kubectl get pods
```

   **Validation**: Ensure the backend pod status is `Running`.

### 2.2 Deploy Frontend on Kubernetes

1. Apply the frontend deployment YAML file:

```bash
kubectl apply -f frontend-deployment.yaml
```

2. Verify the frontend pod is running:

```bash
kubectl get pods
```

   **Validation**: Ensure the frontend pod status is `Running`.

### Step 3: Test Backend and Frontend Services

#### 3.1 Test Backend

1. Forward the backend service port:

```bash
kubectl port-forward svc/backend-service 8000:8000
```

2. Open a new terminal and test the backend using curl or a browser:

```bash
curl http://localhost:8000/health
```

   **Expected Output**:

```json
{"status": "healthy"}
```

3. Test the `/length` endpoint:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"text": "test"}' http://localhost:8000/length
```

   **Expected Output**:

```json
{"length": 4}
```

#### 3.2 Test Frontend

1. Forward the frontend service port:

```bash
kubectl port-forward svc/frontend-service 3000:80
```

2. Open a browser and go to:

```bash
http://localhost:3000
```

3. Enter text in the frontend app and submit.

   **Validation**: Ensure the response displays the correct text length.

## Notes

- Make sure Docker and Kubernetes are installed and running on your machine before executing the commands.
- Replace `pragneshrana244` with your Docker Hub username if different.
- The Kubernetes deployment YAML files for both backend and frontend can be found in the `test/manifest` folder.

---
Feel free to modify the instructions as per your project's needs.

