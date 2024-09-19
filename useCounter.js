import { useState } from "react";


export const useCounter = (initialValue = 10) => {

    const [counter, setcounter] = useState(initialValue)

    const increment = (value = 1) => {
        setcounter( (current) => current + value);
    }

    const decrement = (value = 1) => {
        if(((current) => current - value) <= 0){
            setcounter(0);
            return;
        }
        setcounter((current) => current - value);
    }

    const reset = () => {
        setcounter(initialValue);
    }


    return {
        counter,
        increment,
        reset,
        decrement
    };
}


