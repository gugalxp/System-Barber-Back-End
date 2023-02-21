import { Request, Response } from "express";
import { ListScheduleService } from "../../services/schedule/ListScheduleService"

class ListScheduleController {
    async handle (request: Request, response: Response) {
        const user_id = request.user_id;

        const listScheduleService = new ListScheduleService();
        const listSchedule = await listScheduleService.execute({
            user_id
        })

        return response.json(listSchedule);
    }
}

export { ListScheduleController }