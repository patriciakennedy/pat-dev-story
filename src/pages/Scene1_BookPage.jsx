function Scene1_BookPage() {
    return (
        <div className="w-screen h-screen bg-[#EAEAEA] flex items-center justify-center">
            {/* Book container */}
            <div className="w-[850px] h-[550px] bg-[#FDFDFB] rounded-2xl shadow-2xl border border-gray-300 flex overflow-hidden">
                {/* Left page */}
                <div className="w-1/2 flex flex-col items-center justify-center border-r-2 border-gray-300 bg-white">
                    {/* Avatar placeholder */}
                    <div className="w-48 h-48 rounded-full border-4 border-gray-200 shadow-lg overflow-hidden">
                        <img
                            src="/assets/avatar-placeholder.png"
                            alt="Pat Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="mt-6 text-gray-600 italic text-center px-4">
                        “Every dev has a beginning. This is mine.”
                    </p>
                </div>

                {/* Right page */}
                <div className="w-1/2 flex flex-col items-center justify-center px-8 bg-white">
                    <h1 className="text-3xl font-bold text-[#222] mb-4 text-center">
                        Hi, I’m Pat Kennedy 👋
                    </h1>
                    <p className="text-gray-700 text-center mb-6 leading-relaxed">
                        From solving tech issues to building real-world
                        applications, this interactive story captures my journey
                        into software development.
                    </p>

                    <button className="mt-4 px-6 py-2 bg-[#0057FF] text-white rounded-full shadow hover:bg-[#0045c5] transition">
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Scene1_BookPage;
