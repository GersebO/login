import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

import {UIState} from '../Interfaces/ui';

/*Estoy haciendo un store de Zustand para la interfaz UIState declaro las funciones que voy a utilizar en el store */
interface UIStore extends UIState {
    ui: UIState;
    setTitle: (title: string) => void;
    reset: () => void;
}

const initialState: UIState = {
    title: '',
};

export const uiStore = create<UIStore>()(
    devtools((set) => ({
        ui: initialState,
        
        setTitle: (title: string) =>
             set(() => ({
                ui: { title:title },
            })),
        reset: () => set(() => ({ ...initialState })),

    }), {name: 'uiStore'}
));