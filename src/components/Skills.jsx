import Skill from "./Skill";

export default function Skills(){

    return(
        <div className="flex flex-row justify-center items-center flex-col gap-5 my-10 shadow-lg p-4 sm:p-5 rounded-lg">
                   <div className="text-xs sm:text-sm font-bold text-gray-700 max-w-[400px]">
                    CORE TECH STACK 
                    </div> 
                    <div className="flex flex-row gap-3 sm:gap-5 flex-wrap justify-center items-center
                    ">
                    <Skill skill="React" />
                    <Skill skill="Node.js" />
                    <Skill skill="MongoDB" />
                    <Skill skill="Express" />
                    <Skill skill="MySQL" />
                    <Skill skill="JavaScript" />
                    <Skill skill="Java" />
                    <Skill skill="Spring" />
                    <Skill skill="Python" />
                    <Skill skill="TailwindCSS" />
                    <Skill skill="RESTApi" />
                    <Skill skill="Git" />
                    </div>
                 </div>
    );
}