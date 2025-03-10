import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import IMAGE from "../../assets/contact4.png";

function ContactMe() {
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
        <div className="bg-gradient-to-r from-sky-200 to bg-pink-200 h-full font-mono">
            <div className="text-slate-900 text-center font-bold text-3xl md:text-5xl p-5">
                Contact Me
            </div>
            <div className="flex justify-around">
                <div className="hidden md:block items-center justify-evenly">
                    <img src={IMAGE} alt="Contact" />
                </div>
                <div className="flex items-center justify-center font-medium text-xl md:text-3xl border-4 md:border-8 rounded-3xl md:m-2 p-2 md:p-4 m-1 md:pl-14 md:pr-14">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="p-2 flex justify-center items-center md:gap-3">
                            <div className="font-semibold p-2">Name :</div>
                            <div>
                                <input
                                    type="text"
                                    name="from_name" // Matches EmailJS template
                                    required
                                    placeholder="Enter your name"
                                    className="text-base md:text-xl rounded-lg md:rounded-xl p-1 md:p-2"
                                />
                            </div>
                        </div>
                        <div className="p-2 flex justify-center items-center md:gap-3">
                            <div className="font-semibold p-2">Email :</div>
                            <div>
                                <input
                                    type="email"
                                    name="from_email" // Matches EmailJS template
                                    required
                                    placeholder="Enter your email"
                                    className="text-base md:text-xl rounded-lg md:rounded-xl p-1 md:p-2"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-start">
                            <div className="font-semibold p-3 md:p-4">Message :</div>
                            <div className="p-2">
                                <textarea
                                    name="message" // Matches EmailJS template
                                    placeholder="...Through a message"
                                    rows={5}
                                    required
                                    className="text-base md:text-xl rounded-2xl p-3 md:p-4 w-full"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] bg-sky-400 text-base md:text-xl font-bold ml-4 p-2 md:p-3 rounded-lg md:pl-3 md:pr-4 text-slate-200"
                        >
                            Contact Me
                        </button>
                    </form>
                </div>
            </div>
            {success !== null && (
                <p className={`text-center font-semibold mt-4 ${success ? "text-green-500" : "text-red-500"}`}>
                    {success ? "Message sent successfully!" : "Failed to send message. Please try again."}
                </p>
            )}
        </div>
    );
}

export default ContactMe;
