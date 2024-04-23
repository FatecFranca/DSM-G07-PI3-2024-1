import mongoose from "mongoose";

const esquema = mongoose.Schema({
    descricao: { type: String, required: true },
    descricao_extendida: { type: String, required: true },
    forma_negocio: { type: String, required: true }, // aluguel ou venda
    valor: { type: Number, required: true },
    condominio: { type: Number, required: false },
    num_quarto: { type: Number, required: true },
    num_banheiro: { type: Number, required: true },
    num_garagem: { type: Number, required: true },
    area_terreno: { type: Number, required: true },
    area_construida: { type: Number, required: true },
    cep: { type: String, required: true },
    logradouro: { type: String, required: true },
    num_casa: { type: String, required: true },
    bairro: { type: String, required: true },
    complemento: { type: String, required: false },
    municipio: { type: String, required: true },
    uf: { type: String, required: true },
    tipo: { type: String, required: true }, // casa ou apartamento
    imobiliaria: {
        type: mongoose.ObjectId,
        ref: "Imobiliaria",
        required: true,
    },
    imagens: [
        {
            endereco: { type: String, required: true },
        },
    ],
});

export default mongoose.model("Imovel", esquema, "imoveis");
