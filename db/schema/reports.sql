DROP TABLE IF EXISTS reports CASCADE;

CREATE TABLE reports (
  analyst_id SMALLINT,
  api_id SMALLINT,
  api_event_id INTEGER,
  id SERIAL PRIMARY KEY NOT NULL,
  event_type VARCHAR(32) NOT NULL,
  sub_event_type VARCHAR(32) NOT NULL,
  actor1 VARCHAR(128),
  assoc_actor_1 VARCHAR(128),
  actor2 VARCHAR(128),
  assoc_actor_2 VARCHAR(128),
  region VARCHAR(64) NOT NULL,
  country VARCHAR(64) NOT NULL,
  admin1 VARCHAR(64),
  admin2 VARCHAR(64),
  admin3 VARCHAR(64),
  location VARCHAR(64),
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  source VARCHAR(128) NOT NULL,
  notes TEXT NOT NULL,
  fatalities INTEGER NOT NULL,
  time TIMESTAMP NOT NULL
)