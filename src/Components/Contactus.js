function Contact() {
    return (
        <div>
            <section className="bg-gray-900 text-gray-100" id="contact">
                <div className="container mx-auto px-10 sm:pl-0 md:pl-80 lg:md:pl-80 py-20">
                    <h1 className="text-3xl font-bold text-gray-100 text-center"><span className="text-yellow-400">Contact</span> us</h1>
                    <div className="w-full h-px bg-gray-800"></div>
                    <div className="flex justify-between sm:pt-10 md:pt-10 lg:pt-10 pt-10 flex-col sm:flex-row md:flex-row lg:flex-row">
                        <div className="mb-10 sm:w-1/2 md:w-1/2 lg:w-1/2">
                            <h1 className="mb-6 text-xl font-bold">CONTACT INFO</h1>
                            <p className="my-4 flex text-sm"><i className="fas fa-envelope mr-2 text-yellow-400 text-base"></i>mithleshnirmal786123@gmail.com</p>
                            <p className="my-4 text-sm"><i className="fas fa-mobile-alt text-yellow-400 text-lg mr-2"></i>+918196****06</p>
                            <p className="my-4 text-sm"><i className="fas fa-phone text-yellow-400 text-lg mr-2"></i>+111-101-3**1</p>
                            <p className="my-4 text-sm"><i className="fas fa-map-pin text-yellow-400 text-lg mr-2"></i>Punjab, India 144002</p>
                        </div>
                        <form className="sm:w-1/2 md:w-1/2 lg:w-1/2">
                            <input type="text" placeholder="Name" className="bg-gray-800 my-3 w-full py-2 px-2 text-xs" name="username" required/>
                            <input type="email" placeholder="Email" className="bg-gray-800 my-3 w-full py-2 px-2 text-xs" name="email" required/>
                            <input type="text" placeholder="Project Name" className="bg-gray-800 my-3 w-full py-2 px-2 text-xs" name="project" />
                            <textarea placeholder="Message..." className="bg-gray-800 my-3 w-full py-2 px-2 text-xs h-20" name="message"></textarea>
                            <button className="text-xs py-2 px-4 bg-gray-800 rounded-full hover:bg-yellow-400">Send <i className="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;