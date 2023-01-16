import prismaClient from "../../prisma";

interface UserRequest {
    user_id: string;
    name: string;
    endereco: string;
}

class UpadateUserService {
    async execute({user_id, name, endereco}: UserRequest) {

        try {
            const userAlreadyExists = await prismaClient.user.findFirst({
                where:{
                    id: user_id
                }
            });

            if (!userAlreadyExists) {
                throw new Error("Este usuario não existe");
            }

            const userUpdated = await prismaClient.user.update({
                where: {
                    id: user_id
                },
                data:{
                    name,
                    endereco
                },
                select:{
                    name: true,
                    email: true,
                    endereco: true
                }
            })

            return userUpdated;
            
        } catch (err) {
            throw new Error("Erro ao tentar atualizar dados do usuario!");
            
        }
    }
}

export { UpadateUserService };