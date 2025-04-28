import React, { Fragment, Suspense, useEffect, useState } from 'react';

const events = ["mousemove", "scroll", "keydown", "touchstart"];

function InteractiveComponent({ children }) {
    const [isInteractive, setIsInteractive] = useState(false);
  
    useEffect(() => {
      const enableInteraction = () => {
          setIsInteractive(true);
          cleanup();
      };

      events.forEach((event) => document.addEventListener(event, enableInteraction), { once: true });
    
      const cleanup = () => {
          events.forEach((event) => document.removeEventListener(event, enableInteraction));
      };

      return cleanup;
    }, []);
  
    return <Fragment>{isInteractive ? <Suspense fallback={<></>}>{children}</Suspense> : null}</Fragment>;
  };
  

export default InteractiveComponent;
