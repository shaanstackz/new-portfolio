import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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

                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mt-4">
                    <a href="https://github.com/shaanstackz/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                        <FaGithub size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/shaankohlii/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                        <FaLinkedin size={32} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
