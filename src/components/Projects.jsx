import { FaGithub } from "react-icons/fa"
import { MdOutlineOpenInNew } from "react-icons/md"
import Skill from "./Skill"


export default function Projects(){

    return (
        <>
        <div>
            <h1 className="text-4xl font-[700]">
            Projects
            </h1>
            <p className="text-lg text-gray-700 max-w-[40rem] mt-2">
                A collection of professional and academic work focussing on scalable architecture, performant frontends, and robust system designs
            </p>
        </div>
        <div className="my-3 flex flex-wrap">
            <ProjectCard projectName="Library-Ledger"
            desc="The inventory bridge for modern bookstores"
            gitHub = "https://github.com/Namit210/Library-Ledger"
            live = "https://library-ledger.vercel.app"
            techStack = {['React', 'Node.js', 'Express', 'MongoDB']}
            imgsrc = "src/assets/lib-leg.png"
            />
            <ProjectCard projectName="COCOMO Estimation Tool"
            desc="Calculate the effort, time, and cost of software projects using the COCOMO model"
            gitHub = "https://github.com/Namit210/COCOMO-estimation-tool"
            live = "https://cocomo-estimation-tool.vercel.app/"
            techStack = {['React', 'Flask']}
            imgsrc = "src/assets/cocomo.png"
            />
            <ProjectCard projectName="Ananda Bazaar"
            desc="Book your meal beforehand to prevent long queues in the canteen"
            gitHub = "https://github.com/Namit210/PreBookMeal"
            live = "https://anandabazaar.vercel.app/"
            techStack = {['React', 'Node.js', 'Express', 'MongoDB']}
            imgsrc = "src/assets/ananda.png"
            />
            <ProjectCard projectName="PopX"
            desc="Mobile Friendly UI"
            gitHub = "https://github.com/Namit210/popx"
            live = "https://popx-phi-beige.vercel.app/"
            techStack = {['React']}
            imgsrc = "src/assets/popx.png"
            />
            
        </div>
        </>
    )
}

const ProjectCard = ({projectName,techStack,gitHub,live, desc, imgsrc})=>{

    return (
        <div className=" rounded-lg w-[300px] m-2 min-h-[300px] shadow-xl hover:shadow-2xl transition duration-300">
            <div className="h-48 overflow-hidden">
                <img src={imgsrc} alt={projectName + " screenshot"} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="text-center mt-3">
            <h1 className="font-bold text-xl my-2">
            {projectName}
                
            </h1>
            <p className="text-gray-700 max-w-[250px] mx-auto">
               {desc}
            </p>

            <div className="flex flex-wrap justify-center gap-5 m-3">

            <a 
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-2 rounded-xl text-gray-700 hover:bg-gray-200 transition duration-300 text-lg flex items-center gap-2">
               <FaGithub className="inline"/> 
                GitHub
            </a>
            <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-2 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition duration-300 text-lg flex items-center gap-2">
                <MdOutlineOpenInNew />
                Live
            </a>

            </div>

                <div className="flex flex-wrap justify-center gap-2 m-2">
                    
                    {techStack.map((tech,index)=>(
                        
                        <Skill skill={tech} key={index}/>
                    ))}
                    </div>
            </div>
            
        </div>
    )
}