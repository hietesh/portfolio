import { BriefcaseBusiness, Home, Layers, MessageSquareCode, User } from "lucide-react";
import type { nav_item } from "../types/nav-item";

export const NAV_ITEMS : nav_item[] = [
    {
        name : 'Home',
        icon : Home,
        id : 'home'
    },
    {
        name : 'About',
        icon : User,
        id : 'about'
    },
    {
        name : 'Services',
        icon : BriefcaseBusiness,   
        id : 'services'
    },
    {
        name : 'Experience',
        icon : Layers,
        id : 'experience'
    },
    // {
    //     name : 'Projects',
    //     icon : PanelsTopLeft,
    //     id : 'projects'
    // },
    {
        name : 'Contacts',
        icon : MessageSquareCode,
        id : 'contacts'
    }
]