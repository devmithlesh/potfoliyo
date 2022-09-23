import React, { useRef } from "react";
//
import { ToastContainer, toast } from "react-toastify";
//create account and import
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast("E-mail Send Successfully!");
    emailjs
      .sendForm(
        "service_glc03ds",
        "template_r9mxfg6",
        form.current,
        "OeaSk6ExidzL4ZQb0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section id="contact">
        <div className="container mx-auto px-10 sm:pl-0 md:pl-80 lg:md:pl-80 py-28">
          <h1 className="text-3xl font-bold  text-center">
            <span className="text-yellow-400">Contact</span> us
          </h1>
          <div className="w-full h-px bg-gray-800"></div>
          <div className="flex justify-between sm:pt-10 md:pt-10 lg:pt-10 pt-10 flex-col sm:flex-row md:flex-row lg:flex-row">
            {/* ======================  CONTACT INFO  ========================== */}
            <div className="mb-10 sm:w-1/2 md:w-1/2 lg:w-1/2">
              <h1 className="mb-6 text-xl font-bold">CONTACT INFO</h1>
              <p className="my-4 flex text-sm">
                <i className="fas fa-envelope mr-2 text-yellow-400 text-base"></i>
                mithleshnirmal786123@gmail.com
              </p>
              <p className="my-4 text-sm">
                <i className="fas fa-mobile-alt text-yellow-400 text-lg mr-2"></i>
                +918196****06
              </p>
              <p className="my-4 text-sm">
                <i className="fas fa-phone text-yellow-400 text-lg mr-2"></i>
                +111-101-3**1
              </p>
              <p className="my-4 text-sm">
                <i className="fas fa-map-pin text-yellow-400 text-lg mr-2"></i>
                Punjab, India 144001
              </p>
            </div>
            {/* ======================== FORM START =================================== */}
            <form
              className="sm:w-1/2 md:w-1/2 lg:w-1/2"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                placeholder="FullName"
                className="bg-gray-800 my-3 w-full py-2 px-2 text-xs"
                name="fullName"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 my-3 w-full py-2 px-2 text-xs"
                name="email"
                required
              />
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890 (Optional)"
                className="bg-gray-800 my-3 w-full py-2 px-2 text-xs"
                name="phoneno"
              />
              <textarea
                placeholder="Message"
                className="bg-gray-800 my-3 w-full py-2 px-2 text-xs h-20"
                name="textBox"
                required
              ></textarea>
              <button className="text-xs py-2 px-4 bg-gray-800 rounded-full hover:bg-yellow-400">
                Send <i className="fas fa-paper-plane"></i>
              </button>
              <ToastContainer className="text-yellow-400" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
