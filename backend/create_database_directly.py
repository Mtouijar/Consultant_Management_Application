import sqlite3
import os
import hashlib
import datetime
from werkzeug.security import generate_password_hash

# Define database path
DB_PATH = os.path.join(os.getcwd(), 'wserveit_dev.db')
print(f"Creating database at: {DB_PATH}")

# Delete database if it exists
if os.path.exists(DB_PATH):
    os.remove(DB_PATH)
    print(f"Removed existing database file: {DB_PATH}")

# Connect to database (this will create it if it doesn't exist)
conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()

# Create users table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    role TEXT NOT NULL,
    is_first_login INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
''')

conn.commit()
conn.close()
print("Database and users table created successfully.") 