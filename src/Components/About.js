import Resume from '../Images/Resume.pdf';
function About() {
    return (
        <div>
            <section id="about">
                <div className="container mx-auto px-10 sm:pl-0 md:pl-80 lg:md:pl-80 flex justify-center flex-col py-32">
                    <h1 className="text-3xl font-bold text-center"><span className="text-yellow-400">About</span> Me</h1>
                    <div className="w-full h-px bg-gray-800"></div>
                    {/* up scroll */}
                    {/* <a href="#home-1" className="absolute text-3xl right-12 bottom-12  z-40">
                        <i className="fas fa-chevron-circle-up fixed"></i></a> */}
                    <div className="flex justify-between sm:pt-10 md:pt-10 lg:pt-10 pt-5 flex-col sm:flex-row md:flex-row lg:flex-row">
                        <div className="mb-10">
                            <p className="my-4">Name<span className="text-yellow-400">: Mihlesh Nirmal</span></p>
                            <p className="my-4">Age<span className="text-yellow-400">: 21</span></p>
                            <p className="my-4">Qualification<span className="text-yellow-400">: BCA</span></p>
                            <p className="my-4">Post<span className="text-yellow-400">: Front End Developer</span></p>
                            <p className="my-4 mb-6">Language<span className="text-yellow-400">: Hindi / Punjabi / English</span></p>
                            <a href={Resume} target="_blank" rel="noopener noreferrer" className="py-2 px-4 bg-gray-800 rounded-full text-sm hover:bg-yellow-400 " >Download Resume <i className="fa-solid fa-download"></i></a>
                        </div>
                        <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-2 grid-rows-1 gap-8 text-center">
                            <div className="bg-gray-800 py-12 px-4 flex flex-col justify-center items-center rounded transform hover:scale-125 ease-out duration-700 ">
                                <span className="text-yellow-400 text-3xl">0+</span>
                                <p className="text-sm">Year Of Experience</p>
                            </div>
                            <a href="#projects">
                                <div className="bg-gray-800 py-12 px-4 flex flex-col justify-center items-center rounded transform hover:scale-125 ease-out duration-700 ">
                                    <span className="text-yellow-400 text-3xl">8+</span>
                                    <p className="text-sm">Projects Completed</p>
                                </div>
                            </a>
                            <div className="bg-gray-800 py-12 px-4 flex flex-col justify-center items-center rounded transform hover:scale-125 ease-out duration-700 ">
                                <span className="text-yellow-400 text-3xl">0+</span>
                                <p className="text-sm">Happy Coustomers</p>
                            </div>
                            <a href="#Achivements"><div className="bg-gray-800 py-12 px-4 flex flex-col justify-center items-center rounded transform hover:scale-125 ease-out duration-700 ">
                                <span className="text-yellow-400 text-3xl">10+</span>
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