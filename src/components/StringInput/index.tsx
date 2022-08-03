import React, { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import {
    InputComponentType,
    withValidation,
    useComponentValidationState
} from "@nthity/validation"
import { useConfigurationClasses } from "../../hooks";

export type StringInputProps = InputComponentType<string>
    & Partial<{
        fullwidth: boolean;
        inputProps: Omit<DetailedHTMLProps<
            InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >, "value" | "onChange">;
        multiline: boolean;
    }>;

const StringInput = forwardRef<HTMLInputElement, StringInputProps>(({
    componentId = "",
    className = "",
    fullwidth = false,
    inputProps,
    value,
    onChange,
}: StringInputProps, ref) => {
    const { valid } = useComponentValidationState(componentId)
    const { error } = useConfigurationClasses();
    return <div
        className={`${className} ${valid ? "" : error}`}
        style={{
            display: "flex",
            flexDirection: "column",
            width: fullwidth === true ? "100%" : undefined,
        }}
        children={<input ref={ref}
            style={{ width: "100%" }}
            {...inputProps}
            value={value}
            onChange={e => onChange(e.target.value)}
        />}
    />
});
export default withValidation(StringInput, "StringInput");