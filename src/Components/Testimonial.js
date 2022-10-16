import React from "react";
import img1 from "../Images/slider_img/woman.png";
import img2 from "../Images/slider_img/man2.png";
import img3 from "../Images/slider_img/user.png";
const testdata = [
  {
    img: img1,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolor consequuntur dolores",
    name: "Alexa",
    post: "Web Developer",
  },
  {
    img: img2,
    text: "Ducimus dolor consequuntur dolores Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    name: "John",
    post: "Frontend Developer",
  },
  {
    img: img3,
    text: "Facere maiores eius mollitia laboriosam sit numquam ex aliquam, laudantium hic incidunt.",
    name: "Siri",
    post: "Backend Developer",
  },
];

function Testimonial() {
  return (
    <>
      <section className="container mx-auto py-28 px-10 sm:pl-0 md:pl-80 lg:md:pl-80">
        <h1 className="text-3xl font-bold text-center">
          <span className="yellow-rang">Testi</span> monial
        </h1>
        <div className="w-full h-px bg-gray-800 "></div>
        <div className="your-class mt-10 ">
          {testdata.map((val, ind) => {
            return (
              <div
                className="flex flex-col items-center md:p-6 space-y-4 rounded-md lg:p-8 text-gray-100"
                key={ind}
              >
                <img
                  src={val.img}
                  alt="review"
                  className="w-20 h-20 rounded-full bg-gray-200 mx-auto"
                />
                <blockquote className="w-80 mx-auto text-base text-center">
                  {val.text}
                </blockquote>
                <div className="text-center space-x-2">
                  <i className="fa-sharp fa-solid fa-star yellow-rang"></i>
                  <i className="fa-sharp fa-solid fa-star yellow-rang"></i>
                  <i className="fa-sharp fa-solid fa-star yellow-rang"></i>
                  <i className="fa-solid fa-star-half-stroke yellow-rang"></i>
                </div>
                <div className="text-center">
                  <p className="text-lg tracking-widest">{val.name}</p>
                  <p className="text-sm tracking-wider">{val.post}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Testimonial;
