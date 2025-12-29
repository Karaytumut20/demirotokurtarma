import PageBanner from "@/components/PageBanner";
import Image from "next/image";

// Temsili resimler
const galleryImages = [
    "https://images.unsplash.com/photo-1599408169542-d20516937e5c?q=80&w=800",
    "https://images.unsplash.com/photo-1626322306236-4076263df945?q=80&w=800",
    "https://images.unsplash.com/photo-1562920612-4299b6424368?q=80&w=800",
    "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800",
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800",
    "https://images.unsplash.com/photo-1632823469850-24d621b253db?q=80&w=800"
];

export default function GaleriPage() {
  return (
    <main className="bg-white">
      <PageBanner
        title="GALERİ"
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920"
      />

      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, idx) => (
                <div key={idx} className="relative h-64 group overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src={src}
                        alt={`Galeri Resim ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold tracking-widest border border-white px-4 py-2">İNCELE</span>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </main>
  );
}