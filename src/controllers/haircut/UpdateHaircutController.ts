import { Request, Response} from "express";
import { UpadateHaircutService } from "../../services/haircut/UpdateHaircutService";

class UpadateHaircutController {

    async handle(request: Request, response: Response) {

        const user_id = request.user_id;
        const { name, price, status, haircut_id } = request.body;    

        const upadateHaircutService = new UpadateHaircutService();
        const updateHaircuts = await upadateHaircutService.execute({
            user_id,
            name,
            price,
            status,
            haircut_id
        });

        return response.json(updateHaircuts);
    }
}

export { UpadateHaircutController }