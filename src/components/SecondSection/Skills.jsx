import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCplusplus, SiTailwindcss, SiExpress } from "react-icons/si";

function Skills() {
    return (<>
        <div className="bg-slate-900 h-full text-slate-50 p-3">
            <div className="text-4xl md:text-5xl font-mono font-bold text-center p-2">Skills</div>
            <div className="grid grid-cols-2 md:grid-cols-4  gap-5 md:gap-10 md:pt-6 pb-3 font-mono">
                <span className="flex flex-col items-center"> <FaReact color="#61DAFB" title="React" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">React</span></span>
                <span className="flex flex-col items-center"> <FaNodeJs color="#339933" title="Node.js" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">Node.js</span></span>
                <span className="flex flex-col items-center"> <FaDatabase color="#f0db4f" title="Database" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">Database</span></span>
                <span className="flex flex-col items-center"> <FaGitAlt color="#F05032" title="Git" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl tex-center p-1 md:p-2 font-medium md:font-semibold">Git</span></span>
                <span className="flex flex-col items-center">  <FaHtml5 color="#E34F26" title="HTML5" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">HTML5</span></span>
                <span className="flex flex-col items-center">  <FaCss3Alt color="#1572B6" title="CSS3" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">CSS3</span></span>
                <span className="flex flex-col items-center"><FaBootstrap color="#7952B3" title="Bootstrap" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">Bootstrap</span></span>
                <span className="flex flex-col items-center"><SiMongodb color="#47A248" title="MongoDB" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">MongoDB</span></span>
                <span className="flex flex-col items-center"> <SiJavascript color="#F7DF1E" title="JavaScript" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">Javascript</span></span>
                <span className="flex flex-col items-center"> <SiCplusplus color="#00599C" title="C++" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">C++</span></span>
                <span className="flex flex-col items-center">  <SiTailwindcss color="#38B2AC" title="Tailwind CSS" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">Tailwind CSS</span></span>
                <span className="flex flex-col items-center">  <SiExpress color="#000000" title="Express.js" className="text-5xl md:text-6xl text-center" /><span className="text-2xl md:text-3xl text-center p-1 md:p-2 font-medium md:font-semibold">Express.js</span></span>
            </div>
        </div>

    </>);
}

export default Skills;