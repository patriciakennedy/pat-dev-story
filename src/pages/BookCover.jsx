import React from 'react';

const BookCover = ( { onOpen}) => {
    return (
        <>
            <div className="w-screen h-screen bg-[#EAEAEA] flex items-center justify-center">
                <div className="w-[300px] h-[450px] bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] rounded-xl shadow-2xl border-4 border-gray-700 flex flex-col justify-between items-center p-6 relative transition-transform duration-300">
                    {/* Avatar on book cover */}
                    <img
                        src="/assets/avatar-placeholder.png"
                        alt="Author"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg mt-4"
                    />

                    {/* Title */}
                    <div className="text-center text-white">
                        <h1 className="text-xl font-bold uppercase tracking-wide">
                            The Dev Journey
                        </h1>
                        <p className="text-sm italic mt-2">by Pat Kennedy</p>
                    </div>

                    {/* Bottom arrow */}
                    <button
                        onClick={onOpen}
                        className="animate-bounce mb-2"
                        title="Open Book"
                    >
                        <span className="text-white text-3xl">↓</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default BookCover;
