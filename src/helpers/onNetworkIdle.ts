export default function onNetworkIdle(callback: any, idleTime = 2000) {
    let pendingRequests = 0;
    let timeoutId = null;
    let callbackCalled = false;

    const checkIdle = () => {
        if (pendingRequests === 0 && !callbackCalled) {
            callbackCalled = true;
            callback();
        }
    };

    const resetTimer = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(checkIdle, idleTime);
    };

    const originalFetch = window.fetch;
    window.fetch = function(...args) {
        pendingRequests++;
        resetTimer();
        return originalFetch.apply(this, args).finally(() => {
            pendingRequests--;
            resetTimer();
        });
    };

    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(...args) {
        this.addEventListener('loadstart', () => {
            pendingRequests++;
            resetTimer();
        });
        this.addEventListener('loadend', () => {
            pendingRequests--;
            resetTimer();
        });
        originalOpen.apply(this, args);
    };

    resetTimer();

    return () => {
        clearTimeout(timeoutId);
        window.fetch = originalFetch;
        XMLHttpRequest.prototype.open = originalOpen;
    };
}

// usage
// onNetworkIdle(() => {})
