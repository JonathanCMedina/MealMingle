from fastapi import APIRouter, Depends, Response
from typing import Union, List
from queries.events import Error, EventIn, EventOut, EventRepository
from authenticator import authenticator


router = APIRouter()


@router.post("/event", response_model=EventOut)
def create_an_event(
    event: EventIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: EventRepository = Depends(),
):
    return repo.create(event)


@router.get("/events", response_model=Union[Error, List[EventOut]])
def get_all_public_events(
    repo: EventRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_all_public_events()


@router.get("/events/{event_id}", response_model=Union[EventOut, Error])
def get_one_event(
    event_id: int,
    response: Response,
    repo: EventRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
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
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> Union[Error, EventOut]:
    return repo.update(event_id, event)


@router.delete("/events/{event_id}", response_model=bool)
def delete_event(
    event_id: int,
    repo: EventRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> EventOut:
    return repo.delete(event_id)
