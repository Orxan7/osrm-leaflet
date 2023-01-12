import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline  } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';


const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
  ]

const defaultCenter = [38.9072, -77.0369];
const defaultZoom = 8;  

const customMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
});


export default function Map() {
    return (
        <MapContainer center={polyline[0]} zoom={defaultZoom} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
            <Marker position={polyline[0]} icon={customMarker}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Marker position={polyline[1]} icon={customMarker}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Polyline positions={polyline} />
        </MapContainer>
    )
}

