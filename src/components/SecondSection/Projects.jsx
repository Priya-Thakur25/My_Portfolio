import Jobzoom2 from '../../assets/JobZoom2.jpeg'; 
import TrackU2 from '../../assets/TrackU2.jpeg'; 
import Travel from '../../assets/Travel.jpeg'; 
import TTT from '../../assets/TTT.jpeg'; 

function Projects() {
    return (<>
        <div className="bg-slate-900 text-slate-200 h-full">
            <div className="text-4xl md:text-5xl font-mono font-bold text-center p-2">Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center font-mono font-semibold p-5">
                    
                    <div className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.4)] bg-slate-200 p-2 md:w-[80%] rounded-2xl flex flex-col justify-evenly items-center md:m-5 mb-6">
                        <div className="h-full w-full">
                        <img src={Jobzoom2} alt="" className="object-stretch w-full h-full"/>
                        </div>
                        <div className="text-slate-900 text-2xl pt-2">JOBZooM</div><br />
                        <div className="flex gap-2 text-xl text-slate-200">
                            <a href="" target="_blank" className="bg-sky-400 hover:bg-green-600 p-2 rounded-xl">Repo Link</a>
                            <a href="" target="_blank" className="bg-sky-400 hover:bg-green-600 p-2 rounded-xl">Live Link</a>
                        </div>
                    </div>
                    
                    <div className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.4)] bg-slate-200 p-2 md:w-[80%] rounded-2xl flex flex-col justify-evenly items-center md:m-5 mb-6">
                        <div className="h-full w-full">
                        <img src={TrackU2} alt="" className="object-stretch w-full h-full"/>
                        </div>
                        <div className="text-slate-900 text-2xl pt-2">TrackU</div><br />
                        <div className="flex gap-2 text-xl text-slate-200">
                            <a href="" target="_blank" className="bg-sky-400 hover:bg-green-600 p-2 rounded-xl">Repo Link</a>
                            <a href="" target="_blank" className="bg-sky-400 hover:bg-green-600 p-2 rounded-xl">Live Link</a>
                        </div>
                    </div>
                    <div className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.4)] bg-slate-200 p-2 md:w-[80%] rounded-2xl flex flex-col justify-evenly items-center md:m-5 mb-6">
                        <div className="h-full w-full">
                        <img src={Travel} alt="" className="object-stretch w-full h-full"/>
                        </div>
                        <div className="text-slate-900 text-2xl pt-2">Travel Advisor</div><br />
                        <div className="flex gap-2 text-xl text-slate-200">
                            <a href="" target="_blank" className="bg-sky-400 hover:bg-green-600 p-2 rounded-xl">Repo Link</a>
                            <a href="" target="_blank" className="bg-sky-400 hover:bg-green-600 p-2 rounded-xl">Live Link</a>
                        </div>
                    </div>
                    <div className="drop-shadow-[0_4px_10px_rgba(255,255,255,0.4)] bg-slate-200 p-2 md:w-[80%] rounded-2xl flex flex-col justify-evenly items-center md:m-5 mb-6">
                        <div className="h-full w-full">
                        <img src={TTT} alt="" className="object-stretch w-full h-full"/>
                        </div>
                        <div className="text-slate-900 text-2xl pt-2">Tic Tac Toe</div><br />
                        <div className="flex gap-2 text-xl text-slate-200">
                            <a href="" target="_blank" className="bg-sky-400 hover:bg-green-600 p-2 rounded-xl">Repo Link</a>
                            <a href="" target="_blank" className="bg-sky-400 hover:bg-green-600 p-2 rounded-xl">Live Link</a>
                        </div>
                    </div>
                    
            </div>
        </div>
    </>);
}

export default Projects;