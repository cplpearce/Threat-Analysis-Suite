## Threat Analysis Suite (TAS)
An opensource threat analysis suite for NGO's, Humanitarian Efforts, and basic Geospatial analysis.

### Main User Stories
* As a user, I may not have the internet and will require an offline capable suite.
* As a user, I would like to be able to view geospatial global threat data; and from that data derive basic intelligence.
* As a user, I don't plan to host this suite, and may be running this off an Raspberry Pi or any light architexture so it needs to be light weight but reliable.
* As a user, I want to be able to export a piece of data into a KMZ, or graphic image.
* As a user, I want to add my own data to the suite.

## Dev plans
* Maybe add d3.js integration?
* Handeling offline maps - MBTiles, or geoserver?

### Side Lines
There won't be a need for session management, or user logins.
There won't be a need to add complicated security methods to the database.
The site should use only simple CSS, and Bootstrap.

# Tech Stack
Node && Express
Electron?
PostSQL || SQLite?

# JS Libraries
* Turf.js           | https://www.npmjs.com/package/@turf/turf
* OpenLayers.js     | https://openlayers.org/
* Leaflet Heatmap   | http://leaflet.github.io/Leaflet.heat/demo/
