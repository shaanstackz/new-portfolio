"use client";

import React, { useEffect, useRef } from "react";
import paths from "../data/paths"; // Ensure the paths file contains the correct image paths

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Devant",
      logo: paths.devant,  
      date: "May 2025 - Present",
      location: "London, ON, Canada",
      achievements: [
        "Automated manual data processing tasks using Python and Pandas, reducing data preparation time and improving overall accuracy",
        "Designed and deployed automated Power BI dashboards with dynamic filters and scheduled refresh",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "FGF Brands",
      logo: paths.fgf,  // Make sure paths.fgf is correctly set
      date: "May 2024 - May 2025",
      location: "North York, ON, Canada",
      achievements: [
        "Created 15+ mobile-friendly APIs using .NET for a web application supporting bakeries in managing 1,000+ assets, customer interactions, inventory, and orders",
        "Leveraged Kendo UI to develop 20+ interactive front-end features, including data grids, dropdowns, and date pickers, enhancing functionality across 50+ forms",
        "Engineered 10+ custom controls and tailored features to address unique business needs, streamlining workflows for teams across 100+ daily operations",
        "Automated data extraction and transformation processes using SQL and Python, reducing manual workflows by 25% across 50+ forms",
        "Designed end-to-end ETL pipelines for integrating and processing large datasets from multiple sources",
        "Integrated dashboards and KPIs into workflows, enhancing decision-making and providing actionable insights for project stakeholders",
      ],
    },
    {
      title: ".NET Software Developer",
      company: "FGF Brands",
      logo: paths.fgf,  // Ensure paths.fgf is correctly set
      date: "May 2023 - December 2023",
      location: "North York, ON, Canada",
      achievements: [
        "Utilized ASP.NET and SQL Server Management Studio to introduce over 15 features based on business requirements, improving planning efficiency and user experience across 12 bakeries",
        "Leveraged C#, SQL Server, and Azure DevOps to integrate over 25 time zone features, aligning scheduling data with regional time zones for accurate, efficient operations in bakeries across Canada and the United States",
        "Transformed the user interface of a live video wall application using AngularJS, implementing advanced filtering features that enhanced real-time monitoring and improved analytical capabilities for over 50 daily users",
        "Engineered a C# application that reduced response time for weight deviations, ensuring swift responses to critical situations",
        "Automated critical workflows, enabling faster responses to deviations, reducing downtime, and aligning solutions with business needs",
      ],
    },
    {
      title: "Software Developer",
      company: "Toronto Transit Commission (TTC)",
      logo: paths.ttc,  // Ensure paths.ttc is correctly set
      date: "May 2022 - August 2022",
      location: "Toronto, ON, Canada",
      achievements: [
        "Developed an efficient Microsoft Visual Basic application to facilitate seamless transitions for data centre personnel, improving onboarding processes and ensuring smooth data center operations",
        "Added over 15 features to TTC web pages using ASP.NET, streamlining maintenance and mainframe operations",
        "Developed a Python program to enhance onboarding for 10+ co-ops, improving integration speed and effectiveness",
        "Utilized Jira to track and complete 15+ ASP.NET enhancements, optimizing mainframe operations and maintenance processes",
        "Contributed to software quality assurance by developing and executing test cases to identify and resolve bugs on various web pages of the TTC intranet",
      ],
    },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null); // Explicit null type for ref

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

    // Ensure sectionRef is not null before observing
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
    <div
      ref={sectionRef}
      className="bg-gray-900 text-white py-20 opacity-0 transition-opacity duration-700 ease-in-out"
      id="experience"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center font-montserrat">Work Experience</h1>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="h-12 w-12 mr-4 object-contain"
              />
              <div>
                <h2 className="text-xl font-bold text-black font-montserrat">{experience.title}</h2>
                <h3 className="text-lg text-gray-600 font-montserrat">{experience.company}</h3>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-montserrat">{experience.date}</p>
            <p className="text-sm text-gray-500 mb-4 font-montserrat">{experience.location}</p>
            <ul className="list-disc pl-5 space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-700 font-montserrat">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
