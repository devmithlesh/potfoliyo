import Img from '../Images/img.jpeg';
function Menu({ setShowMenu }) {
    return (
        <div id="home" className="md:block lg:block 2xl:block">
            <div className="sm:w-72 md:w-72 lg:w-72 2xl:w-72 w-full bg-gray-800 flex justify-center flex-col items-center py-6 h-screen fixed">
                <img src={Img} alt="Mithlesh"
                    className="image-logo-menu" />
                <h3 className="text-white text-2xl mt-1 font-bold">Mithlesh <span className="text-yellow-400">Nirmal</span></h3>
                <p className="text-white text-sm tracking-wider">Front End Developer</p>
                <nav className="w-10/12 text-center">
                    <a href="#home" onClick={() => setShowMenu(false)}
                        className="block rounded-full my-5 sm: py-2 px-30 bg-gray-700 hover:bg-yellow-400 text-gray-100 transition duration-300 text-sm">Home</a>
                    <a href="#about" onClick={() => setShowMenu(false)}
                        className="block rounded-full my-5 sm: py-2 bg-gray-700 hover:bg-yellow-400 text-gray-100 transition duration-300 text-sm">About</a>
                    <a href="#projects" onClick={() => setShowMenu(false)}
                        className="block rounded-full my-5 sm: py-2 bg-gray-700 hover:bg-yellow-400 text-gray-100 transition duration-300 text-sm">
                        Projects</a>
                    <a href="#Achivements" onClick={() => setShowMenu(false)}
                        className="block rounded-full my-5 sm: py-2 bg-gray-700 hover:bg-yellow-400 text-gray-100 transition duration-300 text-sm">
                        Achivements</a>
                    <a href="#education" onClick={() => setShowMenu(false)}
                        className="block rounded-full my-5 sm: py-2 bg-gray-700 hover:bg-yellow-400 text-gray-100 transition duration-300 text-sm">
                        Education</a>
                    <a href="#contact" onClick={() => setShowMenu(false)}
                        className="block rounded-full my-5 sm: py-2 bg-gray-700 hover:bg-yellow-400 text-gray-100 transition duration-300 text-sm">Contact
                    </a>
                </nav>
            </div>
        </div>
    );
}
export default Menu;