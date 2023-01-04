import  PrismaClient  from "../../prisma/index";
import { hash } from "bcryptjs";

interface userRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({name, email, password}: userRequest) {

        if (!email) {
            throw new Error("O campo e-mail é obrigatório");
        }
        
        const userAlreadyExist = await PrismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if (userAlreadyExist) {
            throw new Error("Esse e-mail já está cadastrado");
        }

        const passwordHash = await hash(password, 8);
    
        const user = await PrismaClient.user.create({
            data:{
                name: name,
                email: email, 
                password: passwordHash
            },
            select:{
                id: true,
                name:true,
                email:true,
                created_at: true,
	            updated_at: true
            }
        });

        return user;
    }
}

export {CreateUserService}