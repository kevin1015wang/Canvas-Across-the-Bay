import React, { useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import MapLayer from './components/mapLayer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArtCard from './components/artCard';
import bartArtData from './data/bartArtData';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { bartStations } from './data/bartStations';
import { muniStations } from './data/muniStations';
import { muniArtData } from './data/muniArtData';

const App = () => {
  const [selectedStation, setSelectedStation] = useState('All stations');

  const stationOptions = ['All stations', ...new Set([...bartStations.map((station) => station.station), ...muniStations.map((station) => station.station)])];

  const filteredArtData =
    selectedStation === 'All stations'
      ? [...bartArtData, ...muniArtData]
      : [...bartArtData, ...muniArtData].filter((art) => art.stationLocation === selectedStation);

  const handleStationClick = (stationName) => {
    setSelectedStation(stationName);
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Map */}
      <div id="map" style={{ height: '100%', width: '100%' }}>
        <MapLayer onStationClick={handleStationClick} />
      </div>

      {/* Card */}
      <Card
        sx={{
          maxWidth: 535,
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          background: 'white',
          height: '90vh', // Adjust as needed
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent sx={{ flex: '0 0 auto' }}>
          <Typography gutterBottom variant="h5" component="div">
            <strong>Canvas Across the Bay</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The Bay Area's transit hubs can often feel like sensory overload—an orchestra of sounds, a flurry of movement, and the occasional <em>unexpected</em> smell. Yet, amidst this bustling daily rhythm that connects millions across the region, there are moments of hidden artistry waiting to be discovered. From BART stations to Muni platforms, public art transforms our shared spaces into galleries on the go. These installations often go unnoticed as we rush by. How many of these hidden treasures have you encountered in your commutes? Click on an image to uncover their stories and learn more!
          </Typography>
        </CardContent>

        <div style={{ paddingLeft: '16px', paddingRight: '16px' }}>
          <Divider />
        </div>

        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          <Typography variant="body1" gutterBottom sx={{ marginRight: '12px', whiteSpace: 'nowrap' }}>
            <strong>Artwork at: </strong>
          </Typography>
          <Select
            value={selectedStation}
            onChange={(e) => setSelectedStation(e.target.value)}
            fullWidth
            size="small"
            sx={{
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'black',
              },
            }}
          >
            {stationOptions.map((station, index) => (
              <MenuItem key={index} value={station}>
                {station}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div style={{ flex: '1 1 auto', overflow: 'auto', padding: '16px' }}>
          {filteredArtData.length > 0 ? (
            filteredArtData.map((art, index) => (
              <ArtCard
                key={index}
                image={`/bartArtPics/${art.image}`}
                title={art.name}
                author={art.artistName}
                station={art.stationLocation}
                location={art.location}
              />
            ))
          ) : (
            <Typography variant="body1" align="center">
              <strong>Oops! No art available at {selectedStation} station.</strong>
            </Typography>
          )}
        </div>
      </Card>
    </div>
  );
}

export default App;
