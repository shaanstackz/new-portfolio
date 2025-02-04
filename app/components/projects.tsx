import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import paths from '../data/paths';

const projects = [
    {
        name: 'StockFlow',
        description: 'Description for project one.',
        githubLink: 'https://github.com/shaanstackz/StockFlow',
        techStack: ['JavaScript', 'Python', 'TypeScript', 'CSS']
    },
    {
        name: 'RoomMate',
        description: 'Description for project two.',
        githubLink: 'https://github.com/shaanstackz/FGF-Hackathon',
        techStack: ['Python', 'HTML']
    },
    {
        name: 'Until Dawn Adventure',
        description: 'Description for project three.',
        githubLink: 'https://github.com/shaanstackz/until-dawn-like-game',
        techStack: ['Python']
    },
    {
        name: 'War Card Game',
        description: 'Description for project four.',
        githubLink: 'https://github.com/shaanstackz/War-Card',
        techStack: ['Rust']
    },
    {
        name: 'MyTranslate',
        description: 'Description for project five.',
        githubLink: 'https://github.com/shaanstackz/MyTranslate',
        techStack: ['Python']
    },
    {
        name: 'A Healthy Lifestyle',
        description: 'Description for project six.',
        githubLink: 'https://github.com/shaanstackz/A-Healthy-Lifestyle',
        techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
        name: 'Flight Reservation System',
        description: 'Description for project seven.',
        githubLink: 'https://github.com/shaanstackz/Flight-Reservation-System',
        techStack: ['Java']
    }
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
};

const Projects: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-20 w-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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
                                <FontAwesomeIcon icon={faGithub} className="md:w-6 md h-6 w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;