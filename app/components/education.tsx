"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import paths from '../data/paths';

const Education: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                        entry.target.classList.remove('opacity-0');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentSectionRef = sectionRef.current;

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);

    return (
        <div className="bg-gray-900 text-white py-20 w-screen font-fira-code" id="education">
            <div
                ref={sectionRef}
                className="max-w-4xl mx-auto bg-gray-700 shadow-md rounded-lg p-8 opacity-0 transition duration-500 ease-in-out transform hover:scale-105"
            >
                <h1 className="text-4xl font-pacifico mb-8 text-center transition duration-500 ease-in-out transform hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Education
                </h1>
                <div className="space-y-6">
                    <div className="p-6 border-b border-gray-600 grid grid-cols-3 gap-4 items-center transition duration-500 ease-in-out transform hover:bg-gray-600 hover:shadow-xl rounded-md">
                        <Image
                            src={paths.tmu}
                            alt="TMU Logo"
                            width={100}
                            height={100}
                            className="col-span-1 transition duration-500 ease-in-out transform hover:scale-110"
                        />
                        <div className="col-span-2">
                            <h2 className="text-2xl font-semibold text-white">Bachelor of Science in Computer Science</h2>
                            <p className="text-gray-300">Toronto Metropolitan University - 2020 to 2025</p>
                            <p className="text-gray-400 mt-2">
                                <span className="font-medium text-purple-400">Relevant coursework:</span> Data Structures, Algorithms, Web Development, Database Systems
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
