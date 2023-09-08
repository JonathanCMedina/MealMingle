from fastapi.testclient import TestClient
from queries.events import EventIn, EventRepository, EventOut
from main import app
from queries.accounts import UserOut
from authenticator import authenticator

client = TestClient(app)


class MockEventRepository:
    def update(self, event_id: int, edit_data: EventOut):

        return {
            "event_id": event_id,
            "user_id": 1,
            "event_name": edit_data.event_name,
            "address": edit_data.address,
            "zipcode": edit_data.zipcode,
            "description": edit_data.description,
            "event_date": edit_data.event_date,
            "private_event": edit_data.private_event,
            "food_types": edit_data.food_types,
            "alcohol_free": edit_data.alcohol_free,
            "vegan": edit_data.vegan,
            "gluten_free": edit_data.gluten_free,
            "pescatarian": edit_data.pescatarian,
            "vegetarian": edit_data.vegetarian,
            "omnivore": edit_data.omnivore,
            "keto_friendly": edit_data.keto_friendly,
            "dairy_free": edit_data.dairy_free,
            "halal": edit_data.halal,
            "kosher": edit_data.kosher
        }


def fake_get_account_data():
    return dict(UserOut(
            user_id="1",
            full_name="string",
            username="string",
            email="string"
            ))


def test_edit_event():
    app.dependency_overrides[EventRepository] = MockEventRepository
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_account_data

    edit_data = {
        "user_id": "1",
        "event_name": "updated",
        "address": "string",
        "zipcode": 0,
        "description": "string",
        "event_date": "string",
        "private_event": False,
        "food_types": "5",
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
    }
    print("edit_data", edit_data)
    response = client.put("/events/1", json=edit_data)
    print(response)
    assert response.status_code == 200
    assert response.json() == {
        "event_id": 1,
        "user_id": "1",
        "event_name": "updated",
        "address": "string",
        "zipcode": 0,
        "description": "string",
        "event_date": "string",
        "private_event": False,
        "food_types": "5",
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
    }
