import { useEffect } from 'react';

interface IOptions {
    passive?: boolean;
    once?: boolean;
    capture?: boolean;
}

export function useWindowEvent(
    type: string,
    listener: EventListener,
    options: IOptions
) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener(type, listener, options);
            return () => window.removeEventListener(type, listener, options);
        }
    }, [type, listener]);
}