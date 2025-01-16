# Use an official Python image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy the Python requirements
COPY app/requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire app source code
COPY . .

# Expose port 8000
EXPOSE 8000

# Command to run the application
CMD ["python", "-m", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
