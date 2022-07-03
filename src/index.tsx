import React, { PropsWithChildren, Reducer, useReducer } from "react";
import {
    FormConfigurationContext,
    FormConfigurationStateType
} from "./models";

type FormConfigurationProviderProps = {

}
export const FormConfigurationProvider = ({
    children,
    components,
    dataTypes,
    validators,
}: PropsWithChildren<FormConfigurationStateType>) => {
    const [state, dispatch] = useReducer(FormConfigurationProviderReducer, {
        components,
        dataTypes,
        validators,
    });
    return <FormConfigurationContext.Provider children={children} value={{
        state, dispatch: (command, payload) => dispatch({ command, payload })
    }} />
}
FormConfigurationProvider.displayName = "FormConfigurationProvider";

type FormConfigurationReducerActionType = {
    command: string;
    payload: any;
}
const FormConfigurationProviderReducer: Reducer<
    FormConfigurationStateType,
    FormConfigurationReducerActionType
> = (state, { command, payload }) => {
    const upst = (newState: Partial<FormConfigurationStateType>) => ({ ...state, ...newState });
    switch (command) {
        default:
            return state;
    }
}; 