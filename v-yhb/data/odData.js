var odData=[[{"name":"O_11"},{"name":"D_11","value":"0"}],[{"name":"O_12"},{"name":"D_12","value":"0"}],[{"name":"O_13"},{"name":"D_13","value":"0"}],[{"name":"O_14"},{"name":"D_14","value":"0"}],[{"name":"O_21"},{"name":"D_21","value":"2"}],[{"name":"O_22"},{"name":"D_22","value":"2"}],[{"name":"O_23"},{"name":"D_23","value":"2"}],[{"name":"D_24"},{"name":"O_24","value":"1"}],[{"name":"O_25"},{"name":"D_25","value":"2"}],[{"name":"O_23"},{"name":"D_26","value":"1"}],[{"name":"O_27"},{"name":"O_27","value":"2"}],[{"name":"O_28"},{"name":"D_28","value":"2"}],[{"name":"O_29"},{"name":"D_29","value":"2"}],[{"name":"O_31"},{"name":"D_31","value":"1"}],[{"name":"O_33"},{"name":"O_23","value":"1"}],[{"name":"O_34"},{"name":"D_34","value":"1"}],[{"name":"O_35"},{"name":"D_35","value":"1"}],[{"name":"O_36"},{"name":"D_36","value":"1"}],[{"name":"O_41"},{"name":"D_41","value":"4"}],[{"name":"O_42"},{"name":"D_42","value":"4"}],[{"name":"O_43"},{"name":"D_43","value":"4"}],[{"name":"O_44"},{"name":"D_44","value":"4"}],[{"name":"O_45"},{"name":"D_45","value":"4"}],[{"name":"D_41"},{"name":"D_46","value":"4"}],[{"name":"O_47"},{"name":"D_47","value":"4"}],[{"name":"O_48"},{"name":"D_48","value":"4"}]];
var geoData={"O_11":[113.943812,22.680378],"D_11":[113.921724,22.672024],"O_12":[113.838875,22.799867],"D_12":[113.837914,22.717046],"O_13":[113.821981,22.647297],"D_13":[113.786355,22.698251],"O_14":[113.832114,22.696675],"D_14":[113.858499,22.612626],"O_21":[114.1329995,22.58363364],"O_22":[114.045106,22.528468],"O_23":[114.017567,22.65435366],"O_24":[114.107996,22.654873],"O_25":[114.0073698,22.6475331],"O_27":[113.939009,22.54054413],"O_28":[113.925932,22.490478],"O_29":[113.9917553,22.53521898],"O_31":[113.944221,22.551927],"O_33":[114.0489982,22.54183532],"O_34":[114.065454,22.520281],"O_35":[113.8305596,22.63116395],"O_36":[113.8985135,22.53493504],"O_41":[114.0658232,22.62961412],"O_42":[114.1139513,22.53510549],"O_43":[114.141012,22.554781],"O_44":[114.257601,22.589231],"O_45":[114.163143,22.606502],"O_47":[114.257006,22.69374],"O_48":[114.077866,22.68655],"D_21":[113.9390818,22.58280332],"D_22":[113.923116,22.522694],"D_23":[113.9103391,22.48783357],"D_24":[114.036056,22.53828],"D_25":[114.0053187,22.60204063],"D_26":[114.1350763,22.55843113],"D_27":[113.984434,22.54699356],"D_28":[113.8895,22.480144],"D_29":[113.8421803,22.60337639],"D_31":[114.172453,22.559658],"D_34":[114.10738,22.5558],"D_35":[114.0630055,22.5369696],"D_36":[114.0315623,22.6663961],"D_41":[114.2496768,22.7198154],"D_42":[114.2194318,22.67593936],"D_43":[114.229914,22.549917],"D_44":[114.118865,22.540511],"D_45":[114.126203,22.604778],"D_46":[114.1176483,22.55206526],"D_47":[114.227814,22.685623],"D_48":[114.06016,22.720052]};
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