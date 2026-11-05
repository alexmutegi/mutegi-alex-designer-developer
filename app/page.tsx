import MobileNav from "@/components/MobileNav";
import ContactForm from "@/components/ContactForm";
import { contact, socials } from "@/data/socials";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { skills } from "@/data/skills";

const navLinks = [
  { href: "#services", label: "What I Do" },
  { href: "#projects", label: "Projects" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <main>
      <header className="relative container flex items-center justify-between py-6 md:py-7">
        <a href="#" aria-label="Mutegi Alex home" className="font-black tracking-[0.18em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
          MA.
        </a>

        <nav aria-label="Primary navigation" className="hidden gap-7 text-sm text-zinc-400 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:inline-flex"
          >
            WhatsApp
          </a>
          <MobileNav />
        </div>
      </header>

      <section className="container flex min-h-[78vh] flex-col justify-center py-16 md:py-20">
        <p className="mb-8 text-xs uppercase tracking-[0.25em] text-zinc-500 md:tracking-[0.35em]">
          Independent digital designer & developer
        </p>
        <h1 className="display">
          <span className="block">MUTEGI</span>
          <span className="italic-display ml-[4vw] block md:ml-[5vw]">ALEX.</span>
        </h1>
        <div className="mt-10 flex max-w-2xl flex-col gap-6 md:ml-[18vw] md:mt-12 md:flex-row md:items-end">
          <p className="text-lg leading-relaxed text-zinc-300 md:text-2xl">
            Designer & Developer building digital systems, brands and products that help ideas move from concept to reality.
          </p>
          <a
            href="#projects"
            className="w-fit shrink-0 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            Explore work ↘
          </a>
        </div>
      </section>

      <section id="services" className="container py-20 md:py-24">
        <div className="grid-line mb-10 flex items-start justify-between pt-5">
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 md:tracking-[0.3em]">01 / What I Do</span>
          <span className="text-xs text-zinc-600">Services</span>
        </div>
        <div className="grid gap-x-10 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={service} className="grid-line flex items-center justify-between py-5 md:py-6">
              <span className="text-lg md:text-2xl">{service}</span>
              <span className="text-xs text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="container py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Tools & skills</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Built to ship.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="container py-20 md:py-24">
        <div className="grid-line mb-10 flex items-start justify-between pt-5">
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 md:tracking-[0.3em]">02 / Projects & Products</span>
          <span className="text-xs text-zinc-600">Selected client work</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="group border border-zinc-800 p-6 transition hover:-translate-y-1 hover:border-zinc-500 md:min-h-80 md:p-7">
              <div className="flex justify-between text-xs text-zinc-600">
                <span>{project.number}</span>
                <span>↗</span>
              </div>
              <div className="mt-12 flex items-center justify-between gap-4 md:mt-16">
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">{project.category}</p>
                <span className="rounded-full border border-zinc-800 px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-500">
                  {project.status}
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{project.title}</h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-400">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="container py-20 md:py-24">
        <div className="grid-line mb-10 flex items-start justify-between pt-5">
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 md:tracking-[0.3em]">03 / Partners</span>
          <span className="text-xs text-zinc-600">Built together</span>
        </div>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-4xl font-black tracking-tight md:text-7xl">Good work is collaborative.</h2>
          <div>
            <p className="mb-10 max-w-xl text-lg leading-8 text-zinc-400">
              I build with organizations and individuals who need thoughtful design, reliable technology and practical digital strategy.
            </p>
            <div className="grid border-t border-zinc-800 sm:grid-cols-2">
              {["Organizations", "Business owners", "Creative professionals", "Developers", "Marketing teams"].map((partner) => (
                <div key={partner} className="border-b border-zinc-800 py-5 text-zinc-300">{partner} ↗</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container py-20 md:py-24">
        <div className="grid-line pt-5">
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 md:tracking-[0.3em]">04 / Contact</span>
        </div>
        <div className="py-14 md:py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Have a project in mind?</p>
          <h2 className="mt-5 max-w-5xl text-5xl font-black tracking-[-0.05em] sm:text-7xl md:text-9xl">LET&apos;S BUILD.</h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <p className="max-w-md text-base leading-7 text-zinc-400">
                Tell me what you are building. I&apos;ll help you turn the idea into a practical digital experience.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <a href={contact.phoneHref} className="w-fit border-b border-[var(--accent)] pb-2 text-xl text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                  {contact.phoneDisplay}
                </a>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="w-fit text-sm text-zinc-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                  Message me on WhatsApp ↗
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                    {social.label} · {social.handle} ↗
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900">
        <div className="container flex flex-col gap-4 py-8 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Mutegi Alex</span>
          <span>Designer & Developer · Kenya</span>
        </div>
      </footer>
    </main>
  );
}
