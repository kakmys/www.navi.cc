/*
    Маркер событий трека.
    Доступны маркеры:
    1. Стоянок.
    2. Остановок.
    3. Заправки.
    4. Сливы топлива.
    5. Тревожные события.
*/

function EventMarker(map)
{
    this.map = map;
    this.div = null;
    this.data = [];
    this.setMap(map);
}

EventMarker.prototype = new google.maps.OverlayView();

var SVG = {};
SVG.ns = "http://www.w3.org/2000/svg";
SVG.xlinkns = "http://www.w3.org/1999/xlink";

EventMarker.prototype.onAdd = function() {
    var div = this.div = document.createElement('div');

    div.setAttribute("class", "eventmarker");

    div.marker = this;
    var panes = this.getPanes();
    this.panes = panes;

    // var marker = d3.select(svg);

    // console.log('market div', div);
    panes.overlayImage.appendChild(div);
}

// EventMarker.prototype.setPosition = function(position) {
//     this.position = position;
//     // this.point = point;
//     this.draw();
// }
EventMarker.prototype.setData = function(data) {
    this.data = data;
    this.draw();
}

EventMarker.prototype.onRemove = function() {
    // this.div.removeChild(this.arrdiv);
    this.div.parentNode.removeChild(this.div);
    this.arrdiv = null;
    this.div = null;
}

EventMarker.prototype.draw = function() {
    var overlayProjection = this.getProjection();
    if(!overlayProjection) return;

    // var divpx = overlayProjection.fromLatLngToDivPixel(this.position);
    var div = this.div;

    // var x = divpx.x;
    // var y = divpx.y;

    var track = d3.select(this.div);
    var points = track.selectAll(".track")
        .data(this.data);

    var div = points.enter().append("div")
        .attr("class", "track")
        // .attr("style", function(d){
        //     var px = overlayProjection.fromLatLngToDivPixel(d.pos);
        //     // console.log("d=", d, "px=", px);
        //     return "left: " + (px.x) + "px; top: " + (px.y) + "px";
        // })
        .on('click', function(d) {
            console.log(d3.select(this), d);
        });

    div.append("span").text(function(d){
        return d.title;
    });

    points
        .attr("class", function(d){
            return "track " + d.type;
        })
        .attr("style", function(d){
            var px = overlayProjection.fromLatLngToDivPixel(d.pos);
            // console.log("d=", d, "px=", px);
            return "left: " + (px.x) + "px; top: " + (px.y) + "px";
        });

    points.exit().remove();

    // console.log('draw', this.data, points.select("div.stop"));

    // div.style.left = divpx.x - 16 + 'px';
    // div.style.top = divpx.y - 32 + 'px';
}

angular.module('services.eventmarker', [])

.factory('EventMarker', [
    "$rootScope",
    function($rootScope) {
        // console.log(":: EventMarker", $rootScope, EventMarker);
        return EventMarker;
    }
]);
