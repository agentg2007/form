import { createContext } from "react"

export type FormDataStateType = {
    valid: boolean;
}
export const FormDataContext = createContext<{
    state: FormDataStateType;
    dispatch(command: string, payload: any): void;
}>({
    state: {
        valid: false,
    },
    dispatch: (command, payload) => { }
})