from fastapi import APIRouter, Depends, Response
from typing import Union, List
from queries.events import Error, EventIn, EventOut, EventRepository


router = APIRouter()


@router.post("/event", response_model=EventOut)
def create_an_event(event: EventIn, repo: EventRepository = Depends()):
    return repo.create(event)


@router.get("/events", response_model=Union[Error, List[EventOut]])
def get_all_public_events(
    repo: EventRepository = Depends(),
):
    return repo.get_all_public_events()


@router.get("/events/{event_id}", response_model=Union[EventOut, Error])
def get_one_event(
    event_id: int,
    response: Response,
    repo: EventRepository = Depends(),
) -> EventOut:
    event = repo.get_one_event(event_id)
    if event is None:
        response.status_code = 404
    return event


@router.put("/events/{event_id}/edit", response_model=Union[EventOut, Error])
def edit_event(
    event_id: int,
    event: EventIn,
    repo: EventRepository = Depends(),
) -> Union[Error, EventOut]:
    return repo.update(event_id, event)

@router.delete("/events/{event_id}", response_model=bool)
def delete_event(
    event_id: int,
    repo: EventRepository = Depends(),
) -> EventOut:
    return repo.delete(event_id)
