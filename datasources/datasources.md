# List of Data Sources Used for the Map

## Czech Republic 

Canonical data from https://koronavirus.mzcr.cz/seznam-odberovych-center/.

## Poland

Canonical data from: https://www.gov.pl/web/koronawirus/lista-szpitali

## Slovenia

https://www.blog.uporabnastran.si/2020/03/10/vstopne-tocke-koronavirus-odvzem-brisa-zemljevid-lokacije-16-ih-vstopnih-tock-po-sloveniji-kjer-testirajo-osebe-s-sumom-na-okuzbo-koronavirus/

https://www.google.com/maps/d/u/0/viewer?mid=1wN6cVrxAnsdWyYldqSSl4IRjbeXfYPt3&ll=45.91117196712003%2C12.41649405553244&z=6

Kindly provided by https://www.reddit.com/r/europe/comments/fykqrl/covid19_testing_facilities_map/

## South Africa

News outlets:

https://northeasterntribune.co.za/264190/covid-19-city-joburg-identifies-several-clinics-screen-coronavirus/

Clinics:

https://parkhurstvillage.com 

https://www.ampath.co.za/covid-19-collection-sites

Reddit (crowdsourced): 

https://www.reddit.com/r/johannesburg/comments/fycjq8/looking_for_help_to_list_covid19_testing/

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

---

## Misc

From the crowdsourcing on the [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfpChekpNXQyKVn9tOCvnQmEW5T_VMQmtV5cAVMucnCyJGDGw/viewform?usp=sf_link).


