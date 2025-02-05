import React from 'react';
import paths from '../data/paths';

const WorkExperience: React.FC = () => {
    const experiences = [
        {
            title: "Software Engineer Intern",
            company: "FGF Brands",
            logo: paths.fgf,
            date: "May 2024 - Present",
            location: "North York, ON, Canada",
            achievements: [
                "Developed mobile-responsive APIs using .NET for a full-stack web application utilized by bakeries for customer support, asset tracking, inventory management, and order management",
                "Utilized Kendo UI to build dynamic, interactive front-end components, including data grids, dropdowns, and date pickers, enhancing the user experience and improving form usability",
                "Designed and implemented custom action controls and features to meet specific business requirements, enhancing user workflows and improving operational efficiency"
            ]
        },
        {
            title: ".NET Software Developer",
            company: "FGF Brands",
            logo: paths.fgf,
            date: "May 2023 - December 2023",
            location: "North York, ON, Canada",
            achievements: [
                "As a .NET Software Developer at FGF Brands, I excelled in a dynamic role where I played a pivotal part in enhancing production planning processes for multiple bakeries across Canada and the United States...",
                "Implemented over 15 critical features onto a high-traffic production planning webpage using ASP.NET and SQL Server Management Studio...",
                "Led the development of a live video wall application with AngularJS, delivering innovative video wall filters..."
            ]
        },
        {
            title: "Software Developer",
            company: "Toronto Transit Commission (TTC)",
            logo: paths.ttc,
            date: "May 2022 - August 2022",
            location: "Toronto, ON, Canada",
            achievements: [
                "Developed an onboarding program using Microsoft Visual Basic to facilitate the seamless integration of individuals entering and exiting the data center...",
                "Implemented over 15 new features on the operator web pages of the TTC intranet...",
                "Contributed to software quality assurance by developing and executing test cases to identify and resolve bugs on various web pages of the TTC intranet..."
            ]
        }
    ];

    return (
        <div className="p-6 bg-gray-100">
            {experiences.map((experience, index) => (
                <div key={index} className="mb-8 p-4 bg-white rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <img src={experience.logo} alt={`${experience.company} logo`} className="h-12 w-12 mr-4 object-contain" />
                        <div>
                            <h2 className="text-xl font-bold">{experience.title}</h2>
                            <h3 className="text-lg text-gray-600">{experience.company}</h3>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500">{experience.date}</p>
                    <p className="text-sm text-gray-500 mb-4">{experience.location}</p>
                    <ul className="list-disc pl-5 space-y-2">
                        {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-700">{achievement}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;