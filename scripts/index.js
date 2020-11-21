// Create the script tag, set the appropriate attributes
var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?v=quarterly&key=&callback=initMap&libraries=places&v=quarterly";
script.defer = true;

var map;
var markers = [];

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
      label: "A",
    },
    {
      name: "Yakiniku no Bakuro Hakata-ten",
      position: new google.maps.LatLng(33.589438, 130.412312),
      label: "B",
    },
    {
      name: "Kuroichi Yakiniku",
      position: new google.maps.LatLng(33.592938, 130.401937),
      label: "C",
    },
    {
      name: "Ryuen Nishinakasu shop",
      position: new google.maps.LatLng(33.590812, 130.406313),
      label: "D",
    },
    {
      name: "カルビ亭福岡 黒毛和牛専門店",
      position: new google.maps.LatLng(33.583562, 130.402938),
      label: "E",
    },
    {
      name: "Grilled meat Hachihachi Hakata shop",
      position: new google.maps.LatLng(33.586062, 130.427563),
      label: "F",
    },
    {
      name: "牛仙人",
      position: new google.maps.LatLng(33.588313, 130.407562),
      label: "G",
    },
    {
      name: "福岡 焼肉コウシ",
      position: new google.maps.LatLng(33.586687, 130.403813),
      label: "H",
    },
    {
      name: "酒肴焼肉 彩稟 さいりん",
      position: new google.maps.LatLng(33.586813, 130.425187),
      label: "I",
    },
    {
      name: "スタミナ家どろんぱっ",
      position: new google.maps.LatLng(33.586687, 130.431938),
      label: "J",
    },
    {
      name: "カウンター焼肉ジャイアン家",
      position: new google.maps.LatLng(33.604312, 130.414688),
      label: "K",
    },
    {
      name: "焼肉きらくや",
      position: new google.maps.LatLng(33.610563, 130.441688),
      label: "L",
    },
    {
      name: "焼肉黄華園",
      position: new google.maps.LatLng(33.581187, 130.421938),
      label: "M",
    },
    {
      name: "赤身焼肉 USHIO（ウシオ)",
      position: new google.maps.LatLng(33.582687, 130.422188),
      label: "N",
    },
    {
      name: "焼肉 KAN",
      position: new google.maps.LatLng(33.609687, 130.451937),
      label: "O",
    },
    {
      name: "焼肉 明秀苑",
      position: new google.maps.LatLng(33.599563, 130.466687),
      label: "P",
    },
  ];

  function dropMarkers() {
    clearMarkers();

    for (let i = 0; i < data.length; i++) {
      addMarkers(data[i].position, data[i].name, data[i].label, i * 200);
    }
  }

  function addMarkers(position, title, label, timeout) {
    window.setTimeout(() => {
      markers.push(
        new google.maps.Marker({
          position: position,
          animation: google.maps.Animation.DROP,
          label: label,
          title: title,
          map: map,
        })
      );
    }, timeout);
  }

  function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

  dropMarkers();
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
