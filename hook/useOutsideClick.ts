import { useEffect } from "react";
/**
 * Hook to detect clicks outside a given DOM node.
 * @param {React.MutableRefObject<HTMLElement | null>} ref The React ref to the DOM node.
 * @param {() => void} callback The callback to call when a click is detected outside the node.
 * @returns {void}
 */
export function useOutsideClick(
    ref: React.MutableRefObject<HTMLElement | null>,
    callback: () => void
): void {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
}
