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
                        <p>I am full stack developer working like a <span className="text-blue-500">freelancer</span>. Love to learn, teach and write about technology, programming, science, cryptocurrency and internet culture. <a className="text-green-500 hover:text-green-700" href="/about">read more <span className="text-sm">{`>`}</span></a></p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-4">
                <div>
                    <h3 className="text-3xl">work</h3>
                    <hr />
                </div>
                <div className="p-4">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="container mx-auto my-4">
                <div>
                    <h3 className="text-3xl">my projects</h3>
                    <hr />
                </div>
                <div className="p-4">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="container mx-auto my-4">
                <div>
                    <h3 className="text-3xl">articles</h3>
                    <hr />
                </div>
                <div className="p-4">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
};