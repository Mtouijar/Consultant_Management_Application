from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_users():
    return ["This is a placeholder for users endpoint."] 