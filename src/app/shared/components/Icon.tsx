import type { IconInterface } from "../interfaces/icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export default function Icon({ icon, size = 24, color = "black" }: IconInterface) {
    const IconComponent = FaIcons[icon as keyof typeof FaIcons] 
    || AiIcons[icon as keyof typeof AiIcons] 
    || MdIcons[icon as keyof typeof MdIcons]
    || FaIcons[icon as keyof typeof FaIcons]
    || FaIcons.FaRegUser;
    return <IconComponent size={size} color={color} />;
}