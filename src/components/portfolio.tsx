'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

// Project data structure.
type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
  technologies: string[];
};

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    url: 'https://example.com',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Shadcn'],
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    url: 'https://example.com',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    url: 'https://example.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];


const Portfolio = () => {
  const handleVisitSite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 py-16">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white/10 border-gray-300/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/20 rounded-full text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleVisitSite(project.url)}
                  className="w-full bg-white/20 hover:bg-white/30 text-white"
                >
                  Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
