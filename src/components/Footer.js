
export default function Footer() {
    return (
        <footer className="w-full py-10 mt-auto">
            <div className="max-w-[1360px] mx-auto px-4 flex flex-col items-center gap-4 border-t border-black/10 pt-8">
                <p className="font-fira text-sm opacity-60">&copy; {new Date().getFullYear()} NewThing. All rights reserved.</p>
            </div>
        </footer>
    );
}
