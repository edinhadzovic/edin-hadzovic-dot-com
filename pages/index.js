import { faCodepen, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from "react";
import { FloatingIcons } from "../components/floatingIcons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { WorkCard } from "../components/work-card";
import { Action } from "../components/buttons";
import { Icon } from "../components/icons/icon";

export default function Home(props) {

    return (
        <div className="">
            <div className="relative h-screen mx-auto flex content-center justify-center">
                <div className="relative flex flex-col justify-center self-center">
                    <p className="text-4xl lg:text-8xl text-gray-800 text-center leading-relaxed lg:pb-12 lg:mb-12">
                       <span className="px-4 bg-gray-800 text-gray-100">Full-Stack</span> <b className="text-gray-800">Developer</b>
                    </p>
                    <FloatingIcons icon={faGithub} className="hidden lg:flex -top-28 left-10" />
                    <FloatingIcons icon={faLinkedin} className="hidden lg:flex bottom-28 right-0"/>
                    <FloatingIcons icon={faCodepen} className="hidden lg:flex right-80 -bottom-52"/>
                    <div className="flex justify-center my-4">
                        <Icon icon={faGithub} className="lg:hidden" />
                        <Icon icon={faLinkedin} className="lg:hidden" />
                        <Icon icon={faCodepen} className="lg:hidden" />
                    </div>
                    
                </div>
            </div>
            <section className="w-full">
                <div className="container mx-auto">
                    <h2 className="m-9 text-4xl">Work</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-20">
                        <WorkCard
                            to="/"
                            title="Full-Stack Developer"
                            desc="Building rest api services and web apps"
                            years="2015-2020"
                            firm="denovo"
                        />
                        <WorkCard
                            to="/"
                            title="Full-Stack Developer"
                            desc="Building rest api services and web apps"
                            years="2015-2020"
                            firm="denovo"
                            position="bottom"
                        />
                        <WorkCard
                            to="/"
                            title="Full-Stack Developer"
                            desc="Building rest api services and web apps"
                            years="2015-2020"
                            firm="denovo"
                        />
                        <WorkCard
                            to="/"
                            title="Full-Stack Developer"
                            desc="Building rest api services and web apps"
                            years="2015-2020"
                            firm="denovo"
                            position="bottom"
                        />
                        <WorkCard
                            to="/"
                            title="Full-Stack Developer"
                            desc="Building rest api services and web apps"
                            years="2015-2020"
                            firm="denovo"
                        />
                        <WorkCard
                            to="/"
                            title="Full-Stack Developer"
                            desc="Building rest api services and web apps"
                            years="2015-2020"
                            firm="denovo"
                            position="bottom"
                        />
                    </div>
                </div>
            </section>
            <section className="h-screen w-full flex sm:justify-center sm:items-center">
                <div>
                    <div className="w-1/2 text-center mx-auto text-xl sm:text-2xl leading-relaxed">
                        I have a passion to create products and services that are seamless, meaningful and impactful.
                    </div>
                    <div className="w-1/2 text-center mx-auto text-2xl leading-relaxed mt-10">
                        <Link href="/about">
                            <a>
                                <div className="group flex justify-center items-center">
                                    <h5>About me</h5>
                                    <div>
                                        <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 ml-5 group-hover:text-yellow-300" />
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    
                </div>
            </section>
            {/* <div className="container mx-auto space-y-12 h-screen">
                <div>
                    <div>
                        <h3 className="text-3xl">work</h3>
                        <hr />
                    </div>
                    <div className="py-4 flex">
                        <div className="w-1/2 space-y-4">
                            <h4 className="text-2xl">Denovo Gmbh</h4>
                            <p>Working as a full stack developer for couple months, working on B2B platforms, around recycling, and using react, nodejs, express, graphql, postgressSQL, in a Agile product development cycles.</p>
                            <p>
                                <a className="text-green-500 hover:text-green-400" href="/work">more</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="text-3xl">my projects</h3>
                        <hr />
                    </div>
                    <div className="py-4 flex">
                        <div className="w-1/2 space-y-4">
                            <h4 className="text-2xl">Kounotori Token</h4>
                            <p>A community driven cryptocurrency, like Doge, building community and a defi protocol using ethereum, web3, react and typescript</p>
                            <p>
                                <a className="text-green-500 hover:text-green-400" href="/my-projects">more</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="text-3xl">articles</h3>
                        <hr />
                    </div>
                    <div className="py-4 flex">w
                        <div className="w-1/2 space-y-4">
                            <h4 className="text-2xl">No articles right now!</h4>
                            <p>Working on my first article to talk about cryptocurrency in general, and if web3 is just a buzz word or a real thing.</p>
                            <p>
                                <a className="text-green-500 hover:text-green-400" href="/articles">more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};