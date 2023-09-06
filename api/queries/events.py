from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool


class Error(BaseModel):
    message: str


class EventIn(BaseModel):
    user_id: str
    event_name: str
    address: str
    zipcode: int
    description: str
    event_date: str
    private_event: Optional[bool] = False
    food_types: str
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


class EventOut(EventIn):
    event_id: int


class EventRepository:
    def get_all_public_events(self) -> Union[List[EventOut], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            e.event_id,
                            u.full_name,
                            e.event_name,
                            e.address,
                            e.zipcode,
                            e.description,
                            e.event_date,
                            ft.name
                        FROM
                            users u
                        INNER JOIN events e ON
                            (u.user_id = e.user_id)
                        INNER JOIN food_types ft ON
                            (e.food_types = ft.food_type_id)
                        ORDER BY event_date;
                        """
                    )
                    return [
                        self.record_to_event_out(record) for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all public events"}

    def create(self, event: EventIn) -> EventOut:
        try:
            event_id = None
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO events
                            ( user_id,
                            event_name,
                            address,
                            zipcode,
                            description,
                            event_date,
                            private_event,
                            food_types,
                            alcohol_free,
                            vegan,
                            gluten_free,
                            pescatarian,
                            vegetarian,
                            omnivore,
                            keto_friendly,
                            dairy_free,
                            halal,
                            kosher)
                        VALUES
                            (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
                        RETURNING event_id;
                        """,
                        [
                            event.user_id,
                            event.event_name,
                            event.address,
                            event.zipcode,
                            event.description,
                            event.event_date,
                            event.private_event,
                            event.food_types,
                            event.alcohol_free,
                            event.vegan,
                            event.gluten_free,
                            event.pescatarian,
                            event.vegetarian,
                            event.omnivore,
                            event.keto_friendly,
                            event.dairy_free,
                            event.halal,
                            event.kosher,
                        ],
                    )
                    event_id = result.fetchone()[0]
                    old_data = event.dict()
                    return EventOut(event_id=event_id, **old_data)
        except Exception as e:
            print(e)
            return {"message": "Could not create event"}

    def get_one_event(self, event_id: int) -> EventOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                            SELECT
                                e.event_id,
                                u.full_name,
                                e.event_name,
                                e.address,
                                e.zipcode,
                                e.description,
                                e.event_date,
                                ft.name,
                                e.private_event,
                                e.alcohol_free,
                                e.vegan,
                                e.gluten_free,
                                e.pescatarian,
                                e.vegetarian,
                                e.omnivore,
                                e.keto_friendly,
                                e.dairy_free,
                                e.halal,
                                e.kosher
                            FROM
                                users u
                            INNER JOIN events e ON
                                (u.user_id = e.user_id)
                            INNER JOIN food_types ft ON
                                (e.food_types = ft.food_type_id)
                            WHERE e.event_id = %s
                        """,
                        [event_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return {"message": "Event at that ID does not exist"}
                    return self.record_to_event_out(record)
        except Exception as e:
            print(e)
            return {"message": "Could not get that event with that event id"}

    def delete(self, event_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM events
                        WHERE event_id = %s
                        """,
                        [event_id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def update(self, event_id: int, event: EventIn) -> Union[EventOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE events
                        SET
                        event_name = %s,
                        address = %s,
                        zipcode = %s,
                        description = %s,
                        event_date = %s,
                        private_event = %s,
                        food_types = %s,
                        alcohol_free = %s,
                        vegan = %s,
                        gluten_free = %s,
                        pescatarian = %s,
                        vegetarian = %s,
                        omnivore = %s,
                        keto_friendly = %s,
                        dairy_free = %s,
                        halal = %s,
                        kosher = %s
                        WHERE event_id = %s
                        """,
                        [
                            event.event_name,
                            event.address,
                            event.zipcode,
                            event.description,
                            event.event_date,
                            event.private_event,
                            event.food_types,
                            event.alcohol_free,
                            event.vegan,
                            event.gluten_free,
                            event.pescatarian,
                            event.vegetarian,
                            event.omnivore,
                            event.keto_friendly,
                            event.dairy_free,
                            event.halal,
                            event.kosher,
                            event_id,
                        ],
                    )
                    return self.event_in_to_out(event_id, event)
        except Exception as e:
            print(e)
            return {"message": "Could not update the event"}

    def event_in_to_out(self, event_id: int, event: EventIn):
        old_data = event.dict()
        return EventOut(event_id=event_id, **old_data)

    def record_to_event_out(self, record):
        return EventOut(
            event_id=record[0],
            user_id=record[1],
            event_name=record[2],
            address=record[3],
            zipcode=record[4],
            description=record[5],
            event_date=record[6],
            food_types=record[7],
        )
