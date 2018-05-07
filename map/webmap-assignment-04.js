// create a map object
let mymap = L.map('map').setView([30.414471, -91.178664], 10)
mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
// create basemap layer
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(mymap)

let myGeojson = {'https://maps.brla.gov/gis/rest/services/Demographic/Census_Block_Group/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'}




function myStyle (feature) {
  let age = feature.properties.MED_AGE
  let color = 'Yellow'
  if (age < 38) {
    color = 'Orange'
  }
  let myStyle = {
    color: color,
    weight: 1,
    fillOpacity: 0.2
  }
  return myStyle
}
function myPopup (feature, layer) {
  let name = feature.properties.PARISH_NAME
  let age = feature.properties.MED_AGE
  layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}
let myOptions = {
  style: myStyle,
  onEachFeature: myPopup
}
L.geoJSON(stateDemographics, myOptions).addTo(mymap)
