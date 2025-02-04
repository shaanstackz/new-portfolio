import React from 'react';

const WorkExperience: React.FC = () => {
    const experiences = [
        {
            company: 'Company A',
            role: 'Software Engineer',
            duration: 'Jan 2020 - Present',
            description: 'Developed and maintained web applications using React and Node.js.',
        },
        {
            company: 'Company B',
            role: 'Frontend Developer',
            duration: 'Jun 2018 - Dec 2019',
            description: 'Implemented responsive UI components with React and Tailwind CSS.',
        },
    ];

    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className="mb-6 p-4 bg-white rounded shadow-md">
                    <h3 className="text-xl font-semibold">{experience.role}</h3>
                    <p className="text-gray-600">{experience.company}</p>
                    <p className="text-gray-500">{experience.duration}</p>
                    <p className="mt-2">{experience.description}</p>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;