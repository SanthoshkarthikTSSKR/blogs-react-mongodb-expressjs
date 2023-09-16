import { useEffect, useContext, useState } from 'react';
import { BlogContext } from "../MyContext";

const Alert = () => {
    const { message, setMessage } = useContext(BlogContext);
    useEffect(() => {
        setTimeout(() => {
            setMessage(null);
            console.log("Delayed for 1 second.");
        }, 2000)   
    }, [message])

    if (!message) {
        return null;
    }
    return (
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
            <span className="font-medium">{message}</span> 
        </div>
    )
}

export default Alert;