// src/pages/Scene1_Hero.jsx

function Scene1_Hero() {
    return (
        <div className="w-screen h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Avatar Image */}
          
            <div className="relative mb-6">
                {/* Glow Circle Behind Avatar */}
                <div className="absolute inset-0 w-64 h-64 rounded-full bg-[#00BFFF] opacity-20 blur-2xl z-0"></div>

                {/* Avatar Image */}
                <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg z-10">
                    <img
                        src="/images/pat.png"
                        alt="Pat Kennedy Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Welcome Text */}
            <h1 className="text-3xl font-bold text-gray-200 mb-4 text-center">
                Hi, I’m Pat Kennedy
            </h1>

            {/* Play Voice Button (temporary placeholder) */}
            <button className="mt-4 px-6 py-2 bg-[#00BFFF] text-white rounded-full shadow hover:bg-blue-500 transition">
                ▶️ Play Voice
            </button>

            {/* Tiny Arrow (temporary placeholder) */}
            <div className="absolute bottom-6 right-6 animate-bounce text-white text-3xl">
                →
            </div>
        </div>
    );
}

export default Scene1_Hero;
