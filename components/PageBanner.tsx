interface PageBannerProps { title: string; image?: string; }

export default function PageBanner({ title, image }: PageBannerProps) {
  const bgImage = image || "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920";

  return (
    <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 shadow-black drop-shadow-lg uppercase">
          {title}
        </h1>
        <div className="w-24 h-2 bg-orange-600 mx-auto rounded-full"></div>
      </div>
    </div>
  );
}