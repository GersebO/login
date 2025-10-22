"use client";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser, useUI } from '@/store/hooks';

const Login = () => {
  const router = useRouter();
  const { setTitle } = useUI();
  const { user, userValidate } = useUser();
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleClickValidate = () => {
    userValidate(loginData.username, loginData.password);
  };

  // Redirigir cuando el usuario se autentica

  useEffect(() => {
    setTitle("Login ");
  }, [setTitle]);

  useEffect(() => {
    // Si el usuario ya tiene email, redirigir a /person
    if (user?.email) {
      router.push('/person');
    }
  }, [user?.email, router]);
  return (
    <div>
      <h1 className="text-2xl font-bold">Validacion de usuario</h1>
      <br />
      <p>Por favor, inicia sesion para continuar</p>
      <br />

      <div>
        <div>
          <label htmlFor="username">Usuario</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            className="border border-gray-300 rounded-md p-2"
            value={loginData.username}
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="password">Contraseña</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-md p-2"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
        </div>

        <br />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleClickValidate}
        >
          Iniciar Sesion
        </button>
      </div>
    </div>
  );
};

export default Login;