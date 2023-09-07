# from fastapi.testclient import TestClient
# from main import app
# from queries.events import EventRepository


# client = TestClient(app)


# class EmptyEventRepo:
#     def delete():
#         return []


# def test_delete_event(event_id):
#     app.dependency_overrides[EventRepository] = EmptyEventRepo
#     # ACT
#     response = client.delete("/events/{event_id}")

#     app.dependency_overrides = {}

# ASSERT length of list in event repo is one less or empty (if only one)
# ASSERT json response is 200
