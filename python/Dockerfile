FROM python:3.9.5-buster
WORKDIR /src
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY /src .
CMD ["python", "api.py"]
