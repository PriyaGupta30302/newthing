
export default function About() {
    return (
        <main className="max-w-[1360px] mx-auto px-4 py-32 min-h-screen">
            <h1 className="text-6xl font-libre font-bold mb-10">About Me.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <p className="text-xl font-fira leading-relaxed mb-6">
                        I am a creative developer based in [Location], passionate about building digital experiences that matter.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        With a background in design and engineering, I bridge the gap between aesthetics and functionality.
                        I believe that good design is invisible, and great code is poetry.
                    </p>
                </div>
                <div className="bg-gray-200 h-96 rounded-2xl">
                    {/* Placeholder for image */}
                </div>
            </div>
        </main>
    );
}
