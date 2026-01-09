import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
    { text: "출근 인원이 많아 선택 폭이 정말 넓었습니다. 관리자분들도 친절하시네요.", highlight: "선택 폭이 넓다" },
    { text: "처음이라 걱정했는데, 분위기가 부담스럽지 않아서 좋았습니다. 재방문 의사 100%.", highlight: "분위기" },
    { text: "가격 설명이 미리 명확하게 되어 있어서 편하게 즐길 수 있었습니다.", highlight: "가격 설명" },
    { text: "혼자 가도 전혀 어색하지 않게 잘 챙겨주시네요. 감사합니다.", highlight: "혼자 가도" },
];

export default function Reviews() {
    return (
        <section className="relative py-20 md:py-32 bg-brand-black overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/reviews-bg.jpg"
                    alt="Luxury Texture"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Real Voices</h2>
                    <div className="w-20 h-[1px] bg-brand-gold mx-auto mb-8" />
                    <p className="text-gray-400 font-light tracking-wide">
                        고객님들의 <span className="text-brand-gold">진솔한 경험</span>이 강남 달토의 가치를 증명합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 rounded-none border-t-2 border-brand-gold/20 hover:border-brand-gold transition-colors duration-500 bg-black/40 backdrop-blur-md group"
                        >
                            <Quote className="w-8 h-8 text-brand-gold/30 mb-6 group-hover:text-brand-gold transition-colors duration-500" />
                            <p className="text-gray-300 text-sm leading-7 mb-6 font-light">
                                "{review.text}"
                            </p>
                            <div className="text-xs text-brand-gold tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                                Verified Customer
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-xl md:text-3xl text-gray-200 font-serif italic">
                        “결국 <span className="text-brand-gold border-b border-brand-gold/30 pb-1">편안함과 신뢰</span> 때문이라고 생각합니다.”
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
