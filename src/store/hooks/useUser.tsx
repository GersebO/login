import { userStore } from '@/store/zustand/user.store';

const useUser = () => {
  const {
    user,
    userList,
    validate,
    getAll,
    reset,
  } = userStore();
  
  return { 
    user,
    userList,
    userValidate: validate,
    userGetAll: getAll,
    userReset: reset
  };
};

export default useUser;
