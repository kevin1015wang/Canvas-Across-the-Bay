import React, { useRef } from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { bartRedYellowLine } from "../data/bartRedYellowLine.js";
import { bartRedLineExt } from "../data/bartRedLineExt.js";
import { bartYellowLineExt } from "../data/bartYellowLineExt.js";
import { bartDalyWestOakland } from "../data/bartDalyWestOakland.js";
import { bartWestOakBayFair } from "../data/bartWestOakBayFair.js";
import { bartBlueLineExt } from "../data/bartBlueLineExt.js";
import { bartGreenOrangeLineExt } from "../data/bartGreenOrangeLineExt.js";
import { bartOrangeOakland } from "../data/bartOrangeOakland.js";
import { bartOrangeLakeBay } from "../data/bartOrangeLakeBay.js";
import { bartOrangeLakeTwelve } from "../data/bartOrangeLakeTwelve.js";
import { bartOAKAirport } from "../data/bartOAKAirport.js";
import { bartStations } from "../data/bartStations.js";
import { CircleMarker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { muniCentralSubway } from "../data/muniCentralSubway.js";
import { muniStations } from "../data/muniStations.js";

const MapLayer = ({ onStationClick }) => {
    const mapRef = useRef(null);
    const latitude = 37.7408249834177;
    const longitude = -122.32898300823841;

    // BART Red Line Coords
    const redOptions = { color: "red" };
    const yellowOptions = { color: "yellow" };
    const blueOptions = { color: "lightblue" };
    const greenOptions = { color: "green" };
    const orangeOptions = { color: "orange" };
    const beigeOptions = { color: "beige" };

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

    const computeParallelLineIgnoreLast = (line, offset) => {
        const toRad = (degrees) => (degrees * Math.PI) / 180;
        const toDeg = (radians) => (radians * 180) / Math.PI;
        const earthRadius = 6378137; // Radius of Earth in meters

        return line.map(([lat, lng], i, arr) => {
            if (i === 0 || i === arr.length - 1) {
                // No offset for the first or last point
                return [lat, lng];
            }
            const [prevLat, prevLng] = arr[i - 1];

            const dLat = toRad(lat - prevLat);
            const dLng = toRad(lng - prevLng);

            const angle = Math.atan2(dLat, dLng) + Math.PI / 2; // Perpendicular angle
            const offsetLat = (offset * Math.cos(angle)) / earthRadius * (180 / Math.PI);
            const offsetLng = (offset * Math.sin(angle)) / (earthRadius * Math.cos(toRad(lat))) * (180 / Math.PI);

            return [lat + offsetLat, lng + offsetLng];
        });
    };

    const computeParallelLineIgnoreFirst = (line, offset) => {
        const toRad = (degrees) => (degrees * Math.PI) / 180;
        const toDeg = (radians) => (radians * 180) / Math.PI;
        const earthRadius = 6378137; // Radius of Earth in meters

        return line.map(([lat, lng], i, arr) => {
            if (i === 0) {
                // No offset for the first point
                return [lat, lng];
            }
            const [prevLat, prevLng] = arr[i - 1];

            const dLat = toRad(lat - prevLat);
            const dLng = toRad(lng - prevLng);

            const angle = Math.atan2(dLat, dLng) + Math.PI / 2; // Perpendicular angle
            const offsetLat = (offset * Math.cos(angle)) / earthRadius * (180 / Math.PI);
            const offsetLng = (offset * Math.sin(angle)) / (earthRadius * Math.cos(toRad(lat))) * (180 / Math.PI);

            return [lat + offsetLat, lng + offsetLng];
        }
        );
    };

    const bartYellowLine = computeParallelLine(bartRedYellowLine, 25);

    // compute parallel line from Daly City to West Oakland for blue line
    const bartBlueDalytoWOak = computeParallelLine(bartDalyWestOakland, 50);
    const bartGreenDalytoWOak = computeParallelLine(bartDalyWestOakland, 75);
    const bartGreenWestOakBayFair = computeParallelLine(bartWestOakBayFair, 25);
    const bartOrangeLineExt = computeParallelLine(bartGreenOrangeLineExt, 25);
    const bartOrangeNorthExt = computeParallelLine(bartRedLineExt, 50);
    const bartOrangeOaklandLine = computeParallelLineIgnoreLast(bartOrangeOakland, 50);
    const bartOrangeLakeBayLine = computeParallelLineIgnoreLast(bartOrangeLakeBay, 50);

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
            <Polyline pathOptions={blueOptions} positions={bartBlueDalytoWOak} />
            <Polyline pathOptions={greenOptions} positions={bartGreenDalytoWOak} />
            <Polyline pathOptions={blueOptions} positions={bartWestOakBayFair} />
            <Polyline pathOptions={greenOptions} positions={bartGreenWestOakBayFair} />
            <Polyline pathOptions={blueOptions} positions={bartBlueLineExt} />
            <Polyline pathOptions={greenOptions} positions={bartGreenOrangeLineExt} />
            <Polyline pathOptions={orangeOptions} positions={bartOrangeLineExt} />
            <Polyline pathOptions={orangeOptions} positions={bartOrangeNorthExt} />
            <Polyline pathOptions={orangeOptions} positions={bartOrangeOaklandLine} />
            <Polyline pathOptions={orangeOptions} positions={bartOrangeLakeBayLine} />
            <Polyline pathOptions={orangeOptions} positions={bartOrangeLakeTwelve} />
            <Polyline pathOptions={beigeOptions} positions={bartOAKAirport} />
            <Polyline pathOptions={redOptions} positions={muniCentralSubway} />

            {bartStations.map((station, index) => (
                <CircleMarker
                    key={index}
                    center={[station.lat, station.lng]}
                    pathOptions={{
                        color: station.artPresent ? "white" : "black",
                        fillColor: station.artPresent ? "white" : "black",
                        fillOpacity: 0.8,
                    }}
                    radius={5}
                    eventHandlers={{
                        click: () => {
                            onStationClick(station.station);
                        },
                    }}
                >
                    <Popup className="custom-popup"><strong>{station.station}</strong></Popup>
                </CircleMarker>
            ))}

            {muniStations.map((station, index) => (
                <CircleMarker
                    key={index}
                    center={[station.lat, station.lng]}
                    pathOptions={{
                        color: station.artPresent ? "white" : "black",
                        fillColor: station.artPresent ? "white" : "black",
                        fillOpacity: 0.8,
                    }}
                    radius={5}
                    eventHandlers={{
                        click: () => {
                            onStationClick(station.station);
                        },
                    }}
                >
                    <Popup className="custom-popup"><strong>{station.station}</strong></Popup>
                </CircleMarker>
            ))}
        </MapContainer>
    );
};

export default MapLayer;
