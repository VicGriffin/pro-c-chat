import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUsersRoute = async (req, res) => {
  try {
    const { username, email, password } = req.body; 
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      },
    });

    res.status(200).json({ success: true, message: "signup success", newUser });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
