import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdRoundaboutRight } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa"
import { SiGeeksforgeeks } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

function NavBar() {
    let links = [
        { name: "About", path: "/", target: "", icon: MdRoundaboutRight, showInNav: true },
        { name: "Skills", path: "/", target: "", icon: SiHyperskill, showInNav: true },
        { name: "Projects", path: "/", target: "", icon: FaProjectDiagram, showInNav: true },
        { name: "ContactMe", path: "/", target: "", icon: IoMdContact, showInNav: true },
        { name: "LinkedIn", path: "https://www.linkedin.com/in/priya-thakur-india/", target: "_blank", icon: FaLinkedin, showInNav: false },
        { name: "LeetCode", path: "https://leetcode.com/u/Priya-Thakur/", target: "_blank", icon: TbBrandLeetcode, showInNav: false },
        { name: "GeeksForGeeks", path: "https://www.geeksforgeeks.org/user/priyathaku02qh/", target: "_blank", icon: SiGeeksforgeeks, showInNav: false },
        { name: "Github", path: "https://github.com/Priya-Thakur25", target: "_blank", icon: FaGithubSquare, showInNav: false }
    ];

    const [isOpen, setOpen] = useState(false);
    return (<>
        <div className="bg-slate-900 w-full h-14 md:h-20 flex items-center justify-between text-slate-50 font-mono px-4">
            <div className="font-semibold text-2xl md:text-3xl">MY PORTFOLIO</div>
            <div className="hidden md:flex font-semibold text-xl m-10">
            {links.filter(link => link.showInNav)
                .map((link) => (
                    <a href={link.path} className="m-4 hover:text-sky-400">{link.name}</a>
                ))}
        </div>
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!isOpen)}>
                <FaBars />
            </div>
        </div>
        {isOpen && (
            <div className="md:hidden bg-slate-200 text-slate-900 font-mono absolute left-0 w-full font-normal text-2xl z-50">
                {links.map((link) => (
                    <a key={link.name} href={link.path} className="flex p-4 gap-5 hover:text-sky-600 duration-200" target={link.target}><link.icon className="text-2xl" />{link.name}</a>
                ))}</div>
        )
        }

    </>);
}

export default NavBar;