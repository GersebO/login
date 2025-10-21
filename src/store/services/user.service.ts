import { api } from './api';


export const validate = async (email: string, password: string) => {
  try {
    const { data } = await api.post('/users/validate', { email, password });
    return data; // Devuelve directamente el usuario (email, name, id)
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error en validación');
  }
};


export const getAll = async () => {
  try {
    const { data } = await api.get('/users/all');
    return data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error al obtener usuarios');
  }
};


export const validate2FA = async (id: string, token: string) => {
  try {
    const { data } = await api.post('/users/validate-2fa', { id, token });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error en validación 2FA');
  }
};
