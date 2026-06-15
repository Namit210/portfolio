import { MdKeyboardArrowRight } from "react-icons/md";
import { TbFileDownload } from "react-icons/tb";
export default function Intro(){

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <div className = "max-w-[500px] mx-auto flex flex-col justify-center items-start">
        <div className="text-6xl font-[900]">
      <h1>Full-Stack</h1>
      <h1 className="text-[blue]">Web Developer</h1>
    </div>
    <p className="text-lg font-[500] text-[gray] my-4">
      Hi, I am Amit Chausali. A fresh graduate from IIIT Kalyani specializing in building high-performance web applications using <span className='text-black underline'>MERN stack</span>.
    </p>
    <div className="flex gap-4">
    <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
    onClick={scrollToProjects}
    >View Projects

        <MdKeyboardArrowRight className="inline-block ml-1 text-xl  " />
    </button>
    <button className="px-3 py-2 text-black 
    shadow-lg
    rounded hover:bg-black 
    hover:text-white
    transition duration-300 flex"
    onClick={()=>{
        window.open("https://drive.google.com/file/d/1CTphCNUrX_auUcBjvfzBXV_iRVi3PlHp/view?usp=sharing", "_blank");
        
    }}
    >
        <TbFileDownload className="inline-block mr-1 text-xl " />
        Get Resume

        
    </button>

    </div>
        </div>
    );
}