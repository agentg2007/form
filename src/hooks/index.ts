import { useContext, useMemo } from "react"
import { FormConfigurationContext } from "../models"

export const useConfigurationClasses = () => {
    const { state: { classes = {} } } = useContext(FormConfigurationContext)
    return useMemo(() => classes, [classes]);
}