import pic from "/src/assets/myPic.png";

export default function HeroImg(){
    
    return(
        <>
        <div className="mx-auto w-48 h-48 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] bg-none rounded-full flex items-center justify-center shadow-lg  ">
        <div className=" mx-auto w-40 h-40 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] bg-none rounded-full flex items-center justify-center  shadow-lg  ">

        <div className=" mx-auto w-32 h-32 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] bg-gray-300 rounded-full flex items-center justify-center shadow-2xl">

        <img src={pic} 
        className="rounded-full"
        />
        </div>
        </div>

        </div>
        </>
    )
}