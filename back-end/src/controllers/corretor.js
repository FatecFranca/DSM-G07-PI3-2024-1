import Corretor from "../models/Corretor.js";

const controller = {};

controller.create = async function (req, res) {
    try {
        await Corretor.create(req.body);

        res.status(201).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.retrieveAll = async function (req, res) {
    try {
        const query = Corretor.find().sort({ nome: "asc" });

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
        const query = Corretor.findById(req.params.id);

        if ("pop_imobiliaria" in req.query) query.populate("imobiliaria");

        const result = await query.exec();

        result ? res.send(result) : res.status(404).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.update = async function (req, res) {
    try {
        const result = await Corretor.findByIdAndUpdate(
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
        const result = await Corretor.findByIdAndDelete(req.params.id);

        result ? res.status(204).end() : res.status(404).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

export default controller;
