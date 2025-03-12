import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import GIF from "../../assets/GIF.gif";
import GIF3 from "../../assets/GIF3.gif";
import IMAGE from "../../assets/contact2.png"
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/hire-me');
    }
    const handleConnect = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" });
    }
    return (<>
        <div className="bg-slate-900 h-full flex flex-col-reverse md:flex-row font-mono text-slate-200 pb-4">
            <div className="flex flex-col m-3 md:w-1/2">
                <div className="ml-4 md:ml-14 md:mt-28">
                    <p className="hidden md:block text-4xl md:text-7xl font-extrabold ">Hello! I'm <code className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Priya Thakur</code></p>
                    <div className="md:hidden">
                    <div className="flex justify-center items-center font-semibold text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">Priya Thakur</div>
                    <p className="text-xl mt-3 md:text-2xl font-medium text-center">A <code className="text-sky-400 font-semibold">Problem solver</code> and a <code className="text-sky-400 font-semibold">Developer</code> who loves <br/> turning ideas into <br/> reality.</p>
                    <div className="flex justify-center items-center ml-4 mt-5 ">
                    <button className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] bg-sky-400 text-base md:text-xl font-bold mr-4 md:mr-4 p-2 md:p-3 rounded-lg md:pl-2 md:pr-2" onClick={handleOnClick}>Hire Me</button>
                    <button className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] bg-sky-400 text-base md:text-xl font-bold mr-4 md:mr-4 p-2 md:p-3 rounded-lg md:pl-2 md:pr-2" onClick={handleConnect}>Let's Connect</button>
                </div>
                    </div>
                    <p className="hidden md:block text-xl mt-3 md:text-2xl font-medium">a <code className="text-sky-400 font-semibold">Problem solver</code> and a <code className="text-sky-400 font-semibold">Developer</code> who loves turning ideas into reality.</p>
                </div>
                <div className="hidden md:block ml-4 md:ml-14 mt-4 md:mt-10 md:w-1/2">
                    <button className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] bg-sky-400 hover:bg-sky-500 text-base md:text-xl font-bold mr-4 md:mr-4 p-2 md:p-3 rounded-lg md:pl-2 md:pr-2" onClick={handleOnClick}>Hire Me</button>
                    <button className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] bg-sky-400 hover:bg-sky-500 text-base md:text-xl font-bold mr-4 md:mr-4 p-2 md:p-3 rounded-lg md:pl-2 md:pr-2" onClick={handleConnect}>Let's Connect</button>
                </div>
                <div className="hidden md:flex items-center justify-evenly w-1/4 ml-10 mt-4">
                    <a href="https://www.linkedin.com/in/priya-thakur-india/" target="_blank"><FaLinkedin className="text-white m-4 text-5xl transition-transform duration-300 ease-in-out hover:text-[#0A66C2] hover:scale-150" /></a>
                    <a href="https://leetcode.com/u/Priya-Thakur/" target="_blank"><TbBrandLeetcode className="text-white m-4 text-5xl transition-transform duration-300 ease-in-out hover:text-[#E79C38] hover:scale-150" /></a>
                    <a href="https://www.geeksforgeeks.org/user/priyathaku02qh/" target="_blank"><SiGeeksforgeeks className="text-white m-4 text-5xl transition-transform duration-300 ease-in-out hover:text-[#2F8D46] hover:scale-150" /></a>
                    <a href="https://github.com/Priya-Thakur25" target="_blank"><FaGithubSquare className="text-white m-4 text-5xl transition-transform duration-300 ease-in-out hover:text-[#696868] hover:scale-150" /></a>
                </div>
            </div>
            <div className="flex md:w-1/2 justify-center items-center md:m-10 md:mt-20">
               <img src={IMAGE} alt="" className="w-3/4"/>
            </div>
        </div>
    </>);
}

export default Main;