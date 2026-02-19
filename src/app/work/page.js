
export default function Work() {
    const projects = [
        { id: 1, title: "Project One", category: "Web Design", year: "2024" },
        { id: 2, title: "Project Two", category: "Development", year: "2023" },
        { id: 3, title: "Project Three", category: "Branding", year: "2023" },
    ];

    return (
        <main className="max-w-[1360px] mx-auto px-4 py-32 min-h-screen">
            <h1 className="text-6xl font-libre font-bold mb-16">Selected Work.</h1>
            <div className="flex flex-col gap-12">
                {projects.map((project) => (
                    <div key={project.id} className="group cursor-pointer border-b border-black/10 pb-8 hover:border-black transition-colors">
                        <div className="flex justify-between items-end">
                            <h2 className="text-4xl font-libre group-hover:italic transition-all">{project.title}</h2>
                            <div className="text-right font-fira text-sm opacity-60">
                                <p>{project.category}</p>
                                <p>{project.year}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
