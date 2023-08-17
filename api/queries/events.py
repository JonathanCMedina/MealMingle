from pydantic import BaseModel
from datetime import date
from typing import Optional


class EventIn(BaseModel):
    event_name: str
    address: str
    zip_code: int
    description: str
    event_date: date
    private_event: Optional[bool] = False
    food_types: int
    alcohol_free: Optional[bool] = False
    vegan: Optional[bool] = False
    gluten_free: Optional[bool] = False
    pescatarian: Optional[bool] = False
    vegetarian: Optional[bool] = False
    omnivore: Optional[bool] = False
    keto_friendly: Optional[bool] = False
    dairy_free: Optional[bool] = False
    halal: Optional[bool] = False
    kosher: Optional[bool] = False
