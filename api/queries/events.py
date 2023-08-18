from pydantic import BaseModel
from datetime import date
from typing import Optional
from queries.pool import pool

class EventIn(BaseModel):
    event_name: str
    address: str
    zip_code: int
    description: str
    event_date: date
    private_event: Optional[bool] = False
    # food_types: int
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

class EventOut(BaseModel):
    event_id: int
    # host_id: int
    event_name: str
    address: str
    zip_code: int
    description: str
    event_date: date
    private_event: Optional[bool] = False
    # food_types: int
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



class EventRepository:
    def create(self, event: EventIn) -> EventOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO events
                        (event_name, address, zipcode, description, event_date, private_event, alcohol_free, vegan, gluten_free, pescatarian, vegetarian, omnivore, keto_friendly, dairy_free, halal, kosher)
                    VALUES
                        (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
                    RETURNING event_id;
                    """,
                    [
                        event.event_name,
                        event.address,
                        event.zip_code,
                        event.description,
                        event.event_date,
                        event.private_event,
                        # event.food_types,
                        event.alcohol_free,
                        event.vegan,
                        event.gluten_free,
                        event.pescatarian,
                        event.vegetarian,
                        event.omnivore,
                        event.keto_friendly,
                        event.dairy_free,
                        event.halal,
                        event.kosher
                    ]
                )
                event_id = result.fetchone()[0]
                old_data = event.dict()
                return EventOut(event_id=event_id, **old_data)
