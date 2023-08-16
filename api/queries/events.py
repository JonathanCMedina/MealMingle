from pydantic import BaseModel
from datetime import date
from typing import Optional

class EventIn(BaseModel):
    name: str
    location: str
    description: str
    date: date
    food_types: str
    private: Optional[bool] = False
    alcohol_free: Optional[bool] = False
    vegan: Optional[bool] = False
    vegetarian: Optional[bool] = False
    gluten_free: Optional[bool] = False
    omnivore: Optional[bool] = False
    carnivore: Optional[bool] = False
    pescatarian: Optional[bool] = False
