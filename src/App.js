import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import MapLayer from './components/mapLayer'

const center = [51.505, -0.09]


function App() {
  return (
    <div id="map">
      <MapLayer />
    </div>
  );
}

export default App;
