interface PageBannerProps { title: string; image?: string; subtitle?: string; }

export default function PageBanner({ title, image, subtitle }: PageBannerProps) {
  const bgImage = image || "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1920"; // Dark car photo

  return (
    <div className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-cover bg-center fixed-bg" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-[#020617]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 shadow-black drop-shadow-2xl uppercase">
          {title}
        </h1>
        {subtitle && <p className="text-lg text-blue-200/80 mb-0 font-light max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
}