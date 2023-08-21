from pydantic import BaseModel


class UserCreate(BaseModel):
    full_name: str
    username: str
    email: str
    password: str
    password_confirmation: str


class UserLogin(BaseModel):
    username: str
    password: str


# class UserIn(BaseModel):
#     full_name: str
#     username: str
#     email: str
#     password: str
#     password_confirmation: str

# class UserOut(BaseModel):
#     host_status: bool = False
# class AccountsRepository:
#     def user_login(self, UserIn) -> UserOut:
#         with pool.connection() as conn:
#             with conn.cursor() as db:
#                 result = db.execute()
