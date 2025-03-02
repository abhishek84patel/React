import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute w-full py-3 px-4 sm:px-10 bg-black min-h-[65px] tracking-wide z-50 m-auto" id="main">
            <div className="flex flex-wrap items-center gap-4 max-w-screen-xl mx-auto w-full">
                <Link to="/" className=" invert">
                    <img src="https://grin.co/wp-content/uploads/2022/11/2022_GRIN_Logo_Black_Transparent-Bkgnd-small.webp" alt="logo" className="w-32" />
                </Link>


                <div className={`${menuOpen ? "block" : "hidden"} ml-auto lg:block relative`}>

                    <ul className="lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-black max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50" id="menu">

                        <li className="max-lg:border-b max-lg:py-3 px-3">
                            <Link to="/" className="hover:text-gray-300">Home</Link>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3 px-3">
                        <Link to="about" className="hover:text-gray-300">About Us</Link>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3 px-3">
                        <Link to="about" className="hover:text-gray-300">Our Services</Link>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3 px-3">
                        <Link to="about" className="hover:text-gray-300">Case Studies</Link>
                        </li>

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="lg:hidden top-2 right-0 rounded-full bg-white w-9 h-9 flex items-center justify-center border absolute "
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 absolute " fill='white' viewBox="0 0 320.591 320.591">
                                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                            </svg>
                        </button>
                    </ul>
                </div>
                {/* call button */}
                <div className="flex gap-4 ml-auto">
                    <button className="hidden lg:block">
                        Get In Touch
                    </button>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
                        <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
