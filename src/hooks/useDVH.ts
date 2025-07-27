import { useEffect, useState } from "react";

const isDVHSupports = () : boolean =>{
    return CSS.supports("height:100dvh");
}

export const useDVH = () : string =>{
    
    const [height , setHeight ] = useState(
        isDVHSupports() ? "100dvh" : `${window.innerHeight}px`
    ); 
    

    useEffect( ()=>{

        if (isDVHSupports()) {
            return;
        }
      
        let timeout : number;

        function throttledHeight() {
            if(timeout)
                clearTimeout(timeout);
            
            timeout = setTimeout(updateHeight,150) 
        }
    
        function updateHeight() : void {
            setHeight(`${window.innerHeight}px`);
        }
        
        throttledHeight();

        window.addEventListener('resize',throttledHeight);
        window.addEventListener('orientationchange',throttledHeight);

        return ()=>{
            window.removeEventListener('resize',throttledHeight);
            window.removeEventListener('orientationchange',throttledHeight);
            clearTimeout(timeout);
        }
    },[])

    return height;
}