from fastapi.testclient import TestClient
from main import app
from queries.events import EventRepository
from authenticator import authenticator

client = TestClient(app)


def mock_delete_event(event_id):
    return event_id


class EmptyEventsRepository:
    def delete(self, event_id):
        return True


def mock_get_account_data():
    return {
        "user_id": 1,
        "full_name": "Bob Smart",
        "username": "bob22",
        "email": "bob@test.com",
        "hashed_password": "string",
    }


def test_delete_event():
    app.dependency_overrides[EventRepository] = EmptyEventsRepository
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = mock_get_account_data

    expected_response = True

    response = client.delete("/events/1")
    app.dependency_overrides = {}

    print(response.status_code)
    assert response.status_code == 200
    assert response.json() == expected_response
