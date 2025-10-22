import { api,apiWithToken } from '../../utils/api';

import { decrypt } from '@/utils/crypto';



export const validate = async (login: string, password: string) => {
  try {
    
    const { data } = await api.post("/user/validate", { login, password });
    
    // Desencriptar el token recibido desde el backend
    const decryptedToken = decrypt(data.data.encryptedToken);
    
    // Guardar el token desencriptado en el almacenamiento local
    localStorage.setItem("token", decryptedToken);
    console.log(decryptedToken);
    // Retornar la respuesta con el token ya desencriptado
    return { ...data, data: decryptedToken };
  } catch (error: unknown) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    throw new Error(
      axiosError.response?.data?.message || "Error en validación"
    );
  }
};

export const getByCustomerId = async (customerId: string) => {
  try {
    const { data } = await apiWithToken.get(`/users/customerId/${customerId}`);
    return data;
  } catch (error: unknown) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    throw new Error(
      axiosError.response?.data?.message || "Error al obtener usuarios"
    );
  }
};

export const validate2FA = async (id: string, token: string) => {
  try {
    const { data } = await api.post("/users/validate-2fa", { id, token });
    return data;
  } catch (error: unknown) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    throw new Error(
      axiosError.response?.data?.message || "Error en validación 2FA"
    );
  }
};
