import Resume from "../Images/Resume.pdf";

const Abdata = [
  {
    num: "0+",
    title: "Year Of Experience",
  },
  {
    num: "8+",
    title: "Project Completed",
  },
  {
    num: "0+",
    title: "Happy Customers",
  },
  {
    num: "10+",
    title: "Certificates",
  },
];
function About() {
  return (
    <>
      <section id="about">
        <div className="container mx-auto px-10 sm:pl-0 md:pl-80 lg:md:pl-80 flex justify-center flex-col py-32">
          <h1 className="text-3xl font-bold text-center">
            <span className="yellow-rang">About</span> Me
          </h1>
          <div className="w-full h-px bg-gray-800"></div>
          <div className="flex justify-between sm:pt-10 md:pt-10 lg:pt-10 pt-5 flex-col sm:flex-row md:flex-row lg:flex-row">
            <div className="mb-10">
              <p className="my-4">
                Name<span className="yellow-rang">: Mihlesh Nirmal</span>
              </p>
              <p className="my-4">
                Age<span className="yellow-rang">: 21</span>
              </p>
              <p className="my-4">
                Qualification<span className="yellow-rang">: BCA</span>
              </p>
              <p className="my-4">
                Post
                <span className="yellow-rang">: Front End Developer</span>
              </p>
              <p className="my-4 mb-6">
                Language
                <span className="yellow-rang">: Hindi / Punjabi / English</span>
              </p>
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-gray-800 rounded-full text-sm bgcolor"
              >
                Download Resume <i className="fa-solid fa-download"></i>
              </a>
            </div>
            <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-2 grid-rows-1 gap-8 text-center">
              {Abdata.map((val, ind) => {
                return (
                  <a href="#projects" key={ind}>
                    <div className="bg-gray-800 py-12 md:py-8 lg:py-12 px-4 flex flex-col justify-center items-center rounded transform hover:scale-110 ease-out duration-700 ">
                      <span className="yellow-rang text-3xl">{val.num}</span>
                      <p className="text-sm">{val.title}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
