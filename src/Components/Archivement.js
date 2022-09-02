import img7 from '../Images/11221.jpeg';
import img8 from '../Images/11222.jpeg';
import img9 from '../Images/11223.jpeg';
import img10 from '../Images/11224.jpeg';
import img11 from '../Images/11.jpg';
import img12 from '../Images/12.jpg';
import img13 from '../Images/13.jpeg';
import img16 from '../Images/16.jpg';
import React, { useState } from 'react';
function Achivements() {
    const [hiddenAch, sethiddenAch] = useState(true)
    return (
        <div>
            <section className="bg-gray-900 text-gray-100" id="Achivements">
                <div className="container mx-auto py-20 px-10 sm:pl-0 md:pl-80 lg:md:pl-80">
                    <h1 className="text-3xl font-bold text-gray-100 text-center mb-1"><span className="text-yellow-400">My</span> Achivements</h1>
                    <div className="w-full h-px bg-gray-800"></div>
                    <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-10">
                        <div>
                            <img src={img7} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img7} target="_blank" className="text-xs text-gray-300 border-p">HTML Workshop for 8 Weeks Cert.</a>
                        </div>
                        <div>
                            <img src={img8} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img8} target="_blank" className="text-xs text-gray-300 border-p">Completed the CSS for 1 Week.</a>
                        </div>
                        <div>
                            <img src={img9} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img9} target="_blank" className="text-xs text-gray-300 border-p">Introduction to JavaScript.</a>
                        </div>
                        <div>
                            <img src={img10} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img10} target="_blank" className="text-xs text-gray-300 border-p">Built Responsive Website.</a>
                        </div>
                        <div>
                            <img src={img13} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img13} target="_blank" className="text-xs text-gray-300 border-p">Frontend Fundamentals</a>
                        </div>
                        <div>
                            <img src={img16} alt="" className="bg-gray-200 img-box" />
                            <a href={img16} target="_blank" className="text-xs text-gray-300 border-p">React JS Beginner Level</a>
                        </div>
                        <div>
                            <img src={img11} alt="" className="bg-gray-200 img-box" />
                            <a href={img11} target="_blank" className="text-xs text-gray-300 border-p">Tailwind css</a>
                        </div>
                        <div>
                            <img src={img12} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img12} target="_blank" className="text-xs text-gray-300 border-p">GitHub</a>
                        </div>
                    </div>
                    {/* hidden Achivements */}
                    <button onClick={() => sethiddenAch(!hiddenAch)} className="w-full 
                    bg-gray-800 text-left text-yellow-400 pl-2 py-1 text-sm mt-4">
                        {hiddenAch ? <p className='text-gray-100 '>
                            <span className='text-yellow-400'>Show</span> More <i class="fa-sharp fa-solid fa-arrow-up"></i></p> : <p className='text-gray-100'>
                            <span className='text-yellow-400'>Hidden</span> More <i class="fa-solid fa-arrow-down"></i></p>}
                    </button>
                    {
                        !hiddenAch ? <div className='grid grid-flow-cols grid-cols-1 sm:grid-cols-4 md:grid-cols-4 pt-10 lg:grid-cols-4 gap-8 w-full '>
                            <div>
                                <img src={img12} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                                <a href={img12} target="_blank" className="text-xs text-gray-300 border-p">GitHub</a>
                            </div>
                            <div>
                                <img src={img11} alt="" className="bg-gray-200 img-box" />
                                <a href={img11} target="_blank" className="text-xs text-gray-300 border-p">Tailwind css</a>
                            </div>
                            <div>
                                <img src={img11} alt="" className="bg-gray-200 img-box" />
                                <a href={img11} target="_blank" className="text-xs text-gray-300 border-p">Tailwind css</a>
                            </div>
                            <div>
                                <img src={img11} alt="" className="bg-gray-200 img-box" />
                                <a href={img11} target="_blank" className="text-xs text-gray-300 border-p">Tailwind css</a>
                            </div>
                        </div> : null
                    }
                </div>
            </section>
        </div>
    );
}
export default Achivements;