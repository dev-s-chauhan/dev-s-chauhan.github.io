import { experience } from "@/content";

export default function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="wrap">
        <div className="sec-head"><div><span className="eyebrow mono">{experience.eyebrow}</span><h2 className="disp">{experience.title}</h2></div></div>
        <div className="jobs">
          {experience.jobs.map((job) => (
            <div className="job" key={job.when}>
              <span className="when mono">{job.when}</span>
              <div><h3 className="cond">{job.role}</h3><span className="org">{job.org}</span></div>
              <p>{job.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
