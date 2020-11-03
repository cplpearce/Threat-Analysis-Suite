module.exports = () => {
  const fieldNames = {
    id: {
      fieldName: "id",
      humanName: "DB ID",
      description: "This reports local database identification number",
      data: "number",
    },
    api_event_id: {
      fieldName: "api_event_id",
      humanName: "API Event ID",
      description:
        "This reports parent API's internal record identification number.",
      data: "number",
    },
    api_name: {
      fieldName: "api_name",
      humanName: "API Name",
      description: "The parent API from which this report has been imported.",
      data: "text",
    },
    analyst_id: {
      fieldName: "analyst_id",
      humanName: "Analyst ID",
      description: "The analyst whom imported this report",
      data: "text",
    },
    event_date: {
      fieldName: "event_date",
      humanName: "Event Date",
      description: "The date this event occured.",
      data: "date",
    },
    event_type: {
      fieldName: "event_type",
      humanName: "Event Type",
      description: "The type of event this record relates to.",
      data: "text",
    },
    sub_event_type: {
      fieldName: "sub_event_type",
      humanName: "Sub Event Type",
      description: "The sub-type of event this record relates to.",
      data: "text",
    },
    actor1: {
      fieldName: "actor1",
      humanName: "Actor 1",
      description: "The primary named actor this event relates to.",
      data: "text",
    },
    assoc_actor_1: {
      fieldName: "assoc_actor_1",
      humanName: "Actor 1 Association",
      description: "The actor associated with or identifying Actor 1.",
      data: "text",
    },
    actor2: {
      fieldName: "actor2",
      humanName: "Actor 2",
      description: "The secondary named actor this event relates to.",
      data: "text",
    },
    assoc_actor_2: {
      fieldName: "assoc_actor_2",
      humanName: "Actor 2 Association",
      description: "The actor associated with or identifying Actor 2.",
      data: "text",
    },
    region: {
      fieldName: "region",
      humanName: "Region",
      description: "The region of the world where this event took place",
      data: "text",
    },
    country: {
      fieldName: "country",
      humanName: "Country",
      description: "The country in which the event took place",
      data: "text",
    },
    admin1: {
      fieldName: "admin1",
      humanName: "Admin 1",
      description:
        "The largest sub-national administrative region in which the event took place.",
      data: "text",
    },
    admin2: {
      fieldName: "admin2",
      humanName: "Admin 2",
      description:
        "The second largest sub-national administrative region in which the event took place.",
      data: "text",
    },
    admin3: {
      fieldName: "admin3",
      humanName: "Admin 3",
      description:
        "The third largest sub-national administrative region in which the event took place.",
      data: "text",
    },
    location: {
      fieldName: "location",
      humanName: "Location",
      description: "The location in which the event took place.",
      data: "text",
    },
    latitude: {
      fieldName: "latitude",
      humanName: "Latitude",
      description: "The latitude of the location.",
      data: "float",
    },
    longitude: {
      fieldName: "longitude",
      humanName: "Longitude",
      description: "The longitude of the location.",
      data: "number",
    },
    source: {
      fieldName: "source",
      humanName: "Source",
      description: "The reporting source of this report or event.",
      data: "number",
    },
    notes: {
      fieldName: "notes",
      humanName: "Notes",
      description: "The detailed notes of this event.",
      data: "text",
    },
    fatalities: {
      fieldName: "fatalities",
      humanName: "Fatalities",
      description: "Any casualties friendly or otherwise during this event.",
      data: "number",
    },
    import_date: {
      fieldName: "import_date",
      humanName: "Import Date",
      description: "The date the record was imported.",
      data: "date",
    },
  };
  return fieldNames;
};
