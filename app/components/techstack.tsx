"use client";

import React, { useEffect, useRef } from 'react';
import paths from '../data/paths';

const TechStack: React.FC = () => {
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
        <div ref={sectionRef} className="bg-gray-900 text-white py-3 w-screen opacity-0 transition duration-500 ease-in-out transform hover:scale-105">
            <div className="container mx-auto px-2">
                <h1 className="text-3xl font-bold mb-4 text-center">Tech Stack</h1>
                
                <h2 className="text-2xl font-bold mb-2 text-center">Languages</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                    <img src={paths.javascript} alt="JavaScript" title="JavaScript" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.python} alt="Python" title="Python" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.typescript} alt="TypeScript" title="TypeScript" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.java} alt="Java" title="Java" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.csharp} alt="C#" title="C#" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.rust} alt="Rust" title="Rust" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                </div>

                <h2 className="text-2xl font-bold mb-2 text-center">Frameworks</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                    <img src={paths.angular} alt="Angular" title="Angular" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.react} alt="React" title="React" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.nodejs} alt="Node.js" title="Node.js" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.dotnet} alt=".NET" title=".NET" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                </div>

                <h2 className="text-2xl font-bold mb-2 text-center">Tools</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                    <img src={paths.mongodb} alt="MongoDB" title="MongoDB" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.bash} alt="Bash" title="Bash" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.html} alt="HTML" title="HTML" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.css} alt="CSS" title="CSS" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                    <img src={paths.sql} alt="SQL" title="SQL" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                </div>
            </div>
        </div>
    );
};

export default TechStack;