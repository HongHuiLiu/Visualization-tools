var geoData={"坪山新区":[114.369273, 22.675219],"大鹏新区":[114.48701,22.604542],"罗湖区":[114.155738,22.580636],"盐田区":[114.287635, 22.59623],"福田区":[114.053069, 22.549242],"南山区":[113.964532, 22.567398],"光明新区":[113.936936, 22.768026],"龙华新区":[114.026623, 22.694426],"宝安区":[113.865647, 22.674152],"龙岗区":[114.234742, 22.673085]};


var labelGeo={"坪山新区":[114.358722, 22.717364],"大鹏新区":[114.461259, 22.585018],"罗湖区":[114.155738,22.580636],"盐田区":[114.287635, 22.59623],"福田区":[114.034672, 22.541231],"南山区":[113.932337, 22.548708],"光明新区":[113.916239, 22.805877],"龙华新区":[114.020271, 22.74723],"宝安区":[113.816204, 22.684289],"龙岗区":[114.218645, 22.706695]};

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
              "lightness": -65
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

var grayMap=[
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": {
            "lightness": 10,
            "saturation": -100
        }
    },
    {
        "featureType": "highway",
        "elementType": "all",
        "stylers": {
            "color": "#dddddd"
        }
    },
    {
        "featureType": "boundary",
        "elementType": "all",
        "stylers": {
            "visibility": "on"
        }
    }
];