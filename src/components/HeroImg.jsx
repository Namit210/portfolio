import pic from "/src/assets/myPic.png";

export default function HeroImg(){
    
    return(
        <>
        <div className="mx-auto w-[400px] h-[400px] bg-none rounded-full flex items-center justify-center shadow-lg  ">
        <div className=" mx-auto w-[350px] h-[350px] bg-none rounded-full flex items-center justify-center  shadow-lg  ">

        <div className=" mx-auto w-[300px] h-[300px] bg-gray-300 rounded-full flex items-center justify-center shadow-2xl">

        <img src={pic} 
        className="rounded-full"
        />
        </div>
        </div>

        </div>
        </>
    )
}