import Adata from "./Archvdata";
import ArchvCard from "./ArchvCard";
import React, { useState } from "react";

//==============hidden & show data============
import img17 from "../../Images/11225.jpg";
import img18 from "../../Images/11226.jpg";
import img19 from "../../Images/11227.jpg";
import img20 from "../../Images/11228.jpg";
//============== end hidden & show data=======
const Archvdata2 = [
  {
    image: img17,
    alts: "HTML&CSS",
    title: "HTML & CSS Essentials",
  },
  {
    image: img18,
    alts: "Java-React",
    title: "JavaScript & React.js Essentials",
  },
  {
    image: img19,
    alts: "React",
    title: "React JS For Beginners ",
  },
  {
    image: img20,
    alts: "Tailwind",
    title: "Tailwind CSS",
  },
];
//==============end hiden data================
function Achivements() {
  const [proshow, setshow] = useState(true);
  return (
    <div>
      <section id="Achivements">
        <div className="container mx-auto py-28 px-10 sm:pl-0 md:pl-80 lg:md:pl-80">
          <h1 className="text-3xl font-bold text-center mb-1">
            <span className="yellow-rang">My</span> Achivements
          </h1>
          <div className="w-full h-px bg-gray-800"></div>
          <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-10">
            {Adata.map((val, ind) => {
              return (
                <ArchvCard
                  key={ind}
                  image={val.image}
                  alts={val.alts}
                  title={val.title}
                />
              );
            })}
          </div>
          {/* hidden show project start */}
          <button
            onClick={() => setshow(!proshow)}
            className="w-full bg-gray-800 text-left pl-2 py-1 text-sm mt-4 "
          >
            {proshow ? (
              <p>
                <span className="yellow-rang">Show</span> More{" "}
                <i className="fa-sharp fa-solid fa-arrow-up"></i>
              </p>
            ) : (
              <p>
                <span className="yellow-rang">Hidden</span> More{" "}
                <i className="fa-solid fa-arrow-down"></i>
              </p>
            )}
          </button>
          <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-10 ">
            {!proshow
              ? Archvdata2.map((val, ind) => {
                  return (
                    <ArchvCard
                      key={ind}
                      image={val.image}
                      alts={val.alts}
                      title={val.title}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Achivements;
