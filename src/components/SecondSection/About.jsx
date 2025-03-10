function About(){
    return (<>
    <div className="bg-gradient-to-r from-sky-200 to bg-pink-200 h-full flex flex-col items-center">
        <div className="text-4xl md:text-5xl font-mono font-extrabold p-2">About Me</div>
        <div className="shadow-2xl border-slate-300 border-8 bg-slate-200 rounded-3xl md:w-3/4 md:h-[90%] text-base md:text-2xl font-medium font-mono m-3 p-2 md:p-3 md:mb-5">
             <span>Hii I am <code className="font-bold text-teal-700">Priya Thakur</code>, a Computer Science student at GL Bajaj Group of Institutions, specializing  in Artificial Intelligence and Machine Learning. With a strong foundation in <code className="font-bold text-teal-700">problem-solving, data structures, and algorithms</code>.</span><br/><br/>
             <span className="hidden md:block">As the Lead at CODETECH Club, I foster a collaborative coding environment, mentor students, and organize coding events to enhance technical skills among peers and juniors.<br/><br/></span>
             <span>I have received achievements such as:
                <ul>
                    <li><code className="font-bold text-teal-700">Winner of GeeksForGeeks</code> Internal Hackfest 2024, outperforming 100+ teams.</li>
                    <li><code className="font-bold text-teal-700">Top-15 finalist</code> in MLSA MIET Dev Gathering 2024.</li>
                </ul>
             </span><br/>
             <span>Passionate about leadership, self-improvement, and traveling, I’m always eager to explore new opportunities and challenges!</span><br/><br/>
             <span className="font-extra bold text-teal-700">THANK YOU FOR KNOWING MORE ABOUT ME!!😇</span>
        </div> 

    </div>
    </>);
}

export default About;