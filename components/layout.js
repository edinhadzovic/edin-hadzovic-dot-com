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
            <nav className="container mx-auto flex py-4">
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
                        <div className="flex-1">
                            <h4 className="text-4xl">Let's Work <br /> <span className="ml-20">together</span></h4>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-end">
                                <Action link="mailto:contact@edinhadzovic.com">Write an Email</Action>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 flex justify-center items-center">
                        <p className="text-2xl w-1/4 text-center">
                            "Success in not final. Failure is not final. It is courage to continue that counts." 
                        </p>
                    </div>
                    <div className="text-xs text-right pt-8">
                        <div>Portfolio {getYear()}</div>
                        <div>Designed and developed by Edin Hadzovic</div>
                    </div>
                </div>
            </footer>
        </div>
    );

    return (
        <div className="flex flex-row ">
            <div className="relative flex flex-col w-1/5">
                <div className="flex flex-col fixed space-y-5 justify-center self-center h-screen w-1/5 text-right bg-slate-800 text-white pr-5">
                    <div>
                        <h1>Edin Hadzovic</h1>
                        <h6>full stack developer</h6>
                    </div>
                    <nav className="flex flex-col space-y-7">
                        <a className="hover:text-slate-300 font-bold" href="/">home</a>
                        <a className="hover:text-slate-300 font-bold" href="/about">about me</a>
                        <a className="hover:text-slate-300 font-bold" href="/work">work</a>
                        <a className="hover:text-slate-300 font-bold" href="/my-projects">my projects</a>
                        <a className="hover:text-slate-300 font-bold" href="/articles">articles</a>
                    </nav>
                    <div className="flex justify-end pt-4 border-t-2 border-t-slate-700">
                        <div className="flex space-x-4">
                            <a href="https://github.com/edinhadzovic">
                                <FontAwesomeIcon icon={faGithub} className="w-6 h-6 hover:text-green-500"/>
                            </a>
                            <a href="https://at.linkedin.com/in/edinhadzovic">
                                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 hover:text-green-500"/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a className="hover:text-green-500" href="mailto:contract@edinhadzovic.com">
                            contact@edinhadzovic.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-4/5">
                {children}
            </div>
        </div>
    );
}