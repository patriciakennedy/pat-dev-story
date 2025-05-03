// src/pages/Scene1_Hero.jsx

import { useRef, useState, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Scene1_Hero() {
    const audioRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    const handleStart = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.log('Playback error:', error);
            });
        }
        setHasStarted(true);
    };

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="w-screen h-screen bg-black relative overflow-hidden flex items-center justify-center">
            {/* ✅ Particle Background Layer */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                className="absolute inset-0 z-0"
                options={{
                    background: {
                        color: {
                            value: '#000000', // fallback, but no longer relied on
                        },
                    },
                    fullScreen: {
                        enable: false, // don't take over screen
                    },
                    particles: {
                        number: {
                            value: 60,
                        },
                        color: {
                            value: '#ffffff',
                        },
                        shape: {
                            type: 'circle',
                        },
                        opacity: {
                            value: 0.5,
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                        move: {
                            enable: true,
                            speed: 0.6,
                            direction: 'none',
                            outMode: 'bounce',
                        },
                    },
                }}
            />

            {/* ✅ Foreground Content */}
            <div className="flex flex-col items-center justify-center z-10">
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

                {/* Narrating Note */}
                {hasStarted && (
                    <p className="text-gray-400 text-sm mb-6">Narrating...</p>
                )}
            </div>

            {/* Audio Element */}
            <audio ref={audioRef} src="/audio/scene1.mp3" preload="auto" />

            {/* Arrow Button */}
            <div className="absolute bottom-6 right-6 animate-bounce text-white text-3xl z-10">
                →
            </div>

            {/* Begin Button */}
            {!hasStarted && (
                <button
                    onClick={handleStart}
                    className="absolute bottom-6 left-6 text-sm text-gray-300 border border-gray-500 px-3 py-1 rounded-full hover:bg-gray-700 hover:text-white transition z-10"
                >
                    Begin ▶️
                </button>
            )}
        </div>
    );
}

export default Scene1_Hero;
