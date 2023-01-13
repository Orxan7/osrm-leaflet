import React from "react";
import { MapContainer, TileLayer  } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './Map.css';
import RoutingMachine from "./RouteMachine";
import { useState } from "react";


const defaultZoom = 8;  

export default function Map({ routes, waypoints }) {
    const [mapp, setMapp] = useState()

    return (
        <MapContainer center={waypoints===undefined?[55.751244, 37.618423]:[
            waypoints[0].loacation,
            waypoints[1].location
          ]} zoom={defaultZoom} ref={map=>setMapp(map)}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
            <RoutingMachine routes={routes} waypoints={waypoints} mapp={mapp}/>
        </MapContainer>
    )
}

