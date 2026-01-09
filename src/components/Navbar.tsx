import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none"
        >
            <div className="pointer-events-auto bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl">
                <span className="text-white font-black tracking-tighter text-xl">DALTO</span>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#system" className="hover:text-white transition-colors">System</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>

                <a
                    href="tel:01023033778"
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
                >
                    <Phone size={14} />
                    <span className="hidden sm:inline">010-2303-3778</span>
                </a>
            </div>
        </motion.nav>
    );
}
