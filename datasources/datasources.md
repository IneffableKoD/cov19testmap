# List of Data Sources Used for the Map

## Czech Republic 

Official data from https://koronavirus.mzcr.cz/seznam-odberovych-center/.

## Switzerland

### Health facilities

Query on https://overpass-turbo.osm.ch/ 

```js
[out:json][timeout:30];
area["name"="Schweiz/Suisse/Svizzera/Svizra"]; 
(
  nwr["amenity"~"hospital|clinica|clinique|clinic"](area);
  nwr["healthcare"](area);
);
// convert polygons to points
out center;
```

### Testing Facilities

Crowdsourced (various sources, including a [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfpChekpNXQyKVn9tOCvnQmEW5T_VMQmtV5cAVMucnCyJGDGw/viewform?usp=sf_link)).

## South Africa

News outlets:

https://northeasterntribune.co.za/264190/covid-19-city-joburg-identifies-several-clinics-screen-coronavirus/

Clinics:

https://parkhurstvillage.com 

## Misc

From the crowdsourcing on the [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfpChekpNXQyKVn9tOCvnQmEW5T_VMQmtV5cAVMucnCyJGDGw/viewform?usp=sf_link).


