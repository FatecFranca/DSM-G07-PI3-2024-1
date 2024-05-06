import { Router } from "express";
import controller from "../controllers/funcionario.js";
import autenticacao from "../middlewares/autenticacao.js";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.retrieveAll);
router.get("/:id", controller.retrieveOne);
router.post("/login", controller.login);
router.put("/:id", autenticacao, controller.update);
router.delete("/:id", autenticacao, controller.delete);

export default router;
