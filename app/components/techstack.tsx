"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';  // Import the Image component from Next.js
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
        <div ref={sectionRef} className="bg-gray-900 text-white py-3 w-screen opacity-0 transition duration-500 ease-in-out">
            <div className="container mx-auto px-2">
                <h1 className="text-3xl font-bold mb-4 text-center">Tech Stack</h1>
                
                <h2 className="text-2xl font-bold mb-2 text-center">Languages</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                    <Image src={paths.javascript} alt="JavaScript" title="JavaScript" width={48} height={48} className="object-contain bg-yellow-400 p-3 rounded-full" />
                    <Image src={paths.python} alt="Python" title="Python" width={48} height={48} className="object-contain bg-blue-500 p-3 rounded-full" />
                    <Image src={paths.typescript} alt="TypeScript" title="TypeScript" width={48} height={48} className="object-contain bg-blue-400 p-3 rounded-full" />
                    <Image src={paths.java} alt="Java" title="Java" width={48} height={48} className="object-contain bg-red-600 p-3 rounded-full" />
                    <Image src={paths.csharp} alt="C#" title="C#" width={48} height={48} className="object-contain bg-purple-600 p-3 rounded-full" />
                    <Image src={paths.rust} alt="Rust" title="Rust" width={48} height={48} className="object-contain bg-gray-700 p-3 rounded-full" />
                    <Image src={paths.php} alt="PHP" title="PHP" width={48} height={48} className="object-contain bg-indigo-700 p-3 rounded-full" />
                </div>

                <h2 className="text-2xl font-bold mb-2 text-center">Frameworks</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                    <Image src={paths.angular} alt="Angular" title="Angular" width={48} height={48} className="object-contain bg-red-500 p-3 rounded-full" />
                    <Image src={paths.react} alt="React" title="React" width={48} height={48} className="object-contain bg-blue-900 p-3 rounded-full" />
                    <Image src={paths.nodejs} alt="Node.js" title="Node.js" width={48} height={48} className="object-contain bg-green-600 p-3 rounded-full" />
                    <Image src={paths.dotnet} alt=".NET" title=".NET" width={48} height={48} className="object-contain bg-purple-700 p-3 rounded-full" />
                    <Image src={paths.tailwind} alt="Tailwind" title="Tailwind" width={48} height={48} className="object-contain bg-blue-700 p-3 rounded-full" />
                </div>

                <h2 className="text-2xl font-bold mb-2 text-center">Tools</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                    <Image src={paths.mongodb} alt="MongoDB" title="MongoDB" width={48} height={48} className="object-contain bg-green-500 p-1 rounded-full" />
                    <Image src={paths.bash} alt="Bash" title="Bash" width={48} height={48} className="object-contain bg-gray-200 p-3 rounded-full" />
                    <Image src={paths.html} alt="HTML" title="HTML" width={48} height={48} className="object-contain bg-orange-500 p-3 rounded-full" />
                    <Image src={paths.css} alt="CSS" title="CSS" width={48} height={48} className="object-contain bg-blue-700 p-3 rounded-full" />
                    <Image src={paths.sql} alt="SQL" title="SQL" width={48} height={48} className="object-contain bg-indigo-600 p-3 rounded-full" />
                    <Image src={paths.automate} alt="Power Automate" title="Power Automate" width={48} height={48} className="object-contain bg-black-600 p-3 rounded-full" />
                    <Image src={paths.bi} alt="Power BI" title="Power BI" width={48} height={48} className="object-contain bg-yellow-600 p-1 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default TechStack;
