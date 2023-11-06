import {useState} from "react";
import {useWindowEvent} from "./useWindowEvent";

interface IScrollToOptions {
    y?: number
    x?: number
}

interface IScroll {
    y: number
    x: number
}

type returnedArray = [IScroll, (arg0: IScrollToOptions) => void];

export function useWindowScroll(): returnedArray {
    const [scroll, setScroll] = useState({x: 0, y: 0});

    const scrollListener = () => {
        setScroll({
            x: window.scrollX,
            y: window.scrollY
        })
    }

    const scrollTo = (options: IScrollToOptions) => {
        if (typeof options.x !== 'undefined' &&
            typeof options.y !== 'undefined') {
            window.scrollTo(options.x, options.y)
        }
        if (typeof options.x !== 'undefined') {
            window.scrollTo(options.x, scroll.y)
        }
        if (typeof options.y !== 'undefined') {
            window.scrollTo(scroll.x, options.y)
        }
    }

    useWindowEvent('scroll', scrollListener, {passive: true});

    return [scroll, scrollTo];
}