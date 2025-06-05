from pydantic_settings import BaseSettings
from typing import Optional
import secrets

class Settings(BaseSettings):
    PROJECT_NAME: str = "Consultant Management API"
    SECRET_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    ALGORITHM: str = "HS256"
    
    DATABASE_URL: str = "sqlite:///./consultant_management.db"
    
    class Config:
        env_file = ".env"

settings = Settings() 