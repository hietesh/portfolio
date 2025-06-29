import { Github, Linkedin, SquareChevronRight, X } from "lucide-react";
import type { nav_item } from "../types/nav-item";

export const SOCIAL_LINKS : nav_item[] = [
    {
        name : 'Linked In',
        icon : Linkedin,
        id : 'home',
        url : 'https://www.linkedin.com/in/hietesh/'
    },
    {
        name : 'X',
        icon : X,
        id : 'x',
        url : '#'
    },
    {
        name : 'LeetCode',
        icon : SquareChevronRight,
        id : 'leetcode',
        url : '#'
    },
    {
        name : 'Github',
        icon : Github,
        id : 'github',
        url : 'https://github.com/hietesh'
    }
]