import mongoose from "mongoose";

const schema = mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true, index: { unique: true } },
    inicio_expediente: { type: Date, required: false },
    fim_expediente: { type: Date, required: false },
    telefone: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    imobiliaria: {
        type: mongoose.ObjectId,
        ref: "Imobiliaria",
        required: true,
    },
});

export default mongoose.model("Corretor", schema, "corretores");
