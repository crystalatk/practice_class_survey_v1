CREATE TABLE ranking_scale (
    id serial PRIMARY KEY,
    ranking_title text NOT NULL,
    ranking_score integer
);

CREATE TABLE topics (
    id serial PRIMARY KEY,
    name text NOT NULL,
    topic_score integer REFERENCES ranking_scale (id)
);