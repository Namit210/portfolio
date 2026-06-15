export default function Footer(){

    return (
        <footer className="w-full flex flex-col md:flex-row items-center gap-5 justify-between p-5 shadow-lg bg-gray-100 rounded-lg shadow-top shadow-gray-300">
            <div>
                <h3 className="font-bold">Namit's Portfolio</h3>
            </div>
            <div>
                <h3 className="font-bold">Navigation</h3>
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Home</li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
            </div>
        </footer>
    )
}