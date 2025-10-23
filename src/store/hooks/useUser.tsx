import { userStore } from '@/store/zustand/user.store';

const useUser = () => {
  const {
    user,
    userList,
    validate,
    getByCustomerId,
    reset,
    
  } = userStore();
  
  return { 
    user,
    userList,
    userValidate: validate,
    userGetByCustomerId: getByCustomerId,
    userReset: reset,
  };
};

export default useUser;