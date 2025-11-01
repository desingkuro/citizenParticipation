import { Link } from "react-router";
import Icon from "./Icon";
import useSidebar from "../hooks/useSidebar";

export default function Sidebar() {
    const {sidebar, icons} = useSidebar();

    return (
        <div className="h-full w-[60px] hover:w-[256px] hover:pl-2 pl-4 overflow-hidden p-2 transition-all duration-300 ease-in-out bg-gray-800 gap-4 flex flex-col">
            <nav className="flex flex-col">
                <ul className="flex flex-col gap-2">
                    {sidebar && sidebar.menu?.map((item: any) => (
                        <li key={item.label} className={(item.children && item.children.length > 0 ? "hover:h-28 hover:bg-gray-400": "")+ " flex flex-col rounded-xl min-h-6 h-10 overflow-hidden transition-all duration-300 ease-in-out"}>
                            <Link to={item?.route || ""} className="flex items-center hover:bg-gray-700 rounded-xl h-10 p-2 gap-3">
                                <div className="flex items-center">
                                    <Icon icon={icons[item.icon]} size={24} color="white"/>
                                </div>
                                <span className="self-center text-sm font-bold whitespace-nowrap dark:text-white">{item.label}</span>
                            </Link>
                            {item.children && (
                                <ul className="flex flex-col overflow-hidden">
                                    {item.children.map((child: any) => (
                                        <li key={child.label} className="flex flex-col gap-2 rounded-xl min-h-6">
                                            <Link to={child.route} className="flex items-center hover:bg-gray-700 rounded-xl h-10 p-2 gap-3" >
                                            <div className="flex items-center">
                                                <Icon icon={icons[child.icon]} size={24} color="white" />
                                            </div>
                                                <span className="self-center text-sm whitespace-nowrap dark:text-white">{child.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}