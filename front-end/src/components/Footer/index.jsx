import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 1, borderTop: '2px solid #e0e0e0', mt: 5 }}>
      <Container maxWidth="sx">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" color="text.secondary" align="left" gutterBottom>
              <Link href="#" color="inherit" underline="hover" sx={{ mr: 2 }} target="_blank" rel="noopener noreferrer">Ajuda</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mr: 2 }} target="_blank" rel="noopener noreferrer">Termos de uso</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mr: 2 }} target="_blank" rel="noopener noreferrer">Política de privacidade</Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mr: 2 }} target="_blank" rel="noopener noreferrer">Grupo Confiance</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'right' }}>
            <IconButton aria-label="Facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="YouTube" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </IconButton>
            <IconButton aria-label="Instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
