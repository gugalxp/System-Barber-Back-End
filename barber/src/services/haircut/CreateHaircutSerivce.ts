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

        const haircuit = await prismaClient.hairCut.create({
            data: {
                name: name,
                price: price,
                user_id: user_id,
            }
        });

        return haircuit;
     }
}

export { CreateHaircuitService }