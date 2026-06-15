import Hero from "../components/Hero";
import Skill from "../components/Skill";
import Skills from "../components/Skills";
import Ready from "../components/Ready";
import Projects from "../components/Projects";
export default function Home(){

    return(
        <div className="container mx-auto px-4 sm:px-5 py-6 sm:py-10">
                <Hero />
                <Skills />
                <Ready />

<div id="projects">
<Projects />
</div>                
                </div>
    )
}