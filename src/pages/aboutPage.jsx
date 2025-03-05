import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useGlobalFade from '../hooks/useGlobalFade';

function AboutPage() {
    

    return (
        <div 
            className={`min-h-screen bg-cover bg-center relative text-white overflow-hidden`}
            style={{ backgroundImage: `url('/wall.jpg')` }}
        >
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[10px]"></div>

            {/* Actual Page Content */}
            <div className="relative z-10 pt-[4rem]">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <FeaturesSection />
                <SocialLinksSection />
                <Footer />
            </div>
        </div>
    );
}

// Hero Section
function HeroSection() {
    return (
        <section className="flex flex-col justify-center items-center text-center h-[60vh] px-4 space-y-6 animate-fade-in">

            <h1 className="text-5xl md:text-7xl font-extrabold text-green-400 tracking-wide">
                Welcome to Aniphia!!!!!
            </h1>

            <p className="text-gray-300 max-w-xl mx-auto">
                The Ultimate Anime Social Universe – memes, live events, Sophia-AI recommendations & more.
            </p>

            <a href="/signup" className="px-6 py-3 bg-green-500 text-black font-bold rounded-full hover:scale-105 transition-transform">
                Join Now
            </a>

        </section>
    );
}

// About Section — FIXED AS FUNCTION
function AboutSection() {
    return (
        <section className="py-16 px-8 bg-[#161b22]/80 backdrop-blur-md animate-fade-in">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-green-400">
                    What is Aniphia?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    Aniphia is more than just another anime app — it’s a **living, breathing anime universe** built by and for true anime fans. Whether you love sharing memes, joining heated cosplay battles, or just vibing with AI-powered anime chats, Aniphia is your place to shine.
                    <br /><br />
                    Our mission is to blend cutting-edge tech with deep anime culture — meaning every feature, from **Sophia-AI’s recommendations** to our real-time event hosting, is designed to make anime fandom more interactive, creative, and fun. We believe anime lovers deserve a platform that reflects their passion — not just another boring feed.
                    <br /><br />
                    Plus, Aniphia evolves **with you** — our community helps shape new features, vote on event themes, and even suggest anime to feed Sophia’s brain. So when you’re here, you’re not just a user — you’re part of Aniphia’s story.
                </p>
            </div>
        </section>
    );
}

// Features Section
function FeaturesSection() {
    return (
        <section className="py-16 px-8 bg-[#161b22]/80 backdrop-blur-md animate-fade-in">
            <h2 className="text-3xl font-bold text-green-400 text-center">Features</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Feature img="/memes.jpg" title="Anime Memes" desc="Daily dose of hilarious anime memes." />
                <Feature img="/events.jpg" title="Live Events" desc="Join cosplay battles, AMV contests & more." />
                 <Feature img="/chst.jpg" title="Community Chat" desc="24/7 anime convos with fans worldwide." />
                <Feature img="/ai.jpg" title="Sophia-AI" desc="Smart anime recommendations tailored for you." />
            </div>
        </section>
    );
}

// Social Links Section
function SocialLinksSection() {
    return (
        <section className="py-16 text-center animate-fade-in">
            <h2 className="text-2xl font-bold text-green-400">Follow Us Everywhere</h2>
            <p className="text-gray-300">Join the conversation on our socials:</p>
            <div className="mt-4 flex justify-center gap-6">
                <SocialLink href="https://discord.gg/your-discord-link" text="Discord" />
                <SocialLink href="https://t.me/your-telegram-link" text="Telegram" />
                <SocialLink href="https://instagram.com/your-instagram" text="Instagram" />
            </div>
        </section>
    );
}

// Feature Card
function Feature({ img, title, desc }) {
    return (
        <div className="flex gap-4 items-center bg-[#0d1117] p-4 rounded-lg shadow-md">
            <img src={img} alt={title} className="w-20 h-20 object-cover rounded-full" />
            <div>
                <h3 className="text-lg font-bold text-green-400">{title}</h3>
                <p className="text-gray-300">{desc}</p>
            </div>
        </div>
    );
}

// Social Link
function SocialLink({ href, text }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            {text}
        </a>
    );
}

export default AboutPage;