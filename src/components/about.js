const About = () => {
    return ( 
        // <> <!-- Page Content-->
        <div class="container px-5 my-5">
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">About Me</span></h1>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-11 col-xl-9 col-xxl-8">
                    {/* <!-- Experience Section--> */}
                    <section>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <h2 class="text-primary fw-bolder mb-0">Experience</h2>
                            {/* <!-- Download resume button--> */}
                            {/* <!-- Note: Set the link href target to a PDF file within your project--> */}
                            {/* <a class="btn btn-primary px-4 py-3" href="#!">
                                <div class="d-inline-block bi bi-download me-2"></div>
                                Download Resume
                            </a> */}
                        </div>
                        {/* <!-- Experience Card 1--> */}
                        <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            {/* <div class="text-primary fw-bolder mb-2">2019 - Present</div> */}
                                            <div class="small fw-bolder">IT Support</div>
                                            <div class="small text-muted">Meta Sign Smart Solution</div>
                                            <div class="small text-muted">Dubai, UAE</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8"><div>As an IT Support professional, my job is to troubleshoot technical issues, install and configure hardware and software, manage system security and data backup, and provide technical guidance and training to end-users. I work closely with clients to ensure their technology systems are running smoothly and efficiently, and to provide excellent customer service and support.</div></div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Experience Card 2--> */}
                        {/* <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-primary fw-bolder mb-2">2017 - 2019</div>
                                            <div class="small fw-bolder">SEM Specialist</div>
                                            <div class="small text-muted">Wayne Enterprises</div>
                                            <div class="small text-muted">Gotham City, NY</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                </div>
                            </div>
                        </div> */}
                    </section>
                    {/* <!-- Education Section--> */}
                    <section>
                        <h2 class="text-secondary fw-bolder mb-4">Education</h2>
                        {/* <!-- Education Card 1--> */}
                        <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            {/* <div class="text-secondary fw-bolder mb-2">2015 - 2017</div> */}
                                            <div class="mb-2">
                                                <div class="small fw-bolder">Virtual University</div>
                                                <div class="small text-muted">Lahore, PK</div>
                                            </div>
                                            <div class="fst-italic">
                                                <div class="small text-muted">Bachelor's</div>
                                                <div class="small text-muted">Computer Science</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8"><div>I am a Bachelor of Computer Science graduate with expertise in software development, algorithms, and data structures. I possess strong problem-solving skills and a deep understanding of computer languages such as C++, Assembly Language, and JavaScript. With a passion for technology and a commitment to excellence, I am dedicated to developing innovative solutions to complex problems.</div></div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Education Card 2--> */}
                        {/* <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-secondary fw-bolder mb-2">2011 - 2015</div>
                                            <div class="mb-2">
                                                <div class="small fw-bolder">ULA</div>
                                                <div class="small text-muted">Los Angeles, CA</div>
                                            </div>
                                            <div class="fst-italic">
                                                <div class="small text-muted">Undergraduate</div>
                                                <div class="small text-muted">Computer Science</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                </div>
                            </div>
                        </div> */}
                    </section>
                    {/* <!-- Divider--> */}
                    <div class="pb-5"></div>
                    {/* <!-- Skills Section--> */}
                    <section>
                        {/* <!-- Skillset Card--> */}
                        <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                {/* <!-- Professional skills list--> */}
                                <div class="mb-5">
                                    <div class="d-flex align-items-center mb-4">
                                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
                                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Professional Skills</span></h3>
                                    </div>
                                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Graphics Design</div></div>
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Content Search</div></div>
                                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                                    </div>
                                    <div class="row row-cols-1 row-cols-md-3">
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Networking</div></div>
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Adobe Software Suite</div></div>
                                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">User Interface Design</div></div>
                                    </div>
                                </div>
                                {/* <!-- Languages list--> */}
                                <div class="mb-0">
                                    <div class="d-flex align-items-center mb-4">
                                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Web-Dev Stack</span></h3>
                                    </div>
                                    {/*  mb-4 */}
                                    <div class="row row-cols-1 row-cols-md-3  mb-4">
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100"><i class="fa-brands fa-html5"></i> &nbsp; HTML</div></div>
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100"><i class="fa-brands fa-css3-alt"></i> &nbsp; CSS</div></div>
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100"><i class="fa-brands fa-square-js"></i> &nbsp; JavaScript</div></div>
                                    </div>
                                    {/*  mb-4 */}
                                    <div class="row row-cols-1 row-cols-md-3 mb-4"> 
                                         <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100"><i class="fa-brands fa-react"></i> &nbsp; React.js</div></div>
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100"><i class="fa-brands fa-bootstrap"></i> &nbsp; Bootstrap</div></div>
                                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100"><i class="fa-brands fa-sass"></i> &nbsp; Sass</div></div>
                                    </div>
                                   
                                    <div class="row row-cols-1 row-cols-md-3">
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100"><i class="fa-brands fa-node"></i> &nbsp; Node.js</div></div>
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100"><i class="fa-brands fa-node"></i> &nbsp; Express.js</div></div>
                                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100"><i class="fa-solid fa-leaf"></i> &nbsp; Mongo.db</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
     );
}
 
export default About;