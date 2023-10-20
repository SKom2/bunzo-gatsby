import { useState, useCallback } from "react";

export const useForm = () => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(true);

    const handleChange = (evt) => {
        const input = evt.target;
        const { name } = input;
        const { value } = input;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: input.validationMessage });
        setIsValid(input.checkValidity());
    };

    return {
        values,
        errors,
        isValid,
        handleChange,
        setValues,
        setIsValid,
        setErrors,
    };
};
