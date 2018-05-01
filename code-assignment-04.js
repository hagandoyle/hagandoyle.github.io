// This is an array
let projectArray = [
  3,
  'https://geog4046-hd.maps.arcgis.com/apps/webappviewer/index.html?id=43209437cfe04b49a50f86c825e6700f',
  'BREC Park Locations',
  'A quick and simple story map looking at an array of music related locations in the downtown Nashville area.',
  true,
  ['BREC', 'Parks', 'Louisiana']
]

// This is an object. Each value is paired with a property.
let projectObject = {
  id: 3,
  url: 'https://geog4046-hd.maps.arcgis.com/apps/webappviewer/index.html?id=43209437cfe04b49a50f86c825e6700f',
  title: 'BREC Park Locations',
  desc: 'A quick and simple story map looking at an array of music related locations in the downtown Nashville area.',
  thumb: true,
  keywords: [
    'BREC',
    'Parks',
    'Louisiana'
  ]
}

// This is the console
console.log(projectArray[4])
console.log(projectObject.title)
console.log(projectObject['url'])
