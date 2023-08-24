from pydantic import BaseModel
from queries.pool import pool


class FoodTypeIn(BaseModel):
    name: str


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
            raise e  # Re-raise the exception for proper error handling
