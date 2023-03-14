CREATE DATABASE film_db;

CREATE TABLE person(
    person_id SERIAL PRIMARY KEY,
    full_name VARCHAR(64) NOT NULL,
    position VARCHAR(32)  NOT NULL
);

CREATE TABLE film(
    film_id SERIAL PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    year_of_production INT NOT NULL,
    country VARCHAR(32) NOT NULL,
    slogan TEXT,
    fk_director_id INT REFERENCES person(person_id) NOT NULL,
    fk_scriptwriter_id INT REFERENCES person(person_id) NOT NULL,
    fk_producer_id INT REFERENCES person(person_id) NOT NULL,
    fk_operator_id INT REFERENCES person(person_id) NOT NULL,
    fk_composer_id INT REFERENCES person(person_id) NOT NULL,
    fk_artist_id INT REFERENCES person(person_id) NOT NULL,
    fk_editor_id INT REFERENCES person(person_id) NOT NULL,
    budget VARCHAR(32) NOT NULL,
    marketing VARCHAR(32) NOT NULL,
    usa_fees VARCHAR(32) NOT NULL,
    worldwide_fees VARCHAR(32) NOT NULL,
    premiere_in_russia DATE,
    premiere_in_world DATE NOT NULL,
    release_on_dvd DATE,
    age_restriction VARCHAR(32) NOT NULL,
    rating_mpaa VARCHAR(32) NOT NULL,
    duration TIME NOT NULL
);

CREATE TABLE genre(
    genre_id SERIAL PRIMARY KEY,
    title VARCHAR(32) NOT NULL
);

CREATE TABLE viewers(
    viewers_id SERIAL PRIMARY KEY,
    country VARCHAR(32) NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE film_person(
    film_id INT REFERENCES film(film_id),
    person_id INT REFERENCES person(person_id),

    CONSTRAINT film_person_pkey PRIMARY KEY (film_id, person_id)
);

CREATE TABLE film_genre(
    film_id INT REFERENCES film(film_id),
    genre_id INT REFERENCES genre(genre_id),

    CONSTRAINT film_genre_pkey PRIMARY KEY (film_id, genre_id)
);

CREATE TABLE film_viewers(
    film_id INT REFERENCES film(film_id),
    viewers_id INT REFERENCES viewers(viewers_id),

    CONSTRAINT film_viewers_pkey PRIMARY KEY (film_id, viewers_id)
);