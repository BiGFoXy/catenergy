window.onload = function() {
  if (document.body.clientWidth <= 1000) {
    var center =  { lat: 57.9402798169903, lng: 55.74189799731668 };
   } else {
    var center =  { lat: 57.940541745432775, lng: 55.72930234477478 };
  }

  return center;
}

var center = window.onload()

function initMap() {
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: center,
    });
    const image = "https://i.ibb.co/tQWBshH/map-pin.png";
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: { lat: 57.9402798169903, lng: 55.74189799731668 },
      map: map,
      icon: image,
    });
  }
  
  window.initMap = initMap;