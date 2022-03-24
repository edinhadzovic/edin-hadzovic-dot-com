import { NextSeo } from "next-seo"

export default function About(props) {

    return (
        <>
            <NextSeo
                title="Edin Hadzovic | about"
                description="Hallo, I am a full-stack developer, living in Graz, Austria. I have a passion for creating impactful products."
            />
            <div className="container mx-auto">
                <h1 className="text-4xl sm:text-8xl py-8" style={{height: 'calc(100vh - 50%)'}}>Edin Hadzovic</h1>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:my-10">
                        <div></div>
                        <div className="space-y-8">
                            <p className="font-bold text-2xl leading-relaxed">
                                I am a full-stack developer, living in Graz, Austria. Love to build seamless, meaningful and impactful products and services. 
                            </p>
                            <p className="leading-relaxed">
                                I think understanding the human experience is essential for creating useful and effective products that make life easier. I enjoy using my skill-set to empower people to accomplish their goals. Always ready to take challanges, learn new stuff and teach others from my expirience.
                            </p>
                            <p className="leading-relaxed">
                                My development stack is focused on performance & accessibility with delightful interactions. Using modern tech stack like <a href="https://jamstack.org/" target="_blank" rel="noreferrer" className="text-yellow-400"><i>jamstack.</i></a> 

                            </p>
                            <div className="text-sm">
                                <div className="my-3">Services I offer include:</div>
                                <ul className="list-disc ml-8 space-y-2">
                                    <li>Backend Developing</li>
                                    <li>Frontend Developing</li>
                                    <li>Apps Development</li>
                                    <li>Web3 App</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block h-20"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 my-4 sm:my-10">
                        <div>
                            <h3 className="text-4xl sm:ml-3">Skill-set</h3>
                        </div>
                        <div>
                            <div className="flex flex-wrap">
                                <span className="flex-base-33 p-3">Javascript</span>
                                <span className="flex-base-33 p-3">Typescript</span>
                                <span className="flex-base-33 p-3">Python</span>
                                <span className="flex-base-33 p-3">Rust</span>
                                <span className="flex-base-33 p-3">PHP</span>
                                <span className="flex-base-33 p-3">Solidity</span>
                                <span className="flex-base-33 p-3">HTML/CSS/SCSS</span>
                                <span className="flex-base-33 p-3">NodeJS</span>
                                <span className="flex-base-33 p-3">MySQL</span>
                                <span className="flex-base-33 p-3">NoSQL</span>
                                <span className="flex-base-33 p-3">NestJS</span>
                                <span className="flex-base-33 p-3">React</span>
                                <span className="flex-base-33 p-3">React Native</span>
                                <span className="flex-base-33 p-3">Svetle</span>
                                <span className="flex-base-33 p-3">Git</span>
                                <span className="flex-base-33 p-3">Docker</span>
                                <span className="flex-base-33 p-3">Wordpress</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block h-20"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 my-4 sm:my-10">
                        <div>
                            <h3 className="text-4xl sm:ml-3">Current<br /> <span className="ml-8">Favorites</span></h3>
                        </div>
                        <div>
                            <div className="my-4">
                                <div className="flex">
                                    <div className="flex flex-wrap w-full">
                                        <span className="flex-base-50 p-3">OS</span>
                                        <span className="flex-base-50 p-3 italic">Linux (Elementary OS)</span>
                                        <span className="flex-base-50 p-3">Editor</span>
                                        <span className="flex-base-50 p-3 italic">Visual Studio Code</span>
                                        <span className="flex-base-50 p-3">Newsletter</span>
                                        <span className="flex-base-50 p-3 italic">Codrops</span>
                                        <span className="flex-base-50 p-3">UI Inspirations</span>
                                        <span className="flex-base-50 p-3 italic">Awwwards, dribbble</span>
                                        <span className="flex-base-50 p-3">Books</span>
                                        <span className="flex-base-50 p-3 italic">Secrets of the JavaScript Ninja, <br /> Debt: The First 5000 Years <br /> The Bitcoin Standard </span>
                                        <span className="flex-base-50 p-3">Food</span>
                                        <span className="flex-base-50 p-3 italic">Ramen</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}