// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaClient } from "@prisma/client";
// import NextAuth from "next-auth/next";
// import bcrypt from "bcrypt";

// const prisma = new PrismaClient();

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "someemail@email.com",
//           autocomplete: "off",
//         },
//         password: { label: "Password", type: "password", autocomplete: "off" },
//       },
//       async authorize(
//         credentials: any,
//         req: any
//       ): Promise<{ id: string; name: string; email: string }> {
//         const userFound = await prisma.user.findUnique({
//           where: {
//             email: credentials.email,
//           },
//         });

//         if (!userFound) throw new Error("Usuario no encontrado");

//         const passwordMatch = await bcrypt.compare(
//           credentials.password,
//           userFound.password
//         );

//         if (!passwordMatch) throw new Error("Contraseña incorrecta");

//         return {
//           id: userFound.id.toString(),
//           name: userFound.name,
//           email: userFound.email,
//         };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/login",
//   },
//   callbacks: {
//     async session({ session, token, user }) {
//       // Guarda el userId en la sesión
//       session.userId = token.id as number;
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };
