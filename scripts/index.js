// Create the script tag, set the appropriate attributes
var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?v=quarterly&key=&callback=initMap&libraries=places&v=quarterly";
script.defer = true;

let map, marker;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available
  const hakataPortTower = { lat: 33.604, lng: 130.3978 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: hakataPortTower,
  });

  const data = [
    {
      name: "Haka Port Tower",
      position: new google.maps.LatLng(33.604, 130.3978),
    },
    {
      name: "Hakata Station",
      position: new google.maps.LatLng(33.5897, 130.4207),
    },
  ];

  for (let i = 0; i < data.length; i++) {
    marker = new google.maps.Marker({
      position: data[i].position,
      title: data[i].name,
      map: map,
    });
    marker.addListener("click", toggleBounce);
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
