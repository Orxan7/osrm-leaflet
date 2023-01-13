import L from 'leaflet';

const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
});


const RoutingMachine = ({routes, waypoints, mapp})=>{
    
    const line = routes&&mapp?routes[0].geometry:null;
    if(line){
        mapp.eachLayer(function (layer) {
            if (!!layer.toGeoJSON) {
                mapp.removeLayer(layer);
              }
        });
        const geoLine = L.GeoJSON.coordsToLatLngs(line.coordinates);
        const polyline = L.polyline(geoLine);
        polyline.addTo(mapp);
        L.marker([(waypoints[0].location)[1],(waypoints[0].location)[0]],{
            icon: customMarker
        }).addTo(mapp);
        L.marker([(waypoints[1].location)[1],(waypoints[1].location)[0]],{
            icon: customMarker
        }).addTo(mapp);
        mapp.fitBounds(polyline.getBounds())
    }
}

export default RoutingMachine;