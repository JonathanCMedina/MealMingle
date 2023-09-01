from fastapi import APIRouter, HTTPException, Depends
from queries.food_types import (
    FoodTypeIn,
    FoodTypeRepository,
    Error,
    FoodTypeOut,
)
from authenticator import authenticator
from typing import Union, List

router = APIRouter()
food_type_repo = FoodTypeRepository()


@router.post("/food_types/", response_model=FoodTypeIn)
async def create_food_type(
    food_type: FoodTypeIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    try:
        return food_type_repo.create_food_type(food_type)
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500, detail="Could not create food type"
        )


@router.get("/foods", response_model=Union[Error, List[FoodTypeOut]])
def get_all_food_types(
    repo: FoodTypeRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_all_food_types()
