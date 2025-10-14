"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import paths from '../data/paths';

const projects = [
    {
        name: 'StockFlow',
        description: 'Developed a comprehensive full-stack inventory management solution tailored for the food service industry. The application includes real-time inventory tracking, machine learning-driven demand forecasting, and automated reordering capabilities. By streamlining operations, StockFlow has reduced stock shortages by 25%, efficiently manages over 10,000 records, and automatically generates more than 100 invoices each month.',
        githubLink: 'https://github.com/shaanstackz/StockFlow',
        techStack: ['JavaScript', 'Python', 'TypeScript', 'CSS']
    },
    {
        name: 'TorontoMicro',
        description: 'Developed a comprehensive full-stack inventory management solution tailored for the food service industry. The application includes real-time inventory tracking, machine learning-driven demand forecasting, and automated reordering capabilities. By streamlining operations, StockFlow has reduced stock shortages by 25%, efficiently manages over 10,000 records, and automatically generates more than 100 invoices each month.',
        githubLink: '',
        techStack: ['HTML', 'SQL', 'PHP', 'Angular']
    },
    {
        name: 'RoomMate',
        description: 'During the FGF Brands co-op hackathon, our team built RoomMate, an AI-driven tool that automates meeting scheduling and room allocation. Additionally, we developed smart algorithms for email reply suggestions and optimized file management, boosting productivity and simplifying daily workflows.',
        githubLink: 'https://github.com/shaanstackz/FGF-Hackathon',
        techStack: ['Python', 'HTML']
    },
    {
        name: 'War Card Game',
        description: 'Developed a Rust-based card game application inspired by the classic game War. The application features smooth gameplay and user-friendly controls, delivering an engaging and immersive experience as players compete with virtual card decks.',
        githubLink: 'https://github.com/shaanstackz/War-Card',
        techStack: ['Rust']
    },
    {
        name: 'MyTranslate',
        description: 'Improved a basic program that acts as a dictionary for both English and French words. This program has many features, such as translating certain sentences in English into French or Dutch. This program also displays translated sentence, with a comparison of the word count from the translated sentence.',
        githubLink: 'https://github.com/shaanstackz/MyTranslate',
        techStack: ['Python']
    },
    {
        name: 'A Healthy Lifestyle',
        description: 'This program is meant to advise the user on what different important health conditions and which they should increase or decrease. The health conditions include: Headphone Exposure, Step Count, Diets, and overall BMI',
        githubLink: 'https://github.com/shaanstackz/A-Healthy-Lifestyle',
        techStack: ['Python']
    },
    {
        name: 'Flight Reservation System',
        description: 'Developed a Java-based flight reservation system simulation. The program allows users to reserve or cancel seats, view passenger manifests, and check the status of specific flights, providing a comprehensive and interactive booking experience.',
        githubLink: 'https://github.com/shaanstackz/Flight-Reservation-System',
        techStack: ['Java']
    },
    {
        name: 'Web Portfolio',
        description: 'This web portfolio itself where I showcase my skills, work experience, projects, and more!',
        githubLink: 'https://github.com/shaanstackz/new-portfolio',
        techStack: ['TypeScript', 'React', 'Tailwind']
    },
];

const techIcons: { [key: string]: string } = {
    'JavaScript': paths.javascript,
    'Python': paths.python,
    'TypeScript': paths.typescript,
    'CSS': paths.css,
    'HTML': paths.html,
    'Rust': paths.rust,
    'React': paths.react,
    'Node.js': paths.nodejs,
    'MongoDB': paths.mongodb,
    'C#': paths.csharp,
    'Java': paths.java,
    'SQL': paths.sql,
    'Angular': paths.angular,
    'PHP': paths.php,
    'Tailwind': paths.tailwind
};

const Projects: React.FC = () => {
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
        <section className="bg-gray-900 text-white py-20 w-screen" id="projects">
            <div ref={sectionRef} className="container mx-auto px-4 opacity-0 transition duration-500 ease-in-out transform hover:scale-105">
                <h2 className="text-3xl font-bold mb-8 text-center transition duration-500 ease-in-out transform hover:scale-110" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:bg-gray-600">
                            <h3 className="text-xl font-semibold mb-2 text-black">{project.name}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="mb-4">
                                <h4 className="font-semibold text-black">Tech Stack:</h4>
                                <ul className="list-none flex space-x-2">
                                    {project.techStack.map((tech, techIndex) => (
                                        <li key={techIndex} className="text-gray-600">
                                            <Image src={techIcons[tech as keyof typeof techIcons]} alt={tech} width={24} height={24} title={tech} className='tech-icon'/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
                                <FontAwesomeIcon icon={faGithub} className="md:w-6 md:h-6 w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
