import React from 'react';
import { projects } from '@/app/lib/data';
import { Project } from '@/app/lib/definition';

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-600 dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover dark:drop-shadow-[0_0_0.3rem_#ffffff70]" />
        <div className="dark:absolute inset-0 dark:bg-black opacity-30 dark:mix-blend-overlay"></div>
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2 dark:text-gray-50">{project.title}</h2>
            <p className="text-gray-700 mb-4 dark:text-gray-200">{project.description}</p>
            <div className="flex flex-wrap">
                {project.skills.map((skill, index) => (
                    <span key={index} className="bg-indigo-800 dark:bg-indigo-200 text-indigo-200 dark:text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-1 rounded">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Projects = () => (
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </div>
);

export default Projects;