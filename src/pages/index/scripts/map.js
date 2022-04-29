function initMap() {
    // The location of Uluru
    const uluru = { lat: 57.9402798169903, lng: 55.74189799731668 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 57.940541745432775, lng: 55.72930234477478},
    });
    const image = "https://i.ibb.co/tQWBshH/map-pin.png";
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: image,
    });
  }
  
  window.initMap = initMap;