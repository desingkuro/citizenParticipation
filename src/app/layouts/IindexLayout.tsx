import { Outlet } from "react-router";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import Sidebar from "../shared/components/Sidebar";

export default function IndexLayout() {
    return (
        <div className="flex flex-col min-h-screen w-screen">
            <Header />
            <main className="flex flex-row h-screen w-screen">
                <Sidebar />
                <section className="h-full w-[calc(100%-256px)] p-2">
                    <Outlet />  
                </section>
            </main>
            <Footer />
        </div>
    );
}