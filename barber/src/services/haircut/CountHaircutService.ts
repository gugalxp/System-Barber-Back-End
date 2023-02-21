import prismaClient from "../../prisma";

interface CountRequest {
    user_id: string;
}

class CountHaircutService {
    async execute({ user_id }: CountRequest) {

        const count = await prismaClient.hairCut.count({
            where: { 
                userId: user_id
            }
        })

        return count;
    }
}

export { CountHaircutService }