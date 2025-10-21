import {uiStore} from '@/store/zustand/ui.store';


const useUI = () => {
    const{ui,setTitle,reset,}= uiStore()
    return { ui , setTitle, reset };
};

export default useUI;