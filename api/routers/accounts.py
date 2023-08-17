from fastapi import APIRouter
from queries.accounts import UserLogin

router = APIRouter()


@router.post("/login")
def user_login(user: UserLogin):
    return user
