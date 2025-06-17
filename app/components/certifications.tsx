"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
                {/* Microsoft Power Platform Fundamentals */}
                <Link href="https://www.credly.com/badges/3f09afc7-fc3a-4f39-94d6-7afbee31e9e1/linked_in_profile" className="block">
                    <div className="bg-gray-200 text-black p-4 rounded shadow-lg border-t border-gray-200 pt-4 flex items-center transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-300 mb-4 cursor-pointer">
                        <Image
                            src={paths.microsoft} 
                            alt="Microsoft Power Platform Fundamentals"
                            width={48}
                            height={48}
                            className="object-contain mr-4 transition duration-500 ease-in-out transform hover:scale-110"
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600 hover:underline">
                                Microsoft Power Platform Fundamentals
                            </h3>
                            <p className="text-gray-600">Issued by Microsoft</p>
                            <p className="text-gray-600">Date: January 2025</p>
                        </div>
                    </div>
                </Link>
                {/* Microsoft AI Fundamentals */}
                <Link href="https://www.credly.com/badges/bcf5a86d-069c-40fc-b248-828a5649679d/linked_in_profile" className="block">
                    <div className="bg-gray-200 text-black p-4 rounded shadow-lg border-t border-gray-200 pt-4 flex items-center transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-300 mb-4 cursor-pointer">
                        <Image
                            src={paths.microsoft} 
                            alt="Microsoft AI Fundamentals"
                            width={48}
                            height={48}
                            className="object-contain mr-4 transition duration-500 ease-in-out transform hover:scale-110"
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600 hover:underline">
                                Microsoft Azure AI Fundamentals
                            </h3>
                            <p className="text-gray-600">Issued by Microsoft</p>
                            <p className="text-gray-600">Date: February 2025</p> 
                        </div>
                    </div>
                </Link>
                {/* AWS Cloud Certified Cloud Practitioner */}
                <Link href="https://www.credly.com/badges/5a297252-8d8a-4fb9-8c77-ad02c9e56bb8/linked_in_profile" className="block">
                    <div className="bg-gray-200 text-black p-4 rounded shadow-lg border-t border-gray-200 pt-4 flex items-center transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-300 cursor-pointer">
                        <Image
                            src={paths.aws} 
                            alt="AWS Certified Cloud Practitioner"
                            width={48}
                            height={48}
                            className="object-contain mr-4 transition duration-500 ease-in-out transform hover:scale-110"
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-blue-600 hover:underline">
                                AWS Certified Cloud Practitioner
                            </h3>
                            <p className="text-gray-600">Issued by Amazon Web Services</p>
                            <p className="text-gray-600">Date: June 2025</p> 
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Certifications;
