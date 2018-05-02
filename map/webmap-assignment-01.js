var L = require('leaflet')
var l = require('basemap')
// let someName = L.map('BatonRouge-LA').setView([yourLat, yourLon], yourZoom)
let mymap = L.map('BatonRouge-LA').setView([51.505, -0.09], 13)

l.tileLayer('http://leaflet-extras.github.io/leaflet-providers/preview/#filter=OpenStreetMap.BlackAndWhite')

let marker = L.marker([51.5, -0.09]).addTo(mymap)

let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap)

polygon.bindPopup('St. Katharine\'s and Wapping')
marker.bindPopup('London Bridge Station')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)
