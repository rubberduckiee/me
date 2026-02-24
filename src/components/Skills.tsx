const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    technologies: [
      { name: "HTML5", level: 70 },
      { name: "CSS3", level: 65 },
      { name: "JavaScript", level: 50 },
      { name: "React", level: 40 },
    ],
  },
  {
    category: "Currently Learning",
    icon: "📚",
    technologies: [
      { name: "TypeScript", level: 30 },
      { name: "Tailwind CSS", level: 45 },
      { name: "Git & GitHub", level: 40 },
      { name: "Node.js", level: 25 },
    ],
  },
  {
    category: "Future Goals",
    icon: "🎯",
    technologies: [
      { name: "Next.js", level: 0 },
      { name: "Database (SQL/NoSQL)", level: 0 },
      { name: "REST APIs", level: 0 },
      { name: "Deployment", level: 0 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Here's a snapshot of where I am in my learning journey. I'm constantly improving and adding new skills!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center mb-6">
                <span className="text-4xl">{skillGroup.icon}</span>
                <h3 className="text-xl font-semibold text-slate-900 mt-2">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillGroup.technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-700 font-medium">{tech.name}</span>
                      <span className="text-sm text-slate-500">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-50 rounded-full text-indigo-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">These percentages represent my confidence level, not mastery!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
