
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full py-10 px-4">
            <div className="max-w-[1360px] mx-auto bg-[#1c1c1c] text-[#ebe8df] rounded-[1rem] md:rounded-[3rem] p-6 md:p-16 flex flex-col gap-12 md:gap-24">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="flex flex-col gap-8 max-w-xl">
                        <h2 className="text-[40px] md:text-6xl font-libre font-thin leading-none tracking-tight">
                            Ready to bring your <br /> <span className="italic">ideas to life?</span>
                        </h2>
                        <Link href="/contact" className="bg-[#ebe8df] text-black px-8 py-4 rounded-full font-geist font-medium w-fit hover:bg-white transition-all hover:scale-105 active:scale-95">
                            Book a Free Call
                        </Link>
                    </div>

                    <div className="flex gap-16 md:gap-32 font-geist text-lg">
                        <div className="flex flex-col gap-6">
                            <h3 className="font-medium text-[#ebe8df]">Work</h3>
                            <div className="flex flex-col gap-4 text-[#ebe8df]/60 font-light text-sm">
                                <Link href="#" className="hover:text-white transition-colors">Adriano</Link>
                                <Link href="#" className="hover:text-white transition-colors">Horizon Interiors</Link>
                                <Link href="#" className="hover:text-white transition-colors">Urban Wheels</Link>
                                <Link href="#" className="hover:text-white transition-colors">Conservation Montgomery</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="font-medium text-[#ebe8df]">Connect</h3>
                            <div className="flex flex-col gap-4 text-[#ebe8df]/60 font-light text-sm">
                                <Link href="#" className="hover:text-white transition-colors">Email</Link>
                                <Link href="#" className="hover:text-white transition-colors">Linkedin</Link>
                                <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center text-[10px] uppercase tracking-widest opacity-40 font-geist border-t border-[#ebe8df]/10 pt-8 gap-4 w-full">
                    <p>Site Design and Development by NewThing.</p>
                    <div className="flex flex-wrap gap-4 md:gap-8">
                        <p>Headshots by Victor Maldonado</p>
                        <p>Illustrations by Claudia Fuentes</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
