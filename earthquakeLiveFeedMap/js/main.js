var datavizState = {
	dataLocation: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson',
	geoJsonData: null,
	featureLayer: null,
	dataGeneratedDate: null,
	map: null,
	latPref: 20,
	lngPref: 10,
	zoomPref: 2,
	maxZoom: 7,
	minZoom: 2
}

$.get(datavizState.dataLocation, function(data) { 
	datavizState.geoJsonData = data
	makeNewMap(datavizState);
	loadFeatures(datavizState);
});

//MAP CONTROL

function makeNewMap(datavizState){
	datavizState.map = L.map('map',{
		center: [datavizState.latPref, datavizState.lngPref],
		zoom: datavizState.zoomPref,
		maxZoom: datavizState.maxZoom,
		minZoom: datavizState.minZoom
	});

	L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
	}).addTo(datavizState.map);
}
//Map options will be overridden if there is a query string (see line 28)
function setMapState(datavizState){
	datavizState.map.setView([
		datavizState.latPref, 
		datavizState.lngPref
	], 
	datavizState.zoomPref);
}

//Q STRING CONTROL

//Gets the key and value pairs from the query string
function getQueryVariable(toSet){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == toSet){return pair[1];}
    }
    return(false);
}

function setQueryVariables(datavizState){
	var newlatPref = getQueryVariable("lng");
	var newlngPref = getQueryVariable("lng");
	var newzoomPref = getQueryVariable("zoom");
	if (newlatPref != false && newlngPref != false && newzoomPref != false){
		datavizState.latPref = newlatPref;
		datavizState.lngPref = newlngPref;
		datavizState.zoomPref = newzoomPref;
		setMapState(datavizState)
	}
}
	
function checkRadius(feature){ //Logarithmic function, because the strength of eartquakes is not linear compared to magnitude. http://earthquake.usgs.gov/learn/topics/measure.php
	return ((feature.properties.mag * (feature.properties.mag * 2.5))/3)-8;
};

function loadFeatures(datavizState){
	//Push object to leaflet's geoJson function
	datavizState.featureLayer = L.geoJson(datavizState.geoJsonData, {
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, 
				options = {
					radius: checkRadius(feature),
					fillColor: '#FF2121', //getColor(feature.properties.time),
					color: '#FF2121', //getColor(feature.properties.time), //- use this if you want to dynamically set colors 
					weight: 1,
					opacity: 1,
					fillOpacity: 0.4
				}
			).bindPopup('<h3>' + feature.properties.place + 
				'</h3><p><span class="highlightText"> Time:</span> ' + moment(feature.properties.time).format("hh:mm:ss A, DD/MM/YYYY") + ' AEST' + 
				'</p><p><span class="highlightText"> Magnitude:</span> ' + feature.properties.mag + ' ' + feature.properties.magType + '</p>'
			);
		}
	}).addTo(datavizState.map);
	$('#mapDetails').text('Map data generated at ' + moment(datavizState.geoJsonData.metadata.generated).format("hh:mm:ss A") + ' on ' + moment(datavizState.geoJsonData.metadata.generated).format("DD/MM/YYYY") + ' AEST');
}



$('#hour').on('click', function(){
	$('#timeLabel').text('past hour');
	geoJson.clearLayers()
	getData('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson')
});

$('#day').on('click', function(){
	$('#timeLabel').text('past 24 hours');
	geoJson.clearLayers()
	getData('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson')
});

//This is the function that gives the user an iframe with query string. This is only used before placing the map on Drupal.
$("body").keypress(function(event) {
  if (event.which == 73) {
	var coords = datavizState.map.getCenter()
	var zoom = datavizState.map.getZoom()
	//console.log(coords.lat, coords.lng) //[0], latlngDisplay[1])
	var urlDisplay = 'http://' + window.location.hostname + window.location.pathname
	var queryDisplay = '?lat=' + coords.lat.toString() + '&lng=' + coords.lng.toString() + '&zoom=' + zoom
	console.log('<iframe src="' + urlDisplay + queryDisplay + '" width="100%"></iframe>')
  }
});