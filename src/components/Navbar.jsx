import React, { useState, useEffect } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Prevent body scrolling when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <>
            {/* Horizontal Navbar */}
            <nav className="w-full bg-[#161b22] py-4 px-6 flex justify-between items-center text-white fixed top-0 z-50 shadow-md">
                {/* Logo + Aniphia Text */}
                <div className="flex items-center space-x-3">
                    <img src="/aniphia.jpg" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
                    <h1 className="text-2xl font-bold text-blue-400">Aniphia</h1>
                </div>

                {/* Desktop Links */}
                <div className="space-x-4 hidden md:flex">
                    {["Events", "Login", "Sign Up", "Download App"].map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase().replace(" ", "")}`}
                            className="relative px-4 py-2 rounded-full overflow-hidden hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={toggleSidebar}>
                    ☰
                </button>
            </nav>

            {/* Full Page Backdrop + Sidebar */}
            <div className={`fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {/* Sidebar */}
                <div className={`fixed top-0 left-0 h-full bg-[#0d1117] text-white w-64 shadow-xl transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-6 flex justify-between items-center border-b border-white/10">
                        <h1 className="text-2xl font-bold text-blue-400">Menu</h1>
                        <button onClick={toggleSidebar} className="text-xl">×</button>
                    </div>
                    <div className="p-4 space-y-4">
                        {["Events", "Login", "Sign Up", "Download App(not yet)"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase().replace(" ", "")}`}
                                className="block px-4 py-2 rounded-full hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;