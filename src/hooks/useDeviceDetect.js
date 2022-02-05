import {useEffect, useState} from 'react';

const useDeviceDetect = () => {
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		if (window.innerWidth > 1161) {
			setIsMobile(false);
		} 
	}, [])

	return {isMobile}
}

export default useDeviceDetect;