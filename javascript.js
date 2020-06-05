var testData = {
  max: 1,
  data: []
};
//各區資料
var carData = [
  { lat: 24.98, lng: 121.273 },
  { lat: 24.97, lng: 121.271 }
];
var motorData = [
  { lat: 24.91, lng: 121.23 },
  { lat: 24.92, lng: 121.85 }
];
var houseData = [
  { lat: 24.94, lng: 121.91 },
  { lat: 24.9, lng: 121.02 }
];
var bikeData = [
  { lat: 24.88, lng: 121.83 },
  { lat: 24.85, lng: 121.82 }
];
//checkbox
window.onload = function() {
  var btn = document.getElementById('btn');
  btn.onclick = function() {
    var obj = document.getElementsByName('category');
    var selected = [];
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].checked) {
        if (obj[i].value === 'car') {
          selected = selected.concat(carData);
        }
        if (obj[i].value === 'motor') {
          selected = selected.concat(motorData);
        }
        if (obj[i].value === 'house') {
          selected = selected.concat(houseData);
        }
        if (obj[i].value === 'bike') {
          selected = selected.concat(bikeData);
        }
      }
    }
    testData.data = selected;
    console.log(testData.data);
    heatmapLayer.setData(testData);
  };
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
