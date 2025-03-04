import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Full page wrapper with wallpaper
function AboutPage() {
    return (
        <div 
            className="min-h-screen bg-cover bg-center relative text-white overflow-hidden"
            style={{ backgroundImage: `url('/wall.jpg')` }} // Full wallpaper
        >
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[10px]"></div>

            {/* Actual Page Content */}
            <div className="relative z-10">
                <Navbar />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <HeroSection />
                <AboutSection />
                <FeaturesSection />
                <SocialLinksSection />
                <Footer />
            </div>
        </div>
    );
}

// Sections (Split for readability)

// Hero Sectio
// Hero Section (Upgraded with Glass Card, Logo, Anime Characters, and Bottom Text)
function HeroSection() {
    return (
<section className="h-screen flex flex-col justify-center items-center text-center relative pt-16">
            {/* Big Vercel-style Top Text */}
            <h1 className="absolute top-8 text-5xl md:text-7xl font-black text-white tracking-tight">
                Welcome to Aniphia!!!!!
            </h1>

            {/* Glassmorphism Welcome Card (optional - can remove if you just want the top text alone) */}
            <div className="mt-20 backdrop-blur-md bg-white/10 border border-white/40 rounded-lg p-8 shadow-xl relative flex flex-col items-center pt-16">
                {/* Logo inside the card (top-center) */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/10 border border-white/30 rounded-full overflow-hidden flex items-center justify-center backdrop-blur-md shadow-lg">
                    <img src="/aniphia.jpg" alt="Aniphia Logo" className="w-full h-full object-cover" />
                </div>

                {/* Text inside the card */}
                <p className="mt-2 text-gray-500 text-center">
                    The Ultimate Anime Social Universe – memes, live events, Sophia-AI recommendations & more.
                </p>

                {/* Glowing Join Now Button */}
                <a href="/signup"
                   className="mt-6 px-8 py-3 font-bold text-white bg-blue-500 rounded-full shadow-lg relative overflow-hidden hover:scale-105 transition-transform
                              before:absolute before:inset-0 before:bg-blue-400 before:blur-md before:opacity-50">
                    Join the Family Now
                </a>
            </div>
        </section>
    );
}

// About Section
function AboutSection() {
    return (
        <section className="py-16 px-8 text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-green-400">What is Aniphia?</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
               Aniphia is a creative social media platform built for anime lovers, combining community interaction with the power of AI. It’s designed to be a hub where users can share anime memes, participate in fun events like cosplay competitions, and even earn badges for their contributions. What makes Aniphia special is its built-in AI system — inspired by Sophia, the AI can chat with users, recommend anime, and even help find trending content. The design takes inspiration from clean, professional platforms like GitHub and Instagram, making it easy to navigate while keeping the anime vibes alive. Aniphia isn’t just a platform — it’s a whole experience for anime fans to connect, create, and celebrate their passion together.
            </p>
        </section>
    );
}

// Features Section
function FeaturesSection() {
    return (
        <section className="py-16 px-8 bg-[#161b22]/80 backdrop-blur-[5px] animate-fade-in">
            <h2 className="text-3xl font-bold text-blue-400 text-center">Features</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Feature img="/memes.jpg" title="Anime Memes" desc="Daily dose of hilarious anime memes that never get old." />
                <Feature img="/events.jpg" title="Live Events" desc="Join cosplay battles, AMV contests & themed parties." />
                <Feature img="/chat.jpg" title="Community Chat" desc="24/7 anime convos with fans worldwide." />
                <Feature img="/ai.jpg" title="Sophia-AI" desc="AI-powered anime recommendations personalized for you." />
            </div>
        </section>
        );
}

// Social Links Section
function SocialLinksSection() {
    return (
        <section className="py-16 text-center animate-fade-in">
            <h2 className="text-2xl font-bold text-green-400">Follow Us Everywhere</h2>
            <p className="text-gray-300 mt-2">Join the conversation on our social platforms:</p>
            <div className="mt-4 flex justify-center gap-6">
                <SocialLink href="https://discord.gg/your-discord-link" text="Discord" />
                <SocialLink href="https://t.me/your-telegram-link" text="Telegram" />
                <SocialLink href="https://instagram.com/your-instagram" text="Instagram" />
            </div>
        </section>
    );
}

// Reusable Feature Card
function Feature({ img, title, desc }) {
    return (
        <div className="flex gap-4 items-center bg-[#0d1117] p-4 rounded-lg shadow-lg">
            <img src={img} alt={title} className="w-16 h-16 object-cover rounded-full" />
            <div>
                <h3 className="text-lg font-bold text-blue-400">{title}</h3>
                <p className="text-gray-300">{desc}</p>
            </div>
        </div>
    );
}

// Reusable Social Link
function SocialLink({ href, text }) {
    return (
        <a href={href} target="_blank" className="text-blue-400 hover:underline">{text}</a>
    );
}

// Animation (add this to your global CSS file - styles.css or tailwind.css)
const styles = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
    opacity: 0; /* Start hidden until animation runs */
}
`;

// Inject animation into document (since you may not have a styles.css)
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = styles;
    document.head.appendChild(styleSheet);
}

export default AboutPage;