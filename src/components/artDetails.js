import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShareIcon from '@mui/icons-material/Share';
import { useTheme } from '@mui/material/styles';

const ArtDetails = ({ art, onBack }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const handleShare = async () => {
    const artSlug = art.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const shareUrl = `${window.location.origin}${window.location.pathname}?station=${encodeURIComponent(art.stationLocation)}&art=${artSlug}`;
    
    try {
      // Try to use modern clipboard API
      await navigator.clipboard.writeText(shareUrl);
      setShowCopiedMessage(true);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowCopiedMessage(true);
    }
  };

  return (
    <Card
      sx={{
        width: { xs: '100vw', md: 535 },
        position: 'absolute',
        top: { xs: 0, md: '20px' }, 
        left: { xs: 0, md: '20px' }, 
        zIndex: 1000,
        backgroundColor: 'background.paper',
        height: { xs: '100vh', md: '90vh' },
        display: 'flex',
        flexDirection: 'column',
        boxShadow: theme.shadows[3],
        borderRadius: { xs: 0, md: '7px' },
      }}
    >
      {/* Back Button, Station Location, and Share Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.divider}`,
          paddingBottom: '12px',
          paddingLeft: '12px',
          paddingRight: '12px',
          paddingTop: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h8" component="div" sx={{ fontWeight: 600 }}>
            {art.stationLocation}
          </Typography>
          <Tooltip title="Share this art piece">
            <IconButton
              onClick={handleShare}
              size="small"
              sx={{
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ShareIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>

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
          <a href={art.descriptionLink} target="_blank" rel="noreferrer" style={{ color: isDarkMode ? 'white' : 'inherit' }}>
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
                <a href={art.artistStoryLink} target="_blank" rel="noreferrer" style={{ color: isDarkMode ? 'white' : 'inherit' }}>
                  {art.artistStorySource}
                </a>
              </>
            )}
          </Typography>
        ))}
      </CardContent>
      
      {/* Success message when link is copied */}
      <Snackbar
        open={showCopiedMessage}
        autoHideDuration={3000}
        onClose={() => setShowCopiedMessage(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowCopiedMessage(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default ArtDetails;
