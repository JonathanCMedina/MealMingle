# MealMingle

  

Team:

* Jonathan Ceasar Medina(@Jonathan.C.Medina on Gitlab / @JonathanCMedina on Github) - 
* Mitchell Mora (@MitchM23 on Gitlab)
* Mitchell Wong (@Managedmitch on Gitlab)
* Naomi Campos (@Naomikc92 on Gitlab)

  

## MealMingle's Vision 

MealMingle was created to be a premiere solution to scheduling and organizing dinner parties, as well as other events. 
Thinking of throwing a surprise birthday party for a friend at your home? Share the details to friends and family so they can be added to the guest list. Or what about a movie night in with a few people? Just write in the event name, description of the event, location, and customize with some dietary restrictions on the food being brought or served! 

MealMingle uses RESTful API patterns to Create, Read, Update, and Delete information. 
These functions can be completed both on the frontend through the https://mealmingle.gitlab.io/mealmingle/ website and the backend through the FastAPI docs page https://localhost:8000/docs# 

The application uses Docker for containerization. 

The backend endpoints are created with Python and Pydantic models. Backend authentication is used from the JWTDown FastAPI Auth Library https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/. The backend database is created using Postgresql and is stored and managed through Caprover. 

The frontend Graphical Human Interface (GHI) are primarily created with JavaScript files. Styling were created with the use of JSX and TailwindCSS. Frontend authentication were imported from the Galvanize Auth Library https://gitlab.com/galvanize-inc/foss/jwtdown-for-react. The Frontend website is deployed through Gitlab. 

  

## Instructions on running the application

### Prior to running the application, you will want to download a few applications/tools:

* VSCode (or a similar IDE/Integrated Development Environment)

* Docker desktop (to create volumes, images, and containers to run the application)

* Beekeeper Studios (to checke the database)

* A web-based browser (preferably Google Chrome)

  

### Once those requirements are met:

* Turn on Docker desktop

* Go to https://gitlab.com/mealmingle/module3-project-gamma then fork and clone the repository

* `cd` into the `module3-project-gamma` directory then open VSCode or your preferred IDE

* To run the program, type the following commands in the terminal:

* `docker volume create mealmingle`

* `docker-compose build` OR if you are on an M1 Chip or M2 Chip Mac device: `DOCKER_DEFAULT_PLATFORM=linux/amd64 docker-compose build`

* `docker-compose up`

  

Please feel free to start with http://localhost:3000. You will be met with the main page of MealMingle

  

**You may need to wait until the terminal says it has compiled successfully. This may take up to five minutes depending on your device's specifications**

### Additional Information

The server should be running once the http://localhost:3000/ page loads by itself. You will need to create an account in order to access other pages. Once you have created an account, please log in.

