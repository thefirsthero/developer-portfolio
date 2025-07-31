
import { resumeData } from "../../config/data/resume/resume-data";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">I'm {resumeData.personal.name}</h3>
            <p className="text-lg mb-4">{resumeData.personal.title}</p>
            <p>{resumeData.personal.profile}</p>
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
