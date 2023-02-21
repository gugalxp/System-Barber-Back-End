import prismaClient from "../../prisma";

interface RequestHaircut {
    user_id: string;
    name: string;
    price: number;
    status: boolean | string
    haircut_id: string;
}

class UpadateHaircutService {

    async execute({ user_id, name, price, status = true, haircut_id} : RequestHaircut) {

        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            include: {
                subscriptions: true
            }
        })

        if (user?.subscriptions?.status !== 'active') {
            throw new Error("Não autorizado!"); 
        }

        try {
         
            const haircutUpdate = await prismaClient.hairCut.update({
                where:{
                    id: haircut_id
                },
                data: {
                    name: name,
                    price: price,
                }
            })
    
            return haircutUpdate;

        } catch (error) {
            console.log(error)
        }

      
    }
}

export { UpadateHaircutService }