import { useEffect } from 'react';

/**
 * Hook to handle outside clicks.
 * @param {React.MutableRefObject<HTMLElement | null>} ref - Reference to the element that should be considered as the "inside".
 * @param {() => void} callback - Function to be called when a click is detected outside of the referenced element.
 * @returns {void} - Returns nothing.
 */
const useOutsideClick = (
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: () => void
): void => {
  useEffect(() => {
    // Function to handle the click event
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside of the referenced element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]); // Dependencies: ref and callback
};

export default useOutsideClick;
