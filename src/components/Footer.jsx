import React from 'react';

function Footer() {
    return (
        <footer className="w-full bg-[#161b22] text-gray-400 py-6 text-center text-sm">
            <p>&copy; 2025 Aniphia. All rights reserved.</p>
            <p>
                <a href="/terms" className="hover:text-blue-400">Terms of Service</a> • 
                <a href="/privacy" className="hover:text-blue-400 ml-2">Privacy Policy</a>
            </p>
        </footer>
    );
}

export default Footer;