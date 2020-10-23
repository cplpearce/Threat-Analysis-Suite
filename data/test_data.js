// D E V   D A T A
testData = {
  userData: {
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
  },
  sigactTestData :{
    1: {
      id: 1,
      event_date: Date.now() - 5,
      year: 2020,
      event_type: "ied",
      sub_event_type: "road burried",
      actor1: "isil",
      actor1_assoc: "daesh",
      actor2: "",
      actor2_assoc: "",
      country: "iraq",
      admin1: "mosul",
      admin2: "west",
      lat: 75.00000,
      lon: 15.00000,
      source: "Mosul SWAT",
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
      actor1_assoc: "daesh",
      actor2: "kurdish guard",
      actor2_assoc: "201st",
      country: "iraq",
      admin1: "mosul",
      admin2: "east",
      lat: 75.00005,
      lon: 15.00002,
      source: "Mosul Kurdish Militia",
      notes: "A battle erupted in Eastern Mosul, six DAESH soldiers killed, one civillian.",
      fatalities: 7,
      timestamp: Date.now() - 5,
    },
    3: {
      id: 3,
      event_date: Date.now() - 12,
      year: 2020,
      event_type: "assassination",
      sub_event_type: "civilian",
      actor1: "isil",
      actor1_assoc: "daesh",
      actor2: "",
      actor2_assoc: "",
      country: "iraq",
      admin1: "mosul",
      admin2: "east",
      lat: 75.00010,
      lon: 15.00004,
      source: "kurdish police",
      notes: "A local religous leader was killed by a pistol fired from a car.",
      fatalities: 1,
      timestamp: Date.now() - 12,
    },
    4: {
      id: 4,
      event_date: Date.now() - 15,
      year: 2020,
      event_type: "assassination",
      sub_event_type: "Government",
      actor1: "isil",
      actor1_assoc: "daesh",
      actor2: "",
      actor2_assoc: "",
      country: "iraq",
      admin1: "mosul",
      admin2: "east",
      lat: 75.00010,
      lon: 15.00004,
      source: "kurdish police",
      notes: "A Kurdish police officer was shot.",
      fatalities: 1,
      timestamp: Date.now() - 14,
    },
    5: {
      id: 5,
      event_date: Date.now() - 19,
      year: 2020,
      event_type: "battle",
      sub_event_type: "armed conflict",
      actor1: "us",
      actor1_assoc: "ground force",
      actor2: "isil",
      actor2_assoc: "daesh",
      country: "iraq",
      admin1: "sulymeneuah",
      admin2: "quadraya",
      lat: 74.00000,
      lon: 15.40000,
      source: "us",
      notes: "A convoy of US soldiers on patrol attacked an ISIL camp.  Two ISIL members captured.",
      fatalities: 8,
      timestamp: Date.now() - 18,
    }
  }
}

module.exports = testData