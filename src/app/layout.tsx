"use client";

import "./globals.css";

import Screen from "@/components/ui/screen";

import Login from "@/components/functional/login/Login";

import { useUser } from "@/store/hooks";
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  // Si el usuario está autenticado y está en la raíz, redirigir a /person
  useEffect(() => {
    if (user?.email && pathname === '/') {
      router.push('/person');
    }
  }, [user?.email, pathname, router]);

  return (
    <html lang="es" >
      <body>
        <Screen>
          {user.email ? children : <Login />}
        </Screen>
      </body>
    </html>
  );
}
