const events = ["mousemove", "scroll"];

function ScrollToLoad({ children }) {
    const [isInteractive, setIsInteractive] = useState(false);
  
    useEffect(() => {
        const enableInteraction = () => {
            setIsInteractive(true);
            cleanup();
        };

        // add event listeners
        events.forEach((event) => document.addEventListener(event, enableInteraction));
      
        // remove event listeners
        const cleanup = () => {
            events.forEach((event) => document.removeEventListener(event, enableInteraction));
        };
  
      return cleanup;
    }, []);
  
    // return isInteractive ? <>{children}</> : null;
    return <Fragment>{isInteractive ? <Suspense fallback={<></>}>{children}</Suspense> : null}</Fragment>;
  };
  

export default ScrollToLoad;
