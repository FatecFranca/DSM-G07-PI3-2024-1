import { Router } from "express";
import controller from "../controllers/imovel.js";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.retrieveAll);
router.get("/:id", controller.retrieveOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
router.post('/:id/imagens', controller.createImagem);
router.get('/:id/imagens', controller.retrieveAllImagens);
router.get('/:id/imagens/:imagemId', controller.retrieveOneImagem);
router.put('/:id/imagens/:imagemId', controller.updateImagem);
router.delete('/:id/imagens/:imagemId', controller.deleteImagem);

export default router;
