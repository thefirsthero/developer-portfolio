import { resumeData } from "../../config/data/resume/resume-data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="relative">
          <div className="border-l-2 border-primary absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {resumeData.experience.map((exp, index) => (
            <div
              key={exp.title}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {index + 1}
                </h1>
              </div>
              <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.company} | {exp.period}
                </p>
                <p className="mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
