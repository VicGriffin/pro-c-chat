import { Router } from "express";
import {createConant, getConant } from '../controllers/conant.controllers.js'

const router = Router();

router.post('/conant', createConant);
router.get('/conant', getConant);

export default router;