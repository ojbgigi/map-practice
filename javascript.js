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
  'https://raw.githubusercontent.com/ojbgigi/map-practice/master/car_export.json';
var xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);
xhr.send();
// xhr.onload = function() {
//   if (this.readyState === 4 && this.status === 200) {
//     var data = JSON(this.responseText);
//     console.log(data);
//     //   for (let i = 0; data.length > i; i++) {
//     //     markers.addLayer(
//     //       L.marker([
//     //         data[i].geometry.coordinates[1],
//     //         data[i].geometry.coordinates[0]
//     //       ]).bindPopup(data[i].records.breau)
//     //     );
//     //   }
//     // }
//   }
// };
xhr.onload = function() {
  var data = JSON.parse(xhr.responseText);
  console.log('顯示有沒有抓到api' + data);
  // console.log('顯示responseText' + request.responseText);
  // for (let i = 0; data.length > i; i++) {
  //   markers.addLayer(
  //     L.marker([data[i].records.lat, data[i].records.lon]).bindPopup(
  //       data[i].records.breau
  //     )
  //   );
  // }
};

// map.addLayer(markers);
