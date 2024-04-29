import { Router } from "express";
import controller from "../controllers/imovel.js";
import autenticacao from "../middlewares/autenticacao.js";

const router = Router();

router.post("/", autenticacao, controller.create);
router.get("/", controller.retrieveAll);
router.get("/:id", controller.retrieveOne);
router.put("/:id", autenticacao, controller.update);
router.delete("/:id", autenticacao, controller.delete);
router.post('/:id/imagens', autenticacao, controller.createImagem);
router.get('/:id/imagens', controller.retrieveAllImagens);
router.get('/:id/imagens/:imagemId', controller.retrieveOneImagem);
router.put('/:id/imagens/:imagemId', autenticacao, controller.updateImagem);
router.delete('/:id/imagens/:imagemId', autenticacao, controller.deleteImagem);

export default router;
