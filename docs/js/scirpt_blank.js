//JS leaflet 

var testFacilityIcon = new
L.icon({
    iconUrl: '../img/Icon_Testing_Facility_C.png',
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


L.geoJSON(test_sites_ch,{

    onEachFeature: infoPopup
        
}).addTo(map);
