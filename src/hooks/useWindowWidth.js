import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    console.log('useffect')
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
      console.log('clean up ')
    };
  }, []);

  return windowWidth;
}
 