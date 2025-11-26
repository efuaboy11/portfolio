"use client";
import React, { useState } from 'react'
import { RiMailLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser'
import { useForm } from "react-hook-form";



const ContactForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [loader, setLoader] = useState('')
    const [disablebutton, setDisablebutton] = useState(false)
  const currentTime = new Date().toLocaleTimeString();
  const {
    register,
    handleSubmit,
    formState: { errors,},
  } = useForm();

  const onSubmit = (data, e) =>{
    setDisablebutton(true)
    setLoader(true)
    sendEmail(e)
  }

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .send(
        "service_7457fxr",
        "template_w4ev6q2", // Replace with your EmailJS Template ID
        {  
          user_name: name,        // Match template variables
          user_email: email,
          message: emailMessage,
        //   time: currentTime,
        },
        "AQ-xd10VtIjfba0Yv"  // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setDisablebutton(false)
          setLoader(false)
          setName('')
          setEmail('')
          setEmailMessage('')
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          e.target.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setDisablebutton(false)
          setLoader(false)
          toast.error("Failed to send email!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        
      );

    e.target.reset();
  };




    return (
        <div className="col-lg-8">
            <ToastContainer/> 
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text"  className="form-control" placeholder="Steve Milner" required data-error="Please enter your Name" {...register('name', {required: true})}  value={name} onChange={(e) => setName(e.target.value)}/>
                                    <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className="form-control" placeholder="hello@websitename.com" required data-error="Please enter your Email" {...register('email', {required: true})}  value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea  className="form-control" rows="4" placeholder="Write Your message" required data-error="Please Write your Message" {...register('emailMessage', {required: true})}  value={emailMessage} onChange={(e) => setEmailMessage(e.target.value)}></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button  className="theme-btn  px-5" type="submit" disabled={disablebutton}>    
                                        <span class={`${loader ? 'site-submit-spinner': ''}`}></span>
                                        <span class={`${loader ? 'site-submit-btn-visiblity': ''}`}>Send Me Message <i><RiMailLine size={15} /></i></span>
                                    </button> 
                                    <button type="submit" className="">
                                        
                                    </button>
                                    <div id="msgSubmit" className="hidden"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm