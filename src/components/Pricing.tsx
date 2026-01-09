import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
    return (
        <section className="py-20 md:py-32 bg-brand-obsidian relative overflow-hidden flex items-center">
            {/* Background Image / Texture */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/pricing-bg.png"
                    alt="Luxury Leather Texture"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-obsidian via-brand-obsidian/95 to-brand-obsidian/40" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <div className="inline-block p-3 border border-brand-gold/20 bg-brand-gold/5 rounded-full mb-6">
                            <span className="text-brand-gold text-xs font-mono tracking-widest uppercase px-2">Transparent Policy</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-tight">
                            Pricing<br />
                            <span className="text-gradient-gold">Clarity.</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                            "강남 달토는 가격을 숨기지 않습니다."<br />
                            <span className="text-base text-gray-500 mt-2 block">
                                불투명한 가격 구조로 인한 불안감을 해소하고,<br />
                                처음부터 끝까지 신뢰할 수 있는 서비스를 제공합니다.
                            </span>
                        </p>

                        <div className="h-px w-full bg-gradient-to-r from-brand-gold/30 to-transparent my-8" />

                        <p className="text-gray-500 text-sm">
                            * 정확한 달토 가격과 주대는 문의 시 <strong className="text-white">현재 상황 기준</strong>으로<br />
                            가장 합리적인 옵션을 안내해드립니다.
                        </p>
                    </motion.div>

                    {/* Right Cards */}
                    <div className="grid gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl overflow-hidden hover:border-brand-gold/30 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl grayscale">💎</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-serif">정찰제 운영</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-300 font-light">
                                    <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                                    <span>주대, TC, 이용 시간 사전 100% 안내</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300 font-light">
                                    <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                                    <span>현장 추가 비용 절대 없음 (0원)</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="relative group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl overflow-hidden hover:border-brand-gold/30 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl grayscale">⚖️</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-serif">합리적 구조</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-300 font-light">
                                    <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                                    <span>요일/시간대별 최적 주대 안내</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300 font-light">
                                    <Check className="w-4 h-4 text-brand-gold flex-shrink-0" />
                                    <span>비용 대비 최고의 만족도 보장</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
