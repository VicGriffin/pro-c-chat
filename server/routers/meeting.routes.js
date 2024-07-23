import { Router } from "express";
import { createMeeting } from "../controllers/meeting.controllers.js";

const router = Router();

router.post("/meeting", createMeeting);

export default router;