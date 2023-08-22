from pydantic import BaseModel
from queries.pool import pool

class UserIn(BaseModel):
    full_name: str
    username: str
    email: str
    password: str
    password_confirmation: str

class UserOut(BaseModel):
    user_id: int
    full_name: str
    username: str
    email: str
    password: str

class AccountsRepository(BaseModel):
    def create_account(self, users: UserIn) -> UserOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO users
                        (full_name, username, email, password)
                    VALUES
                        (%s,%s,%s,%s)
                    RETURNING user_id;
                    """,
                    [
                        users.full_name,
                        users.username,
                        users.email,
                        users.password,
                    ],
                )
                user_id = result.fetchone()[0]
                old_data = users.dict()
                return UserOut(user_id=user_id, **old_data)
