import React from 'react'
import { useUser } from '@/store/hooks';

interface PersonDetailProps {
    id: string;
}

const PersonDetail = ({ id }: PersonDetailProps) => {
    const { userList,userGetByCustomerId,user } = useUser();

    // Cargar la lista de personas al montar el componente
    React.useEffect(() => {
        if (user?.id) {
        userGetByCustomerId(String(user.id)); 
        }
    }, [user?.id, userGetByCustomerId]);

    const person = userList ? userList.find((p) => p.id.toString() === id) : null;
    
    return (
        <div>
            {person ? (
                <div>
                    <h2>Detalle de la Persona</h2>
                    <div>
                        <p><strong>ID:</strong> {person.id}</p>
                        <p><strong>Nombre:</strong> {person.name}</p>
                        {person.email && <p><strong>Email:</strong> {person.email}</p>}
                    </div>
                </div>
            ) : (
                <div>
                    <p>Persona no encontrada</p>
                </div>
            )}
        </div>
    )
}

export default PersonDetail