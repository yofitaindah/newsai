import React from "react";

export default class Icons {
    /**
     * Returns an SVG element representing a search icon.
     * @returns {JSX.Element} A React component representing the search icon.
     */
    static Search(): JSX.Element {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-rose-500"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
        );
    }

    /**
     * Returns an SVG element representing a close icon.
     * @returns {JSX.Element} A React component representing the close icon.
     */
    static Close(): JSX.Element {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        );
    }
}
