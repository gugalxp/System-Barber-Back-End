import { Request, Response } from "express";
import { CountHaircutService } from "../../services/haircut/CountHaircutService";

class CountHaircutController {
    async handle (req: Request, res: Response) {
       
        const user_id = req.user_id;

        const countHaircut = new CountHaircutService();
        
        const count = await countHaircut.execute({
            user_id
        });

        return res.json(count);
    }
}

export { CountHaircutController };