"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';  // Import the Image component from Next.js
import paths from '../data/paths';

const Certifications: React.FC = () => {
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
        <div
            ref={sectionRef}
            className="bg-gray-900 text-white py-20 w-screen opacity-0 transition-opacity duration-500 ease-in-out"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4 text-center transition duration-500 ease-in-out transform hover:scale-110">
                    Certifications
                </h2>
                <div className="bg-gray-200 text-black p-4 rounded shadow-lg border-t border-gray-200 pt-4 flex items-center transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-300">
                    {/* Use Next.js Image component for optimization */}
                    <Image
                        src={paths.microsoft} // Make sure paths.microsoft is a valid path
                        alt="Microsoft Certification"
                        width={48}  // Set width of the image
                        height={48} // Set height of the image
                        className="object-contain mr-4 transition duration-500 ease-in-out transform hover:scale-110"
                    />
                    <div>
                        <h3 className="text-xl font-semibold">Microsoft Power Platform Fundamentals</h3>
                        <p className="text-gray-600">Issued by Microsoft</p>
                        <p className="text-gray-600">Date: January 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
