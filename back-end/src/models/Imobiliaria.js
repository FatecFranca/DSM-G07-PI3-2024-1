import mongoose from "mongoose";

const schema = mongoose.Schema({
    cnpj: { type: String, required: true, index: { unique: true } },
    nome_empresarial: { type: String, required: true },
    nome_fantasia: { type: String, required: false },
    cep: { type: String, required: false },
    logradouro: { type: String, required: false },
    num_casa: { type: String, required: false },
    bairro: { type: String, required: false },
    complemento: { type: String, required: false },
    municipio: { type: String, required: false },
    uf: { type: String, required: false },
    telefone: { type: String, required: false },
    email: { type: String, required: false, index: { unique: true } },
});

export default mongoose.model("Imobiliaria", schema, "imobiliarias");
