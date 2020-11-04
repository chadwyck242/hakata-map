// Create the script tag, set the appropriate attributes
var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyBEcObo8RX6RLGR8IABulqIwhjnGcr-kOg&callback=initMap";
script.defer = true;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available
  const hakataPortTower = { lat: 33.604, lng: 130.3978 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: hakataPortTower,
  });
  new google.maps.Marker({
    position: hakataPortTower,
    map,
    title: "Hello Hakata!",
  });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
