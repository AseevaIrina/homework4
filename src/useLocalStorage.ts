import { useState } from "react";

type TSetItem = (arg0: string) => void
type TRemoveItem = () => void
interface IReturnedItems {
    setItem: TSetItem
    removeItem: TRemoveItem
}

export const useLocalStorage = (keyToken: string): [string, IReturnedItems] => {
    const [token, setToken] = useState('');

    const setItem = (valToken: string) => {
        localStorage.setItem(keyToken, valToken);
        setToken(valToken);
    }

    const removeItem = () => {
        localStorage.removeItem(keyToken);
        setToken('');
    }

    return [token, {setItem, removeItem}];
}