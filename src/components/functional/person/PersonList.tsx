"use client";
import Link from "next/link";
import { UserState } from "@/store/Interfaces/user";

export default function PersonList({ customers }: { customers: UserState[] }) {
  if (!customers || customers.length === 0) {
    return <p>No hay personas disponibles</p>;
  }

  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.id} className="mb-2">
          <Link href={`/person/${customer.id}`}>
            {customer.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
