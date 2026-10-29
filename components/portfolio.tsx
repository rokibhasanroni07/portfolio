"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check,
  Code2, Github, Linkedin, Mail, Menu, Moon, Sparkles, Sun, Terminal,
  X, ExternalLink, Cpu, ShieldCheck, BrainCircuit, Database, Rocket,
} from "lucide-react";
import DeveloperAvatar from "@/components/avatar";

const projects = [
  {
    title: "Object Detection Web App",
    category: "AI / ML",
    number: "01",
    description: "A browser-based object detection experience, with an upgrade path toward modern detection models and Python inference.",
    stack: ["JavaScript", "Computer Vision", "TensorFlow.js"],
    icon: BrainCircuit,
    color: "from-violet-500/20 to-cyan-500/10",
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Leaf Saver",
    category: "IoT",
    number: "02",
    description: "A smart irrigation concept using soil-moisture sensing and automated watering to support efficient water use in agriculture.",
    stack: ["IoT", "Sensors", "Microcontrollers"],
    icon: Cpu,
    color: "from-emerald-500/20 to-cyan-500/10",
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Stock Price Prediction",
    category: "AI / ML",
    number: "03",
    description: "An academic machine-learning project exploring time-series forecasting with an LSTM model and historical market data.",
    stack: ["Python", "LSTM", "Pandas"],
    icon: BrainCircuit,
    color: "from-blue-500/20 to-violet-500/10",
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Student Record Manager",
    category: "Software",
    number: "04",
    description: "A data-structures project for organizing student records and practicing core programming and data-management concepts.",
    stack: ["C++", "Data Structures", "CLI"],
    icon: Database,
    color: "from-orange-500/15 to-pink-500/10",
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Library Management System",
    category: "Software",
    number: "05",
    description: "An academic library workflow concept for managing books, records, and common library operations through a structured interface.",
    stack: ["Database", "UI Design", "CRUD"],
    icon: Code2,
    color: "from-cyan-500/15 to-blue-500/10",
    github: "https://github.com/",
    demo: "",
  },
];

