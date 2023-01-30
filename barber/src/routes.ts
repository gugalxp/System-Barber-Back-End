import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "../src/middlewares/isAuthenticated";
import { UpdateUserController } from "../src/controllers/user/UpdateUserController"
import { CreateHaircutController } from "../src/controllers/haircut/CreateHaircutController";
import { ListarHaircutController } from "../src/controllers/haircut/ListarHaircutController";
import { UpadateHaircutController } from "../src/controllers/haircut/UpdateHaircutController";
import { CheckSubscriptionController } from "./controllers/haircut/CheckSubscriptionController"


const router = Router();

router.post('/users', new CreateUserController().handle)

router.post('/users/login', new AuthUserController().handle)

router.get('/detalhesUserLogado', isAuthenticated, new DetailUserController().handle)

router.get('/listarHaircut', isAuthenticated, new ListarHaircutController().handle)

router.get('/check', isAuthenticated, new CheckSubscriptionController().handle)

router.put('/updateInformacoesUsuario', isAuthenticated, new UpdateUserController().handle)

router.put('/updateHaircut', isAuthenticated, new UpadateHaircutController().handle)


router.post('/haircut', isAuthenticated, new CreateHaircutController().handle)


export { router };

//ts-node-dev --transpile-only src/server.ts

