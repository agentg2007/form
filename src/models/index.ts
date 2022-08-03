import { InputComponentType, ValidatorMethod } from "@nthity/validation";
import { ComponentType, createContext } from "react";

export type Dictionary<T = any> = { [name: string]: T };

export type FormConfigurationType = {
    classes: Partial<{
        error: string;
    }>;
    components: Partial<FormComponents>;
    dataTypes: Dictionary<{
        component: ComponentType<Omit<InputComponentType, "componentId">>;
    }>;
    validators: Dictionary<ValidatorMethod>;
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
    state: FormConfigurationType;
}>({
    state: {
        classes: {},
        components: {},
        dataTypes: {},
        validators: {},
    },
}); 