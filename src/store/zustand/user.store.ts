import { create } from 'zustand';

import jwt, { JwtPayload } from 'jsonwebtoken';

import { devtools } from 'zustand/middleware';

import { UserState } from '@/store/Interfaces/user';

import { validate, getByCustomerId} from '../services/user.service';


interface UserStore {
  user: UserState;
  userList: UserState[];
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  validate: (login: string, password: string) => Promise<void>;

  getByCustomerId: (customerId: string) => Promise<void>;
  reset: () => void;

  getMe: () => Promise<void>;
}

const initialState: UserState = {
  email: '',
  name: '',
  id: 0,
  customers: [],
};


export const userStore = create<UserStore>()(
  devtools(
    (set) => ({user: initialState,
      userList: [],
      isLoading: false,
      isError: false,
      errorMessage: '',

      /* validar*/
      validate: async (login, password) => {
        try {
          set({ isLoading: true });
          const user = await validate(login, password);
          const jwtData = jwt.decode(user.data) as JwtPayload | null;
          console.log(jwtData);
          set({
            user: 
                jwtData ? { id: jwtData.data.id || 0,
                email: jwtData.data.email || '',
                name: jwtData.data.name || ''+jwtData.data.paternallastName ,
                customers: jwtData.data.customers || [],
              } 
              : initialState,
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

      getByCustomerId: async (customerId) => {
        try {
          set({ isLoading: true });
          const users = await getByCustomerId(customerId);
          set({
            userList: users.data || [],
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