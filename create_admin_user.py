import requests

data = {
    "email": "admin_unique_456@example.com",
    "username": "adminuser456",
    "full_name": "Admin User 456",
    "password": "yourpassword",
    "role": "admin"
}

response = requests.post("http://localhost:8000/api/auth/register", json=data)
print("Status code:", response.status_code)
print("Response text:", response.text)