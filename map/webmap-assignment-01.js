var L = require('leaflet')
var l = require('basemap')
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
})

// let someName = L.map('BatonRouge-LA').setView([yourLat, yourLon], yourZoom)
let mymap = L.map('BatonRouge-LA').setView([30.414471, -91.178664], 18)

l.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)

let marker = L.marker([30.414471, -91.178664]).addTo(mymap)

let polygon = L.polygon([
  [30.413323, -91.176218],
  [30.415840, -91.176368],
  [30.415710, -91.178342],
  [30.413231, -91.178171]
]).addTo(mymap)

polygon.bindPopup('The Parade Ground\'s at Louisiana State University')
marker.bindPopup('Memorial Bell Tower at Louisiana State University')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)
