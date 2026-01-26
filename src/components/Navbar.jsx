import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setIsMenuOpen(false);

        // If we're not on the home page, navigate to home first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation and DOM to update, then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        } else {
            // Already on home page, just scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };

    return (
        <nav className="bg-[#F1F1F2] shadow-md flex justify-between items-center relative">
            <div className="flex items-center pl-2 sm:pl-4">
                <Link to="/">
                    <img src="/logo.png" alt="Logo" className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto" />
                </Link>
            </div>

            {/* Desktop Navigation - Visible on md screens and above */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 pr-4 md:pr-6 lg:pr-8">
                <a
                    href="#about"
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group"
                >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group"
                >
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                    href="#why-choose-us"
                    onClick={(e) => handleNavClick(e, 'why-choose-us')}
                    className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group"
                >
                    Why Choose Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 relative group"
                >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
            </div>

            {/* Mobile Navigation - Hamburger Menu visible only on small screens */}
            <div className="md:hidden pr-6">
                {/* Hamburger Icon */}
                <button
                    onClick={toggleMenu}
                    className="flex flex-col justify-center items-center w-12 h-12 cursor-pointer group"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-8 h-1 bg-gray-800 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : 'mb-1.5'}`}></span>
                    <span className={`block w-8 h-1 bg-gray-800 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
                    <span className={`block w-8 h-1 bg-gray-800 rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </button>

                {/* Dropdown Menu for Mobile */}
                <div className={`absolute right-0 top-full mt-2 mr-4 bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300 z-50 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                    <div className="flex flex-col min-w-[200px]">
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, 'about')}
                            className="px-6 py-3 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-200 border-b border-gray-100"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            onClick={(e) => handleNavClick(e, 'services')}
                            className="px-6 py-3 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-200 border-b border-gray-100"
                        >
                            Services
                        </a>
                        <a
                            href="#why-choose-us"
                            onClick={(e) => handleNavClick(e, 'why-choose-us')}
                            className="px-6 py-3 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-200 border-b border-gray-100"
                        >
                            Why Choose Us
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, 'contact')}
                            className="px-6 py-3 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
