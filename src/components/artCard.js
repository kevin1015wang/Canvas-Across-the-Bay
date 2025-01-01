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
    location,
    onClick,
}) {
    return (
        <Card onClick={onClick} sx={{
            display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3 ease', '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: 6,
            },
        }}>
            <Box sx={{ width: { xs: '50%', md: '200px' }, height: '130px', paddingLeft: '10px', overflow: 'hidden', flexShrink: 0 }}>
                <CardMedia
                    component="img"
                    sx={{
                        width: { xs: '100%', md: '200px' },
                        height: { xs: '100%', md: '130px' },
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                    image={image}
                    alt="Art Image"
                />
            </Box>

            <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                    <strong>{title}</strong>
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
