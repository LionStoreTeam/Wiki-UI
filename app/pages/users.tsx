import { useEffect, useState } from 'react';
import { User } from '../types/types';

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Realiza la petición a la API
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))  // TypeScript ahora reconoce que 'data' es un array de User
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold">Usuarios</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
