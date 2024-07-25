import { Router } from 'express';
import { createUsersRoute, getUsers } from '../controllers/user.controllers.js';

const router = Router();

router.post('/register', createUsersRoute);
router.get('/', getUsers);

export default router;
