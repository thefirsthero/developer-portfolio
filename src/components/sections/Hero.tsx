
import { resumeData } from "../../config/data/resume/resume-data";

export default function Hero() {
  return (
    <section id="hero" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <img
          src={resumeData.personal.image}
          alt="Vukosi Moyane"
          className="w-48 h-48 mx-auto rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold">{resumeData.personal.name}</h1>
        <p className="text-xl text-muted-foreground">{resumeData.personal.title}</p>
        <p className="mt-4 max-w-2xl mx-auto">{resumeData.personal.profile}</p>
      </div>
    </section>
  );
}
