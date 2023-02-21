import prismaClient from "../../prisma";

interface NewScheduleRequest {
    customer: string;
    userId: string;
    haircut_id: string;
}

class NewScheduleService {

    async execute({ userId, haircut_id, customer} : NewScheduleRequest) {
      if (!customer || !haircut_id) {
          throw new Error("Não foi possível efetuar o agendamento.");
      }

      const schedule = await prismaClient.service.create({
        data: {
          customer, 
          haircut_id, 
          userId
        }
      })

      return schedule;
    }
}

export { NewScheduleService }