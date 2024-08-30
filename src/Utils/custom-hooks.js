import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setOnlineStatus(true);
            console.log("Online event triggered");
        };

        const handleOffline = () => {
            setOnlineStatus(false);
            console.log("Offline event triggered");
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Cleanup function
        return () => {
            console.log("Removing event listeners");
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);
    return onlineStatus;
};

