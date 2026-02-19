import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Default Sans (Geist)</h1>
      <h2 className="text-3xl font-libre">This should be Libre Caslon Text</h2>
      <p className="text-xl font-fira">This should be Fira Code</p>

      <div className="border p-4 rounded bg-gray-100 dark:bg-gray-800">
        <h3 className="font-libre text-2xl mb-2">Typography Test</h3>
        <p className="mb-2">This is standard text in Geist.</p>
        <code className="bg-black/10 dark:bg-white/10 p-1 rounded font-fira">const code = "Fira Code";</code>
      </div>
    </div>
  );
}
