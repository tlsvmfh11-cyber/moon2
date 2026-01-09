import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section className="relative py-20 md:py-32 bg-brand-obsidian overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section 1: Image Left, Text Right */}
                <div className="flex flex-col md:flex-row items-center gap-16 mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                            <img
                                src="/intro-detail.png"
                                alt="Premium Service"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-1/2 space-y-8"
                    >
                        <div>
                            <span className="text-brand-purple-light font-mono text-sm tracking-wider uppercase">Identity</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
                                강남 달토는<br />
                                <span className="text-gradient-gold">어떤 곳인가요?</span>
                            </h2>
                            <div className="w-12 h-0.5 bg-brand-gold/50" />
                        </div>

                        <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
                            <p>
                                강남에서 술자리를 찾다 보면 광고는 많은데 실제 가격, 주대, 시스템은 잘 나오지 않는 경우가 많습니다.
                            </p>
                            <p>
                                강남 달토는 이런 불편함을 줄이기 위해 <strong className="text-white font-medium">처음 문의 단계부터 이용 방식과 비용 구조를 명확히 안내</strong>하는 것을 원칙으로 합니다.
                            </p>
                            <p>
                                ‘달리는토끼’, ‘달토’라는 이름으로 불리며 하이퍼블릭 가라오케 특유의 높은 출근율과 24시 영업, 선택의 폭이 넓은 라인업을 동시에 갖춘 곳입니다.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Text Left, Promise Right */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                            <img
                                src="/intro-promise.png"
                                alt="Private Service"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-1/2 space-y-8 md:text-right flex flex-col items-end"
                    >
                        <div>
                            <span className="text-brand-purple-light font-mono text-sm tracking-wider uppercase">Promise</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
                                걱정부터<br />
                                <span className="text-gradient-gold">줄여드리겠습니다</span>
                            </h2>
                            <div className="w-12 h-0.5 bg-brand-gold/50 ml-auto" />
                        </div>

                        <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
                            <p>
                                강남 달토는 이런 걱정을 줄이는 것부터 시작합니다.
                                <br />확실하지 않은 내용은 말하지 않고, 상황이 맞지 않으면 무리하게 진행하지 않습니다.
                            </p>
                            <p className="font-medium text-white text-xl pt-4">
                                "한 번의 방문보다 다음에 또 찾을 수 있는<br />술자리가 되는 것이 목표입니다."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
