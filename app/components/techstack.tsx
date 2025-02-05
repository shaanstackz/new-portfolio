import React from 'react';
import paths from '../data/paths';

const TechStack = () => {
    return (
        <div className="bg-gray-900 text-white py-20 w-screen">
            <h2 className="text-2xl font-bold mb-4 text-white">Programming Languages</h2>
            <div className="flex flex-wrap gap-4 mb-8">
                <img src={paths.python} alt="Python" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.java} alt="Java" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.javascript} alt="JavaScript" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.rust} alt="Rust" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.elixir} alt="Elixir" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.csharp} alt="C#" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.typescript} alt="TypeScript" className="w-12 h-12 object-contain bg-white p-1 rounded" />
            </div>

            <h2 className="text-2xl font-bold mb-4">Frameworks</h2>
            <div className="flex flex-wrap gap-4 mb-8">
                <img src={paths.angular} alt="Angular" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.react} alt="React" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.nodejs} alt="Node.js" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.dotnet} alt=".NET" className="w-12 h-12 object-contain bg-white p-1 rounded" />
            </div>

            <h2 className="text-2xl font-bold mb-4">Tools</h2>
            <div className="flex flex-wrap gap-4">
                <img src={paths.mongodb} alt="MongoDB" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.bash} alt="Bash" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.html} alt="HTML" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.css} alt="CSS" className="w-12 h-12 object-contain bg-white p-1 rounded" />
                <img src={paths.sql} alt="SQL" className="w-12 h-12 object-contain bg-white p-1 rounded" />
            </div>
        </div>
    );
};

export default TechStack;