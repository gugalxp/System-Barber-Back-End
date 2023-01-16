import prismaClient from "../../prisma";

interface HaircutRequest {
    user_id: string;
    status: string;
}

class ListarHaircutService {

    async execute({ user_id, status } : HaircutRequest){

        const user = await prismaClient.hairCut.findMany({
            where:{
                userId: user_id,
                status: status === 'true' ? true : false
            },
            select:{
                userId: true,
                name: true,
                price: true,
                status: true,
                id: true,
            }
        })

        return user;
    }
}

export { ListarHaircutService }