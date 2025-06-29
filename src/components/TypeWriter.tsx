import { useEffect, useState } from "react";

type TypeWriterProps = {
    texts: string[];
};

const TypeWriter = ( { texts = [] } : TypeWriterProps)=> {
    const [textIndex , setTextIndex ] = useState(0);
    const [currentIndex,setCurrentIndex] = useState(0);

    useEffect( ()=>{
        
        if(currentIndex > texts[textIndex].length){
            setCurrentIndex(0);
            setTextIndex( 
                (prev) => { 
                    return (prev + 1) % texts.length 
                }
            );
            return;
        }
        
        // Type writing effect
        const timer = setTimeout( ()=>{
            setCurrentIndex( 
                (prev) => { 
                    return (prev + 1); 
                }
            );
        },150);

        return () => clearTimeout(timer);

    },[textIndex,currentIndex]);

    return (
        <span>
            <span>{
                texts[textIndex].substring(0,currentIndex)
            }
            </span>
            <span className="animate-pulse">|</span>
        </span>
    );
}

export default TypeWriter;