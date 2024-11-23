import { Suspense, useLayoutEffect, useRef, useState } from 'react';

type IProps = {
    children: React.ReactNode,
    offer: number
}

function ScrollToLoad({ children, offset = 150 }: IProps) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    const checkIfInView = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const inView = rect.top <= window.innerHeight + offset;
            if (inView) {
                setIsVisible(true);
                window.removeEventListener('scroll', checkIfInView);
            }
        }
    };

    useLayoutEffect(() => {
        checkIfInView();
        window.addEventListener('scroll', checkIfInView);
        return () => window.removeEventListener('scroll', checkIfInView);
    }, []);

    return <div ref={elementRef}>{isVisible && <Suspense fallback={<></>}>{children}</Suspense>}</div>;
}

export default ScrollToLoad;


/* using
<ScrollToLoad>
  <Component />
</ScrollToLoad>
*/
