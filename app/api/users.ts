import { PrismaClient } from "@prisma/client";
import { NextApiResponse, NextApiRequest } from "next";

// Crear Endpoints para Usuarios:

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const { name, email, password } = req.body;
    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password, // Encriptar
        },
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: "User al ready exist" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    // res.status(405).end({ error: `Method ${req.method} Not Allowed` });
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
