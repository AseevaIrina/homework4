import {useEffect, useRef, useState} from "react";

export const useHover = () => {
    const [hovered, setHovered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseover = () => {
        setHovered(true)
    }

    const handleMouseout = () => {
        setHovered(false)
    }

    useEffect(() => {
        const el = ref.current;
        if (el) {
            el.addEventListener('mouseover', handleMouseover)
            el.addEventListener('mouseout', handleMouseout)
        }

        return () => {
            if (el) {
                el.removeEventListener('mouseover', handleMouseover)
                el.removeEventListener('mouseout', handleMouseout)
            }
        }
    }, [])

    return {
        hovered,
        ref
    }
}