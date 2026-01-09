export default function Footer() {
    return (
        <footer className="py-24 bg-brand-obsidian border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <div>
                    <h2 className="text-4xl font-serif text-white mb-6">GANGNAM DALTO</h2>
                    <div className="space-y-4 text-gray-500 font-light text-sm max-w-sm">
                        <p>
                            강남 달토는 화려한 말보다 솔직한 안내를 우선합니다.<br />
                            편하게 한 번 다녀갈 수 있는 곳, 그리고 다음에 다시 찾게 되는 곳.
                        </p>
                        <p>
                            하이퍼블릭 가라오케 | 24시간 영업 | 연중무휴
                        </p>
                    </div>
                </div>

                <div className="md:text-right text-gray-600 text-xs tracking-widest uppercase space-y-2">
                    <div className="flex flex-col md:flex-row gap-4 md:justify-end mb-4 text-sm font-medium text-gray-400">
                        <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
                        <a href="#system" className="hover:text-brand-gold transition-colors">System</a>
                        <a href="#pricing" className="hover:text-brand-gold transition-colors">Pricing</a>
                        <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
                    </div>
                    <p> Gangnam-gu, Seoul, Republic of Korea</p>
                    <p>&copy; {new Date().getFullYear()} DALTO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
