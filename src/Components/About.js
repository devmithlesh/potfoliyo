function About() {
    return (
        <div>
            <section className="bg-gray-900 text-gray-100" id="about">
                <div className="container mx-auto px-10 sm:pl-0 md:pl-80 lg:md:pl-80 flex justify-center flex-col py-20">
                    <h1 className="text-3xl font-bold text-gray-100 text-center"><span className="text-yellow-400">About</span> Me</h1>
                    <div className="w-full h-px bg-gray-800"></div>
                    <div className="flex justify-between sm:pt-10 md:pt-10 lg:pt-10 pt-5 flex-col sm:flex-row md:flex-row lg:flex-row">
                        <div className="mb-10">
                            <p className="my-4">Name<span className="text-yellow-400">: Mihlesh Nirmal</span></p>
                            <p className="my-4">Age<span className="text-yellow-400">: 20</span></p>
                            <p className="my-4">Qualification<span className="text-yellow-400">: BCA</span></p>
                            <p className="my-4">Post<span className="text-yellow-400">: Front End Developer</span></p>
                            <p className="my-4 mb-4">Language<span className="text-yellow-400">: Hindi / English</span></p>
                            <a href="https://www.linkedin.com/in/mithlesh-nirmal-57958a195" target="https://www.linkedin.com/in/mithlesh-nirmal-57958a195" className="py-2 px-4 bg-gray-800 rounded-full text-sm hover:bg-yellow-400">Download CV <i
                                className="fas fa-arrow-to-bottom"></i></a>
                        </div>
                        <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-2 grid-rows-1 gap-8 text-center">
                            <div className="bg-gray-800 py-14 sm:py-10 md:py-10 lg:py-10 px-2 flex flex-col justify-center items-center rounded transform hover:scale-125 ease-out duration-700 ">
                                <span className="text-yellow-400 text-3xl">1+</span>
                                <p className="text-sm">Year Of Experience</p>
                            </div>
                            <a href="#projects">
                                <div className="bg-gray-800 py-14 sm:py-10 md:py-10 lg:py-10 px-2 flex flex-col justify-center items-center rounded transform hover:scale-125 ease-out duration-700 ">
                                    <span className="text-yellow-400 text-3xl">6+</span>
                                    <p className="text-sm">Projects Completed</p>
                                </div>
                            </a>
                            <div className="bg-gray-800 py-14 sm:py-10 md:py-10 lg:py-10 px-2 flex flex-col justify-center items-center rounded transform hover:scale-125 ease-out duration-700 ">
                                <span className="text-yellow-400 text-3xl">0+</span>
                                <p className="text-sm">Happy Coustomers</p>
                            </div>
                            <a href="#Achivements"><div className="bg-gray-800 py-14 sm:py-10 md:py-10 lg:py-10 px-2 flex flex-col justify-center items-center rounded transform hover:scale-125 ease-out duration-700 ">
                                <span className="text-yellow-400 text-3xl">9+</span>
                                <p className="text-sm">Certificates</p>
                            </div></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default About;