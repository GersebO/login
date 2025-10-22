import { userStore } from '@/store/zustand/user.store';

const useUser = () => {
  const {
    user,
    userList,
    validate,
    getByCustomerId,
    reset,
    getMe,
  } = userStore();
  
  return { 
    user,
    userList,
    userValidate: validate,
    userGetByCustomerId: getByCustomerId,
    userReset: reset,
    userGetMe: getMe,
  };
};

export default useUser;