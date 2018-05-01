// This is an array
let projectArray = [
  1,
  'https://www.arcgis.com/apps/MapTour/index.html?appid=f58e1904bcbc486998b5debff9f55ecd',
  'Tour of Nashville',
  'A quick and simple story map looking at an array of music related locations in the downtown Nashville area.',
  true,
  ['music', 'concerts', 'Nashville']
]

// This is an object. Each value is paired with a property.
let projectObject = {
  id: 1,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=f58e1904bcbc486998b5debff9f55ecd',
  title: 'Tour of Nashville',
  desc: 'A quick and simple story map looking at an array of music related locations in the downtown Nashville area.',
  thumb: true,
  keywords: [
    'music',
    'concerts',
    'Nashville'
  ]
}

// This is the console
console.log(projectArray[4])
console.log(projectObject.title)
console.log(projectObject['url'])
