"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/store/hooks";

export default function PersonDetail() {
  const { user, userGetMe } = useUser();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Token actual:", localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        await userGetMe(); 
      } catch (err: any) {
        console.error("Error al obtener usuario:", err);
        setError("Ocurrió un error al cargar los datos del usuario.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userGetMe]);

  // === Renderizado condicional ===
  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!user || !user.id) return <p>No se encontró información del usuario.</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-3">Detalle del Usuario</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nombre:</strong> {user.name}</p>
      {user.email && <p><strong>Email:</strong> {user.email}</p>}

      {user.customers && user.customers.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Customers Asociados:</h2>
          <ul className="list-disc list-inside">
            {user.customers.map((c: any) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
