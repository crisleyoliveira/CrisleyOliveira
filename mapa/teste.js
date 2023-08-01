// Set the MapBox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc2xleW5vIiwiYSI6ImNsanZqc3V5czE3emYzdG4wdnl5emRkOGsifQ.1npueBKtBTbhxx7Wyko1Mw';

// Define the initial configuration for the map (Lisbon)
var initialMapConfig = {
  center: [-9.1393, 38.7223], // Coordinates of Lisbon
  zoom: 12,
  pitch: 60,
  bearing: 20
};

// Create the MapBox map instance
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/crisleyno/clk1ioimk017t01pc3dr4bb42', // Replace with your custom map style URL
  ...initialMapConfig // Spread the initial configuration properties
});

// Function to create the visualization of extruded rectangles based on "price" attribute
function addExtrudedRectangles(id, data) {
  // Implementation of adding extruded rectangles goes here
  // (The code is commented out in your original file)
}

// Function to load the GeoJSON file and add the extruded rectangles layer
function loadAndAddExtrudedRectangles(id, geojsonFile) {
  // Implementation of loading and adding extruded rectangles goes here
  // (The code is commented out in your original file)
}

// Buttons to switch between different map views (Lisbon and Rio de Janeiro)
document.getElementById('lisbon-btn').addEventListener('click', function() {
  // Add or update the layer for extruded rectangles in Lisbon
  loadAndAddExtrudedRectangles('extrusion-layer-lisbon', 'lisboa.geojson');

  // Update the map configuration to Lisbon
  map.jumpTo({
    ...initialMapConfig
  });
});

document.getElementById('rio-btn').addEventListener('click', function() {
  // Add or update the layer for extruded rectangles in Rio de Janeiro
  loadAndAddExtrudedRectangles('extrusion-layer-rio', 'rio.geojson');

  // Update the map configuration to Rio de Janeiro
  map.jumpTo({
    center: [-43.2096, -22.9035], // Coordinates of Rio de Janeiro
    zoom: 12,
    pitch: 60,
    bearing: 20
  });
});

// Function to create the visualization of extruded rectangles based on "room_type" attribute
function addExtrudedRectanglesByRoomType(id, data) {
  // Implementation of adding extruded rectangles based on "room_type" goes here
  // (The code is commented out in your original file)
}

// Function to load the GeoJSON file and add the extruded rectangles layer based on "room_type"
function loadAndAddExtrudedRectanglesByRoomType(id, geojsonFile) {
  // Implementation of loading and adding extruded rectangles based on "room_type" goes here
  // (The code is commented out in your original file)
}

// Button to show the map with extruded rectangles based on "room_type"
document.getElementById('show-room-type-btn').addEventListener('click', function() {
  // Add or update the layer for extruded rectangles based on "room_type"
  loadAndAddExtrudedRectanglesByRoomType('extrusion-layer-room-type', 'lisboa.geojson');

  // Update the map configuration to Lisbon using a literal array for 'pitch'
  map.jumpTo({
    ...initialMapConfig,
    pitch: ['literal', initialMapConfig.pitch] // Use a literal array for the 'pitch' property
  });
});

// Function to add the fill layer for neighborhoods based on the "Variation" column
function addNeighbourhoodFillLayer(id, data) {
  // Implementation of adding the fill layer for neighborhoods goes here
  // (The code is commented out in your original file)
}

// Function to load the GeoJSON file and add the fill layer for neighborhoods
function loadAndAddNeighbourhoodFillLayer(id, geojsonFile) {
  // Implementation of loading and adding the fill layer for neighborhoods goes here
  // (The code is commented out in your original file)
}

// Wait for the map style to load before adding layers
map.on('load', function() {
  // Call the function to add the fill layer for neighborhoods based on the "Variation" column
  loadAndAddNeighbourhoodFillLayer('neighbourhood-fill-layer-lisbon', 'censo.geojson');
});
