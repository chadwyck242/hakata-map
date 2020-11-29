// Create the script tag, set the appropriate attributes
var script = document.createElement("script");

// Maps API Key can be added here
script.src =
  "https://maps.googleapis.com/maps/api/js?v=quarterly&key=ADD_OWN_API_KEY_HERE&callback=initMap&v=quarterly";
script.defer = true;

// Define variables for map script
var map;
var markers = [];
let data;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available
  const fukuokaAirport = { lat: 33.590312, lng: 130.446687 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: fukuokaAirport,
  });

  // Data for use in Google Map
  data = [
    {
      name: "Yakiniku Champion",
      position: new google.maps.LatLng(33.589813, 130.420062),
      label: "A",
      plusCode: "HCQC+W2 Fukuoka, Japan",
    },
    {
      name: "Yakiniku no Bakuro Hakata-ten",
      position: new google.maps.LatLng(33.589438, 130.412312),
      label: "B",
      plusCode: "HCQ6+QW Fukuoka, Japan",
    },
    {
      name: "Kuroichi Yakiniku",
      position: new google.maps.LatLng(33.592938, 130.401937),
      label: "C",
      plusCode: "HCV2+5Q Fukuoka, Japan",
    },
    {
      name: "Ryuen Nishinakasu shop",
      position: new google.maps.LatLng(33.590812, 130.406313),
      label: "D",
      plusCode: "HCR4+8G Fukuoka, Japan",
    },
    {
      name: "カルビ亭福岡 黒毛和牛専門店",
      position: new google.maps.LatLng(33.583562, 130.402938),
      label: "E",
      plusCode: "HCM3+C5 Fukuoka, Japan",
    },
    {
      name: "Grilled meat Hachihachi Hakata shop",
      position: new google.maps.LatLng(33.586062, 130.427563),
      label: "F",
      plusCode: "HCPH+C2 Fukuoka, Japan",
    },
    {
      name: "牛仙人",
      position: new google.maps.LatLng(33.588313, 130.407562),
      label: "G",
      plusCode: "HCQ5+82 Fukuoka, Japan",
    },
    {
      name: "福岡 焼肉コウシ",
      position: new google.maps.LatLng(33.586687, 130.403813),
      label: "H",
      plusCode: "HCP3+MG Fukuoka, Japan",
    },
    {
      name: "酒肴焼肉 彩稟 さいりん",
      position: new google.maps.LatLng(33.586813, 130.425187),
      label: "I",
      plusCode: "HCPG+P3 Fukuoka, Japan",
    },
    {
      name: "スタミナ家どろんぱっ",
      position: new google.maps.LatLng(33.586687, 130.431938),
      label: "J",
      plusCode: "HCPJ+MQ Fukuoka, Japan",
    },
    {
      name: "カウンター焼肉ジャイアン家",
      position: new google.maps.LatLng(33.604312, 130.414688),
      label: "K",
      plusCode: "JC37+PV Fukuoka, Japan",
    },
    {
      name: "焼肉きらくや",
      position: new google.maps.LatLng(33.610563, 130.441688),
      label: "L",
      plusCode: "JC6R+6M Fukuoka, Japan",
    },
    {
      name: "焼肉黄華園",
      position: new google.maps.LatLng(33.581187, 130.421938),
      label: "M",
      plusCode: "HCJC+FQ Fukuoka, Japan",
    },
    {
      name: "赤身焼肉 USHIO（ウシオ)",
      position: new google.maps.LatLng(33.582687, 130.422188),
      label: "N",
      plusCode: "HCMC+3V Fukuoka, Japan",
    },
    {
      name: "焼肉 KAN",
      position: new google.maps.LatLng(33.609687, 130.451937),
      label: "O",
      plusCode: "JF52+VQ Kasuya, Fukuoka, Japan",
    },
    {
      name: "焼肉 明秀苑",
      position: new google.maps.LatLng(33.599563, 130.466687),
      label: "P",
      plusCode: "HFX8+RM Shime, Fukuoka, Japan",
    },
  ];

  // Function that initiates the creation of the Markers on screen
  function dropMarkers() {
    clearMarkers();

    for (let i = 0; i < data.length; i++) {
      addMarkers(data[i].position, data[i].name, data[i].label, i * 200);
    }
  }

  // Add the markers to the Marker array
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

  // Clear markers from the screen
  function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

  // Function to create cards for the CSS Grid layout
  function createCards(data) {
    document.getElementById("card-container").innerHTML = "";

    // Loop over the data to create HTML div elements
    for (let i = 0; i < data.length; i++) {
      let num = i;
      let card = document.createElement("div");
      let cardLabel = document.createElement("h3");
      let cardBody = document.createElement("p");
      let cardCode = document.createElement("strong");

      // Add the content to each HTML element based on the data
      cardLabel.innerHTML = data[i].label;
      cardBody.innerHTML = data[i].name;
      cardCode.innerHTML = data[i].plusCode;

      // Some Fizz / Buzz Fun
      if (num % 3 == 0 && num % 5 == 0) {
        cardBody.className = "light-red";
      } else if (num % 3 == 0) {
        cardBody.className = "light-blue";
      } else if (num % 5 == 0) {
        cardBody.className = "medium-green";
      } else {
        cardBody.className = "charcoal";
      }

      // Assemble the card elements here
      card.appendChild(cardLabel);
      card.appendChild(cardBody);
      card.appendChild(cardCode);

      card.className = "card";

      // Attach each card to the card container grid here
      document.getElementById("card-container").appendChild(card);
    }
  }

  // call drop markers function to display markers on screen
  dropMarkers();
  createCards(data);
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
