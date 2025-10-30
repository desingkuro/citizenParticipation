import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Login } from "../interfaces/login";
import { EMAIL_REGEX } from "../consts/const";
import { postData } from "../services/Http";

export default function useLogin() {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            correo: "",
            password: "",
        }
    });

    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);


    const onSubmit = async (data: Login) => {
        setLoading(true);
        try {
            validateEmail(data.correo);
            validatePassword(data.password);
            console.log(data);
            const response = await postData("http://Bienvenidos/login", data);
            console.log(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const validateEmail = (email: string) => {
        if (!EMAIL_REGEX.test(email)) {
            setError("correo", { message: "Invalid email" });
            throw new Error("Invalid email");
        }
    };

    const validatePassword = (password: string) => {
        if (password.length < 8) {
            setError("password", { message: "Password must be at least 8 characters long" });
            throw new Error("Password must be at least 8 characters long");
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
