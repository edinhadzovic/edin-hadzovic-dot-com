import React from "react";

export default function Home(props) {

    return (
        <>
            <div className="flex h-screen content-center justify-center">
                <div className="flex flex-col justify-center self-center space-y-2">
                    <div className="space-y-1">
                        <h1 className="lg:text-8xl">Edin Hadzovic</h1>
                        <h5 className="lg:text-2xl text-gray-400">Full Stack Developer</h5>
                    </div>
                    <hr />
                    <div className="w-2/3 lg:text-xl">
                        <p>I am full stack developer working like a <span className="text-blue-500">freelancer</span>. Love to learn, teach and write about technology, programming, science, cryptocurrency and internet culture. <a className="text-green-500 hover:text-green-400" href="/about">read more <span className="text-sm">{`>`}</span></a></p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto space-y-12 h-screen">
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
                                <a className="text-green-500 hover:text-green-400" href="">more</a>
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
                                <a className="text-green-500 hover:text-green-400" href="">more</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="text-3xl">articles</h3>
                        <hr />
                    </div>
                    <div className="py-4 flex">
                        <div className="w-1/2 space-y-4">
                            <h4 className="text-2xl">No articles right now!</h4>
                            <p>Working on my first article to talk about cryptocurrency in general, and if web3 is just a buzz word or a real thing.</p>
                            <p>
                                <a className="text-green-500 hover:text-green-400" href="">more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};