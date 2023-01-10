import { Request, Response} from "express";
import { CreateHaircuitService } from "../../services/haircut/CreateHaircutSerivce";

class CreateHaircutController {

    async handle(request: Request, response: Response) {

        const { name, price } = request.body;
        const user_id = request.user_id;

        console.log(user_id)

        const haircutService = new CreateHaircuitService();
        const haircut = await haircutService.execute({
           user_id,
           name,
           price 
        })
       
        return response.json(haircut);
    }
}

export { CreateHaircutController };