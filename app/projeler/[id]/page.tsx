// app/projeler/[id]/page.tsx
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import { MapPin, Bed, Bath, Move, CheckCircle2, Phone } from "lucide-react";

// Verileri burada simüle ediyoruz (Detay sayfası için)
const projectsData = [
  { 
    id: "1", 
    title: "Vadi İstanbul Konakları", 
    location: "Sarıyer, İstanbul", 
    price: "15.000.000 ₺ Başlayan Fiyatlarla",
    desc: "İstanbul'un en prestijli konumunda, orman manzaralı lüks yaşam.",
    specs: { beds: 4, baths: 3, area: 240 },
    features: ["7/24 Güvenlik", "Kapalı Havuz", "Fitness", "Otopark"],
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"]
  },
  // Diğer projeler buraya eklenebilir...
];

// Next.js 15/16'da params Promise olarak gelir
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find(p => p.id === resolvedParams.id) || projectsData[0]; // Bulamazsa ilkini göster (demo için)

  return (
    <main>
      <PageBanner title={project.title.toUpperCase()} image={project.images[0]} />
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sol: Detaylar */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{project.title}</h2>
            <div className="flex items-center text-gray-500 mb-6">
              <MapPin size={18} className="mr-1 text-yellow-600" />
              {project.location}
            </div>
            
            <div className="flex gap-6 border-y border-gray-200 py-6 mb-8">
               <div className="flex items-center gap-2"><Move className="text-yellow-600"/> <b>{project.specs.area} m²</b></div>
               <div className="flex items-center gap-2"><Bed className="text-yellow-600"/> <b>{project.specs.beds} Oda</b></div>
               <div className="flex items-center gap-2"><Bath className="text-yellow-600"/> <b>{project.specs.baths} Banyo</b></div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Proje Hakkında</h3>
            <p className="text-gray-600 leading-relaxed mb-8">{project.desc}</p>
          </div>

          {/* Sağ: İletişim Kutusu */}
          <div className="w-full lg:w-1/3">
            <div className="bg-slate-900 text-white p-8 rounded-sm sticky top-32">
              <p className="text-gray-400 text-sm uppercase">Fiyat</p>
              <div className="text-2xl font-bold text-yellow-500 mb-6">{project.price}</div>
              <button className="w-full bg-yellow-600 py-3 font-bold rounded-sm hover:bg-yellow-700 transition-colors">BİLGİ AL</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}