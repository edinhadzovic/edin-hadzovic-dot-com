import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Layout = (props) => {
    const { children } = props;

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