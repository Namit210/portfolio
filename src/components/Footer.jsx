import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer(){

    return (
        <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-lg p-6 sm:p-8 my-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                
                {/* Brand Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-2">Amit Chausali</h2>
                    <p className="text-gray-400 text-sm">Full-Stack Web Developer</p>
                </div>

                {/* Contact Section */}
                <div className="text-center">
                    <h3 className="font-bold text-lg mb-3">Get In Touch</h3>
                    <div className="flex flex-col gap-2 text-sm">
                        <a href="mailto:namitcoder16@gmail.com" className="flex items-center justify-center gap-2 hover:text-blue-400 transition duration-300">
                            <FaEnvelope size={16} />
                            <span className="hidden sm:inline">namitcoder16@gmail.com</span>
                            <span className="sm:hidden">Email</span>
                        </a>
                        <a href="tel:+918077871623" className="flex items-center justify-center gap-2 hover:text-blue-400 transition duration-300">
                            <FaPhone size={16} />
                            +91 8077871623
                        </a>
                    </div>
                </div>

                {/* Social Links Section */}
                <div className="text-center">
                    <h3 className="font-bold text-lg mb-3">Follow Me</h3>
                    <div className="flex gap-6 justify-center">
                        <a 
                            href="https://github.com/Namit210" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition duration-300 hover:scale-110 transform"
                            aria-label="GitHub"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/amit-chausali-229914261/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition duration-300 hover:scale-110 transform"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                <p>&copy; 2024 Amit Chausali. All rights reserved.</p>
            </div>
        </footer>
    )
}