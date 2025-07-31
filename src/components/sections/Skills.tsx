
import { resumeData } from "../../config/data/resume/resume-data";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {resumeData.skills.map((skill) => (
            <div key={skill.name} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              </div>
              <p className="font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
