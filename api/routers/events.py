from fastapi import APIRouter
from queries.events import EventIn


router = APIRouter()


@router.post("/event")
def create_an_event(event: EventIn):
    return event
