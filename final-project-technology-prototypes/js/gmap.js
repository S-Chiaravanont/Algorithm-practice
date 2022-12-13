/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 14
  });

  const marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map
  });

  // const detailWindow = new google.maps.InfoWindow({
  //   content: ``
  // })
}

window.initMap = initMap;
