steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            full_name VARCHAR(256) NOT NULL,
            username VARCHAR NOT NULL,
            email VARCHAR NOT NULL,
            host_status BOOLEAN NOT NULL
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
            id SERIAL PRIMARY KEY NOT NULL,
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
        CREATE TABLE guests (
            user_id INTEGER,
            event_id INTEGER,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
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
            id SERIAL PRIMARY KEY NOT NULL,
            host_id INTEGER,
            guests INTEGER,
            event_name VARCHAR(1000) NOT NULL,
            address VARCHAR(1000) NOT NULL,
            zipcode INTEGER NOT NULL,
            description TEXT NOT NULL,
            event_date DATE NOT NULL,
            private_event BOOLEAN NOT NULL,
            food_types INTEGER,
            alcohol_free BOOLEAN NOT NULL,
            vegan BOOLEAN NOT NULL,
            gluten_free BOOLEAN NOT NULL,
            pescatarian BOOLEAN NOT NULL,
            vegetarian BOOLEAN NOT NULL,
            omnivore BOOLEAN NOT NULL,
            keto_friendly BOOLEAN NOT NULL,
            dairy_free BOOLEAN NOT NULL,
            halal BOOLEAN NOT NULL,
            kosher BOOLEAN NOT NULL,
            FOREIGN KEY (host_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (guests) REFERENCES guests(user_id) ON DELETE CASCADE,
            FOREIGN KEY (food_types) REFERENCES food_types(id) ON DELETE CASCADE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE events;
        """
    ]
]
