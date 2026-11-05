const services = [
  "System design & architecture",
  "Web development",
  "Graphics design & branding",
  "Payment integrations",
  "Process automation",
  "API & system integration",
  "Digital marketing",
  "Marketing plans",
  "Brand strategy",
  "Web design & SEO"
];

const projects = [
  ["01", "Travel & Tourism", "Digital experiences for travel brands, tour operators and destinations."],
  ["02", "Booking Systems", "Booking workflows, availability, customer journeys and management tools."],
  ["03", "Stays & Accommodation", "Web platforms for hotels, cottages, lodges and accommodation businesses."],
  ["04", "Payments", "Payment-enabled systems connecting customers, businesses and services."],
  ["05", "Admin Dashboards", "Operational dashboards that turn business data into useful actions."],
  ["06", "Healthcare Websites", "Clear, accessible digital platforms for healthcare organizations."],
  ["07", "Business Websites", "Professional websites built around credibility, conversion and growth."],
  ["08", "Full-stack Products", "End-to-end applications combining frontend, backend, APIs and databases."]
];

const partners = [
  "Organizations",
  "Business owners",
  "Creative professionals",
  "Developers",
  "Marketing teams"
];

export default function Home() {
  return (
    <main>
      <header className="container flex items-center justify-between py-7">
        <a href="#" className="font-black tracking-[0.18em]">MA.</a>
        <nav className="hidden gap-7 text-sm text-zinc-400 md:flex">
          <a href="#services" className="hover:text-white">What I Do</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#partners" className="hover:text-white">Partners</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:border-white">
          Let's work
        </a>
      </header>

      <section className="container flex min-h-[78vh] flex-col justify-center py-20">
        <p className="mb-8 text-xs uppercase tracking-[0.35em] text-zinc-500">Independent digital designer & developer</p>
        <h1 className="display">
          <span className="block">MUTEGI</span>
          <span className="italic-display ml-[5vw] block">ALEX.</span>
        </h1>
        <div className="mt-12 flex max-w-2xl flex-col gap-6 md:ml-[18vw] md:flex-row md:items-end">
          <p className="text-xl leading-relaxed text-zinc-300 md:text-2xl">
            Designer & Developer building digital systems, brands and products that help ideas move from concept to reality.
          </p>
          <a href="#projects" className="shrink-0 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-black">
            Explore work ↘
          </a>
        </div>
      </section>

      <section id="services" className="container py-24">
        <div className="grid-line mb-10 pt-5 flex items-start justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">01 / What I Do</span>
          <span className="text-xs text-zinc-600">Services</span>
        </div>
        <div className="grid gap-x-10 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={service} className="grid-line flex items-center justify-between py-6">
              <span className="text-xl md:text-2xl">{service}</span>
              <span className="text-xs text-zinc-600">0{index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="container py-24">
        <div className="grid-line mb-10 pt-5 flex items-start justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">02 / Projects & Products</span>
          <span className="text-xs text-zinc-600">Selected capabilities</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map(([number, title, description]) => (
            <article key={number} className="group min-h-64 border border-zinc-800 p-7 transition hover:-translate-y-1 hover:border-zinc-500">
              <div className="flex justify-between text-xs text-zinc-600"><span>{number}</span><span>↗</span></div>
              <h2 className="mt-20 text-3xl font-bold tracking-tight">{title}</h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="container py-24">
        <div className="grid-line mb-10 pt-5 flex items-start justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">03 / Partners</span>
          <span className="text-xs text-zinc-600">Built together</span>
        </div>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-5xl font-black tracking-tight md:text-7xl">Good work is collaborative.</h2>
          <div>
            <p className="mb-10 max-w-xl text-lg leading-8 text-zinc-400">
              I build with organizations and individuals who need thoughtful design, reliable technology and practical digital strategy.
            </p>
            <div className="grid border-t border-zinc-800 sm:grid-cols-2">
              {partners.map((partner) => <div key={partner} className="border-b border-zinc-800 py-5 text-zinc-300">{partner} ↗</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container py-24">
        <div className="grid-line pt-5">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">04 / Contact</span>
        </div>
        <div className="py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Have a project in mind?</p>
          <h2 className="mt-5 max-w-5xl text-6xl font-black tracking-[-0.05em] md:text-9xl">LET'S BUILD.</h2>
          <a href="mailto:hello@example.com" className="mt-10 inline-block border-b border-[var(--accent)] pb-2 text-xl text-[var(--accent)]">
            hello@example.com
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-900">
        <div className="container flex flex-col gap-4 py-8 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Mutegi Alex</span>
          <span>Designer & Developer</span>
        </div>
      </footer>
    </main>
  );
}