import React, { useEffect } from 'react'
import Link from 'next/link';

import { useUser } from '@/store/hooks';

const PersonList = () => {
  const { userList, userGetByCustomerId, user } = useUser();

  // Cargar la lista de personas al montar el componente
    useEffect(() => {
      if (user?.id) {
        userGetByCustomerId(String(user.id)); 
      }
    }, [user?.id, userGetByCustomerId]);

  return (
    <div>
      {userList ? (
        userList.map((person) => (
          <div key={person.id} >
            <Link href={`/person/${person.id}`}>{person.name}</Link>
          </div>
        ))
      ) : (
        <p>No hay personas disponibles</p>
      )}
    </div>
  );
};
export default PersonList;
