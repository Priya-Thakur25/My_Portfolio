import IMAGE from "../../assets/contact4.png"

function ContactMe() {
    return (<>
        <div className="bg-gradient-to-r from-sky-200 to bg-pink-200 h-full font-mono">
            <div className="text-slate-900 text-center font-bold text-3xl md:text-5xl p-5">Contact Me</div>
            <div className="flex justify-around">
                <div className="hidden md:block items-center justify-evenly">
                    <img src={IMAGE} alt="" />
                </div>
                <div className="flex items-center justify-center font-medium text-xl md:text-3xl border-4 md:border-8 rounded-3xl md:m-2 p-2 md:p-4 m-1 md:pl-14 md:pr-14">
                    <form>
                        <div className="p-2 flex justify-center items-center md:gap-3">
                            <div className="font-semibold p-2">Name :</div>
                            <div><input type="text" required placeholder="Enter your name" className="text-base md:text-xl rounded-lg md:rounded-xl p-1 md:p- "></input></div>
                        </div>
                        <div className="p-2 flex justify-center items-center md:gap-3">
                            <div className="font-semibold p-2">Email :</div>
                            <div><input type="email" required placeholder="Enter your email.id" className="text-base md:text-xl rounded-lg md:rounded-xl p-1"></input></div>
                        </div>
                        <div className="flex flex-col justify-start">
                            <div className="font-semibold p-3 md:p-4">Message :</div>
                            <div className="p-2"><textarea name="FeedBack" placeholder="...Through a message" row={3} rows={5} className="text-base md:text-xl rounded-2xl p-3 md:p-4 w-full"></textarea></div>
                        </div>

                        <button className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] bg-sky-400 text-base md:text-xl font-bold ml-4 p-2 md:p-3 rounded-lg md:pl-3 md:pr-4 text-slate-200">Contact Me</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}

export default ContactMe;