//checkbox
window.onload = function() {
  var map = L.map('map').setView([24.990011, 121.270653], 12);

  var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var btn = document.getElementById('btn');
  var selected = [];
  btn.onclick = function() {
    var obj = document.getElementsByName('category');
    selected = [];
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
    console.log(selected);
    draw(selected);
  };

  var heat = L.heatLayer();
  function draw(selected) {
    heat.redraw();
    heat.setOptions({ radius: 20 });
    heat.setLatLngs(selected);
    map.addLayer(heat);
  }
};
