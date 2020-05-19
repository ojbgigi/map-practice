var map = L.map('map', {
  center: [24.990011, 121.270653],
  zoom: 12
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var requestURL = '/10812_2.json';
var xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);
xhr.send();
xhr.onload = function() {
  if (this.readyState === 4 && this.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var data = response.result.records;
    for (let i = 0; data.length > i; i++) {
      L.marker([data[i].lat, data[i].lon]).addTo(map);
    }
  }
};
