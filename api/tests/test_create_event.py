from queries.events import EventRepository
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


class CreateEvent:
    def create(self, event):
        result = (
            {
                "user_id": "1",
                "event_name": "Test test event",
                "address": "224 B Baker St",
                "zipcode": 87652,
                "description": "This is a test event for the tester of events",
                "event_date": "2023-10-31",
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
            },
        )
        result.update(event)
        return result


def test_create_event():
    app.dependency_overrides[EventRepository] = CreateEvent
    json = {
        "user_id": "1",
        "event_name": "Test test event",
        "address": "224 B Baker St",
        "zipcode": 87652,
        "description": "This is a test event for the tester of events",
        "event_date": "2023-10-31",
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
    }
    expected = (
        {
            "user_id": "1",
            "event_name": "Test test event",
            "address": "224 B Baker St",
            "zipcode": 87652,
            "description": "This is a test event for the tester of events",
            "event_date": "2023-10-31",
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
            "event_id": 24,
        },
    )
    response = client.post("/event", json=json)
    app.dependency_overrides = {}
    # Assert
    assert response.status_code == 200
    assert response.json() == expected
