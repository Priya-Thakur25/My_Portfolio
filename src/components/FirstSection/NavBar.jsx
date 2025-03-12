import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdRoundaboutRight } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

function NavBar() {
    const [isOpen, setOpen] = useState(false);

    // Function to handle scrolling to a section
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);  // Close mobile menu after clicking
    };

    let links = [
        { name: "About", id: "about", icon: MdRoundaboutRight, showInNav: true },
        { name: "Skills", id: "skills", icon: SiHyperskill, showInNav: true },
        { name: "Projects", id: "projects", icon: FaProjectDiagram, showInNav: true },
        { name: "Contact Me", id: "contact", icon: IoMdContact, showInNav: true },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/priya-thakur-india/", icon: FaLinkedin, showInNav: false },
        { name: "LeetCode", url: "https://leetcode.com/u/Priya-Thakur/", icon: TbBrandLeetcode, showInNav: false },
        { name: "GeeksForGeeks", url: "https://www.geeksforgeeks.org/user/priyathaku02qh/", icon: SiGeeksforgeeks, showInNav: false },
        { name: "Github", url: "https://github.com/Priya-Thakur25", icon: FaGithubSquare, showInNav: false }
    ];

    return (
        <>
            <div className="bg-slate-900 w-full h-14 md:h-20 flex items-center justify-between text-slate-50 font-mono px-4">
                <div className="font-semibold text-2xl md:text-3xl">MY PORTFOLIO</div>
                <div className="hidden md:flex font-semibold text-xl m-10">
                    {links.filter(link => link.showInNav).map((link) => (
                        <button key={link.name} onClick={() => scrollToSection(link.id)} className="m-4 hover:text-sky-400">
                            {link.name}
                        </button>
                    ))}
                </div>
                <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!isOpen)}>
                    <FaBars />
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-slate-200 text-slate-900 font-mono absolute left-0 w-full font-normal text-2xl z-50">
                    {links.map((link) => (
                        link.id ? (
                            <button key={link.name} onClick={() => scrollToSection(link.id)} className="flex p-4 gap-5 hover:text-sky-600 duration-200">
                                <link.icon className="text-2xl" /> {link.name}
                            </button>
                        ) : (
                            <a key={link.name} href={link.url} className="flex p-4 gap-5 hover:text-sky-600 duration-200" target="_blank" rel="noopener noreferrer">
                                <link.icon className="text-2xl" /> {link.name}
                            </a>
                        )
                    ))}
                </div>
            )}
        </>
    );
}

export default NavBar;
