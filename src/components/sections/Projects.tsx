import { resumeData } from "../../config/data/resume/resume-data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project) => (
            <Card key={project.title} className="flex flex-col justify-between h-full">
              <CardHeader>
                <img
                  src={project.cardImage}
                  alt={project.title}
                  className="rounded-t-lg"
                />
                <CardTitle className="mt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-center gap-x-2">
                <div className="flex w-full gap-x-2">
                  <Button asChild className="flex-1">
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Preview
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
