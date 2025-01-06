"use client";

import React, { useEffect, useRef, useState } from "react";

import { useSearchParams } from "next/navigation";

import { INewsCategory } from "@/types/categorynews";
import { CATEGORIES_NEWS } from "@/data/categorynews";
import Icons from "../icon/icon";
import useOutsideClick from "@/hook/useOutsideClick";

const MultipleSelect = (): JSX.Element => {
    const searchParams = useSearchParams();
    const paramsFlag = searchParams.get("controlNews");
    const [controlNews, setControlNews] = useState(paramsFlag === "true" ? true : false);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState<string[]>([]);
    const [menuOpen, setMenuOpen] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const ref = useRef<HTMLDivElement | null>(null);

    useOutsideClick(ref, () => {
        if (menuOpen) setMenuOpen(false); // Close the dropdown if it's open
    });

    const filteredTags = CATEGORIES_NEWS.filter(
        (item: INewsCategory) =>
            item?.categoryName?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) &&
            !selected.includes(item?.categoryName)
    );

    const isDisable =
        !query?.trim() ||
        selected.filter(
            (item) => item?.toLocaleLowerCase()?.trim() === query?.toLocaleLowerCase()?.trim()
        )?.length;

    const handleUpdateNews = async () => {
        await fetch("/api/cron/start", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                schedule: "*/15 * * * *", // every 30 minute
                query: selected.toString(),
                // statusTrigger,
            }), // every minute
        });
    };

    const handleStopCron = async () => {
        await fetch("/api/cron/stop", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}), // every minute
        });
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("controlNews", controlNews ? "true" : "false");
        }
    }, []);

    return (
        <div className="d-flex align-items-center gap-2 mb-5">
            {controlNews && (
                <>
                    <div
                        className="position-relative"
                        style={{ width: "20rem", fontSize: "0.875rem" }}
                    >
                        {selected?.length ? (
                            <div
                                className="position-relative card d-flex flex-wrap gap-1 p-2 mb-2"
                                style={{ fontSize: "0.875rem", width: "20rem" }}
                            >
                                {selected.map((tag, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="card-tag py-1.5 px-3 d-flex align-items-center gap-2"
                                        >
                                            {tag}
                                            <div
                                                onMouseDown={(e) => e.preventDefault()}
                                                onClick={() =>
                                                    setSelected(selected.filter((i) => i !== tag))
                                                }
                                            >
                                                <Icons.Close />
                                            </div>
                                        </div>
                                    );
                                })}
                                <div className="w-full text-right">
                                    <span
                                        className="text-gray-400 cursor-pointer"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            setSelected([]);
                                            inputRef.current?.focus();
                                        }}
                                    >
                                        Clear all
                                    </span>
                                </div>
                            </div>
                        ) : null}
                        <div
                            className="card d-flex align-items-center flex-row p-3 gap-2"
                            style={{ width: "20rem" }}
                        >
                            <Icons.Search />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value.trimStart())}
                                placeholder="Search or Create tags"
                                className="bg-transparent text-sm flex-1 caret-rose-600"
                                style={{
                                    fontSize: "0.875rem",
                                    caretColor: "#f43f5e",
                                    outline: "none",
                                    border: "none",
                                    width: "100%",
                                }}
                                onFocus={() => {
                                    setMenuOpen(true);
                                }}
                                onBlur={() => {
                                    setMenuOpen(true);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !isDisable) {
                                        setSelected((prev) => [...prev, query]);
                                        setQuery("");
                                        setMenuOpen(true);
                                    }
                                }}
                            />
                        </div>

                        {menuOpen ? (
                            <div
                                ref={ref}
                                className="card mt-2 p-1"
                                style={{
                                    position: "absolute",
                                    maxHeight: "200px",
                                    display: "flex",
                                    overflowY: "auto",
                                    scrollbarWidth: "thin",
                                    scrollBehavior: "smooth",
                                    width: "100%",
                                    zIndex: 100,
                                }}
                            >
                                <ul className="w-full">
                                    {filteredTags?.length ? (
                                        filteredTags.map((tag, i) => (
                                            <li
                                                key={i}
                                                className="p-2 cursor-pointer hover:bg-rose-50 hover:text-rose-500 rounded-md w-full"
                                                onMouseDown={(e) => e.preventDefault()}
                                                onClick={() => {
                                                    setMenuOpen(true);
                                                    if (selected.length < 3) {
                                                        setSelected((prev: string[]) => [
                                                            ...prev,
                                                            tag.categoryName?.toString() ?? "",
                                                        ]);
                                                    } else {
                                                        alert("You can add only 3 tags");
                                                    }
                                                    setQuery("");
                                                }}
                                            >
                                                {tag.categoryName}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="p-2 text-gray-500">No options available</li>
                                    )}
                                </ul>
                            </div>
                        ) : null}
                    </div>

                    <button
                        className="btn btn-primary-dark"
                        style={{ margin: "0px !important", placeSelf: "flex-end" }}
                        type="button"
                        onClick={handleUpdateNews}
                    >
                        Update
                    </button>

                    <button
                        className="btn btn-primary-dark"
                        style={{ margin: "0px !important", placeSelf: "flex-end" }}
                        type="button"
                        onClick={handleStopCron}
                    >
                        Stop
                    </button>
                </>
            )}

            {!controlNews && (
                <>
                    <span></span>
                </>
            )}
        </div>
    );
};

export default MultipleSelect;
