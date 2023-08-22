from fastapi import APIRouter, HTTPException, Depends
from queries.accounts import AccountsRepository, UserIn, UserOut

router = APIRouter()

users = []


@router.post("/signup", response_model=UserOut)
def signup(user_data: UserIn, repo: AccountsRepository = Depends()):
    # Password check - you should handle this securely
    if user_data.password != user_data.password_confirmation:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    # new_user = user_data.dict()
    # users.append(new_user)
    return repo.create_account(user_data)
    # return {"message": "User registered successfully"}


# @router.post("/login")
# def user_login(user: UserLogin):
#     return user
