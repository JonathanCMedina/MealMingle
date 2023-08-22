from fastapi import APIRouter, HTTPException, Depends
from queries.accounts import AccountsRepository, UserIn, UserOut

router = APIRouter()


@router.post("/signup", response_model=UserOut)
def signup(user_data: UserIn, repo: AccountsRepository = Depends()):
    # Password check - you should handle this securely
    if user_data.password != user_data.password_confirmation:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    return repo.create_account(user_data)
