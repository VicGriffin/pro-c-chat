import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createConant = async (req, res) =>{
    const {yourname,email,phone, link, coverletter} = req.body;
    try {
        const conant = await prisma.conant.create({
            data:{
                yourname: yourname,
                email: email,
                phone:phone,
                link:link,
                coverletter: coverletter
            },
        });
        res.status(201).json(conant);
    } catch (error) {
        res.status(500).json({ error: 'server error'})        
    }
};
export const getConant = async (req,res) =>{
    try {
        const conant = await prisma.conant.findmany();
        res.status(200).json(conant);
    } catch (error) {
        res.status(500).json({ error:'server error'})        
    }
};