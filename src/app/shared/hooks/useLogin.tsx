import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Login } from "../interfaces/login";
import { EMAIL_REGEX } from "../consts/const";

export default function useLogin() {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = (data: Login) => {
        validateEmail(data.email);
        validatePassword(data.password);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        console.log(data);
    };

    const validateEmail = (email: string) => {
        if (!EMAIL_REGEX.test(email)) {
            setError("email", { message: "Invalid email" });
            return;
        }
    };

    const validatePassword = (password: string) => {
        if (password.length < 8) {
            setError("password", { message: "Password must be at least 8 characters long" });
            return;
        }
    };

    return {
        register,
        handleSubmit,
        watch,
        errors,
        onSubmit,
        viewPassword,
        setViewPassword,
        loading,
        setLoading,
        setError,
    };
}
