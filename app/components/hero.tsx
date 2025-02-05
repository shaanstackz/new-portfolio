import React from 'react';
import Image from 'next/image';
import paths from '../data/paths';

const Hero: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-20 w-screen">
            <div className="container mx-auto px-6 text-center">
                <Image src={paths.me} alt="Shaan" height={128} width={128} className="mx-auto mb-4 rounded-full object-cover" />
                <h1 className="text-5xl mb-4 typing-effect mx-auto font-fira-code">shaan kohli</h1>
                <div className="relative h-8 mb-8 disappearing-text flex justify-center items-center mx-auto font-press-start-2p">
                <span className="text-xl font-press-start-2p">developer</span>
                    <span className="text-xl font-press-start-2p">software engineer</span>
                    <span className="text-xl font-press-start-2p">tech enthusiast</span>
                    <span className="text-xl font-press-start-2p">problem solver</span>
                    <span className="text-xl font-press-start-2p">innovator</span>
                </div>
                <a href="#projects" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    View Projects
                </a>
            </div>
        </div>
    );
};

export default Hero;