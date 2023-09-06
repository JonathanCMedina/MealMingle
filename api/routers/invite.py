from fastapi import APIRouter, Depends
from queries.invite import GuestOut, GuestIn, InviteRepository
from authenticator import authenticator

router = APIRouter()


@router.post("/invite", response_model=GuestOut)
def invite(
    guest: GuestIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: InviteRepository = Depends(),
):
    return repo.invite(guest)
