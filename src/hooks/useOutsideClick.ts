import { useEffect } from 'react';

function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        typeof callback === 'function' && callback();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
