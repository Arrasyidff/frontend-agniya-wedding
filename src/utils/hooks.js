const { useEffect, useState } = require("react");

export const useDebounce = (value, delay=500) => {
    const [deboucedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);

        return () => clearTimeout(timeout)
    }, [value, delay])

    return deboucedValue
}