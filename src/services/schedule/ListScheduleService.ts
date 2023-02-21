import prismaClient from "../../prisma";
interface ListScheduleRequest {
    user_id: string;
}

class ListScheduleService {
    async execute({ user_id } : ListScheduleRequest) {

        const schedule = await prismaClient.service.findMany({
            where: {
                userId: user_id
            },
            select: {
                id: true,
                customer: true,
                haircut: true
            }
        })

        return schedule;
    }
}

export { ListScheduleService }
