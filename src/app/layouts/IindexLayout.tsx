import { Outlet } from "react-router";

export default function IindexLayout() {
    return (
        <div className="flex flex-col min-h-screen w-screen">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold">Citizen Participation</h1>
            </header>
            <main className="flex-1">
                <Outlet/>
            </main>
            <footer className="bg-gray-800 text-white p-4">
                <p>Footer</p>
            </footer>
        </div>
    );
}