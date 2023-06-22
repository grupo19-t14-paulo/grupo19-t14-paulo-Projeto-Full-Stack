import { useEffect, useRef } from "react";

const useKeydowns = (keyId: string, callback:  (element: HTMLElement | null) => void) => {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if(event.key === keyId){
                if(callback) callback(ref.current);
            }
        }
        window.addEventListener("keydown", handleKeydown);
    
        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };

    }, [keyId, callback]);

    return ref;
};

export { useKeydowns };