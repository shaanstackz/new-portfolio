import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
    {
        name: 'StockFlow',
        description: 'Description for project one.',
        githubLink: 'https://github.com/shaanstackz/StockFlow'
    },
    {
        name: 'RoomMate',
        description: 'Description for project two.',
        githubLink: 'https://github.com/shaanstackz/FGF-Hackathon'
    },
    {
        name: 'Until Dawn Adventure',
        description: 'Description for project three.',
        githubLink: 'https://github.com/shaanstackz/until-dawn-like-game'
    },
    {
        name: 'War Card Game',
        description: 'Description for project four.',
        githubLink: 'https://github.com/shaanstackz/War-Card'
    },
    {
        name: 'MyTranslate',
        description: 'Description for project five.',
        githubLink: 'https://github.com/shaanstackz/MyTranslate'
    },
    {
        name: 'A Healthy Lifestyle',
        description: 'Description for project six.',
        githubLink: 'https://github.com/shaanstackz/A-Healthy-Lifestyle'
    },
    {
        name: 'Flight Reservation System',
        description: 'Description for project seven.',
        githubLink: 'https://github.com/shaanstackz/Flight-Reservation-System'
    }
];

const Projects: React.FC = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
                                <FontAwesomeIcon icon={faGithub} className='md:w-6 md h-6 w-4 h-4' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;