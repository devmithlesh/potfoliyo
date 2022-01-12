function Home({ showMenu, setShowMenu }) {
    return (
        <div>
            <section className="bg-gray-900 text-gray-100" id="home-1">
                <div className="container mx-auto py-36">
                    <div className="text-gray-100 text-xl absolute right-4 top-4 block sm:hidden lg:hidden md:hidden 2xl:hidden z-50" onClick={() => setShowMenu(!showMenu)}> {showMenu === true ? <i className="fas fa-window-close"></i> : <i className="far fa-bars"></i>}</div>
                    <div className=" text-gray-100 px-10 sm:ml-10 lg: md:ml-10 lg:ml-10 ml-0 py-3 sm:pl-0 md:pl-80 lg:pl-80">
                        <h2 className="text-xl">HI THERE !</h2>
                        <h1 className="text-4xl my-2 font-bold">I'M Mithlesh <span className="text-yellow-400">Nirmal</span></h1>
                        <p className="sm:pr-40 md:pr-40 lg:pr-40 mb-6 leading-loose text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                            eveniet dicta
                            officiis quos error,
                            dolores ullam. Magnam natus ipsa repellendus ex aspernatur hic illo esse ea beatae? Aperiam,
                            consequuntur dignissimos.</p>
                        <a href="#about" className="py-2 px-4 bg-gray-800 rounded-full text-gray-100 hover:bg-yellow-400 text-sm">About Me<i
                            className="fas fa-user text-gray-100 ml-2"></i></a>
                    </div>
                    {/* up arrouw */}
                    <a href="#home-1" className="absolute text-3xl right-12 bottom-12 text-gray-100 z-40">
                        <i className="fas fa-chevron-circle-up fixed"></i></a>
                </div>
            </section>
        </div>
    );
}
export default Home;