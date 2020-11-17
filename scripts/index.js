// Create the script tag, set the appropriate attributes
var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?v=quarterly&key=&callback=initMap&libraries=places&v=quarterly";
script.defer = true;

var map, marker;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available
  const fukuokaAirport = { lat: 33.590312, lng: 130.446687 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: fukuokaAirport,
  });

  const data = [
    {
      name: "Yakiniku Champion",
      position: new google.maps.LatLng(33.589813, 130.420062),
    },
    {
      name: "Yakiniku no Bakuro Hakata-ten",
      position: new google.maps.LatLng(33.589438, 130.412312),
    },
    {
      name: "Kuroichi Yakiniku",
      position: new google.maps.LatLng(33.592938, 130.401937),
    },
    {
      name: "Ryuen Nishinakasu shop",
      position: new google.maps.LatLng(33.590812, 130.406313),
    },
    {
      name: "カルビ亭福岡 黒毛和牛専門店",
      position: new google.maps.LatLng(33.583562, 130.402938),
    },
    {
      name: "Grilled meat Hachihachi Hakata shop",
      position: new google.maps.LatLng(33.586062, 130.427563),
    },
    {
      name: "牛仙人",
      position: new google.maps.LatLng(33.588313, 130.407562),
    },
    {
      name: "福岡 焼肉コウシ",
      position: new google.maps.LatLng(33.586687, 130.403813),
    },
    {
      name: "酒肴焼肉 彩稟 さいりん",
      position: new google.maps.LatLng(33.586813, 130.425187),
    },
    {
      name: "スタミナ家どろんぱっ",
      position: new google.maps.LatLng(33.586687, 130.431938),
    },
    {
      name: "カウンター焼肉ジャイアン家",
      position: new google.maps.LatLng(33.604312, 130.414688),
    },
    {
      name: "焼肉きらくや",
      position: new google.maps.LatLng(33.610563, 130.441688),
    },
    {
      name: "焼肉黄華園",
      position: new google.maps.LatLng(33.581187, 130.421938),
    },
    {
      name: "赤身焼肉 USHIO（ウシオ)",
      position: new google.maps.LatLng(33.582687, 130.422188),
    },
    {
      name: "焼肉 KAN",
      position: new google.maps.LatLng(33.609687, 130.451937),
    },
    {
      name: "焼肉 明秀苑",
      position: new google.maps.LatLng(33.599563, 130.466687),
    },
  ];

  for (let i = 0; i < data.length; i++) {
    marker = new google.maps.Marker({
      position: data[i].position,
      animation: google.maps.Animation.DROP,
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
