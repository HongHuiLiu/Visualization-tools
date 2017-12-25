// 创建Map实例
var bmap = new BMap.Map('map', {
    enableMapClick: false,
    minZoom: 8,
    maxZoom: 15
    //vectorMapLevel: 3
});

bmap.enableScrollWheelZoom(); // 启用滚轮放大缩小
// 地图自定义样式
bmap.setMapStyle({
  styleJson:baseMapStyle
});

function ComplexCustomOverlay(point, text, mouseoverText){
      this._point = point;
      this._text = text;
      this._overText = mouseoverText;
    }
    ComplexCustomOverlay.prototype = new BMap.Overlay();
    ComplexCustomOverlay.prototype.initialize = function(map){
      this._map = map;
      var div = this._div = document.createElement("div");
      div.style.position = "absolute";
      div.style.zIndex = 2;
      div.style.backgroundColor = "#EE5D5B";
      div.style.border = "1px solid #BC3B3A";
      div.style.color = "white";
      div.style.height = "18px";
      div.style.padding = "2px";
      div.style.lineHeight = "18px";
      div.style.whiteSpace = "nowrap";
      div.style.MozUserSelect = "none";
      div.style.fontSize = "12px";
      div.style.animation="showSlow 5s";
      var span = this._span = document.createElement("span");
      span.id="tip";
      div.appendChild(span);
      span.appendChild(document.createTextNode(this._text));      
      var that = this;

      var arrow = this._arrow = document.createElement("div");
      arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
      arrow.style.position = "absolute";
      arrow.style.width = "11px";
      arrow.style.height = "10px";
      arrow.style.top = "22px";
      arrow.style.left = "10px";
      arrow.style.overflow = "hidden";
      div.appendChild(arrow);
     
      // div.onmouseover = function(){
      //   this.style.backgroundColor = "#6BADCA";
      //   this.style.borderColor = "#0000ff";
      //   this.getElementsByTagName("span")[0].innerHTML = that._overText;
      //   arrow.style.backgroundPosition = "0px -20px";
      // }

      // div.onmouseout = function(){
      //   this.style.backgroundColor = "#EE5D5B";
      //   this.style.borderColor = "#BC3B3A";
      //   this.getElementsByTagName("span")[0].innerHTML = that._text;
      //   arrow.style.backgroundPosition = "0px 0px";
      // }

      map.getPanes().labelPane.appendChild(div);
      
      return div;
    }
    ComplexCustomOverlay.prototype.draw = function(){
      var map = this._map;
      var pixel = map.pointToOverlayPixel(this._point);
      this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
      this._div.style.top  = pixel.y - 30 + "px";
    }
    


bmap.getContainer().style.background = '#222';
var baseMapStyle=[{
            "featureType": "land",
            "elementType": "geometry",
            "stylers": {
              "color": "#212121"
            }
          },
          {
            "featureType": "building",
            "elementType": "geometry",
            "stylers": {
              "color": "#2b2b2b"
            }
          },
          {
            "featureType": "highway",
            "elementType": "all",
            "stylers": {
              "lightness": -42,
              "saturation": -91
            }
          },
          {
            "featureType": "arterial",
            "elementType": "geometry",
            "stylers": {
              "lightness": -77,
              "saturation": -94
            }
          },
          {
            "featureType": "green",
            "elementType": "geometry",
            "stylers": {
              "color": "#1b1b1b"
            }
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": {
              "color": "#181818"
            }
          },
          {
            "featureType": "subway",
            "elementType": "geometry.stroke",
            "stylers": {
              "color": "#181818"
            }
          },
          {
            "featureType": "railway",
            "elementType": "geometry",
            "stylers": {
              "lightness": -52
            }
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": {
              "color": "#313131"
            }
          },
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": {
              "color": "#8b8787"
            }
          },
          {
            "featureType": "manmade",
            "elementType": "geometry",
            "stylers": {
              "color": "#1b1b1b"
            }
          },
          {
            "featureType": "local",
            "elementType": "geometry",
            "stylers": {
              "lightness": -75,
              "saturation": -91
            }
          },
          {
            "featureType": "subway",
            "elementType": "geometry",
            "stylers": {
              "lightness": -85,
              "visibility": "on"
            }
          },
          {
            "featureType": "railway",
            "elementType": "geometry",
            "stylers": {
              "color": "#444444",
              "weight": "1",
              "lightness": -44,
              "visibility": "on"
            }
          },
          {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
              "color": "#444444",
              "weight": "1",
              "lightness": -44
            }
          }];

