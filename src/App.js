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
          maxWidth: 345,
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1000, 
          background: 'white',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Canvas Across the Bay
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Oftentimes, the subway/metro stations in the Bay are a sensory overload. There's a caterwauling of noises, a blur of visual spectacles, and occasionally <em>suspicious</em> smells. Within this dance that millions of Bay Area commuters two step in everyday, there are hidden moments of free (well $2.90 really) art that twirls around us. We pass by so much art every day without even realizing it. How many of these have you encountered on your commutes before? Click on an image to read their description page and learn more!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
