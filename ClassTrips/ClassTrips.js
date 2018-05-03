// let someName = L.map('ClassTrips').setView([yourLat, yourLon], yourZoom)
let mymap = L.map('ClassTrips').setView([38, -98], 5)

let myLightmap1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)

let myDarkmap2 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(mymap)

let mySatellitemap3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(mymap)

let myBasemaps = {
  'Light Basemap': myLightmap1,
  'Dark Basemap': myDarkmap2,
  'Satellite Imagery': mySatellitemap3
}

L.control.layers(myBasemaps).addTo(mymap)

let airPlane = L.icon({
  iconUrl: 'airplane icon.png',
  iconSize: [25, 25], // size of the icon
  iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
})

// Define an array. This could be done in a seperate js file.
// This tidy formatted section could even be generated by a server-side script

L.marker([30.532360, -91.151461], {icon: airPlane}).bindPopup('Baton Rouge Airport').addTo(mymap)
L.marker([33.748995, -84.387982], {icon: airPlane}).bindPopup('Atlanta, Georgia').addTo(mymap)
L.marker([39.290385, -76.612189], {icon: airPlane}).bindPopup('Baltimore, Maryland').addTo(mymap)
L.marker([29.530972, -91.433858], {icon: airPlane}).bindPopup('Wax Lake Delta, Coastal Louisiana').addTo(mymap)
L.marker([51.208007, -115.543355], {icon: airPlane}).bindPopup('Banff National Park, Canadian Rockies').addTo(mymap)
L.marker([47.605616, -122.332145], {icon: airPlane}).bindPopup('Seattle, Washington').addTo(mymap)

// create a green polyline from an array of LatLng points
var latlngs = [
  [30.532360, -91.151461], // BATON ROUGE
  [33.748995, -84.387982], // ATLANTA
  [39.290385, -76.612189] // BALTIMORE
]
var polyline = L.polyline(latlngs, {color: 'green'}).addTo(mymap)

// RRSLA (Landscape Architecture School at LSU)
let polygonCorners = L.polygon([
  [30.412056, -91.180692],
  [30.412045, -91.181164],
  [30.411531, -91.181118],
  [30.411529, -91.180665]
]).addTo(mymap)

// an object of styles for a polygon
let polygonStyle = {
  color: 'gold',
  fillColor: 'purple'
}
// draw a shape feature with the specified vertices and style
let polygon = L.polygon(polygonCorners, polygonStyle).addTo(mymap)

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)
