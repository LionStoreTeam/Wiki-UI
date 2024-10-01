"use client"
import React from 'react'
// import { signIn } from 'next-auth/react';
// import { useState } from 'react';
import SignInScreen from './signin';


export default function SignIn() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     await signIn('credentials', {
    //         email,
    //         password,
    //         callbackUrl: '/',
    //     });
    // };

    return (
        <div className="login">
            <SignInScreen />
        </div>
        // <div className="max-w-md mx-auto py-6">
        //     <h2 className="text-3xl font-bold mb-6">Iniciar Sesión</h2>
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="email"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             placeholder="Email"
        //             className="block w-full mb-4 p-2 border"
        //         />
        //         <input
        //             type="password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             placeholder="Contraseña"
        //             className="block w-full mb-4 p-2 border"
        //         />
        //         <button type="submit" className="block w-full bg-blue-500 text-white py-2">Ingresar</button>
        //     </form>
        // </div>
    )
}
