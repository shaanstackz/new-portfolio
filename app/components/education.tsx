import React from 'react';
import Image from 'next/image';
import paths from '../data/paths';

const Education: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white py-20 w-screen">
            <div className="max-w-4xl mx-auto bg-gray-700 shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Education</h1>
                <div className="space-y-4">
                    <div className="p-4 border-b border-gray-600 flex items-center">
                        <Image src={paths.tmu} alt="TMU Logo" width={100} height={100} className="mr-4" />
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