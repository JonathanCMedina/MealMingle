from fastapi.testclient import TestClient
from queries.food_types import FoodTypeRepository
from authenticator import authenticator
from queries.accounts import UserOut
from main import app

client = TestClient(app)


class EmptyFoodsRepository:
    def get_all_food_types(self):
        return []


def fake_get_all_food_types():
    return []

def fake_get_account_data():
    return dict(UserOut(
            user_id=0,
            full_name="string",
            username="string",
            email="string"
            ))

def test_get_all_food_types():
    app.dependency_overrides[FoodTypeRepository] = EmptyFoodsRepository
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_all_food_types

    response = client.get("/foods")

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == []
