from fastapi.testclient import TestClient
from main import app
# from queries.accounts import AccountOut
from queries.events import EventRepository, EventOut

client = TestClient(app)

class EmptyEvent:
    def get_event(self, id):
        return EventOut(
            user_id = 0,
            event_name = "string",
            address = "string",
            zipcode = 0,
            description = "string",
            event_date = "string",
            private_event =  False,
            food_types =  0,
            alcohol_free =  False,
            vegan =  False,
            gluten_free = False,
            pescatarian = False,
            vegetarian = False,
            omnivore = False,
            keto_friendly = False,
            dairy_free = False,
            halal = False,
            kosher = False,
            event_id = 0
        )


    def test_get_event():
        app.dependency_overrides[EventRepository] = EmptyEvent


        expected = {
            "user_id": 1,
            "event_name": "updated",
            "address": "string",
            "zipcode": 0,
            "description": "string",
            "event_date": "string",
            "private_event":  False,
            "food_types":  3,
            "alcohol_free":  False,
            "vegan":  False,
            "gluten_free": False,
            "pescatarian": False,
            "vegetarian": False,
            "omnivore": False,
            "keto_friendly": False,
            "dairy_free": False,
            "halal": False,
            "kosher": False,
            "event_id": 1
        }

        response = client.get("/events/0")

        app.dependency_overrides = {}

        assert response.status_code == 200
        assert response.json() == expected
