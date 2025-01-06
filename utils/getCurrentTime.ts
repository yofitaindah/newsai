/**
 * Returns the current time as a string in the format "[HH:MM:SS AM/PM]".
 *
 * @returns {string} The current time as a string.
 */
export function getCurrentTime(): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // For AM/PM format
  };

  const currentTime = new Date().toLocaleTimeString("en-US", options);
  return `[${currentTime}]`;
}
