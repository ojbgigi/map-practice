var map = L.map('map', {
  center: [25.0534891, 121.5857258],
  zoom: 20
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var markers = new L.MarkerClusterGroup().addTo(map);
var requestURL =
  'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.send();
request.onload = function() {
  var data = JSON.parse(request.responseText).features;
  // console.log('顯示有沒有抓到api' + data.success);
  for (let i = 0; data.length > i; i++) {
    markers.addLayer(
      L.marker([data[i].records.lat, data[i].records.lon]).bindPopup(
        data[i].records.breau
      )
    );
  }
  console.log('顯示type' + data.type);
  map.addLayer(markers);
};
