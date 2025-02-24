import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from '@mui/material/styles';

const AcknowledgeCard = ({ onBack }) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

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
                    <strong>Acknowledgements</strong>
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
                <Typography variant="h5" component="div">
                    <strong>Canvas Across the Bay Acknowledgements</strong>
                </Typography>

                <a href='https://www.sfmta.com/places/union-squaremarket-street-station' target="_blank" rel="noreferrer">
                    <img
                        src={`/bartArtPics/ackImageSF.jpg`}
                        alt='Acknowledgement Image'
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '275px',
                            marginTop: '16px',
                            borderRadius: '8px',
                        }}
                    />
                </a>

                <div style={{ marginTop: '8px' }} />

                <Typography variant="body2" component="div">
                    Thank you so much for visiting Canvas Across the Bay! This little project of mine is 100% not an original idea, but I wanted to build something that bridges my love for tech, public transit, art, and the Bay Area. - Kevin ❤️
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontWeight: 700, marginTop: '8px' }}>
                    Original Project Inspiration
                </Typography>

                <Typography variant="body2" component="div">
                    I was inspired to build this after seeing the winner of the 2024 MTA Open Data Challenge, Art Off the Rails by Stephanie Dang. Most of the design, functionality, and ideas were from Art Off the Rails. Highly recommend checking it out! I wanted to see something similar for the Bay Area, hence “Canvas Across the Bay”.
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontWeight: 700, marginTop: '8px' }}>
                    Art Data
                </Typography>

                <Typography variant="body2" component="div">
                    Information on art located in BART stations were sourced from BART Art Collection Inventory PDF on bart.gov.
                </Typography>

                <div style={{ marginTop: '8px' }} />

                <Typography variant="body2" component="div">
                    Information on art located in the MUNI Central Subway were sourced from the SF Arts Commission’s article on the central subway.
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontWeight: 700, marginTop: '8px' }}>
                    Images
                </Typography>

                <Typography variant="body2" component="div">
                    Images of the art were sourced from a combination of Google Street View, links from the BART Art Collection Inventory, the SF Arts Commission, and Google Images. I’ll link specific citations to image sources in the near future.
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontWeight: 700, marginTop: '8px' }}>
                    One Final Note
                </Typography>

                <Typography variant="body2" component="div">
                    This is still a huge work in progress from my winter break. More will be added in the coming days!
                </Typography>

                <div style={{ marginTop: '8px' }} />

                <Typography variant="body2" component="div">
                    Hopefully, the project helped you discover art that you might’ve missed in your commute!
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontWeight: 700, marginTop: '8px' }}>
                    Requests, Contact, Contribute more Art!
                </Typography>

                <Typography variant="body2" component="div">
                    Don’t see art from your local transit stop? Want me to take down your photo? Other inquires? Reach me at kevin1015wang@gmail.com! I’m all ears! 👋
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontWeight: 700, marginTop: '8px' }}>
                    Contributions
                </Typography>

                <Typography variant="body2" component="div">
                    Interested in adding in art, building a feature, or something else? Feel free to make a pull request in the project’s GitHub!
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AcknowledgeCard;
