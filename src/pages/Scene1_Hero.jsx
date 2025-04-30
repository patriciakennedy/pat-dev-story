// src/pages/Scene1_Hero.jsx

import { useRef, useEffect } from 'react';

function Scene1_Hero() {
    const audioRef = useRef(null);

    useEffect(() => {
        // Delay playback by 2 seconds
        const timer = setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.play().catch((err) => {
                    console.log('Autoplay failed:', err);
                });
            }
        }, 2000);

        // Cleanup if component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-screen h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Avatar with Glow */}
            <div className="relative mb-6">
                <div className="absolute inset-0 w-64 h-64 rounded-full bg-[#00BFFF] opacity-20 blur-2xl z-0"></div>
                <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg z-10">
                    <img
                        src="/images/pat.png"
                        alt="Pat Kennedy Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Welcome Text */}
            <h1 className="text-3xl font-bold text-gray-200 mb-2 text-center">
                Hi, I’m Pat Kennedy
            </h1>

            {/* Optional: subtle playback note */}
            <p className="text-gray-400 text-sm mb-6">Narrating...</p>

            {/* Audio Element (autoplays after 2 seconds) */}
            <audio ref={audioRef} src="/audio/scene1.mp3" preload="auto" />

            {/* Tiny Right Arrow */}
            <div className="absolute bottom-6 right-6 animate-bounce text-white text-3xl">
                →
            </div>
        </div>
    );
}

export default Scene1_Hero;
