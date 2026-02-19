
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full py-5">
            <div className="max-w-[1360px] mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold font-libre">NewThing</div>
                <div className="flex gap-6 font-fira text-sm">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="#" className="hover:underline">About</Link>
                    <Link href="#" className="hover:underline">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
