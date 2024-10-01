// import { PrismaClient } from "@prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";

// const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     const resources = await prisma.resource.findMany();
//     res.status(200).json(resources);
//   } else if (req.method === "POST") {
//     const { title, description, price, type, authorId, categoryId, fileUrl } =
//       req.body;
//     try {
//       const newResource = await prisma.resource.create({
//         data: {
//           title,
//           description,
//           price,
//           type,
//           author: { connect: { id: authorId } },
//           category: { connect: { id: categoryId } },
//           fileUrl,
//         },
//       });
//       res.status(200).json(newResource);
//     } catch (error) {
//       res.status(400).json({ error: "Error creating resource" });
//     }
//   } else {
//     res.setHeader("Allow", ["GET", "POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
