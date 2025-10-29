import { Outlet } from "react-router";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";

export default function IndexLayout() {
    return (
        <div className="flex flex-col min-h-screen w-screen">
            <section className="flex flex-col min-h-screen w-screen">
                <Header/>
                <main className="flex-1">
                    <Outlet/>
                </main>
            </section>
            <Footer/>
        </div>
    );
}