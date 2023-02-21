import { Request, Response } from "express";
import { NewScheduleService } from "../../services/schedule/NewScheduleService";

class NewScheduleController {
    async handle(request: Request, response: Response) {
        const { haircut_id, customer } = request.body;
        const userId = request.user_id;

        const newScheduleService = new NewScheduleService();
        
        const newSchedule = await newScheduleService.execute({
          userId,
          haircut_id, 
          customer 
        })    

        return response.json(newSchedule);
    }
}

export { NewScheduleController }