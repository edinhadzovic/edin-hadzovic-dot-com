import {NextSeo} from "next-seo";
import { WorkCard } from "../../components/work-card";

export default function Work(props) {

    return (
        <>
            <NextSeo
                title="Work | Edin Hadzovic"
                description="Here, you can see where did I work and discover what responsibilities did I have."
            />
            <section className="w-full">
                    <div className="container mx-auto">
                        <h2 className="m-9 text-4xl">Work</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-20">
                            <WorkCard
                                to="/work/wesolutions"
                                title="Full-Stack Developer"
                                desc="Account Managing web application, building rest APIs, and microservices"
                                years="Sep 2022 - Mar 2024"
                                firm="Wesolutions GmbH"
                                
                                image="/images/work/icomedias.jpeg"
                                firmLink="https://www.wesual.at/"
                            />
                             <WorkCard
                                to="/work/denovo"
                                title="Full-Stack Developer"
                                desc="Building REST API services and web apps"
                                years="May 2021 - Dec 2021"
                                firm="Denovo Gmbh"
                                firmLink="https://www.denovo.at/"
                                image="/images/work/denovo.jpeg"
                            />
                            <WorkCard
                                to="/work/icomedias"
                                title="Full-Stack Developer"
                                desc="Building Micorservices and Admin Portal"
                                years="Nov 2018 - Mar 2021"
                                firm="Icomedias Gmbh"
                                position="bottom"
                                image="/images/work/icomedias.jpeg"
                                firmLink="https://www.hybridforms.net/"
                            />
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
        </>
    );
}