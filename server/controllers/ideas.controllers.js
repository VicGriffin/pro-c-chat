import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createIdea = async(req, res)=>{
    const {title, description, idealistName, email} = req.body;
    try {
        const idea = await prisma.idea.create({
            data: {
                title: title,
                description: description,
                idealistName: idealistName,
                email: email
            }
            });
            res.status(201).json(idea);
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit input' });                
    }

};

export const getIdea = async(req, res) =>{
    try {
        const idea = await prisma.idea.findMany();
        res.status(200).json(idea)
    } catch (error) {
        res.status(500).json({error:'failed to get ideas'})   
    }
};
export const deleteIdea = async(req, res) =>{
    try {
        const idea = await prisma.idea.delete({
            where: {
                id:req.params.id
                }
        });
        res.status(200).json({message: 'deleted successfully'});
    } catch (error) {
        res.status(500).json({error:'failed to get ideas'})   
    }
};