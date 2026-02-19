import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1360px] mx-auto px-4 py-20 min-h-screen">
      <div className="max-w-2xl">
        <h1 className="md:text-5xl font-libre font-bold mb-6 text-gray-900">
          Design driven development
        </h1>
        <p className="text-lg font-fira text-gray-700 leading-relaxed mb-8">
          A minimalist approach to building modern web applications.
          Focusing on clean typography, consistent spacing, and functional layouts.
        </p>
        <button className="bg-black text-[#ebe8df] px-6 py-3 font-fira rounded-full hover:bg-gray-800 transition-colors">
          Get Started
        </button>
      </div>
    </main>
  );
}
