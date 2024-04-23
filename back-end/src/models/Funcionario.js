import mongoose from "mongoose";

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    login: { type: String, required: true },
    senha: { type: String, required: true },
    imobiliaria: {
        type: mongoose.ObjectId,
        ref: "Imobiliaria",
        required: true,
    },
});

export default mongoose.model("Funcionario", esquema, "funcionarios");
