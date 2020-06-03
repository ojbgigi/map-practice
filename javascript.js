var testData = {
  max: 1,
  data: [
    { lat: 24.98, lng: 121.273 },
    { lat: 24.97, lng: 121.271 },
    { lat: 24.91, lng: 121.23 },
    { lat: 24.92, lng: 121.85 },
    { lat: 24.94, lng: 121.91 },
    { lat: 24.9, lng: 121.02 },
    { lat: 24.88, lng: 121.83 }
  ]
};

//layer
var baseLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }
);

var cfg = {
  radius: 0.01,
  maxOpacity: 0.5,
  scaleRadius: true,
  useLocalExtrema: true,
  latField: 'lat',
  lngField: 'lng',
  valueField: 'count'
};

var heatmapLayer = new HeatmapOverlay(cfg);

var map = new L.Map('map', {
  center: new L.LatLng(24.990011, 121.270653),
  zoom: 12,
  layers: [baseLayer, heatmapLayer]
});

heatmapLayer.setData(testData);
