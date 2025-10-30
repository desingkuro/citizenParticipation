import { useState } from "react";
import { useForm } from "react-hook-form";
import { CC_REGEX, CELULAR_REGEX, EMAIL_REGEX, NOMBRE_REGEX, PASSWORD_REGEX, ROL_REGEX } from "../consts/const";
import type { Register } from "../interfaces/register";
import { postData } from "../services/Http";

export default function useRegister() {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nombre: "",
            cc: "",
            correo: "",
            password: "",
            confirmar_password: "",
            celular: "",
            roles: "",
        }
    });

    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (data: Register) => {
        setLoading(true);
        try {
            validateEmail(data.correo);
            validatePassword(data.password);
            validateConfirmPassword(data.confirmar_password);
            validateCC(data.cc);
            validateCelular(data.celular);
            validateNombre(data.nombre);
            validateRol(data.roles);
            const response = await postData("http://Bienvenidos/register", data);
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
            return;
        }
    };

    const validatePassword = (password: string) => {
        if (!PASSWORD_REGEX.test(password)) {
            setError("password", { message: "Invalid password" });
            return;
        }
        if (password.length < 8) {
            setError("password", { message: "Password must be at least 8 characters long" });
            return;
        }
    };

    const validateCC = (cc: string) => {
        if (!CC_REGEX.test(cc)) {
            setError("cc", { message: "Invalid cc" });
            return;
        }
    };

    const validateCelular = (celular: string) => {
        if (!CELULAR_REGEX.test(celular)) {
            setError("celular", { message: "Invalid celular" });
            return;
        }
    };

    const validateNombre = (nombre: string) => {
        if (!NOMBRE_REGEX.test(nombre)) {
            setError("nombre", { message: "Invalid nombre" });
            return;
        }
    };

    const validateRol = (rol: string) => {
        if (!ROL_REGEX.test(rol)) {
            setError("roles", { message: "Invalid rol" });
            return;
        }
    };

    const validateConfirmPassword = (confirmar_password: string) => {
        if (!PASSWORD_REGEX.test(confirmar_password)) {
            setError("confirmar_password", { message: "Invalid password" });
            return;
        }
        if (confirmar_password !== watch("password")) {
            setError("confirmar_password", { message: "Passwords do not match" });
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
