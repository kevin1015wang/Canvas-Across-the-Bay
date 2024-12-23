import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import TrainIcon from '@mui/icons-material/Train';
import LocationIcon from '@mui/icons-material/LocationOn';

export default function ArtCard({ 
    image, 
    title, 
    author, 
    station, 
    location 
}) {
    return (
        <Card sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Box sx={{ width: '200px', paddingLeft: '10px' }}>
                <CardMedia
                    component="img"
                    sx={{
                        objectFit: 'cover',
                        borderRadius: '24px',
                    }}
                    image={image}
                    alt="Art Image"
                />
            </Box>

            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography 
                    variant="body2" 
                    sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', paddingBottom: '5px' }}
                >
                    <PersonIcon sx={{ mr: 1 }} />
                    {author}
                </Typography>
                <Typography 
                    variant="body2" 
                    sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', paddingBottom: '5px' }}
                >
                    <TrainIcon sx={{ mr: 1 }} />
                    {station}
                </Typography>
                <Typography 
                    variant="body2" 
                    sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}
                >
                    <LocationIcon sx={{ mr: 1 }} />
                    {location}
                </Typography>
            </CardContent>
        </Card>
    );
}
