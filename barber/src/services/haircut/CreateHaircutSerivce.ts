import prismaClient from "../../prisma";

interface HaircutRequest {
    user_id: string;
    name: string;
    price: number;
}

class CreateHaircuitService {
     async execute({user_id, name, price}: HaircutRequest) {

        if (!name || !price) {
            throw new Error("O campo name ou o campo price está vazio.");
        }

        const myHaircuts = await prismaClient.hairCut.count({
            where:{
                userId: user_id,
            }
        });

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            include:{
                subscriptions: true
            }
        });

        
        if (myHaircuts >= 3 && user?.subscriptions?.status ==! 'active') {
            throw new Error("Não autorizado!");
        }

        const haircuit = await prismaClient.hairCut.create({
            data: {
                name: name,
                price: price,
                userId: user_id,
            }
        });

        return haircuit;
     }
}

export { CreateHaircuitService }