import {
    DateTimeRangeFieldValidator,
    EmailFieldValidator,
    NumberInputFieldValidator,
    NumberRangeFieldValidator,
    RequiredFieldValidator,
    SelectedItemCountFieldValidator,
    StringLengthFieldValidator,
    UrlFieldValidator
} from "@nthity/validation/validators";
import React, { PropsWithChildren, useMemo } from "react";
import styled from "styled-components";
import { StringInput } from "./components";
import {
    FormConfigurationContext,
    FormConfigurationType
} from "./models";

type FormConfigurationProviderProps = Partial<FormConfigurationType> & {

}
const FormConfigurationProvider = ({
    children,
    classes = {},
    components = {},
    dataTypes = {},
    validators = {},
}: PropsWithChildren<FormConfigurationProviderProps>) => {
    const state = useMemo(() => ({
        components,
        dataTypes,
        validators,
        classes
    }), []);
    return <FormConfigurationContext.Provider value={{ state }} children={children} />
}
FormConfigurationProvider.displayName = "FormConfigurationProvider";
export default FormConfigurationProvider;

export const BasicConfiguration: FormConfigurationType = {
    classes: {
        error: "error"
    },
    dataTypes: {
        string: {
            component: StringInput
        },
    },
    components: {
        button: styled.button``,
        container: styled.div``,
    },
    validators: {
        DateTimeRangeFieldValidator,
        EmailFieldValidator,
        NumberInputFieldValidator,
        NumberRangeFieldValidator,
        RequiredFieldValidator,
        SelectedItemCountFieldValidator,
        StringLengthFieldValidator,
        UrlFieldValidator
    }
}; 