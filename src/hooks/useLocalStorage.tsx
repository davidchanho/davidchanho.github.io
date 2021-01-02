import { useState } from "react";

export function useLocalStorage(key: string, initialValue: string) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);

            return initialValue;
        }
    });

    const setValue = (value: Function) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            localStorage.setItem(key, JSON.stringify(valueToStore));

        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}
