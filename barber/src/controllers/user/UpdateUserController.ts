import { Request, Response } from "express";
import { UpadateUserService } from "../../services/user/UpadateUserService";

class UpdateUserController {

    async handle(request: Request, response: Response) {

        const { name, endereco } = request.body;
        const user_id = request.user_id;

        const updateUserService = new UpadateUserService();
        const user = await updateUserService.execute({
           user_id,
           name,
           endereco 
        })
        console.log(user);
        return response.json(user);
    }
}

export { UpdateUserController };