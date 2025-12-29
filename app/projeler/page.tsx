// app/projeler/page.tsx
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link"; // Link eklendi
import { MapPin } from "lucide-react";

// Verileri burada tutuyoruz (İleride veritabanından gelecek)
const allProjects = [
  { id: 1, title: "Vadi İstanbul Konakları", loc: "Sarıyer, İstanbul", type: "Konut", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00" },
  { id: 2, title: "Organize Sanayi Depo", loc: "Sincan, Ankara", type: "Sanayi", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" },
  { id: 3, title: "Skyline Business Tower", loc: "Dubai", type: "Ticari", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e" },
  { id: 4, title: "Green Life Villaları", loc: "Bodrum, Muğla", type: "Konut", img: "https://images.unsplash.com/photo-1600596542815-2250651d60c0" },
  { id: 5, title: "Lojistik Merkez Üssü", loc: "Gebze, Kocaeli", type: "Lojistik", img: "https://images.unsplash.com/photo-1553413077-190dd305871c" },
  { id: 6, title: "Finans Merkezi Ofis", loc: "Ataşehir, İstanbul", type: "Ticari", img: "https://images.unsplash.com/photo-1497366216548-37526070297c" },
];

export default function ProjelerPage() {
  return (
    <main>
      <PageBanner title="PROJELERİMİZ" image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80" />

      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            // DÜZELTME: Div yerine Link kullanıldı ve projeye özel ID verildi
            <Link key={project.id} href={`/projeler/${project.id}`} className="group cursor-pointer block">
              <div className="relative h-72 overflow-hidden rounded-sm mb-4">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-yellow-600 text-white text-xs font-bold px-3 py-1">
                  {project.type}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <MapPin size={16} className="mr-1" />
                {project.loc}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}