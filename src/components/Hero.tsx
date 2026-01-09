import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    return (
        <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-brand-black z-10" />
                <img
                    src="/hero-bg.jpg"
                    alt="Luxury Interior"
                    className="w-full h-[120%] object-cover opacity-80"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="inline-block py-1.5 px-4 border border-brand-gold/30 rounded-full bg-black/40 backdrop-blur-md text-brand-gold text-xs md:text-sm tracking-[0.3em] font-medium uppercase shadow-[0_0_20px_rgba(197,160,89,0.1)]">
                        High-End Private Lounge
                    </span>
                </motion.div>

                {/* SEO H1 - 검색엔진용 */}
                <h1 className="sr-only">강남 달토 | 달리는토끼 하이퍼블릭 가라오케 가격·시스템 안내</h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
                    className="text-5xl md:text-9xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl"
                    aria-hidden="true"
                >
                    GANGNAM<br />
                    <span className="text-gradient-gold">DALTO</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="h-16 w-[1px] bg-gradient-to-b from-brand-gold to-transparent mb-4" />
                    <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-xl leading-relaxed mix-blend-difference">
                        강남 대표 하이퍼블릭 가라오케<br />
                        <span className="text-brand-gold font-normal">Running Rabbit</span>
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
