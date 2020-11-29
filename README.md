# CS50x Final Project

## Fukuoka Yakiniku Map

## A choice selection of _yakiniku_ (grilled meat) restaurants in Fukuoka, Japan

This is a simple **Final Project** as part of the last requirement to pass [CS50x](https://cs50.harvard.edu/x/2020/) found on [edX](https://www.edx.org/course/cs50s-introduction-to-computer-science). The project is a Google Maps website that displays data on a selection of _yakiniku_ restaraunts in Fukuoka, Japan. This data for the Google Maps markers is a semi-random selection of sixteen of these restaurants, located in central Fukuoka / Hakata, and is by no means exhaustive. Using the [Google Maps JavaScript API](https://cloud.google.com/maps-platform/maps), this data then is used to create markers with labels on the map, which is then used to indicate the locations of the restaurant selection in the grid display below the map. Also inlcuded on each restaurant display card are [Google Plus Codes](https://maps.google.com/pluscodes/), which Google describes as:

> Simple, free to use, open-source digital addressing, for the entire world

The Google Maps application website uses HTML, CSS and Javascript as the technology stack. The layout is basic HTML markup, which is then styled with CSS and makes use of [Google Fonts](https://fonts.google.com/), namely [Montserrat](https://fonts.google.com/specimen/Montserrat). Other features are as follows:

- The layout uses CSS Flexbox and CSS Grid: Flexbox for the container of the website, and Grid for the restaurant card layout.
- The layout is responsive and viewed on various simulated devices throughout the development and design process.
- The Google Maps Javascript API is used to generate the Map Markers, as well as the labels for each marker and the hover description over each marker.
- The cards are generated using Javascript and the restaurant data provided in the `index.js` file. Class names and HTML content are also added to the cards using Javascript.
- The cards were given multiple color classes to mimic some of the signage you might see when viewing signboards in a Japanese department store or shopping center, often listing restaurants and shops is this simple fashion.

### Author

Chad W. Sisk, as part of a final project requirement for CS50x. My profile can be found at Github: [@chadwyck242](https://github.com/chadwyck242)

### Technology Stack

Basic HTML, CSS, JavaScript and the Google Maps JavaScript API.
I used the following tools:

- Editor was VS Code, which can be found here: [VS Code](https://code.visualstudio.com/)
- Google Chrome Browser and the Chrome Developer Tools. Download Chrome here: [Google Chrome](https://www.google.com/chrome/).

### Usage

- Download or clone the project from the Github repository, which is linked (here)[https://github.com/chadwyck242/hakata-map].
- You will be required to have your own Google Maps Javascript API key. Follow the instuctions [here](https://developers.google.com/maps/documentation/javascript/overview).
- The API key can be used in the `index.js` file where I will indicate something like **PLACE API KEY HERE** in the link that requires the API key to load the Google Map.
- Then just open `index.html`, either by right clicking the file in the project folder and selecting a browser, or if in **VS Code**, right click on the `index.html` file and choose the command _Open With Live Server_. That should do it!
