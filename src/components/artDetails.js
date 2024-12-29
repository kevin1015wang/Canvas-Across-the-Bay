import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ArtDetails = ({ title, onBack }) => {
  return (
    <Card
      sx={{
        maxWidth: 535,
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
        <Typography gutterBottom variant="h5" component="div">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          More details about the artwork will go here.
        </Typography>
      </CardContent>
      <div style={{ padding: '16px' }}>
        <button onClick={onBack} style={{ cursor: 'pointer' }}>
          Back to Art List
        </button>
      </div>
    </Card>
  );
};

export default ArtDetails;
