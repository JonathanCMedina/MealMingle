from fastapi import APIRouter, HTTPException
from queries.food_types import FoodTypeIn, FoodTypeRepository

router = APIRouter()
food_type_repo = FoodTypeRepository()


@router.post("/food_types/", response_model=FoodTypeIn)
async def create_food_type(food_type: FoodTypeIn):
    try:
        return food_type_repo.create_food_type(food_type)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail="Could not create food type"
        )
