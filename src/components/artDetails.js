import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ArtDetails = ({ art, onBack }) => {
  return (
    <Card
      sx={{
        width: 535,
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        background: 'white',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent>
        {/* Row with Back Button and Station Location */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid black',
            spacing: '8px',
            paddingBottom: '8px',
            marginBottom: '16px',
            justifyItems: 'center'
          }}
        >
          <Button
            size="small"
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
            onClick={onBack}
            sx={{ color: 'black', borderColor: 'black', marginRight: '8px' }}
          >
            Back
          </Button>
          <Typography
            variant="h7"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '80%',
            }}
          >
            <strong>{art.stationLocation} | {art.name}</strong>
          </Typography>
        </div>

        {/* Art Name */}
        <Typography variant="h8" component="div" sx={{ fontWeight: 600 }}>
          {art.stationLocation}
        </Typography>

        <Typography variant="h6" component="div">
          <strong>{art.name}</strong>
        </Typography>

        <Typography variant="h8" component="div" sx={{ fontWeight: 600 }}>
          {art.artistName}
        </Typography>

        {/* Art Image */}
        <img
          src={`/bartArtPics/${art.image}`}
          alt={art.name}
          style={{ objectFit: 'cover', width: '100%', height: '275px', marginTop: '16px', borderRadius: '8px' }}
        />
      </CardContent>
    </Card>
  );
};

export default ArtDetails;
