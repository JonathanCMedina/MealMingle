from fastapi import APIRouter, HTTPException
from queries.accounts import UserCreate

router = APIRouter()

users = []


@router.post("/signup")
def signup(user_data: UserCreate):
    # Password check - you should handle this securely
    if user_data.password != user_data.password_confirmation:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    new_user = user_data.dict()
    users.append(new_user)

    return {"message": "User registered successfully"}
