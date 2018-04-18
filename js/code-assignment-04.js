// This is an array
let projectArray = [
  4,
  'https://geog4046-01.maps.arcgis.com/apps/webappviewer/index.html?id=79dc23b6b3604216a7648862a036ceab',
  'Mid-term Project - Viewer Map',
  'Web App looking at population dispersion and how it relates to Oil Production in Louisiana.',
  true,
  ['Oil', 'population', 'Web App']
]

// This is an object. Each value is paired with a property.
let projectObject = {
  id: 4,
  url: 'https://geog4046-01.maps.arcgis.com/apps/webappviewer/index.html?id=79dc23b6b3604216a7648862a036ceab',
  title: 'Mid-term Project - Viewer Map',
  desc: 'Web App looking at population dispersion and how it relates to Oil Production in Louisiana.',
  thumb: true,
  keywords: [
    'Oil',
    'population',
    'Web App'
  ]
}

// This is the console
console.log(projectArray[4])
console.log(projectObject.url)
console.log(projectObject["url"])
