from pydantic import BaseModel
from datetime import date
from typing import Optional

class EventIn(BaseModel):
    event_name: str
    address: str
    zip_code: int
    description: str
    event_date: date
    food_types: int
    private_event: Optional[bool] = False
    alcohol_free: Optional[bool] = False
    vegan: Optional[bool] = False
    vegetarian: Optional[bool] = False
    gluten_free: Optional[bool] = False
    omnivore: Optional[bool] = False
    carnivore: Optional[bool] = False
    pescatarian: Optional[bool] = False
