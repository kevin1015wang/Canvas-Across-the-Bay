import React, { useRef } from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { bartRedYellowLine } from "../data/bartRedYellowLine.js";
import { bartRedLineExt } from "../data/bartRedLineExt.js";
import { bartYellowLineExt } from "../data/bartYellowLineExt.js";

const MapLayer = () => {
    const mapRef = useRef(null);
    const latitude = 37.7408249834177;
    const longitude = -122.32898300823841;

    // BART Red Line Coords
    const redOptions = { color: "red" };
    const yellowOptions = { color: "yellow" };

    // Get Access Token from .env
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    // Function to compute a parallel line with a small offset
    const computeParallelLine = (line, offset) => {
        const toRad = (degrees) => (degrees * Math.PI) / 180;
        const toDeg = (radians) => (radians * 180) / Math.PI;
        const earthRadius = 6378137; // Radius of Earth in meters

        return line.map(([lat, lng], i, arr) => {
            if (i === 0) return [lat, lng]; // No offset for the first point
            const [prevLat, prevLng] = arr[i - 1];

            const dLat = toRad(lat - prevLat);
            const dLng = toRad(lng - prevLng);

            const angle = Math.atan2(dLat, dLng) + Math.PI / 2; // Perpendicular angle
            const offsetLat = offset * Math.cos(angle) / earthRadius * (180 / Math.PI);
            const offsetLng = offset * Math.sin(angle) / (earthRadius * Math.cos(toRad(lat))) * (180 / Math.PI);

            return [lat + offsetLat, lng + offsetLng];
        });
    };

    const bartYellowLine = computeParallelLine(bartRedYellowLine, 25); 

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={11}
            ref={mapRef}
            style={{ height: "100vh", width: "100vw" }}
            zoomControl={false} // Disable default zoom control
        >
            <TileLayer
                attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}@2x?access_token=${accessToken}`}
            />
            <Polyline pathOptions={redOptions} positions={bartRedYellowLine} />
            <Polyline pathOptions={redOptions} positions={bartRedLineExt} />
            <Polyline pathOptions={yellowOptions} positions={bartYellowLine} />
            <Polyline pathOptions={yellowOptions} positions={bartYellowLineExt} />
        </MapContainer>
    );
};

export default MapLayer;
