"use client";
import { useUser } from '@/store/hooks';


export default function HomePage() {
  const { user } = useUser();
  //Listado de customers asociados al usuario
  const customers = user.customers || [];

  return (
    <div>
      <h1>Listado de Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}
