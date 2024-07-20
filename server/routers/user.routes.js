import { Router } from 'express';
import { createUsersRoute } from '../controllers/user.controllers.js';

const router = Router();

router.post('/register', createUsersRoute);

export default router;