import Intro from "./Intro";
import HeroImg from "./HeroImg";
export default function Hero(){

    return(
        <>
        <div className="flex flex-col md:flex-row items-center gap-10">

        <Intro />
        <HeroImg />
        </div>
         
        </>
    )
}