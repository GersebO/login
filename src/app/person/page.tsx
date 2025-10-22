"use client";
import { useEffect } from "react";
import { useUser, useUI } from "@/store/hooks";
import PersonList from "@/components/functional/person/PersonList";

export default function PersonPage() {
  const { setTitle } = useUI();
  const { user } = useUser();
  useEffect(() => {
    setTitle("Listado de Customers");
  }, [setTitle]);

  // Listado de customers asociados al usuario
  const customers = user?.customers || [];

  return (
    <div>
      {customers.length > 0 ? (
        <PersonList customers={customers} />
      ) : (
        <p>No hay clientes disponibles</p>
      )}
    </div>
  );
}
