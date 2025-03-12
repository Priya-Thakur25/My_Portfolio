import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoMdDownload } from "react-icons/io";
import IMAGE from "./../assets/hire6.png";

function HireMe() {
    const form = useRef();
    const [success, setSuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_qskoiq3", // Replace with your actual Service ID
                "template_iclz0lh", // Replace with your actual Template ID
                form.current,
                "y4vLLH53lpCBZkp6Z" // Replace with your Public Key
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    setSuccess(true);
                    form.current.reset();
                },
                (error) => {
                    console.error("Error sending email:", error.text);
                    setSuccess(false);
                }
            );
    };

    return (
        <div className="bg-gradient-to-r from-sky-200 to bg-pink-200 h-screen font-mono">
            <div className="text-slate-900 text-center font-bold text-2xl md:text-5xl p-3 md:p-4">
                !Thank You for Hiring Me!
            </div>
            <div className="flex flex-col justify-center md:flex-row md:justify-around ">
                <div className="flex justify-start font-medium text-2xl m-3 md:text-3xl border-8 rounded-3xl md:w-1/2 p-2">
                    <form ref={form} onSubmit={sendEmail} className="w-full">
                        <div className="flex flex-col justify-start">
                            <div className="font-semibold p-3">Message :</div>
                            <div className="md:p-2">
                                <textarea
                                    name="message" // Matches EmailJS template
                                    placeholder="Looking forward to your message..."
                                    rows={9}
                                    required
                                    className="text-xl rounded-2xl p-3 md:p-4 w-full"
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:flex-row md:justify-center md:p-3">
                        <button
                            type="submit"
                            className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] bg-sky-400 hover:bg-sky-600 text-base md:text-xl font-bold m-4 md:ml-4 p-2 md:p-3 rounded-lg md:pl-3 md:pr-4 text-slate-200"
                        >
                            Send Message
                        </button>  
                        <button
                            className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] bg-green-600 hover:bg-green-700 text-base md:text-xl font-bold m-2 md:ml-4 p-2 md:p-3 rounded-lg text-slate-200 flex"
                        ><IoMdDownload className="m-1 mr-2"/>
                            Download Resume
                        </button>
                        </div>
                    </form>
                </div>
                <div className="hidden md:block items-center justify-evenly mr-10">
                    <img src={IMAGE} alt="Contact " />
                </div>
            </div>
        </div>
    );
}

export default HireMe;