const skills = [
  { title: "Programming", icon: Code2, items: ["C", "C++", "Python", "JavaScript", "TypeScript"] },
  { title: "Web development", icon: Braces, items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"] },
  { title: "AI & data", icon: BrainCircuit, items: ["Machine Learning", "LSTM", "Object Detection", "Pandas", "SQL basics"] },
  { title: "Tools & security", icon: ShieldCheck, items: ["Git", "GitHub", "VS Code", "Linux fundamentals", "Networking fundamentals"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [filter, setFilter] = useState("All");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formMessage, setFormMessage] = useState("");
  const reducedMotion = useReducedMotion();
  const categories = ["All", "AI / ML", "IoT", "Software"];
  const filteredProjects = useMemo(
    () => filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter],
  );

  function closeMenu() { setMobileOpen(false); }
  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    setFormMessage("Your email app should open with the message prepared. Send it there to complete delivery.");
    window.location.href = `mailto:rokibhasanroni07@gmail.com?subject=${subject}&body=${body}`;
  }

  const nav = [
    ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Journey", "#journey"], ["Contact", "#contact"],
  ];

  return (
    <main className={theme === "light" ? "light-mode min-h-screen" : "min-h-screen"}>
      <style jsx global>{`
        .light-mode { --bg:#f7f7fc; --panel:rgba(20,20,40,.045); --line:rgba(20,20,40,.13); --muted:#5e6075; --text:#161624; color:#161624; background:#f7f7fc; color-scheme:light; }
        .light-mode .nav-link { color:#55566b; }
        .light-mode .nav-link:hover { color:#151525; }
        .light-mode .glass, .light-mode .card { background:rgba(255,255,255,.7); }
        .light-mode .pill, .light-mode .skill-chip { color:#35354a; background:rgba(255,255,255,.75); }
        .light-mode .btn-secondary { color:#222235; background:rgba(255,255,255,.8); }
        .light-mode .field { color:#171727; background:rgba(255,255,255,.8); }
        .light-mode .field::placeholder { color:#85859a; }
        .light-mode footer { border-color:var(--line); }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <div className="orb absolute -left-40 top-20 h-96 w-96 bg-violet-500" />
        <div className="orb absolute -right-40 top-[35rem] h-96 w-96 bg-cyan-400" />
      </div>

      <header className="fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#09090f]/75 backdrop-blur-2xl">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu} aria-label="Rokib Hasan Roni home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-400/10 text-violet-200"><Terminal size={20}/></span>
            <span className="font-semibold tracking-tight text-white">rokib<span className="text-violet-300">.dev</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {nav.map(([label, href]) => <a className="nav-link" key={label} href={href}>{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/80 transition hover:bg-white/10" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">
              {theme === "dark" ? <Sun size={17}/> : <Moon size={17}/>}
            </button>
            <a href="#contact" className="btn btn-primary hidden !rounded-xl !px-4 !py-2.5 sm:inline-flex">Let&apos;s talk <ArrowUpRight size={16}/></a>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
              {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>
        {mobileOpen && <nav className="container flex flex-col gap-1 border-t border-white/10 py-4 md:hidden" aria-label="Mobile navigation">
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5">{label}</a>)}
        </nav>}
      </header>

      <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden pb-20 pt-32 sm:min-h-[820px]">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.12fr_.88fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: reducedMotion ? 0 : .7, staggerChildren: .12 }}>
            <motion.div variants={fadeUp} className="pill mb-7"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]"/> CSE Student · Developer in progress</motion.div>
            <motion.p variants={fadeUp} className="mb-4 text-sm font-medium tracking-wide text-violet-200">HELLO, I&apos;M</motion.p>
            <motion.h1 variants={fadeUp} className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-.065em] text-white sm:text-6xl lg:text-[76px]">
              Rokib Hasan <span className="gradient-text">Roni.</span>
            </motion.h1>
            <motion.div variants={fadeUp} className="mt-5 flex items-center gap-2 text-lg text-white/80 sm:text-xl">
              <span className="text-cyan-200">&gt;</span>
              <span>Building practical solutions through code</span><span className="cursor text-violet-300">_</span>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-[15px] leading-7 text-[#aaaabb]">
              I&apos;m a Computer Science &amp; Engineering student exploring software development, AI/ML, and cybersecurity — turning ideas into useful, thoughtful projects one commit at a time.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#projects">Explore my work <ArrowRight size={17}/></a>
              <a className="btn btn-secondary text-white" href="#contact">Contact me <Mail size={16}/></a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <a className="flex items-center gap-2 transition hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
              <span className="h-1 w-1 rounded-full bg-white/25"/>
              <a className="flex items-center gap-2 transition hover:text-white" href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
              <span className="h-1 w-1 rounded-full bg-white/25"/>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300"/> Bangladesh</span>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reducedMotion ? 0 : .85, delay: .15 }} className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute inset-[10%] rounded-full bg-violet-500/15 blur-3xl"/>
            <div className="glass soft-glow relative rounded-[32px] p-5 sm:p-7">
              <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"/></div>
                <span className="font-mono text-[10px] text-white/35">developer.profile</span>
              </div>
              <DeveloperAvatar size={300}/>
              <div className="mt-3 rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-xs leading-6">
                <div className="text-white/35">{"// a little about me"}</div>
                <div><span className="text-violet-300">const</span> <span className="text-cyan-200">developer</span> = {"{"}</div>
                <div className="pl-4"><span className="text-violet-200">focus</span>: <span className="text-emerald-200">&quot;build &amp; learn&quot;</span>,</div>
                <div className="pl-4"><span className="text-violet-200">mindset</span>: <span className="text-emerald-200">&quot;curious&quot;</span>,</div>
                <div className="pl-4"><span className="text-violet-200">status</span>: <span className="text-emerald-200">&quot;shipping ideas&quot;</span></div>
                <div>{"};"}</div>
              </div>
            </div>
            <div className="glass absolute -left-5 top-[20%] hidden items-center gap-2 rounded-xl px-3 py-2.5 text-xs text-white/80 sm:flex"><Code2 size={16} className="text-cyan-200"/> Clean code</div>
            <div className="glass absolute -right-4 bottom-[16%] hidden items-center gap-2 rounded-xl px-3 py-2.5 text-xs text-white/80 sm:flex"><Sparkles size={16} className="text-violet-200"/> Keep learning</div>
          </motion.div>
        </div>
        <a href="#about" aria-label="Scroll to about section" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/40 md:flex">SCROLL TO EXPLORE <ArrowDown size={14}/></a>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div><span className="eyebrow">About me</span><h2 className="section-title mt-5">Curious by nature.<br/><span className="gradient-text">Builder by choice.</span></h2></div>
            <div>
              <p className="text-lg leading-8 text-white/80">I&apos;m Rokib Hasan Roni, a Computer Science &amp; Engineering student who enjoys learning how technology works and using it to solve practical problems.</p>
              <p className="mt-5 leading-8 text-[#a4a4b5]">My interests span web development, machine learning, computer vision, IoT, and cybersecurity. I like taking ideas from a rough concept to a working prototype, learning from the process, and improving the result through iteration.</p>
              <p className="mt-5 leading-8 text-[#a4a4b5]">I also took part in ICPC 2024 Onsite, an experience that strengthened my interest in problem-solving and collaborative learning.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[["01", "Learn by building"], ["02", "Solve real problems"], ["03", "Improve every day"]].map(([n, t]) => <div className="card p-4" key={n}><span className="font-mono text-xs text-cyan-200">{n}</span><p className="mt-2 text-sm font-medium text-white/85">{t}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section border-y border-white/[0.06] bg-white/[0.015]">
        <div className="container">
          <div className="mb-12 max-w-2xl"><span className="eyebrow">Toolbox</span><h2 className="section-title">Skills I use to <span className="gradient-text">build things.</span></h2><p className="section-copy">A growing toolkit across programming, web technologies, data, and foundational security concepts. This list is editable as my skills develop.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return <motion.div key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={fadeUp} transition={{ duration: .45, delay: index * .07 }} className="card p-6 sm:p-7">
                <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/10 text-violet-200"><Icon size={21}/></span><h3 className="text-lg font-semibold text-white">{group.title}</h3></div>
                <div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="skill-chip">{item}</span>)}</div>
              </motion.div>;
            })}
          </div>
          <p className="mt-5 text-xs leading-6 text-white/35">Note: Update this section to reflect your current proficiency. Items are not proficiency ratings or professional certifications.</p>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><span className="eyebrow">Selected work</span><h2 className="section-title">Projects with a <span className="gradient-text">purpose.</span></h2><p className="section-copy">Academic and personal project concepts I&apos;ve explored. Add each repository and live demo link when it&apos;s ready.</p></div>
            <div className="flex flex-wrap gap-2">{categories.map((cat) => <button key={cat} onClick={() => setFilter(cat)} className={`rounded-full border px-4 py-2 text-xs transition ${filter === cat ? "border-violet-300/50 bg-violet-300/15 text-violet-100" : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"}`}>{cat}</button>)}</div>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return <motion.article key={project.title} layout initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={fadeUp} transition={{ duration: .4, delay: index * .06 }} className="card project-card flex flex-col overflow-hidden">
                <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
                  <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.18) 1px, transparent 1px)", backgroundSize: "18px 18px" }}/>
                  <div className="absolute left-5 top-4 font-mono text-xs text-white/40">{project.number} / PROJECT</div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-black/20 shadow-2xl backdrop-blur"><Icon size={34} strokeWidth={1.4} className="text-white/85"/></div>
                  <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-wider text-white/65">{project.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#a4a4b5]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-md bg-white/[0.05] px-2 py-1 text-[10px] text-white/55">{tag}</span>)}</div>
                  <div className="mt-6 flex items-center gap-4 border-t border-white/[0.08] pt-4 text-xs">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 transition hover:text-white"><Github size={15}/> Repository <ArrowUpRight size={12}/></a>
                    {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="ml-auto flex items-center gap-2 text-cyan-200 hover:text-cyan-100">Live demo <ExternalLink size={13}/></a> : <span className="ml-auto text-white/30">Demo coming soon</span>}
                  </div>
                </div>
              </motion.article>;
            })}
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-white/40"><ArrowDownRight size={17} className="text-violet-300"/> Replace placeholder GitHub links in <code className="rounded bg-white/5 px-2 py-1 text-xs">components/portfolio.tsx</code> with your repositories.</div>
        </div>
      </section>

      <section id="journey" className="section border-y border-white/[0.06] bg-white/[0.015]">
        <div className="container">
          <div className="mb-12"><span className="eyebrow">My journey</span><h2 className="section-title">Always in <span className="gradient-text">progress.</span></h2><p className="section-copy">A few milestones and areas shaping my path as a developer.</p></div>
          <div className="relative ml-2 space-y-7 border-l border-violet-300/20 pl-8 sm:ml-6 sm:pl-10">
            {[
              { time: "Education", title: "Computer Science & Engineering", body: "Building a foundation in programming, algorithms, software design, and computing concepts.", icon: Code2 },
              { time: "2024", title: "ICPC Onsite Participation", body: "Participated in ICPC 2024 Onsite and continued developing problem-solving habits.", icon: Rocket },
              { time: "Ongoing", title: "AI, Web & Cybersecurity", body: "Exploring object detection, machine learning, modern web development, and security fundamentals through learning and projects.", icon: ShieldCheck },
            ].map((item, i) => {
              const Icon = item.icon;
              return <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .4 }} variants={fadeUp} transition={{ duration: .5, delay: i * .1 }} className="relative card p-5 sm:p-7">
                <span className="absolute -left-[39px] top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#09090f] bg-violet-300 shadow-[0_0_18px_rgba(167,139,250,.4)] sm:-left-[51px]"/>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.07] text-cyan-200"><Icon size={20}/></span>
                  <div><span className="font-mono text-xs uppercase tracking-wider text-violet-200">{item.time}</span><h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#a4a4b5]">{item.body}</p></div>
                </div>
              </motion.div>;
            })}
          </div>
          <div className="glass mt-10 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-semibold text-white">Currently learning</p><p className="mt-1 text-sm text-white/50">Modern web engineering · AI/ML · Cybersecurity foundations</p></div><span className="pill w-fit"><span className="h-2 w-2 rounded-full bg-cyan-300"/> Learning mode: ON</span></div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div><span className="eyebrow">Get in touch</span><h2 className="section-title mt-5">Have an idea?<br/><span className="gradient-text">Let&apos;s connect.</span></h2><p className="section-copy mt-5">Open to learning opportunities, collaboration, and conversations about technology. Send a message and let&apos;s see what we can build.</p>
              <div className="mt-8 space-y-4">
                <a href="mailto:YOUR_EMAIL@example.com" className="card flex items-center gap-4 p-4 transition hover:border-violet-300/40"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200"><Mail size={19}/></span><span><span className="block text-xs text-white/40">Email me</span><span className="mt-1 block text-sm text-white">YOUR_EMAIL@example.com</span></span><ArrowUpRight className="ml-auto text-white/40" size={17}/></a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="card flex items-center gap-4 p-4 transition hover:border-violet-300/40"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white"><Github size={19}/></span><span><span className="block text-xs text-white/40">Find my code</span><span className="mt-1 block text-sm text-white">GitHub profile</span></span><ArrowUpRight className="ml-auto text-white/40" size={17}/></a>
              </div>
            </div>
            <form className="card p-5 sm:p-8" onSubmit={handleContactSubmit}>
              <h3 className="text-xl font-semibold text-white">Send a message</h3><p className="mt-2 text-sm text-white/45">This form opens your default email app. Set your real email address in the source before publishing.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-xs text-white/65">Your name<input className="field mt-2" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe"/></label>
                <label className="text-xs text-white/65">Email address<input className="field mt-2" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@example.com"/></label>
              </div>
              <label className="mt-4 block text-xs text-white/65">Subject<input className="field mt-2" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Let's collaborate"/></label>
              <label className="mt-4 block text-xs text-white/65">Message<textarea className="field mt-2 min-h-32 resize-y" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about your idea..."/></label>
              <button className="btn btn-primary mt-5 w-full" type="submit">Prepare email <ArrowUpRight size={16}/></button>
              {formMessage && <p role="status" className="mt-3 text-xs leading-5 text-cyan-200">{formMessage}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] py-7">
        <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold text-white"><Terminal size={17} className="text-violet-200"/> rokib<span className="-ml-2 text-violet-300">.dev</span></a>
          <p className="text-xs text-white/35">Designed with curiosity · © {new Date().getFullYear()} Rokib Hasan Roni</p>
          <a href="#home" className="flex items-center gap-2 text-xs text-white/50 transition hover:text-white">Back to top <ArrowUpRight size={13}/></a>
        </div>
      </footer>
    </main>
  );
}
