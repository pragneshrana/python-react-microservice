RUN: uvicorn main:app --reload
test: http://127.0.0.1:8000/length?input_string=hello
Install Docker
