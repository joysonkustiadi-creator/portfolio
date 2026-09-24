import Ridgeline from "../components/Ridgeline";
import Portrait from "../components/Portrait";
import Reveal from "../components/Reveal";
import RotatingWords from "../components/RotatingWords";
import Counter from "../components/Counter";
import Marquee from "../components/Marquee";
import ScrollProgress from "../components/ScrollProgress";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
import WorkGallery from "../components/WorkGallery";
import { profile, projects, stats, toolkit, capabilities } from "../data/profile";

const allTools = toolkit.flatMap((group) => group.items);
const half = Math.ceil(allTools.length / 2);
const firstHalf = allTools.slice(0, half);
const secondHalf = allTools.slice(half);

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Nav initials={profile.initials} links={profile.nav} status={profile.status} />

      {/* Two fixed layers behind everything: slow-drifting light, and a star field. */}
      <div className="backdrop" aria-hidden="true">
        <span className="backdrop__glow backdrop__glow--dawn" />
        <span className="backdrop__glow backdrop__glow--alpine" />
        <span className="backdrop__stars" />
      </div>

      <main id="top">
        <header className="shell hero">
          <div className="hero__top">
            <div className="hero__intro">
              <p className="eyebrow">
                {profile.name} &mdash; {profile.location}
              </p>

              {/* Oversized stacked type: each line lifts into place in turn. */}
              <h1 className="headline display">
                {profile.headline.map((line, i) => (
                  <span className="headline__line" key={line}>
                    <span
                      className="headline__inner"
                      style={{ animationDelay: `${180 + i * 130}ms` }}
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h1>

              <p className="hero__role">
                I work on <RotatingWords words={profile.roles} />
              </p>
            </div>
            <Portrait src={profile.portrait} name={profile.name} />
          </div>

          <Ridgeline projects={projects} />

          <div className="scroll-cue" aria-hidden="true">
            <span className="mono">Scroll</span>
            <span className="scroll-cue__line" />
          </div>
        </header>

        <section className="shell section" id="about">
          <Reveal>
            <p className="eyebrow">What I work on</p>
            <p className="lede">{profile.intro}</p>
          </Reveal>
        </section>

        <section className="shell section" id="capabilities">
          <Reveal>
            <p className="eyebrow">What that means in practice</p>
          </Reveal>

          <div className="caps">
            {capabilities.map((cap, i) => (
              <Reveal className="cap" key={cap.title} delay={i * 70}>
                <span className="cap__num mono">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="cap__title display">{cap.title}</h3>
                <ul className="cap__list">
                  {cap.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="shell section" id="numbers">
          <div className="stats">
            {stats.map((stat, i) => (
              <Reveal className="stat" key={stat.label} delay={i * 90}>
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="stat__label mono">{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="shell section" id="work">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2 className="display h2">Things I've built and helped build.</h2>
          </Reveal>

          <div className="projects">
            {projects.map((project, i) => (
              <Reveal as="article" className="project" id={project.id} key={project.id}>
                <div className="project__meta">
                  <span className="project__index mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mono">{project.year}</span>
                  <span className="mono project__kind">{project.kind}</span>
                </div>

                <div className="project__body">
                  <h3 className="project__name">{project.name}</h3>
                  <p className="project__summary">{project.summary}</p>
                  <p className="project__detail">{project.detail}</p>

                  <ul className="tags">
                    {project.stack.map((item) => (
                      <li className="tag" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <WorkGallery images={project.images} name={project.name} id={project.id} />

                  {project.links.length > 0 && (
                    <div className="links">
                      {project.links.map((link) => (
                        <a
                          className="link"
                          href={link.href}
                          key={link.label}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label} <span aria-hidden="true">&rarr;</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="shell section" id="toolkit">
          <Reveal>
            <p className="eyebrow">Toolkit</p>
            <h2 className="display h2">What I reach for.</h2>
          </Reveal>

          {/* Readable copy of the same list, for screen readers and
              crawlers. The marquee below is decorative and hidden from
              both, so without this the skills would not exist in the
              accessible document at all. */}
          <ul className="sr-only">
            {toolkit.map((group) => (
              <li key={group.group}>
                {group.group}: {group.items.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <div className="marquees">
          <Marquee items={firstHalf} speed={58} />
          <Marquee items={secondHalf} speed={70} reverse />
        </div>

        <section className="shell section section--center" id="contact">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 className="display h2 contact__heading">
              Open for collaborations and internships.
            </h2>
            <a className="contact__mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </Reveal>
        </section>

        <footer className="shell footer">
          <span className="mono">
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <span className="links">
            <a className="link" href={'https://drive.google.com/file/d/1EjqYb2nzbm0f-vbEZ7GzpGyw3RE8S3n8/view?usp=sharing'} target="_blank" rel="noreferrer">
              CV
            </a>
            <a className="link" href={'https://github.com/joysonkustiadi-creator'} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="link" href={'https://www.linkedin.com/in/joshuajoyson/'} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </span>
        </footer>
      </main>
    </>
  );
}
