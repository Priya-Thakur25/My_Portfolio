import { FaBars } from "react-icons/fa6";

function NavBar(){
    return (<>
    <div className="bg-slate-900 w-full h-14 md:h-20 md:flex items-center justify-between text-slate-50 font-mono">
        <div className="h-14 flex items-center ml-3 font-semibold text-2xl md:text-3xl md:m-10">MY PORTFOLIO 
            <div className="block sm:hidden ml-40 text-3xl"><FaBars /></div>
        </div>
        <div className="hidden md:block font-semibold text-xl m-10">
            <a href="" className="m-4 hover:text-sky-400 ">About</a>
            <a href="" className="m-4 hover:text-sky-400">Skills</a>
            <a href="" className="m-4 hover:text-sky-400">Projects</a>
            <a href="" className="m-4 hover:text-sky-400">ContactMe</a>
        </div>
    </div>
    </>);
}

export default NavBar;