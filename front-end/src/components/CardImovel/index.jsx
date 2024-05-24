import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

export default function ImovelCard({ images = [], tipo, code, bairro, cidade, estado, descricao, preco }) {
  return (
    <Card sx={{ maxWidth: 500, margin: '1em' }}>
      <Carousel autoPlay={false} navButtonsAlwaysVisible>
        {images.map((image, index) => (
          <CardMedia
            key={index}
            component="img"
            height="200"
            image={image}
            alt={`Imagem ${index + 1}`}
          />
        ))}
      </Carousel>
      <CardContent sx={{ paddingBottom: '0 !important', position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="overline" display="block" gutterBottom>
            {tipo}
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            {code}
          </Typography>
        </Box>
        <Typography variant="h6" component="div">
          {bairro}, {cidade}, {estado}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {descricao}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Preço (R$) {preco}
        </Typography>
      </CardContent>
    </Card>
  );
}
