import {useState} from "react";
import {useWindowEvent} from "./useWindowEvent";

export function useViewportSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const resizeListener = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useWindowEvent('resize', resizeListener, {passive: true});

    return {
        width,
        height
    }
}