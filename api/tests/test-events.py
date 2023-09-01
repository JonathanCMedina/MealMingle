# from queries.events import UserOut, EventRepository
# from unittest import TestCase
# from fastapi.testclient import TestClient
# from main import app

# client = TestClient

# def test_create_event():
#     app.dependency_overrides[EventRepository] = create

#     json = {
#         "event": {
#             "user_id": 1,
#             "event_name": "Test test event",
#             "address": "224 B Baker St",
#             "zipcode": 87652,
#             "description": "This is a test event for the tester of events",
#             "event_date": "2023-10-31",
#             "private_event": False,
#             "food_types": 3,
#             "alcohol_free": False,
#             "vegan": False,
#             "gluten_free": False,
#             "pescatarian": False,
#             "vegetarian": False,
#             "omnivore": False,
#             "keto_friendly": False,
#             "dairy_free": False,
#             "halal": False,
#             "kosher": False
#         }
#     }

#     expected = {
#         "event": {
#             "user_id": 1,
#             "event_name": "Test test event",
#             "address": "224 B Baker St",
#             "zipcode": 87652,
#             "description": "This is a test event for the tester of events",
#             "event_date": "2023-10-31",
#             "private_event": False,
#             "food_types": 3,
#             "alcohol_free": False,
#             "vegan": False,
#             "gluten_free": False,
#             "pescatarian": False,
#             "vegetarian": False,
#             "omnivore": False,
#             "keto_friendly": False,
#             "dairy_free": False,
#             "halal": False,
#             "kosher": False
#         },
#     }

#     response = client.post("/event", json=json)

#     app.dependency_overrides = {}

#     # Assert

#     assert response.status_code == 200
#     assert response.json() == expected
