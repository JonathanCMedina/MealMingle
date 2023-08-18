from fastapi import APIRouter, Depends
from queries.events import EventIn, EventRepository

router = APIRouter()


@router.post("/event")
def create_an_event(event: EventIn, repo: EventRepository = Depends()):
    return repo.create(event)
