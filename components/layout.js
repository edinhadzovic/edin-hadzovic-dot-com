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
                </div>
            </div>
            <div className="w-4/5">
                {children}
            </div>
        </div>
    );
}