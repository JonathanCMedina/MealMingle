from fastapi.testclient import TestClient
from queries.events import EventRepository
from authenticator import MyAuthenticator
from queries.accounts import UserOut
from authenticator import authenticator
from main import app

client = TestClient(app)


class EmptyEventsRepository:
    def get_all_public_events(self):
        return []


def fake_get_all_public_events():
    return []

def fake_get_account_data():
    return dict(UserOut(
            user_id=0,
            full_name="string",
            username="string",
            email="string"
            ))


def test_get_all_public_events():
    app.dependency_overrides[EventRepository] = EmptyEventsRepository
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_all_public_events

    response = client.get("/events")

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == []
