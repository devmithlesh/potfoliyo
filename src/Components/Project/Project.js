import React, { useState } from 'react';
import ProCard from './ProCard';
import Prodata from './Prodata';

//==============hidden & show data============
import img5 from '../../Images/5.jpg';
import img6 from '../../Images/6.png';
import img7 from '../../Images/7.png';
import img8 from '../../Images/8.png';

const Prodata2 = [
    {
        image: img5,
        alts: "Project",
        weblink: "https://adoring-ptolemy-0c210a.netlify.app",
        title: "Clone of Microsoft Desigen"
    },
    {
        image: img6,
        alts: "Project",
        weblink: "https://food-ordering-hub-mithlesh.netlify.app/",
        title: "Food Ordring Front View"
    },
    {
        image: img7,
        alts: "Project",
        weblink: "https://foot-by-foot-project.netlify.app/",
        title: "Foot By Foot"
    },
    {
        image: img8,
        alts: "Project",
        weblink: "https://house-rental-website-by-mithlesh.netlify.app/",
        title: "Rentail Website"
    }
]
//==============end hiden data================
function Projects() {
    const [proshow, setshow] = useState(true)
    return (
        <div>
            <section className="bg-gray-900 text-gray-100" id="projects">
                <div className="container mx-auto py-28 px-10 sm:pl-0 md:pl-80 lg:md:pl-80">
                    <h1 className="text-3xl font-bold text-gray-100 text-center mb-1"><span className="text-yellow-400">My</span> Projects</h1>
                    <div className="w-full h-px bg-gray-800"></div>
                    <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-10">

                        {
                            Prodata.map((val, ind) => {
                                return (
                                    <ProCard
                                        key={ind}
                                        image={val.image}
                                        alts={val.alts}
                                        title={val.title}
                                        weblink={val.weblink}
                                    />
                                )
                            })
                        }

                    </div>
                    {/* hidden show project start */}
                    <button onClick={() => setshow(!proshow)} className="w-full bg-gray-800 text-left text-yellow-400 pl-2 py-1 text-sm mt-4 ">
                        {proshow ? <p className='text-gray-100 '>
                            <span className='text-yellow-400'>Show</span> More <i className="fa-sharp fa-solid fa-arrow-up"></i></p> : <p className='text-gray-100'>
                            <span className='text-yellow-400'>Hidden</span> More <i className="fa-solid fa-arrow-down"></i></p>}
                    </button>
                    <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-10 ">
                        {!proshow ?
                            Prodata2.map((val, ind) => {
                                return (
                                    <ProCard
                                        key={ind}
                                        image={val.image}
                                        alts={val.alts}
                                        title={val.title}
                                    />
                                )
                            }) : null
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Projects;