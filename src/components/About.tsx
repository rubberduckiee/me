export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
              <svg className="w-48 h-48 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900">
              Hello! I'm a beginner web developer on an exciting journey
            </h3>
            
            <p className="text-slate-600 leading-relaxed">
              Welcome to my corner of the web! I've recently started learning web development 
              and I'm absolutely loving it. There's something magical about being able to 
              create things that people can interact with online.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              I'm currently learning HTML, CSS, JavaScript, and React. Every day brings new 
              challenges and "aha!" moments. This website is part of my learning journey - 
              a place where I can showcase what I'm building and document my progress.
            </p>

            <p className="text-slate-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, reading about 
              web development, or working on small projects to practice what I've learned.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-indigo-600">🚀</div>
                <div className="text-sm text-slate-600 mt-1">Always Learning</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-indigo-600">💡</div>
                <div className="text-sm text-slate-600 mt-1">Curious Mind</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-indigo-600">🎯</div>
                <div className="text-sm text-slate-600 mt-1">Goal Oriented</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-indigo-600">☕</div>
                <div className="text-sm text-slate-600 mt-1">Coffee Lover</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
