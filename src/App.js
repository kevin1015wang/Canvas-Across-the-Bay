import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
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
import ArtDetails from './components/artDetails';

const App = () => {
  const [selectedStation, setSelectedStation] = useState('All stations');
  const [selectedArt, setSelectedArt] = useState(null);

  // Detect dark mode preference
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // Define light and dark themes
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const theme = prefersDarkMode ? darkTheme : lightTheme;

  const stationOptions = ['All stations', ...new Set([...bartStations.map((station) => station.station), ...muniStations.map((station) => station.station)])];

  const filteredArtData =
    selectedStation === 'All stations'
      ? [...bartArtData, ...muniArtData]
      : [...bartArtData, ...muniArtData].filter((art) => art.stationLocation === selectedStation);

  const handleStationClick = (stationName) => {
    setSelectedStation(stationName);
  };

  const handleArtClick = (art) => {
    setSelectedArt(art);
  };

  const handleBack = () => {
    setSelectedArt(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <div id="map" style={{ height: '100%', width: '100%' }}>
          <MapLayer onStationClick={handleStationClick} />
        </div>

        {selectedArt ? (
          <ArtDetails art={selectedArt} onBack={handleBack} />
        ) : (
          <Card
            sx={{
              maxWidth: 535,
              position: 'absolute',
              top: '20px',
              left: '20px',
              zIndex: 1000,
              background: 'background.paper',
              height: '90vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardContent sx={{ flex: '0 0 auto' }}>
              <Typography gutterBottom variant="h5" component="div">
                <strong>Canvas Across the Bay</strong>
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                The Bay Area's transit hubs can often feel like sensory overload—an orchestra of sounds, a flurry of movement, and the occasional <em>unexpected</em> smell. Yet, amidst this bustling daily rhythm that connects millions across the region, there are moments of hidden artistry waiting to be discovered. From BART stations to Muni platforms, public art transforms our shared spaces into galleries on the go. These installations often go unnoticed as we rush by. How many of these hidden treasures have you encountered in your commutes? <a href="https://evening-gem-e8a.notion.site/Canvas-Across-the-Bay-Acknowledgements-166eaa6eb8b18078824cc820465a8953?pvs=4" target="_blank" rel="noreferrer" style={{ color: prefersDarkMode ? 'white' : 'inherit' }}>Acknowledgements</a>
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
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: prefersDarkMode ? 'gray' : 'black' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: prefersDarkMode ? 'white' : 'black' },
                  '.MuiOutlinedInput-notchedOutline': { borderColor: prefersDarkMode ? 'gray' : 'black' },
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
                    onClick={() => handleArtClick(art)}
                  />
                ))
              ) : (
                <Typography variant="body1" align="center">
                  <strong>Oops! No art available at {selectedStation} station.</strong>
                </Typography>
              )}
            </div>
          </Card>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
