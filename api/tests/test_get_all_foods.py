from fastapi.testclient import TestClient
from queries.food_types import FoodTypeRepository
from authenticator import MyAuthenticator
from main import app

client = TestClient(app)


class EmptyFoodsRepository:
    def get_all_food_types(self):
        return []


def fake_get_all_food_types():
    return []


def test_get_all_food_types():
    app.dependency_overrides[FoodTypeRepository] = EmptyFoodsRepository
    app.dependency_overrides[
        MyAuthenticator.get_current_account_data
    ] = fake_get_all_food_types

    response = client.get("/api/foods")

    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == []
