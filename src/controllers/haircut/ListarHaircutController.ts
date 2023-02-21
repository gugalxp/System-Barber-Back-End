import { Request, Response} from "express";
import { ListarHaircutService } from "../../services/haircut/ListarHaircutService";

class ListarHaircutController {

    async handle(request: Request, response: Response) {

        const user_id = request.user_id;
        const status = request.query.status as string;
        const listarHaircutService = new ListarHaircutService();
        const listarHaircut = await listarHaircutService.execute({
            user_id,
            status
        });

        return response.json(listarHaircut);
    }
}

export { ListarHaircutController }