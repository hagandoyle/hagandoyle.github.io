// create an operational layer that is empty for now
let myLayer = L.layerGroup().addTo(map)

// add all of the GeoJSON data to the empty layer we created
function addMyData (feature, layer) {
  myLayer.addLayer(layer)
  // some other code can go here, like adding a popup with layer.bindPopup("Hello")
}

// create an options object that specifies which function to call on each feature
let myLayerOptions = {
  onEachFeature: addMyData
}

// create the GeoJSON layer from myLayerData
L.geoJSON(myLayerData, myLayerOptions).addTo(map)

// an object containing a list of basemaps (makes more sense to use with multiple basemaps)
let basemaps = {
  'My Basemap': streets // replace streets with your basemap object, not shown in this snippet
}

// an object containing a list of operation layers
let layers = {
  'My Layer': myLayer
}

L.control.layers(basemaps, layers).addTo(map)
