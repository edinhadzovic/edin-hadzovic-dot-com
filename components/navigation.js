import { useState } from "react";
import { Bar, Close } from "./buttons";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navigation = (props) => {
    const router = useRouter();
    const [active, setActive] = useState(false);

    const onBarClick = () => setActive(true);

    return (
        <div className="flex justify-end">
            <div className={`${active ? "fixed top-4 right-15" : "" } z-20`}>
                { !active ? <Bar onClick={onBarClick} /> : <Close onClick={() => setActive(false)} /> }
            </div>
            {active &&
                <div className="fixed top-0 right-0 w-screen h-screen bg-gray-900 z-10 text-gray-100">
                    <nav className="h-full">
                        <div className="grid grid-cols-1 my-16 text-center items-center text-2xl font-bold">
                            <div className="py-6 sm:py-8">
                                <Link href="/">
                                    <a className={router.pathname === "/" ? "line-through decoration-yellow-400" : ""}>
                                        Home
                                    </a>
                                </Link>
                            </div>
                            <div className="py-6 sm:py-8">
                                <Link href="/about">
                                    <a className={router.pathname === "/about" ? "line-through decoration-yellow-400" : ""}>
                                        About me
                                    </a>
                                </Link>
                            </div>
                            <div className="py-6 sm:py-8">
                                <Link href="/work">
                                    <a className={router.pathname === "/work" ? "line-through decoration-yellow-400" : ""}>
                                        Work
                                    </a>
                                </Link>
                            </div>
                            <div className="py-6 sm:py-8">
                                <Link href="/my-projects">
                                    <a className={router.pathname === "/my-projects" ? "line-through decoration-yellow-400" : ""}>
                                        Side Projects
                                    </a>
                                </Link>
                            </div>
                            <div className="py-6 sm:py-8">
                                <Link href="/blog">
                                    <a className={router.pathname === "/blog" ? "line-through decoration-yellow-400" : ""}>
                                        Blog
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            }
        </div>
    );
}