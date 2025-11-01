import { useState } from "react";
import { useForm } from "react-hook-form";
import { CC_REGEX, CELULAR_REGEX, EMAIL_REGEX, NOMBRE_REGEX, PASSWORD_REGEX } from "../consts/const";
import type { Register } from "../interfaces/register";
import { postData } from "../services/Http";
import { Navigate, useNavigate } from "react-router";

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
        }
    });

    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const base_url = import.meta.env.VITE_URL_API;
    const navigate = useNavigate();

    const onSubmit = async (data: Register) => {
        setLoading(true);
        try {
            validateData();
            const req = {
                name: data.nombre,
                nationalId: data.cc,
                email: data.correo,
                password: data.password,
                phone: data.celular,
            }
            const response = await postData(base_url + "auth/register", req);
            console.log(response);
            setLoading(false);
            navigate("/auth/login");
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const validateData = () => {
        const { nombre, cc, correo, password, confirmar_password, celular } = watch();
        validateEmail(correo);
        validatePassword(password);
        validateConfirmPassword(confirmar_password);
        validateCC(cc);
        validateCelular(celular);
        validateNombre(nombre);
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
