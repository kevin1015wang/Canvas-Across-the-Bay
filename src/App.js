import logo from './logo.svg';
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

const center = [51.505, -0.09];

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Map */}
      <div id="map" style={{ height: '100%', width: '100%' }}>
        <MapLayer />
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

        <div style={{ flex: '1 1 auto', overflow: 'auto', padding: '16px' }}>
          {bartArtData.map((art, index) => (
            <ArtCard
              key={index}
              image={`/bartArtPics/${art.image}`}
              title={art.name}
              author={art.artistName}
              station={art.stationLocation}
              location={art.location}
            />
          ))}
        </div>
      </Card>

    </div>
  );
}

export default App;
