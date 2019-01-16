CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  username VARCHAR(50),
  password VARCHAR(150),
  propic VARCHAR(200),
  email VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS threadtitle (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250),
  author_id INTEGER,
  authorcontent VARCHAR
);

CREATE TABLE IF NOT EXISTS threadcomments (
  id SERIAL PRIMARY KEY,
  comments VARCHAR,
  author_id INTEGER,
  thread_id INTEGER
);