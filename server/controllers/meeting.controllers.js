import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createMeeting = async (req, res) => {
  const { email, date, time, platform, meetingId } = req.body;
  try {
    const meeting = await prisma.meeting.create({
      data: {
        email: email,
        date: new Date(date),
        time: new Date(`1970-01-01T${time}Z`), 
        platform: platform,
        meetingId: meetingId,
      },
    });
    res.status(200).json(meeting);
  } catch (error) {
    res.status(500).json({ error: 'failed to create meeting' });
  }
};
