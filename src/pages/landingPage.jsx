import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LandingPage() {
    return (
        <div 
            className="min-h-screen bg-cover bg-center relative text-white overflow-hidden"
            style={{ backgroundImage: `url('/wall.jpg')` }}  // Same wallpaper
        >
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[10px]"></div>

            {/* Actual Page Content */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-4 space-y-8">

                <Navbar />  {/* Same Navbar so the pags flow wll */}

                {/* Main Her Section - Pure Hype */}
            <div className="space-y-6 animate-fade-in pt-[5rem] w-full flex flex-col items-center justify-center">
    <h1 className="w-[90vw] max-w-[1200px] mx-auto text-6xl sm:text-8xl md:text-9xl font-extrabold text-green-400 tracking-wide overflow-hidden text-center">
        Welcome to Aniphia
    </h1>

    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
        Your Anime Universe — Memes, Cosplay Battles, Sophia-AI & More!
    </p>

    <a href="/signup" className="px-8 py-4 bg-green-500 text-black font-bold rounded-full hover:scale-110 transition-transform">
        Join the Hype Now
    </a>
</div>

                {/* Quick Highlights (Like selling points) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <HighlightBox title="Daily Anime Memes" desc="Laugh every day with fresh anime memes." />
                    <HighlightBox title="Live Cosplay Events" desc="Compete & showcase your best cosplay fits." />
                    <HighlightBox title="AI-Powered Recommendations" desc="Sophia-AI finds your next anime obsession." />
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

// Reusable Highlight Box Component
function HighlightBox({ title, desc }) {
    return (
        <div className="bg-[#161b22]/80 backdrop-blur-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-green-400">{title}</h3>
            <p className="text-gray-300 mt-2">{desc}</p>
        </div>
    );
}

export default LandingPage;