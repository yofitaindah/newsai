"use client";

import { useAppContext } from "@/context/appContext";
import headerBlueLogo from "@/public/images/logo_news.png";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";

type TNavItem = {
    id: number;
    name: string;
    link: string;
    dropdownMenu?: TNavItem[];
    twoCols?: boolean;
};

const navbarLinks: TNavItem[] = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "NewsAI",
        link: "",
        dropdownMenu: [
            {
                id: 202,
                name: "Tokenomics",
                link: "/tokenomics",
            },
            {
                id: 203,
                name: "Roadmap",
                link: "/roadmap",
            },
            {
                id: 204,
                name: "Team Details",
                link: "/team",
            },
            {
                id: 205,
                name: "FaQ",
                link: "/faq",
            },
        ],
        twoCols: true,
    },
    {
        id: 3,
        name: "Social",
        link: "/use-cases",
        dropdownMenu: [
            {
                id: 201,
                name: "Telegram",
                link: "http://t.me/NewsAiAgent",
            },
            {
                id: 202,
                name: "Twitter",
                link: "https://x.com/NewsAIAgents",
            },
            {
                id: 2031,
                name: "Tiktok",
                link: "https://www.tiktok.com/@newsaiagents",
            },
            {
                id: 204,
                name: "Youtube",
                link: "https://youtube.com/@newsaiagent",
            },
        ],
    },
];

export default function Header() {
    const searchParams = useSearchParams();

    const headerRef = useRef<HTMLElement>(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeDropdownId, setActiveDropdownId] = useState(0);

    const { headerHeightInit } = useAppContext();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const headerHeight = headerRef.current?.clientHeight;
            if (headerHeight) {
                document.body.style.paddingTop = headerHeight + "px";
                headerHeightInit(headerHeight);
            }

            localStorage.setItem("controlNews", "true");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const paramsFlag = searchParams.get("controlNews");

        if (typeof window !== "undefined") {
            window.localStorage.setItem("controlNews", paramsFlag === "true" ? "true" : "false");
        }
    }, [searchParams]);

    const handleSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop > 0 ? setIsSticky(true) : setIsSticky(false);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleSticky);
        }

        return () => {
            window.removeEventListener("scroll", handleSticky);
        };
    }, []);

    return (
        <nav
            className={classNames("navbar navbar-expand-lg fixed-top", {
                "bg-dark": isMenuOpen,
                "headroom--pinned bg-dark": isSticky,
            })}
            ref={headerRef}
            data-bs-theme="dark"
        >
            <div className="container">
                <Link href="/" className="navbar-brand">
                    <Image
                        placeholder="blur"
                        src={headerBlueLogo}
                        alt="GenAi"
                        height={42}
                        priority
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <div className="navbar-toggler-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div
                    className={classNames("collapse navbar-collapse", {
                        show: isMenuOpen,
                    })}
                >
                    <div className="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
                        <ul className="navbar-nav gap-lg-2 gap-xl-5">
                            {navbarLinks.map((navLink) => (
                                <NavbarLinkItem
                                    key={navLink.id}
                                    data={navLink}
                                    activeDropdownId={activeDropdownId}
                                    setActiveDropdownId={setActiveDropdownId}
                                    collapseMenu={() => setIsMenuOpen(false)}
                                />
                            ))}
                        </ul>
                        <div className="">
                            <Link
                                href="https://t.me/newsaiagent_bot"
                                className="btn btn-outline-primary-dark"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

type TNavbarLinkItemProps = {
    data: TNavItem;
    activeDropdownId: number;
    setActiveDropdownId: React.Dispatch<React.SetStateAction<number>>;
    collapseMenu: () => void;
};

function NavbarLinkItem({
    data,
    activeDropdownId,
    setActiveDropdownId,
    collapseMenu,
}: TNavbarLinkItemProps) {
    const { id, name, link, dropdownMenu, twoCols } = data;

    const handleDropdownToggle = (e: SyntheticEvent) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
            if (window.innerWidth < 992) {
                if (activeDropdownId === id) {
                    setActiveDropdownId(0);
                } else {
                    setActiveDropdownId(id);
                }
            }
        }
    };

    return (
        <li
            className={classNames("nav-item", {
                dropdown: !!dropdownMenu,
            })}
        >
            {dropdownMenu && dropdownMenu?.length ? (
                <React.Fragment>
                    <a
                        className={classNames("nav-link dropdown-toggle", {
                            active: activeDropdownId === id,
                        })}
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        aria-current="page"
                        onClick={(e) => handleDropdownToggle(e)}
                    >
                        {name}
                    </a>
                    <ul
                        className={classNames("dropdown-menu", {
                            "megamenu megamenu-cols-2": !!twoCols,
                            show: activeDropdownId === id,
                        })}
                    >
                        {dropdownMenu.map((dropItem) => (
                            <li key={dropItem.id}>
                                <Link
                                    className="dropdown-item "
                                    href={dropItem.link}
                                    onClick={collapseMenu}
                                >
                                    {dropItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </React.Fragment>
            ) : (
                <Link className="nav-link" href={link} onClick={collapseMenu}>
                    {name}
                </Link>
            )}
        </li>
    );
}
