import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import CardImovel from "../components/CardImovel";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Home = () => {
	const navigate = useNavigate();

	const handleCardClick = (card) => {
		navigate(`/imovel/${card._id}`, { state: { card } });
	};

	const handleLogin = () => {
		navigate("/");
	};

	const [imoveis, setImoveis] = useState([]);
	const [pesquisa, setPesquisa] = useState("");

	useEffect(() => {
		if (pesquisa) {
			api.get(`/imoveis/search?descricao=${pesquisa}`)
				.then((response) => {
					setImoveis(response.data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			api.get("/imoveis")
				.then((response) => {
					setImoveis(response.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [pesquisa]);

	return (
		<div>
			<Navbar setPesquisa={setPesquisa} onLogin={handleLogin} />
			<Container maxWidth="false">
				<Grid container spacing={2}>
					{imoveis.map((card, index) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
							<div
								onClick={() => handleCardClick(card)}
								style={{ cursor: "pointer" }}
							>
								<CardImovel
									images={card.imagens}
									tipo={card.tipo}
									forma_negocio={card.forma_negocio}
									code={card.code}
									bairro={card.bairro}
									cidade={card.cidade}
									estado={card.estado}
									descricao={card.descricao}
									preco={card.valor}
								/>
							</div>
						</Grid>
					))}
				</Grid>
				<Footer />
			</Container>
		</div>
	);
};

export default Home;
