import { InputComponentType, ValidatorMethod } from "@nthity/validation";
import { ComponentType, createContext } from "react";

export type FormConfigurationStateType = {
    dataTypes: { [name: string]: InputComponentType };
    validators: { [name: string]: ValidatorMethod };
    components: Partial<FormComponents>;
};

/**
 * 
 */
export type FormComponents = {
    /**
     * Serves as BUTTON element.
     */
    button: ComponentType;
    /**
     * Serves as DIV element.
     */
    container: ComponentType;
}

export const FormConfigurationContext = createContext<{
    state: FormConfigurationStateType;
    dispatch(command: string, payload: any): void;
}>({
    state: {
        dataTypes: {},
        validators: {},
        components: {}
    },
    dispatch: (command, payload) => { }
}); 