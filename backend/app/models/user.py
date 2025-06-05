from sqlalchemy import Boolean, Column, Integer, String, Enum
from sqlalchemy.ext.declarative import declarative_base
import enum

Base = declarative_base()

class UserRole(str, enum.Enum):
    ADMIN = "admin"
    CONSULTANT = "consultant"
    CLIENT = "client"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)
    role = Column(Enum(UserRole), default=UserRole.CONSULTANT)
    is_active = Column(Boolean, default=True) 