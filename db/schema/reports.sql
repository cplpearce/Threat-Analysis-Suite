DROP TABLE IF EXISTS reports CASCADE;

CREATE TABLE reports (
  id SERIAL PRIMARY KEY NOT NULL,
  api_event_id SERIAL,
  api_id SMALLINT,
  analyst_id TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_type TEXT NOT NULL,
  sub_event_type TEXT NOT NULL,
  actor1 TEXT NOT NULL,
  assoc_actor_1 TEXT NOT NULL,
  actor2 TEXT NOT NULL,
  assoc_actor_2 TEXT NOT NULL,
  region TEXT NOT NULL NOT NULL,
  country TEXT NOT NULL NOT NULL,
  admin1 TEXT NOT NULL,
  admin2 TEXT NOT NULL,
  admin3 TEXT NOT NULL,
  location TEXT NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  source TEXT NOT NULL,
  notes TEXT NOT NULL,
  fatalities INTEGER NOT NULL
);