import React, { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    return (
        <div className="min-h-screen bg-[#0d1117] flex items-center justify-center text-white">
            {isLoggedIn ? (
                <WelcomeAnimation username={username} />
            ) : (
                <LoginScreen setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
            )}
        </div>
    );
}

function LoginScreen({ setIsLoggedIn, setUsername }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please fill in both email and password!");
            return;
        }
        // Extract username from email (just for now, proper backend will handle this later)
        const extractedUsername = email.split('@')[0];
        setUsername(extractedUsername);
        setIsLoggedIn(true);
    };

    return (
        <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-blue-500 mb-6">
                <img src="/aniphia.jpg" alt="Aniphia Logo" className="w-full h-full object-cover" />
            </div>

            {/* Welcome Text */}
            <h1 className="text-3xl font-bold text-blue-400">Welcome to Aniphia</h1>
            <p className="text-gray-400 mt-1">Home of Anime, Fun & Laughter</p>

            {/* Form */}
            <form className="mt-6 flex flex-col gap-4 w-80 bg-[#161b22] p-6 rounded-lg shadow-lg">
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address" 
                    className="p-3 bg-[#0d1117] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" 
                    className="p-3 bg-[#0d1117] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="button" 
                    onClick={handleLogin}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded font-bold">
                    Login
                </button>
            </form>

            <p className="mt-4 text-gray-400 text-sm">
                New here? <span className="text-blue-400 cursor-pointer hover:underline">Sign up</span>
            </p>
        </div>
    );
}

function WelcomeAnimation({ username }) {
    const quotes = [
        "Power comes in response to a need, not a desire. – Goku",
        "A lesson without pain is meaningless. – Edward Elric",
        "Fear is not evil. It tells you what your weakness is. – Gildarts Clive",
        "A person grows up when he’s able to overcome hardships. – Jiraiya",
        "In this world, wherever there is light - there are also shadows. – Madara Uchiha"
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className="flex flex-col items-center gap-4 animate-fade-in">
            <p className="text-lg italic text-gray-300">"{randomQuote}"</p>
            <h2 className="text-xl font-bold text-blue-400">ANIPHIA HAS GOT IT ALL...</h2>
            <h3 className="text-2xl font-bold text-green-400">Welcome to the Family, {username}!</h3>
        </div>
    );
}

export default App;