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

                {[
                    { title: "Languages", items: [
                        { src: paths.javascript, name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                        { src: paths.python, name: "Python", url: "https://www.python.org/" },
                        { src: paths.typescript, name: "TypeScript", url: "https://www.typescriptlang.org/" },
                        { src: paths.java, name: "Java", url: "https://www.java.com/" },
                        { src: paths.csharp, name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
                        { src: paths.rust, name: "Rust", url: "https://www.rust-lang.org/" },
                        { src: paths.php, name: "PHP", url: "https://www.php.net/" }
                    ]},
                    { title: "Frameworks", items: [
                        { src: paths.angular, name: "Angular", url: "https://angular.io/" },
                        { src: paths.react, name: "React", url: "https://react.dev/" },
                        { src: paths.nodejs, name: "Node.js", url: "https://nodejs.org/" },
                        { src: paths.dotnet, name: ".NET", url: "https://dotnet.microsoft.com/" },
                        { src: paths.tailwind, name: "Tailwind", url: "https://tailwindcss.com/" }
                    ]},
                    { title: "Tools", items: [
                        { src: paths.mongodb, name: "MongoDB", url: "https://www.mongodb.com/" },
                        { src: paths.bash, name: "Bash", url: "https://www.gnu.org/software/bash/" },
                        { src: paths.html, name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                        { src: paths.css, name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                        { src: paths.sql, name: "SQL", url: "https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16" },
                        { src: paths.automate, name: "Power Automate", url: "https://powerautomate.microsoft.com/" },
                        { src: paths.bi, name: "Power BI", url: "https://powerbi.microsoft.com/" }
                    ]}
                ].map((category) => (
                    <div key={category.title} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-center">{category.title}</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {category.items.map((item) => (
                                <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
                                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 shadow-md transition-transform hover:scale-110">
                                        <Image
                                            src={item.src}
                                            alt={item.name}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                            data-tooltip-id={item.name}
                                        />
                                        <Tooltip id={item.name} place="top" className="z-50">
                                            {item.name}
                                        </Tooltip>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
