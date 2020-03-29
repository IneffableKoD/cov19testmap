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


var testFacilityIcon = new
L.icon({
    iconUrl: 'img/Icon_Testing_Facility_C.png',
    iconSize: [16, 16],
    //iconAnchor: [null],
    popupAnchor: [0, 0],
    //shadowUrl: '_',
    //shadowSize: [null],
    //shadowAnchor: [22, 94]
});
L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);




functionn infoPopup (feature, layer) {
    layer.bindPopup("<h1 class='infoHeader'>Testing Facility Info</h1><p class='infoHeader'>" + feature.properties.adress +"</p>");
    layer.setIcon(testFacilityIcon);

};



L.geoJSON(testSitesCHE,{

    onEachFeature: infoPopup
        
}).addTo(map);
