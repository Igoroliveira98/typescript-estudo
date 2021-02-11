import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const user = [{
    name: "igor",
    email: "igor@gmail.com"
}]

export default {
    async index(req: Request, res: Response) {
        return res.json(user);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({to: {
            name: "Igor Oliveira",
            email: "igoroliveira@gmail.com"
        }, 
        message: {
            subject: "Bem vindo ao sistema",
            body: "Seja bem vindo"
        }});

        return res.send();
    }
};
