import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

import { UserState } from '@/store/Interfaces/user';

import { validate, getAll, validate2FA } from '../services/user.service';


interface UserStore {
  user: UserState;
  userList: UserState[];
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  validate: (email: string, password: string) => Promise<void>;
  validate2FA: (id: string, token: string) => Promise<boolean>;
  getAll: () => Promise<void>;
  reset: () => void;
}

const initialState: UserState = {
  email: '',
  name: '',
  id: 0,
};


export const userStore = create<UserStore>()(
  devtools(
    (set) => ({user: initialState,
      userList: [],
      isLoading: false,
      isError: false,
      errorMessage: '',

      /* validar*/
      validate: async (email, password) => {
        try {
          set({ isLoading: true });
          const user = await validate(email, password);
          set({
            user: user || initialState,
            isLoading: false,
            isError: false,
          });
        } catch (e) {
          set({
            user: initialState,
            isError: true,
            errorMessage: (e as Error).message,
            isLoading: false,
          });
        }
      },

      /*validate2FA que si se usa  */
      validate2FA: async (id, token) => {
        try {
          set({ isLoading: true });
          const response = await validate2FA(id, token);
          set({
            user: response.data,
            isLoading: false,
            isError: false,
          });
          return true;
        } catch (e) {
          set({
            isError: true,
            errorMessage: (e as Error).message,
            isLoading: false,
          });
          return false;
        }
      },

      /*obtener todo */
      getAll: async () => {
        try {
          set({ isLoading: true });
          const users = await getAll();
          set({
            userList: users.personList || [],
            isLoading: false,
            isError: false,
          });
        } catch (e) {
          set({
            isError: true,
            errorMessage: (e as Error).message,
            isLoading: false,
          });
        }
      },
      reset: () => set({
        user: initialState,
        userList: [],
        isLoading: false,
        isError: false,
        errorMessage: '',
      }),
    }),
    { name: 'userStore' }
  )
);
