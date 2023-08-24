steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY NOT NULL,
            full_name VARCHAR(256) NOT NULL,
            username VARCHAR NOT NULL UNIQUE,
            email VARCHAR NOT NULL UNIQUE,
            hashed_password VARCHAR NOT NULL,
            host_status BOOLEAN
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE food_types (
            food_type_id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(50)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE food_types;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE events (
            event_id SERIAL PRIMARY KEY NOT NULL,
            host_id INTEGER REFERENCES users(user_id) UNIQUE,
            event_name VARCHAR(1000) NOT NULL,
            address VARCHAR(1000) NOT NULL,
            zipcode INTEGER NOT NULL,
            description TEXT NOT NULL,
            event_date DATE NOT NULL,
            private_event BOOLEAN NULL,
            food_types INTEGER REFERENCES food_types(food_type_id) UNIQUE,
            alcohol_free BOOLEAN NULL,
            vegan BOOLEAN NULL,
            gluten_free BOOLEAN NULL,
            pescatarian BOOLEAN NULL,
            vegetarian BOOLEAN NULL,
            omnivore BOOLEAN NULL,
            keto_friendly BOOLEAN NULL,
            dairy_free BOOLEAN NULL,
            halal BOOLEAN NULL,
            kosher BOOLEAN NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE events;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE guests (
            guest_id INTEGER REFERENCES users(user_id) UNIQUE,
            event_id INTEGER REFERENCES events(event_id) UNIQUE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE food_types;
        """
    ],
]
