import { useState } from "react";
import { Bar, Close } from "./buttons";
import Link from "next/link";

export const Navigation = (props) => {
    const [active, setActive] = useState(true);

    const onBarClick = () => setActive(true);

    return (
        <div className="flex justify-end">
            <div className="z-20">
                { !active ? <Bar onClick={onBarClick} /> : <Close onClick={() => setActive(false)} /> }
            </div>
            {active &&
                <div className="absolute top-0 right-0 w-screen h-screen bg-gray-900 z-10 text-gray-100">
                    <nav className="h-full">
                        <div className="grid grid-cols-1 my-16 text-center items-center text-2xl font-bold">
                            <div className="py-6 sm:py-8">
                                <Link href="/">
                                    <a>
                                        About me
                                    </a>
                                </Link>
                            </div>
                            <div className="py-6 sm:py-8">
                                <Link href="/">
                                    <a>
                                        Work
                                    </a>
                                </Link>
                            </div>
                            <div className="py-6 sm:py-8">
                                <Link href="/">
                                    <a>
                                        Side Projects
                                    </a>
                                </Link>
                            </div>
                            <div className="py-6 sm:py-8">
                                <Link href="/">
                                    <a>
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