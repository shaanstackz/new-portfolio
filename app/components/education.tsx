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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-gray-900 text-white py-20 w-screen">
            <div ref={sectionRef} className="max-w-4xl mx-auto bg-gray-700 shadow-md rounded-lg p-6 opacity-0 transition duration-500 ease-in-out transform hover:scale-105">
                <h1 className="text-3xl font-bold mb-6 text-center transition duration-500 ease-in-out transform hover:scale-110">Education</h1>
                <div className="space-y-4">
                    <div className="p-4 border-b border-gray-600 flex items-center transition duration-500 ease-in-out transform hover:bg-gray-600">
                        <Image src={paths.tmu} alt="TMU Logo" width={100} height={100} className="mr-4 transition duration-500 ease-in-out transform hover:scale-110" />
                        <div>
                            <h2 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h2>
                            <p className="text-gray-300">Toronto Metropolitan University - 2020 to 2025</p>
                            <p className="text-gray-400 mt-2">Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;