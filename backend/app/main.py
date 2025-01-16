from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from prometheus_fastapi_instrumentator import Instrumentator
from loguru import logger
from fastapi.middleware.cors import CORSMiddleware  # Import CORS middleware

app = FastAPI()

# Allow CORS for the frontend (React app)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow frontend origin (React app)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

Instrumentator().instrument(app).expose(app)

# Input model for validation
class InputText(BaseModel):
    text: str

@app.post("/length")
def calculate_length(input_data: InputText):
    logger.info("Received input for length calculation")
    if len(input_data.text) > 1000:
        logger.error("Input text too long")
        raise HTTPException(status_code=400, detail="Input text too long, maximum length is 1000 characters")
    return {"length": len(input_data.text)}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
