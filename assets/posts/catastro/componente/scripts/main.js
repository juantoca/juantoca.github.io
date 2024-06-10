var map = L.map('map').setView([43.454, -3.823], 18);

var IGN = L.tileLayer('https://tms-ign-base.idee.es/1.0.0/IGNBaseTodo/{z}/{x}/{-y}.jpeg', {maxZoom: 17});

IGN.addTo(map);

var ortofoto = L.tileLayer('https://tms-pnoa-ma.idee.es/1.0.0/pnoa-ma/{z}/{x}/{-y}.jpeg');

ortofoto.addTo(map);


var catastro = L.tileLayer.wms("https://www1.sedecatastro.gob.es/cartografia/GeneraMapa.aspx", {
    layers: 'CATASTRO',
    format: 'image/png',
    transparent: true
});


var baseMaps = {
    "IGN": IGN,
    "Ortofoto": ortofoto
};

var overlayMaps = {
    "Catastro": catastro
}



var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);







coords_display = document.querySelector(".coords")

function onMouseMove(e){
    coords_display.textContent = e.latlng.toString();
}


map.on("mousemove", onMouseMove)