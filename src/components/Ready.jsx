export default function Ready(){

    return (

        <div className="bg-blue-600 rounded-lg shadow-lg  shadow-blue-300 text-white flex flex-wrap flex-row gap-15 justify-center items-center p-10 my-10">
                    <div className="max-w-[700px]">
                     <h1 className=" font-bold text-4xl m-5">Ready to build something amazing?</h1>
                     <p className=" font-medium text-gray-200 m-5">
                        I am currently looking for full-time Full-Stack Developer roles where I can contribute to impactful products and grow with a world-class team.
                     </p>

                    </div>
                    <div className="flex flex-row gap-5">
                    <button className="px-5 py-2 bg-white text-black font-medium rounded shadow-md hover:bg-gray-100 transition duration-300">
                        Say Hello
                    </button>
                    <button className="px-5 py-2 bg-transparent border border-white text-white font-medium rounded shadow-md hover:bg-white hover:text-black transition duration-300">
                        Learn More
                    </button>
                    </div>
                </div>
    )
}