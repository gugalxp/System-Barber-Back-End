import { Request, Response }from "express";
import { CheckSubscriptionService } from "../../services/haircut/CheckSubscriptionService";

class CheckSubscriptionController {
    async handle(request: Request, response: Response) {
       
        const user_id = request.user_id;
        const checkSubscriptionService = new CheckSubscriptionService();
        const status = await checkSubscriptionService.execute({user_id})

        return response.json(status); 
    }
}

export { CheckSubscriptionController }