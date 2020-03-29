//JS leaflet 

var map = L.map('map', {
    center: [46.8182, 8.2275], 
    zoom: 5,  // 1-18
    scrollWheelZoom: true
      });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(map);

/*
 * Create a custom icon to use with a GeoJSON layer instead of the default blue
 * marker. This snippet assumes the map object (map) and GeoJSON object
 * (myLayerData) have already been declared.
 */

// replace Leaflet's default blue marker with a custom icon
function createCustomIcon (feature, latlng) {
    let myIcon = L.icon({
      iconUrl: 'img/facilityIcon.png',
      /*
      shadowUrl: 'my-icon.png',
      iconSize:     [16, 16], // width and height of the image in pixels
      shadowSize:   [35, 20], // width, height of optional shadow image
      iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
      shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
      popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
      */
    })
    return L.marker(latlng, { icon: myIcon })
  }
  
  /*

  // create an options object that specifies which function will called on each feature
  let myLayerOptions = {
    pointToLayer: createCustomIcon
  }
  
  */

functionn infoPopup (feature, layer) {
    layer.bindPopup("<h1 class='infoHeader'>Testing Facility Info</h1>
    <p class='infoHeader'>" + feature.properties.adress +"</p>");
    layer.setIcon(testFacilityIcon);

};

 var onEachFeature = function(feature, layer) {
        popUpFeature(feature, layer);
        layer.on({
            mouseover:highlightFeature,
            mouseout:resetHighlight,
            click: zoomToFeature
        });
    }

*/

L.geoJSON(testSitesCHE,{

    //onEachFeature: infoPopup
    onEachFuture (feature, layer) {}

        
}).addTo(map);


