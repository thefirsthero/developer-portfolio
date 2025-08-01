
import { resumeData } from "../../config/data/resume/resume-data";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="relative">
          <div className="border-l-2 border-primary absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {resumeData.education.map((edu, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
              </div>
              <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{edu.qualification}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution} | {edu.period}</p>
                <ul className="list-disc list-inside mt-2">
                  {edu.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
