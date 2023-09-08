from fastapi.testclient import TestClient
from queries.events import EventIn, EventRepository
from main import app
from queries.accounts import UserOut
from authenticator import authenticator

# client = TestClient(app)


# class MockEventRepository:
#     def update(self, event_id, event):
#         expected_event_id = 0
#         expected_event_data = {
#             "user_id": "1",
#             "event_name": "updated",
#             "address": "string",
#             "zipcode": 0,
#             "description": "string",
#             "event_date": "string",
#             "private_event": False,
#             "food_types": "3",
#             "alcohol_free": False,
#             "vegan": False,
#             "gluten_free": False,
#             "pescatarian": False,
#             "vegetarian": False,
#             "omnivore": False,
#             "keto_friendly": False,
#             "dairy_free": False,
#             "halal": False,
#             "kosher": False,
#         }

#         if event_id == expected_event_id and event == expected_event_data:
#             return {"message": "Event updated successfully"}
#         else:
#             return {"message": "Event update failed"}


# class User:
#     def __init__(self, user_id, full_name, username, email):
#         self.user_id = user_id
#         self.full_name = full_name
#         self.username = username
#         self.email = email


def fake_get_account_data():
    return dict(UserOut(
            user_id=1,
            full_name="string",
            username="string",
            email="string"
            ))


def test_edit_event():
    app.dependency_overrides[EventRepository] = MockEventRepository
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_account_data

#     edit_data = EventIn(
#         user_id="1",
#         event_name="updated",
#         address="string",
#         zipcode=0,
#         description="string",
#         event_date="string",
#         private_event=False,
#         food_types="3",
#         alcohol_free=False,
#         vegan=False,
#         gluten_free=False,
#         pescatarian=False,
#         vegetarian=False,
#         omnivore=False,
#         keto_friendly=False,
#         dairy_free=False,
#         halal=False,
#         kosher=False,
#     )

#     response = client.put("/events/0", json=edit_data.dict())

#     assert response.status_code == 200

#     response_data = response.json()

#     assert response_data["user_id"] == edit_data.user_id
#     assert response_data["event_name"] == edit_data.event_name
#     assert response_data["address"] == edit_data.address
#     assert response_data["zipcode"] == edit_data.zipcode
#     assert response_data["description"] == edit_data.description
#     assert response_data["event_date"] == edit_data.event_date
#     assert response_data["private_event"] == edit_data.private_event
#     assert response_data["food_types"] == edit_data.food_types
#     assert response_data["alcohol_free"] == edit_data.alcohol_free
#     assert response_data["vegan"] == edit_data.vegan
#     assert response_data["gluten_free"] == edit_data.gluten_free
#     assert response_data["pescatarian"] == edit_data.pescatarian
#     assert response_data["vegetarian"] == edit_data.vegetarian
#     assert response_data["omnivore"] == edit_data.omnivore
#     assert response_data["keto_friendly"] == edit_data.keto_friendly
#     assert response_data["dairy_free"] == edit_data.dairy_free
#     assert response_data["halal"] == edit_data.halal
#     assert response_data["kosher"] == edit_data.kosher
