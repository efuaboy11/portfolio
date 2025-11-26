import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.JPG"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Ehizefua, a Software Developer.
                                </h2>
                                <p>I’m Ehizefua, a versatile software developer passionate about turning ideas into functional, user-centered digital products. I specialize in building reliable and scalable backend systems using Python and Django, focusing on clean architecture, performance, and security. On the frontend, I create smooth, engaging, and intuitive user interfaces with React and Next.js, ensuring every interaction feels seamless. I also work with Flutter to craft beautiful cross-platform mobile experiences, allowing products to come alive across devices with consistency and precision.</p>
                                <p>My work is driven by a love for problem solving and a commitment to delivering quality. I enjoy taking a project from concept to completion, understanding user needs, designing efficient solutions, and implementing them with attention to detail. Whether I’m building APIs, optimizing database operations, or creating responsive UI components, I put passion, creativity, and discipline into every line of code. I’m constantly learning, constantly improving, and always ready to contribute to meaningful projects that make a real impact.</p>
                                <div className="hero-btns">
                                    <a href="contact.html" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery