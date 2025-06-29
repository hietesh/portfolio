import { NAV_ITEMS } from "../config/nav-items";
import type { nav_item } from "../types/nav-item";
import Footer from "./Footer";
import useScreenSize from "../hooks/useScreenSize";
import {  ChartNoAxesGantt } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const isMobile : boolean = useScreenSize(1100);
    const [toggleMenu,setToggleMenu] = useState(false);

    return (
        <>
            <header className={
                `   
                    ${  isMobile 
                        ? `fixed w-[280px] ${ !toggleMenu ? 'left-[-280px]': 'left-[0px]'}` 
                        : 'sticky left-0 flex-[0_0_290px] '
                    }
                    top-0
                    py-8 
                    pl-8
                    h-screen 
                    bg-primary 
                    text-white 
                    flex
                    flex-col
                    z-1
                `
                }
            >
                <a 
                    href={`#${ NAV_ITEMS[0].id}`} 
                    className={`
                        ${isMobile && 'relative top-[-14px] left-[12px]'}
                        text-3xl 
                        font-medium 
                        mb-2
                    `}
                >Hitesh<span className="text-4xl rounded-3xl h-[8px] w-[8px] inline-block ml-1  bg-cta"></span></a>
                <nav className="flex-1 flex flex-col justify-center mb-16">
                    {
                        NAV_ITEMS.map( (nav : nav_item ) => {
                                return (
                                    <a 
                                        key={nav.id} 
                                        href={`#${nav.id}`}       
                                        className="flex gap-5 align-middle my-4"
                                        onClick={()=>{ setToggleMenu(false)}}
                                    >
                                        <span>
                                            <nav.icon></nav.icon> 
                                        </span>
                                        <span>{nav.name}</span>
                                        
                                    </a>
                                )
                            }
                        )
                    }
                    
                </nav>
                <Footer/>
            </header>
            {
                isMobile && 
                    <button 
                        className={`
                            ${!toggleMenu ? 'absolute' : 'fixed'}
                            left-1 
                            top-4 
                            z-10
                        `}
                        onClick={ ()=> setToggleMenu(prev => !prev) }
                    >
                        <ChartNoAxesGantt
                            color="white"
                            size={40}
                        />
                    </button>
            }
        </>        
    )
}

export default Navbar