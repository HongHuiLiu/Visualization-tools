var geo={
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                
"features": [
{ "type": "Feature", "properties": { "OBJECTID": 2, "JDCODE": "440307006", "JDNAME": "坪山新区" }, "geometry": { "type": "Point", "coordinates": [ 114.357139, 22.707482 ] } },
{ "type": "Feature", "properties": { "OBJECTID": 13, "JDCODE": "440307003", "JDNAME": "大鹏新区" }, "geometry": { "type": "Point", "coordinates": [ 114.48701, 22.604542 ] } },
{ "type": "Feature", "properties": { "OBJECTID": 15, "JDCODE": "440303009", "JDNAME": "罗湖区" }, "geometry": { "type": "Point", "coordinates": [ 114.155738, 22.580636 ] } },
{ "type": "Feature", "properties": { "OBJECTID": 25, "JDCODE": "440308004", "JDNAME": "盐田区" }, "geometry": { "type": "Point", "coordinates": [ 114.270865, 22.609413 ] } },
{ "type": "Feature", "properties": { "OBJECTID": 32, "JDCODE": "440304006", "JDNAME": "福田区" }, "geometry": { "type": "Point", "coordinates": [ 114.060413, 22.543152 ] } },
{ "type": "Feature", "properties": { "OBJECTID": 45, "JDCODE": "440305008", "JDNAME": "南山区" }, "geometry": { "type": "Point", "coordinates": [ 113.964007, 22.540991 ] } },
{ "type": "Feature", "properties": { "OBJECTID": 50, "JDCODE": "440306002", "JDNAME": "光明新区" }, "geometry": { "type": "Point", "coordinates": [ 113.956903, 22.754953 ] } },
{ "type": "Feature", "properties": { "OBJECTID": 53, "JDCODE": "440306003", "JDNAME": "龙华新区" }, "geometry": { "type": "Point", "coordinates": [ 114.051975, 22.682414 ] } },
{ "type": "Feature", "properties": { "OBJECTID": 55, "JDCODE": "440306001", "JDNAME": "宝安区" }, "geometry": { "type": "Point", "coordinates": [ 113.886954, 22.665689 ] } },
{ "type": "Feature", "properties": { "OBJECTID": 68, "JDCODE": "440307002", "JDNAME": "龙岗区" }, "geometry": { "type": "Point", "coordinates": [ 114.216911, 22.702238 ] } }
]
};
var data={};
geo.features.forEach(function (obj) {
    data[obj.properties.JDNAME]=obj.geometry.coordinates;
})
console.log(JSON.stringify(data))