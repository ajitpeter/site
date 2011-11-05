// Place your application-specific JavaScript functions and classes
// here. This file is automatically included by
// javascript_include_tag :defaults.

var reloadGMapTimer;
var debug = true;

// prevent console errors on browsers without firebug
if (!window.console || !debug) {
  window.console = {};
  window.console.log = function(){};
}

function reloadGMap() {
  console.log("reloading Google map");
  var mapCanvas = $('#map-canvas');
  var mapImage = $("gmapStatic");
  var newGmapImage = "http://maps.googleapis.com/maps/api/staticmap?center=SW61SH,London&zoom=14&size=" + mapImage.width() + "x" + mapImage.height() + "&maptype=roadmap&sensor=false";
  mapImage.attr('src', newGmapImage);
}

function fitMapToWindow() {
  var mapCanvas = $('#map-canvas');
  var hospitalList = $('#hospital-list');
  var compensation = 2; //For borders
  var mapImage = $('#gmapStatic');
  
  mapCanvas.width($(window).width() - hospitalList.width() - compensation);
  
  //Set the new static map size
  mapImage.width(mapCanvas.width());
  
  clearTimeout(reloadGMapTimer);
  reloadGMapTimer = setTimeout(reloadGMap(), 1000);
}

$(document).ready(function() {
  fitMapToWindow();
  $(window).resize(fitMapToWindow);
});
