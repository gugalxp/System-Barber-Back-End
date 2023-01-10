import { Request, Response} from "express";
import { CreateHaircuitService } from "../../services/haircut/CreateHaircutSerivce";

class CreateHaircutController {
    async handle(request: Request, response: Response) {

        const { name, price } = request.body;
        const user_id = request.user_id;

        const createHaircutSerivce = new CreateHaircuitService();
        const haircut = await createHaircutSerivce.execute({
            user_id,
            name, 
            price
        });

        return response.json(haircut);

    }
}

export { CreateHaircutController }