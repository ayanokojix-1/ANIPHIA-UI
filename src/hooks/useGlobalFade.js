import { useEffect, useState } from 'react';

function useGlobalFade() {
    const [fadeClass, setFadeClass] = useState('opacity-0 translate-y-10');

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const progress = scrollY / (docHeight - windowHeight);

            if (progress > 0.05) {
                setFadeClass('opacity-100 translate-y-0');
            } else {
                setFadeClass('opacity-0 translate-y-10');
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return `transition-all duration-700 ease-out ${fadeClass}`;
}

export default useGlobalFade;