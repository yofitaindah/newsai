"use client";

import { useRef, useState } from "react";
import { useOutsideClick } from "@/hook/useOutsideClick";
import { INewsCategory } from "@/types/categorynews";
import { CATEGORIES_NEWS } from "@/data/categorynews";
import Icons from "../icon/icon";

const MultipleSelect = (): JSX.Element => {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState<string[]>([]);
    const [menuOpen, setMenuOpen] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const ref = useRef<HTMLDivElement | null>(null);

    const handleOutSideClick = () => {
        console.log("menuOpen", menuOpen);
        setMenuOpen(false);
    };

    useOutsideClick(ref, handleOutSideClick);

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
                schedule: "* * * * *", // every 30 minute
                query: selected.toString(),
                // statusTrigger,
            }), // every minute
        });
    };

    return (
        <div ref={ref} className="d-flex align-items-center gap-2 mb-5">
            <div className="position-relative" style={{ width: "20rem", fontSize: "0.875rem" }}>
                {selected?.length ? (
                    <div className="w-80 position-relative card d-flex flex-wrap gap-1 p-2 mb-2" style={{backgroundColor: "#fff", fontSize: "0.875rem"}}>
                        {selected.map((tag) => {
                            return (
                                <div
                                    key={tag}
                                    className="rounded-circle d-inline-block py-1.5 px-3 border border-secondary bg-light text-secondary d-flex align-items-center gap-2"
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
                <div className="card flex items-center justify-between p-3 w-80 gap-2.5">
                    <Icons.Search />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value.trimStart())}
                        placeholder="Search or Create tags"
                        className="bg-transparent text-sm flex-1 caret-rose-600"
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

                {/* Menu's */}
                {menuOpen ? (
                    <div className="card absolute w-full max-h-52 mt-2 p-1 flex overflow-y-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
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
                className="min-w-20 h-[44px] place-self-end bg-rose-500 hover:bg-rose-700 border-rose-500 hover:border-rose-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={handleUpdateNews}
            >
                Update
            </button>
        </div>
    );
};

export default MultipleSelect;
