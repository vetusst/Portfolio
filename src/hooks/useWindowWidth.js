import { useState, useEffect } from 'react';

export default function useWindowWidth1() {
  const [windowWidth, setWindowWidth1] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth1(window.innerWidth));
    return () => window.removeEventListener('resize', () => setWindowWidth1(window.innerWidth));
  }, []);

  return windowWidth;
}
 