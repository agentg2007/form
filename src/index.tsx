import React, { PropsWithChildren, Reducer, useReducer } from "react"
import { FormDataContext, FormDataStateType } from "./models"

type FormDataProviderProps = {

}
const FormDataProvider = ({
    children
}: PropsWithChildren<FormDataProviderProps>) => {
    const [state, dispatch] = useReducer(FormDataProviderReducer, {
        valid: false
    });
    return <FormDataContext.Provider children={children} value={{
        state, dispatch: (command, payload) => dispatch({ command, payload })
    }} />
}
FormDataProvider.displayName = "FormDataProvider";
export default FormDataProvider;

type FormDataReducerActionType = {
    command: string;
    payload: any;
}
const FormDataProviderReducer: Reducer<
    FormDataStateType,
    FormDataReducerActionType
> = (state, { command, payload }) => {
    const upst = (newState: Partial<FormDataStateType>) => ({ ...state, ...newState });
    switch (command) {
        default:
            return state;
    }
};