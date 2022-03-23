import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import Link from "next/link";
import { Action } from "./buttons";

export const Layout = (props) => {
    const { children } = props;

    const getYear = () => {
        const d = new Date();
        return d.getFullYear();
    }

    return (
        <div style={{backgroundImage: "radial-gradient(circle, #ffffff, #fafafa, #f5f5f5, #f0f0f0, #ebebeb)"}}>
            <nav className="container mx-auto flex py-4 px-4">
                <div className="flex-1">
                    <Link href="/">
                        <a>
                            <Logo />
                        </a>                
                    </Link>
                </div>
                <div className="flex-1">
                    <Navigation />
                </div>
            </nav>
            <main>
                {children}
            </main>
            <footer className="w-full bg-yellow-400">
                <div className="container mx-auto py-12">
                    <div className="pb-10 flex">
                        <div className="flex-1 ml-5 sm:ml-0">
                            <h4 className="text-4xl">Let's Work <br /> <span className="ml-20">together</span></h4>
                        </div>
                        <div className="hidden sm:flex">
                            <div className="flex justify-end">
                                <Action link="mailto:contact@edinhadzovic.com">Write an Email</Action>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 flex justify-center items-center">
                        <p className="text-2xl w-3/4 mx-auto sm:w-2/4 lg:w-1/4 text-center">
                            "Success in not final. Failure is not final. It is courage to continue that counts." 
                        </p>
                    </div>
                    <div className="sm:hidden justify-center flex items-center">
                        <Action link="mailto:contact@edinhadzovic.com">Write an Email</Action>
                    </div>
                    <div className="text-xs text-right pt-8 mr-4 sm:mr-0">
                        <div>Portfolio {getYear()}</div>
                        <div>Designed and developed by Edin Hadzovic</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}