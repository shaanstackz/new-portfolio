"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import paths from "../data/paths";

const TechStack: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fadeIn");
                        entry.target.classList.remove("opacity-0");
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
        <div ref={sectionRef} className="bg-gray-900 text-white py-6 w-full opacity-0 transition duration-500 ease-in-out">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Tech Stack</h1>

                {/** Category Rendering Function */}
                {[
                    { title: "Languages", items: [
                        { src: paths.javascript, name: "JavaScript" },
                        { src: paths.python, name: "Python" },
                        { src: paths.typescript, name: "TypeScript" },
                        { src: paths.java, name: "Java" },
                        { src: paths.csharp, name: "C#" },
                        { src: paths.rust, name: "Rust" },
                        { src: paths.php, name: "PHP" }
                    ]},
                    { title: "Frameworks", items: [
                        { src: paths.angular, name: "Angular" },
                        { src: paths.react, name: "React" },
                        { src: paths.nodejs, name: "Node.js" },
                        { src: paths.dotnet, name: ".NET" },
                        { src: paths.tailwind, name: "Tailwind" }
                    ]},
                    { title: "Tools", items: [
                        { src: paths.mongodb, name: "MongoDB" },
                        { src: paths.bash, name: "Bash" },
                        { src: paths.html, name: "HTML" },
                        { src: paths.css, name: "CSS" },
                        { src: paths.sql, name: "SQL" },
                        { src: paths.automate, name: "Power Automate" },
                        { src: paths.bi, name: "Power BI" }
                    ]}
                ].map((category) => (
                    <div key={category.title} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-center">{category.title}</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {category.items.map((item) => (
                                <div key={item.name} className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 shadow-md transition-transform hover:scale-110">
                                    <Image
                                        src={item.src}
                                        alt={item.name}
                                        width={48}  // Icon size
                                        height={48} // Icon size
                                        className="object-contain"
                                        data-tooltip-id={item.name}
                                    />
                                    <Tooltip id={item.name} place="top" className="z-50">
                                        {item.name}
                                    </Tooltip>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
