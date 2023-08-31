from pydantic import BaseModel
from queries.pool import pool
from typing import List, Union


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


class UserOutWithPassword(UserOut):
    hashed_password: str


class DuplicateAccountError(ValueError):
    pass


class Error(BaseModel):
    message: str


class AccountsRepository(BaseModel):
    def create_account(self, users: UserIn, hashed_password: str) -> UserOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO users
                        (full_name, username, email, hashed_password)
                    VALUES
                        (%s,%s,%s,%s)
                    RETURNING user_id;
                    """,
                    [
                        users.full_name,
                        users.username,
                        users.email,
                        hashed_password,
                    ],
                )
                user_id = result.fetchone()[0]
                return UserOutWithPassword(
                    user_id=user_id,
                    full_name=users.full_name,
                    username=users.username,
                    email=users.email,
                    hashed_password=hashed_password,
                )

    def get_account(self, email: str) -> UserOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT user_id, full_name, username, email, hashed_password
                        FROM users
                        WHERE email = %s
                        """,
                        [email],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return UserOutWithPassword(
                        user_id=record[0],
                        full_name=record[1],
                        username=record[2],
                        email=record[3],
                        hashed_password=record[4],
                    )
        except Exception as e:
            print(e)
            return {"message": "Account not found"}

    def get_all_users(self) -> Union[List[UserOut], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT user_id, full_name, username, email
                        FROM users
                        """
                    )
                    return [
                        self.record_to_user_out(record) for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all users"}

    def record_to_user_out(self, record):
        return UserOut(
            user_id=record[0],
            full_name=record[1],
            username=record[2],
            email=record[3],
        )
