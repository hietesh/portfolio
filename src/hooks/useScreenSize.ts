import { useEffect, useState } from "react";

const useScreenSize = (breakpoint : number) : boolean =>{
    const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(false);

    useEffect( ()=>{
        const checkSize = ()=> setIsBelowBreakpoint(window.innerWidth < breakpoint);

        checkSize();

        window.addEventListener('resize', checkSize);

        return ()=> window.removeEventListener('resize',checkSize)

    },[breakpoint]);

    return isBelowBreakpoint;
}

export default useScreenSize;