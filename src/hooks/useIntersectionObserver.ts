import react, { useEffect, useRef, useState } from 'react';

const defaultObserverOptions: IntersectionObserverInit = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -200px 0px'
}

const useIntersectionObserver = ({ref, observerOptions}: { ref: react.RefObject<HTMLDivElement>, observerOptions?: IntersectionObserverInit }) => {
    const [isVisible, setIsVisible] = useState(false);
    const observer = useRef(new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {...defaultObserverOptions, ...observerOptions}));

    useEffect(() => {
        const element = ref.current;
        const ob = observer.current;

        if (isVisible) {
            ob.disconnect();
            return;
        }

        if (element && !isVisible) ob.observe(element);

        return () => ob.disconnect();
    }, [isVisible, ref]);

    return isVisible;
}

export default useIntersectionObserver;