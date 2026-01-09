import { motion } from 'framer-motion';
import { Phone, MapPin, Wine, Users, Clock } from 'lucide-react';

const steps = [
    {
        icon: Phone,
        title: "1. 문의 및 예약",
        desc: "인원, 시간, 선호 스타일 전달"
    },
    {
        icon: MapPin,
        title: "2. 룸 안내",
        desc: "대기 최소화, 바로 입실 진행"
    },
    {
        icon: Wine,
        title: "3. 주류/시스템",
        desc: "정찰제 주대 및 구조 안내"
    },
    {
        icon: Users,
        title: "4. 초이스",
        desc: "성향 맞춤 추천 및 진행"
    },
    {
        icon: Clock,
        title: "5. 마무리",
        desc: "강요 없는 연장 선택"
    }
];

export default function System() {
    return (
        <section className="relative py-32 bg-brand-charcoal overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/system-bg.png"
                    alt="Corridor"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/80" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 sticky top-32"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">SYSTEM</h2>
                        <div className="w-16 h-1 bg-brand-gold mb-8" />
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            강남 달토의 시스템은 복잡하지 않습니다. 처음 방문하시는 분들도 자연스럽게 이용하실 수 있도록 <span className="text-white font-medium">체계적인 프로세스</span>를 갖추고 있습니다.
                        </p>
                        <div className="hidden md:block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                            <p className="text-brand-gold text-sm font-medium mb-2">Notice</p>
                            <p className="text-gray-400 text-sm">
                                달리는토끼 시스템은 초보자도 쉽게 이해할 수 있는 투명한 구조입니다.
                            </p>
                        </div>
                    </motion.div>

                    <div className="w-full md:w-2/3 grid gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex items-center gap-6 p-6 rounded-xl bg-black/40 border border-white/5 hover:border-brand-gold/50 transition-colors duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold text-brand-gold group-hover:text-black transition-all duration-300">
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">{step.title}</h3>
                                    <p className="text-gray-400 font-light">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
