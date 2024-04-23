import Imobiliaria from "../models/Imobiliaria.js";

const controller = {};

controller.create = async function (req, res) {
    try {
        const result = await Imobiliaria.create(req.body);

        res.status(201).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.retrieveAll = async function (req, res) {
    try {
        const result = await Imobiliaria.find().sort({ nome_empresarial: "asc" });

        res.send(result);
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.retrieveOne = async function (req, res) {
    try {
        const result = await Imobiliaria.findById(req.params.id);

        result ? res.send(result) : res.status(404).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.update = async function (req, res) {
    try {
        const result = await Imobiliaria.findByIdAndUpdate(
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
        const result = await Imobiliaria.findByIdAndDelete(req.params.id);

        result ? res.status(204).end() : res.status(404).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

export default controller;
