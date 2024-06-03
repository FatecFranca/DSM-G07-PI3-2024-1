import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grid, Typography, Button, Paper } from '@mui/material';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel from 'react-material-ui-carousel';

const Imovel = () => {
    const location = useLocation();
    const { card } = location.state;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Container component="main" sx={{ flexGrow: 1, marginTop: '2em' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Carousel autoPlay={false} navButtonsAlwaysVisible>
                            {card.images.map((image, index) => (
                                <img 
                                    key={index} 
                                    src={image} 
                                    alt={`Imagem ${index + 1}`} 
                                    style={{ width: '100%', height: 'auto', maxHeight: '700px' }} 
                                />
                            ))}
                        </Carousel>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Paper sx={{ padding: '3em', height: '100%' }}>
                            <Typography variant="h4" gutterBottom>
                                {card.tipo}
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                {card.descricao}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Código:</strong> {card.code}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Estado:</strong> {card.estado}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Cidade:</strong> {card.cidade}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Bairro:</strong> {card.bairro}
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                <strong>Preço (R$):</strong> {card.preco}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                            <strong>DESCRIÇÃO</strong>{card.info}
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ marginTop: '2em', padding: '1em 2em', fontSize: '1.2em' }}>
                                Contatar corretor
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default Imovel;
