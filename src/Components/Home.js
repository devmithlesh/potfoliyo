import "./Home.css";
function Home({ showMenu, setShowMenu }) {
  return (
    <>
      <section id="home-1">
        <div className="container mx-auto pt-24 md:pt-32 pb-44 md:pb-32 relative">
          <div
            className="text-xl fixed right-4 top-4  block  
                    md:hidden lg:hidden z-50"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu === true ? (
              <i className="fas fa-window-close"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
          <div className="px-10 sm:ml-10 md:ml-10 ml-0 py-3 sm:pl-0 md:pl-72 lg:pl-80">
            <h2 className="text-xl">HI THERE !</h2>
            <h1 className="text-4xl my-2 font-bold">
              I'M Mithlesh <span className="yellow-rang">Nirmal</span>
            </h1>
            <h3 className="yellow-rang text-sm font-bold flex ">
              Front End <p className="type-animation">Developer</p>
            </h3>
            <p className="sm:pr-40 md:pr-28 lg:pr-40 mb-4 mt-2 leading-loose text-sm">
              Looking for an opportunity to work in a challenging position to
              prove my computer science skills and utilize my knowledge and
              intelligence in the growth of organization.
            </p>
            <div className="mb-7 ">
              <a
                href="https://www.linkedin.com/in/devmithlesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl mr-2 ml-1"
              >
                <i className="fa-brands fa-linkedin hover:text-blue-500"></i>
              </a>
              <a
                href="https://github.com/devmithlesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl mx-2"
              >
                <i className="fa-brands fa-github hover:text-gray-400"></i>
              </a>
              <a
                href="https://www.instagram.com/dev_mithlesh/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl mx-2"
              >
                <i className="fa-brands fa-instagram hover:text-pink-500"></i>
              </a>
            </div>
            <a
              href="tel:+918196969106"
              className="py-2 px-4 bg-gray-800 rounded-full bgcolor text-sm"
            >
              Hire Me<i className="fas fa-user ml-2"></i>
            </a>
          </div>
          {/*============ up arrouw ==============*/}
          <a
            href="#home-1"
            className="absolute text-3xl right-12 md:bottom-0 bottom-14 z-40"
          >
            <i className="fas fa-chevron-circle-up fixed"></i>
          </a>
        </div>
      </section>
    </>
  );
}
export default Home;