You will have access to the React URLs in the front end (the links starting with http://localhost:3000/), as well as backend URLs’ functionality through FastAPI - Swagger Docs  (http://localhost:8000/docs#). A full list of URLs will be in the API Documentation section.

  

For testing purposes, please create an account or log in (if you already have an account), then proceed by creating a new event, invite another user to the event, view the events, get a specific event by its ID,  edit details of an event, and delete an event. 

  

## Diagram

  

## API Documentation

  

### FastAPI Body Examples
Below are examples of the JSON Request Body content if you wish to test some requests in FastAPI:
*Remember to press the Try It Out button on the FastAPI docs page before testing the functions listed below* 


#### Jonathan Ceasar Medina

| Method | URL Path or File | Description | 

| ----------- | ----------- |  ----------- |

| GET | http://localhost:8000/docs#/events/get_all_public_events_events_get | Backend endpoint that retrieves all events from the database | 

Example output: 
```
[
  {
    "user_id": "jc medina",
    "event_name": "Oh no! The party isn't going as expected!",
    "address": "123 Some Street",
    "zipcode": 90210,
    "description": "What a mess! Cady got too drunk and threw up on Aaron Samuel's shoes, Regina is upset that she didn't get invited, and Damien and Janice are upset because 1) they weren't invited, and 2) Cady didn't even show up to Janis' art show dedicated to their friendship!!!",
    "event_date": "2024-2-2",
    "private_event": false,
    "food_types": "American",
    "alcohol_free": false,
    "vegan": false,
    "gluten_free": false,
    "pescatarian": false,
    "vegetarian": false,
    "omnivore": false,
    "keto_friendly": false,
    "dairy_free": false,
    "halal": false,
    "kosher": false,
    "event_id": 1
  },
  {
    "user_id": "jc medina",
    "event_name": "bruh",
    "address": "string",
    "zipcode": 0,
    "description": "string",
    "event_date": "string",
    "private_event": false,
    "food_types": "Cuban",
    "alcohol_free": false,
    "vegan": false,
    "gluten_free": false,
    "pescatarian": false,
    "vegetarian": false,
    "omnivore": false,
    "keto_friendly": false,
    "dairy_free": false,
    "halal": false,
    "kosher": false,
    "event_id": 2
  }
]

```
| Method | URL Path or File | Description | 

| ----------- | ----------- |  ----------- |

| GET | http://localhost:3000/events | Frontend endpoint and frontend component that retrieves all events from the database | 

Example output: 


| Method | URL Path or File | Description | 

| ----------- | ----------- |  ----------- |

| TEST | test_get_all_events.py | Unit test for retrieving an example event and the expected output | 

Result output: Unit test passes 



| Method | URL Path or File | Description | 

| ----------- | ----------- |  ----------- |

| GET  | http://localhost:8000/docs#/events/get_one_event_events__event_id__get | Backend endpoint for getting one event | 

Example output: 

```
{
  "user_id": "jc medina",
  "event_name": "bruh",
  "address": "string",
  "zipcode": 0,
  "description": "string",
  "event_date": "string",
  "private_event": false,
  "food_types": "Cuban",
  "alcohol_free": false,
  "vegan": false,
  "gluten_free": false,
  "pescatarian": false,
  "vegetarian": false,
  "omnivore": false,
  "keto_friendly": false,
  "dairy_free": false,
  "halal": false,
  "kosher": false,
  "event_id": 2
}

```

| Method | URL Path or File | Description | 

| ----------- | ----------- |  ----------- |

| POST  | http://localhost:8000/docs#/invite/invite_invite_post | Backend endpoint for inviting a user to an event | 

Example output: 

```
{
  "guest": 1,
  "event": 2,
  "guest_id": 4
}

```

---------------------------------------------------------------------------------------------------------------------------------------------------------------
#### Naomi

|PUT | [http://localhost:8000/docs#/events/edit_event_events__event_id__put](http://localhost:8000/docs#/events/edit_event_events__event_id__put) | Backend endpoint for updating an existing event

Expected output given event_id:

```
{
"user_id": 1,
"event_name": Oh no! The party isn't going as expected!,
"address": 123 Some Street,
"zipcode": 90210,
"description": What a mess! Cady got too drunk and threw up on Aaron Samuel's shoes, Regina is upset that she didn't get invited, and Damien and Janice are upset because 1) they weren't invited, and 2) Cady didn't even show up to Janis' art show dedicated to their friendship!!!,
"event_date": 2024-2-2,
"private_event": true,
"food_types": 2,
"alcohol_free": true,
"vegan": false,
"gluten_free": false,
"pescatarian": false,
"vegetarian": false,
"omnivore": true,
"keto_friendly": false,
"dairy_free": false,
"halal": false,
"kosher": true
}
```

|GET | [http://localhost:8000/docs#/accounts/get_all_users_users_get](http://localhost:8000/docs#/events/edit_event_events__event_id__put) | Backend endpoint for retrieving all user accounts

Expected Outcome:

```
[
  {
    "user_id": 1,
    "full_name": "Naomi Campos",
    "username": "n23",
    "email": "naomi@test.com"
  },
  {
    "user_id": 2,
    "full_name": "Bob Marley",
    "username": "bmar",
    "email": "bob@test.com"
  }
]
```


|GET | [http://localhost:3000/signup](http://localhost:3000/signup) | Frontend url for form to create a new user account

Screenshot: 
![Landing Page][ghi/src/Images/meal-mingle-signup.png]



|GET | [http://localhost:3000/](http://localhost:3000/) | Frontend url for landing page

Screenshot: 
![Landing Page](ghi/src/Images/meal-mingle-landing.png "Screenshot of landing page for Meal Mingle")



|GET | [http://localhost:3000/main](http://localhost:3000/main) | Frontend url for home page of logged in user

Screenshot: 
![Main Page](ghi/src/Images/meal-mingle-main.png "Screenshot of main page for Meal Mingle")



| TEST | test_delete_event.py | Unit test to ensure backend delete endpoint is successful
Result output: Unit test passes 




---------------------------------------------------------------------------------------------------------------------------------------------------------------
#### Mitchell Mora

| Method | URL Path or File | Description |

| POST | http://localhost:8000/docs#/food_types/create_food_type_food_types__post | Backend endpoint for creating a new food type. 

Example Output: 
{
  "name": "string"
}

| PUT | localhost:3000/events/{user_id}/edit | Front End | 
Allows users to edit their event and redirects to the event detail of the edited event. 
| |

| UNIT TEST | Edit Event | Unit test to determine if backend endpoint is successful. Result: Test Passes. 
---------------------------------------------------------------------------------------------------------------------------------------------------------------
#### Mitchell Wong 

| Method | URL Path or File | Description |

| --- | --- | — |

|POST | http://localhost:8000/docs#/events/create_an_event_event_post | Backend endpoint for creating a new event 

Example output:
```
{
  "user_id": 1,
  "event_name": Cady Heron's Party,
  "address": 123 Some Street,
  "zipcode": 90210,
  "description": Cady's throwing a big party since her parents are out of town for the weekend watching Ladysmith Black Mambazo,
  "event_date": 2024-2-2,
  "private_event": true,
  "food_types": 2,
  "alcohol_free": false,
  "vegan": false,
  "gluten_free": false,
  "pescatarian": false,
  "vegetarian": false,
  "omnivore": true,
  "keto_friendly": false,
  "dairy_free": false,
  "halal": false,
  "kosher": true
}
```

| Method | URL Path or File | Description | 

| ----------- | ----------- |  ----------- |

| DELETE | http://localhost:8000/docs#/events/delete_event_events__event_id__delete | Backend endpoint for deleting one event | 

Example output: 

```
{
  "event_id": 1,
}
```


| GET | http://localhost:8000/docs#/food_types/get_all_food_types_foods_get | Backend endpoint for getting all food types | 

Example output: 

```
[
  {
    "name": "Algerian",
    "food_type_id": 1
  },
  {
    "name": "American",
    "food_type_id": 2
  },
  {
    "name": "Angolan",
    "food_type_id": 3
  },
  {
    "name": "Arab",
    "food_type_id": 4
  },
  {
    "name": "Argentine / Argentinian",
    "food_type_id": 5
  },
  {
    "name": "Australian",
    "food_type_id": 6
  },
  {
    "name": "Austrian",
    "food_type_id": 7
  },
  {
    "name": "Belgian",
    "food_type_id": 8
  },
  {
    "name": "Bosnian",
    "food_type_id": 9
  },
  {
    "name": "Brazilian",
    "food_type_id": 10
  }

```

| Method | URL Path or File | Description | 

| ----------- | ----------- |  ----------- |

| TEST | test_get_one_events.py | Unit test for retrieving an example event and the expected output | 

Result output: Unit test passes 

| TEST | test_get_all_foods.py | Unit test for retrieving an example food list and the expected output | 

Result output: Unit test passes 

| Method | URL Path or File | Description | 

| ----------- | ----------- |  ----------- |

| POST | http://localhost:3000/event | Frontend endpoint that creates a new event into the database. | 

Example output: 

---------------------------------------------------------------------------------------------------------------------------------------------------------------



#### Group Components 

Login frontend and backend endpoint
Signup frontend and backend endpoint
Backend authentication
Frontend authentication
Backend deployment
Frontend deployment 
