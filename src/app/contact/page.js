
export default function Contact() {
    return (
        <main className="max-w-[1360px] mx-auto px-4 py-32 min-h-screen flex flex-col justify-center items-center text-center">
            <p className="font-fira text-sm uppercase tracking-widest mb-4">Get in touch</p>
            <h1 className="text-6xl md:text-8xl font-libre font-bold mb-10 leading-tight">
                Let&apos;s work <br /> together.
            </h1>
            <a
                href="mailto:hello@example.com"
                className="text-2xl font-fira border-b-2 border-black hover:pb-2 transition-all"
            >
                hello@example.com
            </a>
        </main>
    );
}
