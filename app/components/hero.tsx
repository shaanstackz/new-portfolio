import React from 'react';
import Image from 'next/image';
import paths from '../data/paths';


const Hero: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-20 w-screen">
            
            <div className="container mx-auto px-6 text-center">
                <Image src={paths.me} alt="Shaan" height={128} width={128} className="mx-auto mb-4 rounded-full object-cover" />
                <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-xl mb-8">Showcasing my projects and skills</p>
                <a href="#projects" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    View Projects
                </a>
            </div>
        </div>
    );
};

export default Hero;