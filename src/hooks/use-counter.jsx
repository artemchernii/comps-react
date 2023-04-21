import { useState, useEffect } from 'react';
function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        console.log('COUNT => ', count);
    }, [count]);
    const increment = () => {
        setCount((current) => current + 1);
    };

    return {
        count,
        increment,
    };
}

export default useCounter;
