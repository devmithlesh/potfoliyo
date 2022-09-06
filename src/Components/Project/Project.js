import React, { useState } from 'react';
import ProCard from './ProCard';
import Pdata from './Prodata';

//==============hidden & show data============
import img5 from '../../Images/5.jpg';
import img6 from '../../Images/6.png';
import img7 from '../../Images/7.png';
import img8 from '../../Images/8.png';

const Prodata2 = [
    {
        image: img5,
        alts: "Microsoft",
        weblink: "https://clone-microsoft-web.netlify.app/",
        title: "Clone of Microsoft Desigen"
    },
    {
        image: img6,
        alts: "Food-ordring",
        weblink: "https://food-ordering-hub-mithlesh.netlify.app/",
        title: "Food Ordring Front View"
    },
    {
        image: img7,
        alts: "Footbyfoot",
        weblink: "https://foot-by-foot-e-commerce.netlify.app/",
        title: "Foot By Foot"
    },
    {
        image: img8,
        alts: "Rental",
        weblink: "https://house-rental-website-by-mithlesh.netlify.app/",
        title: "Rentail Website"
    }
]
//==============end hiden data================
function Projects() {
    const [proshow, setshow] = useState(true)
    return (
        <div>
            <section id="projects">
                <div className="container mx-auto py-28 px-10 sm:pl-0 md:pl-80 lg:md:pl-80">
                    <h1 className="text-3xl font-bold text-center mb-1"><span className="text-yellow-400">My</span> Projects</h1>
                    <div className="w-full h-px bg-gray-800"></div>
                    <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-10">

                        {
                            Pdata.map((val, ind) => {
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
                    <button onClick={() => setshow(!proshow)} className="w-full bg-gray-800 text-left pl-2 py-1 text-sm mt-4 ">
                        {proshow ? <p>
                            <span className='text-yellow-400'>Show</span> More <i className="fa-sharp fa-solid fa-arrow-up"></i></p> : <p>
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
                                        weblink={val.weblink}
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