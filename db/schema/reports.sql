DROP TABLE IF EXISTS reports CASCADE;

CREATE TABLE reports (
  id SERIAL PRIMARY KEY NOT NULL,
  analyst_id VARCHAR(10) NOT NULL,
  internal_id SERIAL NOT NULL,
  api_id SMALLINT,
  api_event_id INTEGER,
  event_type VARCHAR(255) NOT NULL,
  sub_event_type VARCHAR(255) NOT NULL,
  actor1 VARCHAR(255),
  assoc_actor_1 VARCHAR(255),
  actor2 VARCHAR(255),
  assoc_actor_2 VARCHAR(255),
  region VARCHAR(64) NOT NULL,
  country VARCHAR(64) NOT NULL,
  admin1 VARCHAR(64),
  admin2 VARCHAR(64),
  admin3 VARCHAR(64),
  location VARCHAR(64),
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  source TEXT NOT NULL,
  notes TEXT NOT NULL,
  fatalities INTEGER NOT NULL,
  timestamp VARCHAR(64) NOT NULL
)