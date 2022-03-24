import { faCodepen, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from "react";
import { FloatingIcons } from "../components/floatingIcons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { WorkCard } from "../components/work-card";
import { Action } from "../components/buttons";
import { Icon } from "../components/icons/icon";
import { NextSeo } from "next-seo";

export default function Home(props) {

    return (
        <>
            <NextSeo
                title="Edin Hadzovic | Full-Stack Developer"
                description="Portfolio website of Edin Hadzovic who is a Full-Stack Developer"
                canonical="https://edinhadzovic.com"
            />
            <div className="">
                <div className="relative h-screen mx-auto flex content-center justify-center">
                    <div className="relative flex flex-col justify-center self-center">
                        <p className="text-4xl lg:text-8xl text-gray-800 text-center leading-relaxed lg:pb-12 lg:mb-12">
                        <span className="px-4 bg-gray-800 text-gray-100">Full-Stack</span> <b className="text-gray-800">Developer</b>
                        </p>
                        <FloatingIcons link="https://github.com/edinhadzovic" icon={faGithub} className="hidden lg:flex -top-28 left-10" />
                        <FloatingIcons link="https://www.linkedin.com/in/edinhadzovic" icon={faLinkedin} className="hidden lg:flex bottom-28 right-0"/>
                        <FloatingIcons link="https://codepen.io/edinhadzovic" icon={faCodepen} className="hidden lg:flex right-80 -bottom-52"/>
                        <div className="flex justify-center my-4">
                            <Icon link="https://github.com/edinhadzovic" icon={faGithub} className="lg:hidden" />
                            <Icon link="https://www.linkedin.com/in/edinhadzovic" icon={faLinkedin} className="lg:hidden" />
                            <Icon link="https://codepen.io/edinhadzovic" icon={faCodepen} className="lg:hidden" />
                        </div>
                        
                    </div>
                </div>
                <section className="w-full">
                    <div className="container mx-auto">
                        <h2 className="m-9 text-4xl">Work</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-20">
                            
                            <WorkCard
                                to="/work/icomedias"
                                title="Full-Stack Developer"
                                desc="Building Micorservices and Admin Portal"
                                years="Nov 2018 - Mar 2021"
                                firm="Icomedias Gmbh"
                                
                                firmLink="https://www.hybridforms.net/"
                            />
                            <WorkCard
                                to="/work/denovo"
                                title="Full-Stack Developer"
                                desc="Building REST API services and web apps"
                                years="May 2021 - Dec 2021"
                                firm="Denovo Gmbh"
                                position="bottom"
                                firmLink="https://www.denovo.at/"
                            />
                            <div></div>
                            <WorkCard
                                to="/work/midlight"
                                title="Fontend Developer"
                                desc="Building Website with pure javascript and concrete5 (php)"
                                years="Jun 2017 - Jun 2018"
                                firm="Midlight GmbH"
                                firmLink="https://chax.at/"
                                position="bottom"
                            />
                        </div>
                    </div>
                </section>
                <section className="py-10 sm:py-0 sm:h-screen w-full flex sm:justify-center sm:items-center">
                    <div>
                        <div className="w-1/2 text-center mx-auto text-xl sm:text-2xl leading-relaxed">
                            I have a passion to create products and services that are seamless, meaningful and impactful.
                        </div>
                        <div className="w-1/2 text-center mx-auto text-2xl leading-relaxed mt-10">
                            <div className="flex justify-center">
                                <Action link="/about" isPage={true}>About me</Action>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};