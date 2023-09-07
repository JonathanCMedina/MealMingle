from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import events, accounts, food_types, invite
from authenticator import authenticator
import os

app = FastAPI()

app.include_router(events.router, tags=["events"])
app.include_router(invite.router, tags=["invite"])
app.include_router(accounts.router, tags=["accounts"])
app.include_router(authenticator.router, tags=["accounts"])
app.include_router(food_types.router, tags=["food_types"])


origins = [
    "http://localhost:3000",
    os.environ.get("CORS_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "You hit the root path!"}


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00",
        }
    }
