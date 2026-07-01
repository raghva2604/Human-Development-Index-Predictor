import requests
import json

API_URL = "http://localhost:5000/predict"

sample_features = [0.7, 0.8, 0.6, 0.5]  # replace with actual model input features

response = requests.post(API_URL, json={"features": sample_features})
if response.ok:
    print("Prediction:", response.json())
else:
    print("Request failed:", response.status_code, response.text)
