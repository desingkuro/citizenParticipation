import { Link } from "react-router";
import useLogin from "../../shared/hooks/useLogin";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Loader from "../../shared/components/Loader";

export default function Login() {
    const { register, handleSubmit, errors, onSubmit, viewPassword, setViewPassword, loading } = useLogin();
    return (
        <div className=" flex flex-col h-screen bg-[#e8e8e8] !p-2">
            <main className="flex-1">
                <div className="flex flex-col items-center justify-center h-screen">
                    <header className="flex items-center h-16 justify-center !mb-4">
                        <h1 className="text-6xl font-bold text-gray-900">Citizen Participation</h1>
                    </header>
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md !p-6">
                        <h2 className="text-2xl font-bold text-gray-900 !mb-4">Login User</h2>
                        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="email" className="w-full">
                                <input
                                    type="email"
                                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md !p-2 !mb-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                    placeholder="Email address"
                                    {...register("email", { required: true })}
                                />
                            </label>
                            {errors.email && <p className="text-red-500 font-semibold drop-shadow-red-300">{errors.email.message}</p>}
                            <label htmlFor="password" className="w-full relative">
                                <input
                                    type={viewPassword ? "text" : "password"}
                                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md !p-2 !mb-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                />
                                {viewPassword
                                    ? <IoMdEyeOff onClick={() => setViewPassword(!viewPassword)} size={24} className="absolute right-2 top-[40%] -translate-y-1/2 cursor-pointer" />
                                    : <IoMdEye onClick={() => setViewPassword(!viewPassword)} size={24} className="absolute right-2 top-[40%] -translate-y-1/2 cursor-pointer" />}
                            </label>
                            {errors.password && <p className="text-red-500 font-semibold drop-shadow-red-300">{errors.password.message}</p>}
                            <div className="flex items-center justify-between flex-wrap w-full">
                                <p className="text-gray-900 !mt-2"> Don't have an account?
                                    <Link to="/auth/register" className="text-sm text-blue-500 hover:underline !ml-2 !mt-2">Signup</Link>
                                </p>
                            </div>
                            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold !py-2 !px-4 !rounded-md !mt-2 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
                        </form>
                    </div>
                </div>
                {loading && <Loader />}
            </main>
        </div>
    );
}