import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "../src/middlewares/isAuthenticated";
import { UpdateUserController } from "../src/controllers/user/UpdateUserController"
import { CreateHaircutController } from "../src/controllers/haircut/CreateHaircutController";
const router = Router();

router.post('/users', new CreateUserController().handle)

router.post('/users/login', new AuthUserController().handle)

router.get('/detalhesUserLogado', isAuthenticated, new DetailUserController().handle)

router.put('/updateInformacoesUsuario', isAuthenticated, new UpdateUserController().handle)

router.post('/haircut', new CreateHaircutController().handle)


export { router };

//ts-node-dev --transpile-only src/server.ts

