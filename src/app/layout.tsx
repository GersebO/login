"use client";

import "./globals.css";

import Screen from "@/components/ui/screen";

import Login from "@/components/functional/login/Login";

import {useUser} from "@/store/hooks"



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
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
