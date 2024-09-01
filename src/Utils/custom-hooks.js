import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
	const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

	useEffect(() => {
		const handleOnline = () => {
			setOnlineStatus(true);
		};

		const handleOffline = () => {
			setOnlineStatus(false);
		};

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		// Cleanup function
		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);
	return onlineStatus;
};

