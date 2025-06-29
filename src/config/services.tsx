import type { services } from "../types/services"; 
import uiux from '../assets/service-1.svg';
import web from '../assets/service-2.svg';
import ai from '../assets/service-3.svg';


export const SERVICES : services[] = [
    {
        img : uiux,
        title : 'UI/UX Design',
        desc : 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
        color : 'bg-violet-200'
    },
    {
        img : web,
        title : 'Web Development',
        desc : 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
        color : 'bg-yellow-200'
    },
    {
        img : ai,
        title : 'GEN AI ',
        desc : 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
        color : 'bg-red-200'
    }
]