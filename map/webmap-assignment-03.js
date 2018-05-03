// let someName = L.map('BatonRouge-LA').setView([yourLat, yourLon], yourZoom)
let mymap = L.map('BatonRouge-LA').setView([30.414471, -91.178664], 15)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(mymap)

let BellTower = L.icon({
  iconUrl: 'bell tower.png',
  iconSize: [25, 75], // size of the icon
  iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
  popupAnchor: [1, 1] // point from which the popup should open relative to the iconAnchor
})

// place a marker feature at a location
let marker = L.marker([30.414468, -91.178897], { icon: BellTower }).addTo(mymap)

let polygonCorners = [
  [30.413323, -91.176218],
  [30.415840, -91.176368],
  [30.415710, -91.178342],
  [30.413231, -91.178171]
]

// an object of styles for a polygon
let polygonStyle = {
  color: 'gold',
  fillColor: 'purple'
}
// draw a shape feature with the specified vertices and style
let polygon = L.polygon(polygonCorners, polygonStyle).addTo(mymap)

polygon.bindPopup('The Parade Ground\'s at Louisiana State University')
marker.bindPopup('Memorial Bell Tower at Louisiana State University')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)
