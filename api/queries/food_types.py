from pydantic import BaseModel
from queries.pool import pool
from typing import List, Union


class Error(BaseModel):
    message: str


class FoodTypeIn(BaseModel):
    name: str


class FoodTypeOut(FoodTypeIn):
    food_type_id: int


class FoodTypeRepository:
    def create_food_type(self, food_type: FoodTypeIn) -> FoodTypeIn:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO food_types (name)
                        VALUES (%s)
                        RETURNING food_type_id;
                        """,
                        [food_type.name],
                    )
                    food_type_id = result.fetchone()[0]
                    return FoodTypeIn(
                        food_type_id=food_type_id, **food_type.dict()
                    )
        except Exception as e:
            raise e

    def get_all_food_types(self) -> Union[List[FoodTypeOut], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT food_type_id, name
                        FROM food_types
                        ORDER BY food_type_id;
                        """
                    )
                    return [
                        self.record_to_food_type_in(record)
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all food types"}

    def record_to_food_type_in(self, record):
        return FoodTypeOut(
            food_type_id=record[0],
            name=record[1],
        )
