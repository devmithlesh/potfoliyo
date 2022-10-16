import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container mx-auto py-16 px-10 sm:pl-0 md:pl-80 lg:md:pl-80">
          <div className="w-full h-px bg-gray-800 relative">
            <div className=" bg-gray-900 w-32 mx-auto text-center social_footer">
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
          </div>
          <div className="flex justify-center mt-10">
            <p>@2022 copyright - devmithlesh</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
