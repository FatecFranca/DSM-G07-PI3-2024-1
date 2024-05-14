import Funcionario from "../models/Funcionario.js";
import jsonwebtoken from "jsonwebtoken";

const controller = {};

controller.create = async function (req, res) {
    try {
        await Funcionario.create(req.body);

        res.status(201).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.retrieveAll = async function (req, res) {
    try {
        const query = Funcionario.find().sort({ nome: "asc" });

        if ("pop_imobiliaria" in req.query) query.populate("imobiliaria");

        const result = await query.exec();

        res.send(result);
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.retrieveOne = async function (req, res) {
    try {
        const query = Funcionario.findById(req.params.id);

        if ("pop_imobiliaria" in req.query) query.populate("imobiliaria");

        const result = await query.exec();

        result ? res.send(result) : res.status(404).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.login = async function (req, res) {
    const { login, senha } = req.body;

    try {
        const query = Funcionario.findOne({ login, senha });

        let funcionario = (await query.exec())?.toObject();

        if (funcionario) {
            const token = jsonwebtoken.sign({}, process.env.SECRET, {
                subject: funcionario._id.toString(),
                expiresIn: "3d",
            });

            delete funcionario.senha;

            return res.status(200).json({ funcionario, token });
        }

        return res.status(401).json({ message: "Login ou senha incorretos" });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};

controller.update = async function (req, res) {
    try {
        const result = await Funcionario.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        result ? res.status(204).end() : res.status(404).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.delete = async function (req, res) {
    try {
        const result = await Funcionario.findByIdAndDelete(req.params.id);

        result ? res.status(204).end() : res.status(404).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

export default controller;
