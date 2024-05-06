import Imovel from "../models/Imovel.js";

const controller = {}; // Objeto vazio

controller.create = async function (req, res) {
    try {
        await Imovel.create(req.body);

        res.status(201).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.retrieveAll = async function (req, res) {
    try {
        const query = Imovel.find().sort({ descricao: "asc" });

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
        const query = Imovel.findById(req.params.id);

        if ("pop_imobiliaria" in req.query) query.populate("imobiliaria");

        const result = await query.exec();

        result ? res.send(result) : res.status(404).end();
    } catch (error) {
        console.error(error);
        // HTTP 500: Internal Server Error
        res.status(500).end();
    }
};

controller.retrieveSearch = async function (req, res) {
    try {
        const reqKeys = Object.keys(req.query);

        for (const key of reqKeys) {
            if (req.query[key].includes("--")){
                const [num1, num2] = req.query[key].split('--');
                req.query[key] = { $gte: num1, $lte: num2 };
            }
        }

        const query = Imovel.find(req.query).sort({ descricao: "asc" });

        const result = await query.exec();

        res.send(result);
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.update = async function (req, res) {
    try {
        const result = await Imovel.findByIdAndUpdate(req.params.id, req.body);

        result ? res.status(204).end() : res.status(404).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.delete = async function (req, res) {
    try {
        const result = await Imovel.findByIdAndDelete(req.params.id);
        result ? res.status(204).end() : res.status(404).end();
    } catch (error) {
        console.error(error);

        res.status(500).end();
    }
};

controller.createImagem = async function (req, res) {
    try {
        const imovel = await Imovel.findById(req.params.id);

        if (!imovel) return res.status(404).end();

        imovel.imagens.push(req.body);
        imovel.markModified("imagens");
        await imovel.save();

        return res.status(201).end();
    } catch {
        console.error(error);

        res.status(500).end();
    }
};

controller.retrieveAllImagens = async function (req, res) {
    try {
        const imovel = await Imovel.findById(req.params.id);

        !imovel ? res.status(404).end() : res.send(imovel.imagens);
    } catch {
        console.error(error);

        res.status(500).end();
    }
};

controller.retrieveOneImagem = async function (req, res) {
    try {
        const imovel = await Imovel.findById(req.params.id);

        if (!imovel) return res.status(404).end();

        const imagem = imovel.imagens.id(req.params.imagemId);

        imagem ? res.send(imagem) : res.status(404).end();
    } catch {
        console.error(error);
        
        res.status(500).end();
    }
};

controller.updateImagem = async function (req, res) {
    try {
        const imovel = await Imovel.findById(req.params.id);

        if (!imovel) return res.status(404).end();

        for (let field in req.body) {
            imovel.imagens.id(req.params.imagemId)[field] = req.body[field];
        }
        imovel.markModified("imagens");

        await imovel.save();

        res.status(204).end();
    } catch {
        console.error(error);

        res.status(500).end();
    }
};

controller.deleteImagem = async function (req, res) {
    try {
        const imovel = await Imovel.findById(req.params.id);

        if (!imovel) return res.status(404).end();

        if (!imovel.imagens.id(req.params.imagemId)) return res.status(404).end();

        imovel.imagens.id(req.params.imagemId).deleteOne();
        imovel.markModified("imagens");

        await imovel.save();

        res.status(204).end();
    } catch {
        console.error(error);

        res.status(500).end();
    }
};

export default controller;
