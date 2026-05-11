export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      
      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 animate-pulse">
          Rokib Hasan Roni
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          CSE Student | Web Developer | React & Next.js Enthusiast | Smart System Builder
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-cyan-500 text-black rounded-xl hover:bg-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition">
            Contact
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          I am a passionate Computer Science student specializing in web development, database systems,
          and modern UI/UX design. I build responsive and scalable applications using modern technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6 bg-white/5">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "HTML", "CSS", "JavaScript", "React",
            "Next.js", "Tailwind", "PHP", "MySQL"
          ].map((skill) => (
            <div key={skill} className="p-6 bg-black/40 border border-white/10 rounded-xl text-center hover:scale-105 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Smart Attendance System", "Portfolio Website", "Database Management System"].map((p) => (
            <div key={p} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 transition">
              <h3 className="text-xl font-bold mb-2">{p}</h3>
              <p className="text-gray-400">Modern project built using latest technologies.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Contact</h2>
        <p className="text-gray-300">Email: roni@example.com</p>
        <p className="text-gray-300">GitHub: github.com/roni</p>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 border-t border-white/10">
        © 2026 Rokib Hasan Roni
      </footer>
    </div>
  );
}