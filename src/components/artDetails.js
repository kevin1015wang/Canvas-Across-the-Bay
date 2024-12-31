import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from '@mui/material/styles';

const ArtDetails = ({ art, onBack }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        width: 535,
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        backgroundColor: 'background.paper',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: theme.shadows[3],
      }}
    >
      {/* Back Button and Station Location */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: `1px solid ${theme.palette.divider}`,
          paddingBottom: '12px',
          paddingLeft: '12px',
          paddingTop: '12px',
        }}
      >
        <Button
          size="small"
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          onClick={onBack}
          sx={{
            color: 'text.primary',
            borderColor: isDarkMode ? 'white' : 'divider',
            marginRight: '8px',
            '&:hover': {
              borderColor: isDarkMode ? 'white' : 'text.primary',
            },
          }}
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
            color: 'text.primary',
          }}
        >
          <strong>{art.stationLocation} | {art.name}</strong>
        </Typography>
      </div>

      {/* Scrollable Content */}
      <CardContent
        sx={{
          overflowY: 'auto',
          flex: '1 1 auto',
          color: 'text.primary',
        }}
      >
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
        <a href={art.picLink} target="_blank" rel="noreferrer">
          <img
            src={`/bartArtPics/${art.image}`}
            alt={art.name}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '275px',
              marginTop: '16px',
              borderRadius: '8px',
            }}
          />
        </a>

        <Typography variant="caption" component="p" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
          {art.picAttribution}
        </Typography>

        {/* Art Location */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, marginTop: '8px' }}>
          Where is This?
        </Typography>

        <Typography variant="body2" component="div">
          {art.location}
        </Typography>

        <Typography variant="h6" component="div" sx={{ fontWeight: 700, marginTop: '8px' }}>
          About the Project
        </Typography>

        <Typography variant="body2" component="div">
          {art.description} -{' '}
          <a href={art.descriptionLink} target="_blank" rel="noreferrer">
            {art.descriptionSource}
          </a>
        </Typography>

        <Typography variant="h6" component="div" sx={{ fontWeight: 700, marginTop: '8px' }}>
          About the Artist
        </Typography>

        {art.artistStory.split('\n').map((paragraph, index) => (
          <Typography key={index} variant="body2" component="div" sx={{ marginBottom: '8px' }}>
            {paragraph}
            {index === art.artistStory.split('\n').length - 1 && (
              <>
                {' - '}
                <a href={art.artistStoryLink} target="_blank" rel="noreferrer">
                  {art.artistStorySource}
                </a>
              </>
            )}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ArtDetails;
