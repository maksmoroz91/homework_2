CREATE TABLE genre(
    genre_id SERIAL PRIMARY KEY,
    title VARCHAR(64) NOT NULL
);

CREATE TABLE film(
    film_id SERIAL PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    year_of_production INT NOT NULL
);

CREATE TABLE film_genre(
    film_id INT REFERENCES film(film_id),
    genre_id INT REFERENCES genre(genre_id),

    CONSTRAINT film_genre_pkey PRIMARY KEY (film_id, genre_id)
);