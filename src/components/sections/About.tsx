import { resumeData } from "../../config/data/resume/resume-data";
import { appConfig } from "../../config/app";
import { Button } from "../ui/button";
import { Github, Linkedin, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              I'm {resumeData.personal.name}
            </h3>
            <p className="text-lg mb-4">{resumeData.personal.title}</p>
            <p className="mb-4">{resumeData.personal.profile}</p>
            <div className="flex space-x-4">
              <Button
                variant="default"
                size="icon"
                asChild
              >
                <a
                  href={appConfig.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={appConfig.github.title}
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="default"
                size="icon"
                asChild
              >
                <a
                  href={appConfig.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={appConfig.linkedin.title}
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="default"
                size="icon"
                asChild
              >
                <a
                  href={appConfig.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={appConfig.leetcode.title}
                >
                  <Code className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <img
              src={resumeData.personal.image}
              alt="Vukosi Moyane"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
