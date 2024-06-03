import React, { useState } from 'react';
import Navbar from "../components/NavBar";
import CardImovel from "../components/CardImovel";
import { Container } from "@mui/system";
import { Grid } from '@mui/material';
import Footer from "../components/Footer"; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

const cardsData = [
    {
        id: 1,
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
        preco: '500.000,00',
        info: 'Informações'
    },
    {
        id: 2,
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
        preco: '750.000,00',
        info: 'Informações'
    },
    {
        id: 3,
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
        preco: '1.000.000,00',
        info: 'Informações'
    },
    {
        id: 4,
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
        preco: '1.500.000,00',
        info: 'Informações'
    },
    {
        id: 5,
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
        preco: '1.000.000,00',
        info: 'Informações'
    },
    {
        id: 6,
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
        preco: '1.000.000,00',
        info: 'Informações'
    },
    {
        id: 7,
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
        preco: '1.000.000,00',
        info: 'Informações'
    },
    {
        id: 8,
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
        preco: '1.000.000,00',
        info: 'Informações'
    }
];

const handleCardClick = (card) => {
    navigate(`/imovel/${card.id}`, { state: { card } });
};

const handleLogin = () => {
    navigate('/');
};

const filteredCardsData = cardsData.filter((card) => {
    return (
        card.tipo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.bairro.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.cidade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.estado.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.descricao.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.preco.toString().includes(searchQuery.toLowerCase())
    );
});

return (
    <div>
        <Navbar onSearch={setSearchQuery} onLogin={handleLogin} />
        <Container maxWidth="false">
            <Grid container spacing={2}>
                {filteredCardsData.map((card, index) => (
                    <Grid item xs={3} key={index}>
                        <div onClick={() => handleCardClick(card)} style={{ cursor: 'pointer' }}>
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
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Footer fixed />
        </Container>
    </div>
);
}

export default Home;