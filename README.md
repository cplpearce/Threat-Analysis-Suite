## Threat Analysis Suite (TAS)

An opensource threat analysis suite for NGO's, Humanitarian Efforts, and basic Geospatial analysis.

### Main User Stories

- As a user, I may not have the internet and will require an offline capable suite.
- As a user, I would like to be able to view geospatial global threat data; and from that data derive basic intelligence.
- As a user, I don't plan to host this suite, and may be running this off an Raspberry Pi or any light architexture so it needs to be light weight but reliable.
- As a user, I want to be able to export a piece of data into a KMZ, or graphic image.
- As a user, I want to add my own data to the suite.

## Dev plans

- Maybe add d3.js integration?
- Handeling offline maps - MBTiles, or geoserver?

### Side Lines

There won't be a need for session management, or user logins.
There won't be a need to add complicated security methods to the database.
The site should use only simple CSS, and Bootstrap.

### Tech Stack
<<<<<<< HEAD

=======
>>>>>>> ae24970af9fa28f3aa9240c838b2502c69b788d4
Node && Express
Electron?
PostSQL || SQLite?

### JS Libraries
<<<<<<< HEAD

- Turf.js | https://www.npmjs.com/package/@turf/turf
- OpenLayers.js | https://openlayers.org/
- Leaflet Heatmap | http://leaflet.github.io/Leaflet.heat/demo/

## Data API

=======
* Turf.js           | https://www.npmjs.com/package/@turf/turf
* OpenLayers.js     | https://openlayers.org/
* Leaflet Heatmap   | http://leaflet.github.io/Leaflet.heat/demo/

## Data API
>>>>>>> ae24970af9fa28f3aa9240c838b2502c69b788d4
This suite uses ACLED data, open source UNCLASSIFIED data for its analysis.

https://acleddata.com/acleddatanew/wp-content/uploads/dlm_uploads/2019/04/ACLED_Codebook_2019FINAL_pbl.pdf

https://acleddata.com/data-export-tool/

Here is the schema and key data for that data.
<<<<<<< HEAD

=======
>>>>>>> ae24970af9fa28f3aa9240c838b2502c69b788d4
```
Column Name Content
1. ISO               ....   A numeric code for each individual country
2. EVENT_ID_CNTY     ....   An individual identifier by number and country acronym
3. EVENT_ID_NO_CNTY  ....   An individual numeric identifier (updated annually)
4. EVENT_DATE        ....   The day, month and year on which an event took place
5. YEAR              ....   The year in which an event took place
6. TIME_PRECISION    ....   A numeric code indicating the level of certainty of the date
7. EVENT_TYPE        ....   The type of event
8. SUB_EVENT_TYPE    ....   The type of sub-event
9. ACTOR1            ....   The named actor involved in the event
10. ASSOC_ACTOR_1    ....   The named actor associated with or identifying ACTOR1
11. INTER1           ....   A numeric code indicating the type of ACTOR1
12. ACTOR2           ....   The named actor involved in the event
13. ASSOC_ACTOR_2    ....   The named actor associated with or identifying ACTOR2
14. INTER2           ....   A numeric code indicating the type of ACTOR2
15. INTERACTION      ....   A numeric code indicating the interaction between types of 16 ACTOR1 and ACTOR2
17. REGION           ....   The region of the world where the event took place
18. COUNTRY          ....   The country in which the event took place
19. ADMIN1           ....   The largest sub-national administrative region in which the event took place
20. ADMIN2           ....   The second largest sub-national administrative region in which the event took place
21. ADMIN3           ....   The third largest sub-national administrative region in which the event took place
22. LOCATION         ....   The location in which the event took place
23. LATITUDE         ....   The latitude of the location
24. LONGITUDE        ....   The longitude of the location
25. GEO_PRECISION    ....   A numeric code indicating the level of certainty of the location
```
