import img1 from '../Images/1.jpg';
import img2 from '../Images/2.jpg';
import img3 from '../Images/3.jpg';
import img4 from '../Images/4.jpg';
import img5 from '../Images/5.jpg';
import img6 from '../Images/6.jpg';
import img7 from '../Images/7.png';
import img8 from '../Images/8.png';
function Projects() {
    return (
        <div>
            <section className="bg-gray-900 text-gray-100" id="projects">
                <div className="container mx-auto py-28 px-10 sm:pl-0 md:pl-80 lg:md:pl-80">
                    <h1 className="text-3xl font-bold text-gray-100 text-center mb-1"><span className="text-yellow-400">My</span> Projects</h1>
                    <div className="w-full h-px bg-gray-800"></div>
                    <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-10">
                        <div>
                            <img src={img1} alt="Dribble Desigen" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href="https://fervent-fermi-c83da0.netlify.app" className="text-xs text-gray-300 border-p">Clone of Tailblocks Desigen</a>
                        </div>
                        <div>
                            <img src={img2} alt="Netflix-design" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href="https://pensive-turing-10a23d.netlify.app" className="text-xs text-gray-300 border-p">Clone of Netflix Desigen</a>
                        </div>
                        <div>
                            <img src={img3} alt="Discord-design" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href="https://frosty-rosalind-c7620e.netlify.app" className="text-xs text-gray-300 border-p">Clone of Discord Desigen</a>
                        </div>
                        <div>
                            <img src={img4} alt="linkdin" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href="https://cranky-shockley-4144d7.netlify.app" className="text-xs text-gray-300 border-p">Clone of Linkedin Desigen</a>
                        </div>
                        <div>
                            <img src={img5} alt="Microsoft-design" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href="https://adoring-ptolemy-0c210a.netlify.app" className="text-xs text-gray-300 border-p">Clone of Microsoft Desigen</a>
                        </div>
                        <div>
                            <img src={img6} alt="potfoliyo-mithlesh" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href="https://potfoliyo-mithlesh-by-html-css.netlify.app/" className="text-xs text-gray-300 border-p">First Potfoliyo</a>
                        </div>
                        <div>
                            <img src={img7} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href="https://foot-by-foot-project.netlify.app/" className="text-xs text-gray-300 border-p">Foot By Foot</a>
                        </div>
                        <div>
                            <img src={img8} alt="" className="bg-gray-200 py-1 px-1 img-box" />
                            <a href="https://house-rental-website-by-mithlesh.netlify.app/" className="text-xs text-gray-300 border-p">Rentail website</a>
                        </div>
                      
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Projects;