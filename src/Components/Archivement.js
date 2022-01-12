import img7 from '../Images/11221.jpeg';
import img8 from '../Images/11222.jpeg';
import img9 from '../Images/11223.jpeg';
import img10 from '../Images/11224.jpeg';
import img11 from '../Images/11.jpeg';
import img12 from '../Images/12.jpeg';
import img13 from '../Images/13.jpeg';
import img14 from '../Images/14.jpeg';
import img16 from '../Images/16.jpeg';
function Achivements() {
    return (
        <div>
            <section className="bg-gray-900 text-gray-100" id="Achivements">
                <div className="container mx-auto py-28 px-10 sm:pl-0 md:pl-80 lg:md:pl-80">
                    <h1 className="text-3xl font-bold text-gray-100 text-center mb-1"><span className="text-yellow-400">My</span> Achivements</h1>
                    <div className="w-full h-px bg-gray-800"></div>
                    <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-10">
                        <div>
                            <img src={img7} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img7} className="text-xs text-gray-300 border-p">HTML Workshop for 8 Weeks Cert.</a>
                        </div>
                        <div>
                            <img src={img8} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img8} className="text-xs text-gray-300 border-p">Completed the CSS for 1 Week.</a>
                        </div>
                        <div>
                            <img src={img9} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img9} className="text-xs text-gray-300 border-p">Introduction to JavaScript.</a>
                        </div>
                        <div>
                            <img src={img10} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img10} className="text-xs text-gray-300 border-p">Built Responsive Website.</a>
                        </div>
                        <div>
                            <img src={img13} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img13} className="text-xs text-gray-300 border-p">Frontend Fundamentals</a>
                        </div>
                        <div>
                            <img src={img16} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img16} className="text-xs text-gray-300 border-p">First Prize In IT Quiz</a>
                        </div>
                        <div>
                            <img src={img11} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img11} className="text-xs text-gray-300 border-p">CorelDraw and Adobe Photoshop</a>
                        </div>
                        <div>
                            <img src={img12} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href={img12} className="text-xs text-gray-300 border-p">Fundamentals of Digital Markiting</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Achivements;