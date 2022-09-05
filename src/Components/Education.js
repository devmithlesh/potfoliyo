

const Edudata = [{
    Date: 2017,
    Edu: "10th class",
    School: "M.S.Memorial Model School, Jalandhar (Under : PSEB)"
},
{
    Date: 2019,
    Edu: "12th class",
    School: "Govt. Model Ser Sec School P.A.P Campus (Under : PSEB)"
},

{
    Date: 2022,
    Edu: "BCA Course",
    School: "Lyallpur Khalsa College Technical Campus, Punjab (Under : PTU)"
},

{
    Date: 2021,
    Edu: "HTML Course",
    School: "GeeksforGeeks, Codecademy, LetsUpgrade, Great Learning"
},
{
    Date: 2021,
    Edu: "CSS Course",
    School: "GeeksforGeeks, Codecademy, LetsUpgrade, EDUCBA"
},
{
    Date: 2021,
    Edu: "React JS(Beg.)",
    School: "Linkedin Learning, Great Learning, Codecademy"
},
{
    Date: 2022,
    Edu: "Tailwind CSS",
    School: "Linkedin Learning, Mindluster, Tailwind.css"
},
{
    Date: 2022,
    Edu: "Bootstrap(Beg.)",
    School: "LetsUpgrade, Youtube, Bootstrap.com"
},
]

function Education() {
    return (
        <div>
            <section className="bg-gray-900 text-gray-100" id="education">
                <div className="container mx-auto py-28 px-10 sm:pl-0 md:pl-80 lg:md:pl-80">
                    <h1 className="text-3xl font-bold text-gray-100 text-center mb-1"><span className="text-yellow-400">My</span> Education</h1>
                    <div className="w-full h-px bg-gray-800"></div>
                    <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8">

                        {
                            Edudata.map((val, ind) => {
                                return (
                                    <div className="box-achiv">
                                        <i className="fas fa-graduation-cap bg-yellow-400"></i>
                                        <span className="text-xs font-bold text-gray-400 py-1 px-4 bg-gray-800 rounded-full hover:bg-yellow-400">{val.Date}</span>
                                        <h3 className="text-base font-bold py-2">{val.Edu}</h3>
                                        <p className="text-xs">{val.School}</p>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>
        </div>
    );
}
export default Education;