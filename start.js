const app = require('./app');

// D A T A 
user_data = {
  1: {
    id: 1,
    name: "Clinton P.",
    company: "Volunteer",
    phone: "+121 221 122 1212",
    email: "clintonp@localcomp.org",
    analyst_id: "A1A01",
  },
  2: {
    id: 2,
    name: "David S.",
    company: "Volunteer",
    phone: "+121 112 211 2121",
    email: "davids@localcomp.org",
    analyst_id: "D4V1D",
  }
}

sigact_test_data = {
  // All non-description data in the db/sample data should be lowercase
  // then converted to sentence case on presention to preserve data integrity
  1: {
    id: 1,
    event_date: Date.now() - 5,
    year: 2020,
    event_type: "ied",
    sub_event_type: "road burried",
    actor1: "isil",
    actor1_assoc: "",
    actor2: "",
    actor2_assoc: "",
    country: "iraq",
    admin1: "mosul",
    admin2: "west",
    lat: 75.00000,
    lon: 15.00000,
    source: "kurdish Police",
    notes: "A bomb was set off near a market to disrupt and destabalize the city.",
    fatalities: 6,
    timestamp: Date.now() - 4,
  },
  2: {
    id: 2,
    event_date: Date.now() - 7,
    year: 2020,
    event_type: "battle",
    sub_event_type: "armed conflict",
    actor1: "isil",
    actor1_assoc: "",
    actor2: "kurdish guard",
    actor2_assoc: "201st",
    country: "iraq",
    admin1: "mosul",
    admin2: "east",
    lat: 75.00005,
    lon: 15.00002,
    source: "kurdish guard",
    notes: "A battle erupted in Eastern Mosul, six DAESH soldiers killed, one civillian",
    fatalities: 7,
    timestamp: Date.now() - 5,
  },
}

const server = app.listen(3005, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
