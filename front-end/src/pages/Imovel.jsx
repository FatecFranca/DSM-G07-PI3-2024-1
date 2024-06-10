import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Typography, Button, Paper } from "@mui/material";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Carousel from "react-material-ui-carousel";

const Imovel = () => {
	const location = useLocation();
	const { card } = location.state;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				//minHeight: "100vh",
			}}
		>
			<Navbar />
			<Container component="main" sx={{ flexGrow: 1, marginTop: "2em" }}>
				<Grid container spacing={4}>
					<Grid
						item
						xs={12}
						md={7}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-center",
						}}
					>
						<Carousel autoPlay={false} navButtonsAlwaysVisible>
							{card.imagens.map((image, index) => (
								<img
									key={index}
									src={image.endereco}
									alt={`Imagem ${index + 1}`}
									style={{
										width: "100%",
										maxHeight: "700px",
									}}
								/>
							))}
						</Carousel>
					</Grid>
					<Grid
						item
						xs={12}
						md={5}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							textAlign: "justify",
						}}
					>
						<Paper sx={{ padding: "3em", height: "100%" }}>
							<Typography variant="h4" gutterBottom>
								{card.tipo[0].toUpperCase() +
									card.tipo.substring(1)}
							</Typography>
							<Typography variant="h5" gutterBottom>
								{card.descricao}
							</Typography>
							<Typography variant="h6" gutterBottom>
								{card.forma_negocio[0].toUpperCase() +
									card.forma_negocio.substring(1)}
							</Typography>
							<Typography variant="h6" gutterBottom>
								<strong>DESCRIÇÃO:</strong>
								<br />
								{card.descricao_extendida}
							</Typography>
							<hr />
							<Typography variant="h6" gutterBottom>
								<strong>Informações:</strong>
							</Typography>
							<Typography variant="body1" gutterBottom>
								<strong>Nº Banheiros:</strong>{" "}
								{card.num_banheiro},{" "}
								<strong>Vagas na Garagem:</strong>{" "}
								{card.num_garagem}, <strong>Nº Quartos:</strong>{" "}
								{card.num_quarto}
							</Typography>

							<br />

							<Typography variant="body1" gutterBottom>
								<strong>Endereço:</strong> {card.logradouro},{" "}
								{card.num_casa}
							</Typography>
							<Typography variant="body1" gutterBottom>
								<strong>CEP:</strong> {card.cep}
							</Typography>
							<Typography variant="body1" gutterBottom>
								<strong>Bairro:</strong> {card.bairro}
							</Typography>
							<Typography variant="body1" gutterBottom>
								<strong>Cidade:</strong> {card.municipio} /{" "}
								{card.uf}
							</Typography>

							<hr />
							<br />

							<Typography variant="h5" gutterBottom>
								<strong>Preço (R$):</strong>{" "}
								{card.valor.toFixed(2).replace(".", ",")}
							</Typography>

							<Button
								variant="contained"
								color="primary"
								sx={{
									marginTop: "2em",
									padding: "1em 2em",
									fontSize: "1em",
								}}
								onClick={() => {
									window.open(
										"https://wa.me/551140028922?text=Ol%C3%A1%2C+tenho+interesse+no+im%C3%B3vel",
										"_blank"
									);
								}}
							>
								Contatar corretor
							</Button>
						</Paper>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
};

export default Imovel;
