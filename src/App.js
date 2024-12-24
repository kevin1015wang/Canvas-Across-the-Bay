import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapLayer from './components/mapLayer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArtCard from './components/artCard';
import bartArtData from './data/bartArtData';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { bartStations } from './data/bartStations';

const center = [51.505, -0.09];

const App = () => {
  const [selectedStation, setSelectedStation] = useState('All stations');

  const stationOptions = ['All stations', ...new Set(bartStations.map((station) => station.station))];

  const filteredArtData =
    selectedStation === 'All stations'
      ? bartArtData
      : bartArtData.filter((art) => art.stationLocation === selectedStation);

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
            Oftentimes, the subway/metro stations in the Bay are a sensory overload. There's a caterwauling of noises, a blur of visual spectacles, and occasionally <em>suspicious</em> smells. Within this dance that millions of Bay Area commuters two step in everyday, there are hidden moments of free (well $2.90 really) art that twirls around us. We pass by so much art every day without even realizing it. How many of these have you encountered on your commutes before? Click on an image to read their description page and learn more!
          </Typography>
        </CardContent>

        <div style={{ paddingLeft: '16px', paddingRight: '16px' }}>
          <Divider />
        </div>

        <div style={{ padding: '16px' }}>
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
