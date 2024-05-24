import React from 'react';
import Navbar from "../components/NavBar";
import CardImovel from "../components/CardImovel";
import { Container } from "@mui/system";
import { Grid } from '@mui/material';
import Footer from "../components/Footer"; 

const cardsData = [
    {
        images: [
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200'
        ],
        tipo: 'Apartamento',
        code: 'CODE-1234',
        bairro: 'Bairro A',
        cidade: 'Cidade X',
        estado: 'Estado Y',
        descricao: 'Venda, Locação',
        preco: '500.000,00'
    },
    {
        images: [
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200'
        ],
        tipo: 'Casa',
        code: 'CODE-5678',
        bairro: 'Bairro B',
        cidade: 'Cidade Y',
        estado: 'Estado Z',
        descricao: 'Venda',
        preco: '750.000,00'
    },
    {
        images: [
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200'
        ],
        tipo: 'Cobertura',
        code: 'CODE-9012',
        bairro: 'Bairro C',
        cidade: 'Cidade Z',
        estado: 'Estado X',
        descricao: 'Locação',
        preco: '1.000.000,00'
    },
    {
        images: [
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200'
        ],
        tipo: 'Chácara',
        code: 'CODE-3456',
        bairro: 'Bairro D',
        cidade: 'Cidade W',
        estado: 'Estado V',
        descricao: 'Venda',
        preco: '1.500.000,00'
    },
    {
        images: [
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200'
        ],
        tipo: 'Cobertura',
        code: 'CODE-9012',
        bairro: 'Bairro C',
        cidade: 'Cidade Z',
        estado: 'Estado X',
        descricao: 'Locação',
        preco: '1.000.000,00'
    },
    {
        images: [
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200'
        ],
        tipo: 'Cobertura',
        code: 'CODE-9012',
        bairro: 'Bairro C',
        cidade: 'Cidade Z',
        estado: 'Estado X',
        descricao: 'Locação',
        preco: '1.000.000,00'
    },
    {
        images: [
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200'
        ],
        tipo: 'Cobertura',
        code: 'CODE-9012',
        bairro: 'Bairro C',
        cidade: 'Cidade Z',
        estado: 'Estado X',
        descricao: 'Locação',
        preco: '1.000.000,00'
    },
    {
        images: [
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200',
            'https://via.placeholder.com/500x200'
        ],
        tipo: 'Cobertura',
        code: 'CODE-9012',
        bairro: 'Bairro C',
        cidade: 'Cidade Z',
        estado: 'Estado X',
        descricao: 'Locação',
        preco: '1.000.000,00'
    }
];

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth="false">
                <Grid container spacing={2}>
                    {cardsData.map((card, index) => (
                        <Grid item xs={3} key={index}>
                            <CardImovel 
                                images={card.images}
                                tipo={card.tipo}
                                code={card.code}
                                bairro={card.bairro}
                                cidade={card.cidade}
                                estado={card.estado}
                                descricao={card.descricao}
                                preco={card.preco}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Footer />
            </Container>
        </div>
    );
}
