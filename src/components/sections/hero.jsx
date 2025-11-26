'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.jpg"} alt="About Me" />
                                <h2 className='pt-3'>Ehizefua</h2>
                                <p>I am a software developer based in Minsk Belarus.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link target='_blank' href="https://www.facebook.com/iseghohimhen.efua"><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link target='_blank'  href=""><RiTwitterXLine size={20} /></Link></li>
                                        <li><Link target='_blank'  href="www.linkedin.com/in/iseghohimhen-efua-718107236"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link target='_blank'  href="https://github.com/efuaboy11"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h3>
                                    I’m Ehizefua, a software developer building scalable backend systems with Python/Django and crafting seamless user experiences with React, Next.js, and Flutter.
                                </h3>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Freelancing</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link target='_blank' href="/cv.pdf" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i> </Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero