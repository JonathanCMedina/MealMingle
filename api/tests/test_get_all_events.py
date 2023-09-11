from fastapi.testclient import TestClient
from queries.events import EventRepository, EventOut
from main import app

# from queries.accounts import UserOut
from authenticator import authenticator


client = TestClient(app)


class EmptyEventsRepository:
    def get_all_public_events(self):
        return [
            EventOut(
                user_id="jc medina",
                event_name="Oh no! The party isn't going as expected!",
                address="123 Some Street",
                zipcode=90210,
                description="What a mess! Cady got too drunk and threw up",
                event_date="2024-2-2",
                private_event=False,
                food_types="American",
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
        ]


def fake_get_account_data():
    return {
        "user_id": 1,
        "full_name": "jc medina",
        "username": "jcm",
        "email": "1@1",
        "hashed_password": "string",
    }


def test_get_all_public_events():
    app.dependency_overrides[EventRepository] = EmptyEventsRepository
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_account_data

    expected_response = [
        EventOut(
            user_id="jc medina",
            event_name="Oh no! The party isn't going as expected!",
            address="123 Some Street",
            zipcode=90210,
            description="What a mess! Cady got too drunk and threw up",
            event_date="2024-2-2",
            private_event=False,
            food_types="American",
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
    ]

    response = client.get("/events")
    app.dependency_overrides = {}

    print(response.status_code)
    assert response.status_code == 200
    assert response.json() == expected_response
