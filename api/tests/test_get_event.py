from fastapi.testclient import TestClient
from main import app
from queries.events import EventRepository, EventOut
from queries.accounts import UserOut
from authenticator import authenticator

client = TestClient(app)


class EmptyEvent:
    def get_one_event(self, event_id):
        return EventOut(
            user_id="1",
            event_name="updated",
            address="string",
            zipcode=0,
            description="string",
            event_date="string",
            private_event=False,
            food_types="3",
            alcohol_free=False,
            vegan=False,
            gluten_free=False,
            pescatarian=False,
            vegetarian=False,
            omnivore=False,
            keto_friendly=False,
            dairy_free=False,
            halal=False,
            kosher=False,
            event_id=1,
        )


def fake_get_account_data():
    return dict(
        UserOut(
            user_id=0, full_name="string", username="string", email="string"
        )
    )


def test_get_event():
    app.dependency_overrides[EventRepository] = EmptyEvent
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_account_data

    expected = {
        "user_id": "1",
        "event_name": "updated",
        "address": "string",
        "zipcode": 0,
        "description": "string",
        "event_date": "string",
        "private_event": False,
        "food_types": "3",
        "alcohol_free": False,
        "vegan": False,
        "gluten_free": False,
        "pescatarian": False,
        "vegetarian": False,
        "omnivore": False,
        "keto_friendly": False,
        "dairy_free": False,
        "halal": False,
        "kosher": False,
        "event_id": 1,
    }

    response = client.get("/events/0")
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == expected
