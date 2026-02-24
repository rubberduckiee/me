export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 inline-flex">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-indigo-200">
              FN
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Hi, I'm <span className="text-indigo-600">FirstName</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            An aspiring <span className="text-indigo-600 font-semibold">Web Developer</span> learning to build amazing things for the web
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center items-center gap-8 text-slate-400">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
