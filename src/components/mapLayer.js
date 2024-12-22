import React, { useRef } from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapLayer = () => {
    const mapRef = useRef(null);
    const latitude = 37.8106815;
    const longitude = -122.1045841;

    // BART Red Line Coords
    const redOptions = { color: "red" };
    const yellowOptions = { color: "yellow" };
    const bartRedLine = [
        [37.59984516866034, -122.38646053662681],
        [37.61160432202427, -122.39819483130304],
        [37.613174889941746, -122.39960604414543],
        [37.61473742024317, -122.39951778308011],
        [37.61546418124923, -122.39857866085613],
        [37.615663424960964, -122.39414808104642],
        [37.61606484744051, -122.39219866201557],
        [37.6156839606112, -122.39751806687183],
        [37.615902078183936, -122.40060052117587],
        [37.61711912675849, -122.40263871369056],
        [37.62196069030832, -122.40642683349243],
        [37.6228804027517, -122.4071687716883],
        [37.6309829209442, -122.41187116103397],
        [37.63771061958851, -122.41628438926192],
        [37.64219519564601, -122.41880060888535],
        [37.64440645614295, -122.42050257552927],
        [37.64978835002898, -122.4252949931127],
        [37.650771616270106, -122.42617698687717],
        [37.65162114297728, -122.42727103535667],
        [37.65262972059843, -122.42878993872014],
        [37.653512703429186, -122.43032235480337],
        [37.65601328261467, -122.43472487829126],
        [37.65837678285317, -122.43732981306592],
        [37.6612601775812, -122.43976083886996],
        [37.66207419510715, -122.44064989348719],
        [37.66303718231401, -122.4421813632599],
        [37.6641342395769, -122.44391545127048],
    ];

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

    const bartYellowLine = computeParallelLine(bartRedLine, 25); // Offset of 10 meters

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={11}
            ref={mapRef}
            style={{ height: "100vh", width: "100vw" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2V2aW4xMDE1d2FuZyIsImEiOiJjbTR4b2tqeHIwc3R2Mm5vcGxlcm1kaGRsIn0.KvbQQrarGCXNcJf4CqVXHA`}
            />
            <Polyline pathOptions={redOptions} positions={bartRedLine} />
            <Polyline pathOptions={yellowOptions} positions={bartYellowLine} />
        </MapContainer>
    );
};

export default MapLayer;
