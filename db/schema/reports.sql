DROP TABLE IF EXISTS reports CASCADE;

CREATE TABLE reports (
  id SERIAL PRIMARY KEY NOT NULL,
  api_event_id SERIAL,
  api_name TEXT NOT NULL,
  analyst_id TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_type TEXT NOT NULL,
  sub_event_type TEXT NOT NULL,
  actor1 TEXT NOT NULL,
  assoc_actor_1 TEXT,
  actor2 TEXT,
  assoc_actor_2 TEXT,
  region TEXT NOT NULL NOT NULL,
  country TEXT NOT NULL NOT NULL,
  admin1 TEXT NOT NULL,
  admin2 TEXT,
  admin3 TEXT,
  location TEXT NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  source TEXT NOT NULL,
  notes TEXT NOT NULL,
  fatalities INTEGER NOT NULL DEFAULT 0,
  import_date TIMESTAMP DEFAULT NOW(),
  UNIQUE (api_event_id, api_name)
);