import { motion } from 'framer-motion';
import { Phone, MessageSquare, ArrowRight, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section className="relative min-h-[80vh] py-20 md:py-32 flex items-center bg-brand-obsidian overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/contact-bg.jpg"
                    alt="Reception Lounge"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-brand-gold font-mono text-sm tracking-widest uppercase mb-4 block">Reservation</span>
                        <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-none">
                            Start Your<br />
                            <span className="text-gray-500">Night Out.</span>
                        </h2>
                        <p className="text-xl text-gray-300 font-light max-w-lg leading-relaxed mb-12">
                            망설이지 말고 편하게 문의주세요.<br />
                            <span className="text-white">가장 확실한 정보</span>로 모시겠습니다.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="w-[1px] h-12 bg-white/20" />
                                <div>
                                    <p className="text-brand-gold text-sm uppercase tracking-wider">Step 01</p>
                                    <p className="text-white text-lg">방문 인원 / 시간 / 스타일 전달</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-[1px] h-12 bg-white/20" />
                                <div>
                                    <p className="text-brand-gold text-sm uppercase tracking-wider">Step 02</p>
                                    <p className="text-white text-lg">실시간 상황 및 정확한 견적 안내</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 flex flex-col gap-4 items-start md:items-end"
                    >
                        <a
                            href="tel:01023033778"
                            className="group w-full md:w-auto min-w-[300px] px-8 py-6 bg-white text-black hover:bg-brand-gold transition-colors duration-300 flex justify-between items-center"
                        >
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6" />
                                <div className="flex flex-col text-left">
                                    <span className="text-xs uppercase tracking-widest opacity-60">Call Us</span>
                                    <span className="text-xl font-bold font-serif">전화 문의하기</span>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </a>

                        <a
                            href="sms:01023033778"
                            className="group w-full md:w-auto min-w-[300px] px-8 py-6 border border-white/20 hover:border-white/40 bg-black/50 backdrop-blur-md text-white transition-all duration-300 flex justify-between items-center"
                        >
                            <div className="flex items-center gap-4">
                                <MessageSquare className="w-6 h-6" />
                                <div className="flex flex-col text-left">
                                    <span className="text-xs uppercase tracking-widest opacity-60">Message Us</span>
                                    <span className="text-xl font-bold font-serif">문자 문의하기</span>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </a>

                        <a
                            href="https://t.me/hscompanyshs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full md:w-auto min-w-[300px] px-8 py-6 border border-white/20 hover:border-brand-gold bg-black/50 backdrop-blur-md text-white hover:text-brand-gold transition-all duration-300 flex justify-between items-center"
                        >
                            <div className="flex items-center gap-4">
                                <Send className="w-6 h-6" />
                                <div className="flex flex-col text-left">
                                    <span className="text-xs uppercase tracking-widest opacity-60">Telegram</span>
                                    <span className="text-xl font-bold font-serif">텔레그램 문의</span>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </a>

                        <p className="text-gray-500 text-sm mt-4 text-right">
                            * 부재 시 문자를 남겨주시면 빠르게 확인 후 연락드립니다.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
