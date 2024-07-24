import { Router } from "express";
import { getIdea, createIdea ,deleteIdea} from "../controllers/ideas.controllers.js";

const router = Router();

router.post('/idea', createIdea);
router.get('/idea', getIdea);
router.delete('/idea/:id', deleteIdea)

export default router