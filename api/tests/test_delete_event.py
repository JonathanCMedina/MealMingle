# from fastapi.testclient import TestClient
# from main import app
# from queries.events import EventRepository


# client = TestClient(app)


# # class MockEventRepo:
# #     def delete_event(self):


# # def mock_delete_event(event_id):
# #     return event_id


# # def test_delete_event():
# #     app.dependency_overrides[EventRepository] = MockEventRepo

# #     response = client.delete("/events/1")

# #     app.dependency_overrides = {}

# #     assert response.status_code == 200

# class CreateEventRepository:
#     def create_event(self, event):
#         result = {
#             "user_id": 1,
#             "event_name": "Fun Party",
#             "address": "32 A st.",
#             "zipcode": 11111,
#             "description": "Great time to be had",
#             "event_date": "2023-09-28",
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
#         result.update(event)
#         return result

# def test_create_event():
#     app.dependency_overrides[EventRepository] = CreateEventRepository

#     json = {
#             "user_id": 1,
#             "event_name": "Fun Party",
#             "address": "32 A st.",
#             "zipcode": 11111,
#             "description": "Great time to be had",
#             "event_date": "2023-09-28",
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

#     expected = {
#         "user_id": 1,
#         "event_name": "Fun Party",
#         "address": "32 A st.",
#         "zipcode": 11111,
#         "description": "Great time to be had",
#         "event_date": "2023-09-28",
#         "private_event": False,
#         "food_types": 3,
#         "alcohol_free": False,
#         "vegan": False,
#         "gluten_free": False,
#         "pescatarian": False,
#         "vegetarian": False,
#         "omnivore": False,
#         "keto_friendly": False,
#         "dairy_free": False,
#         "halal": False,
#         "kosher": False
#     }

#     response = client.post("/event", json=json)

#     assert response.status_code == 200
#     assert response.json() == expected
