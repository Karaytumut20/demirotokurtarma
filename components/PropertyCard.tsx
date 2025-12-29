// components/PropertyCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Move, MapPin } from 'lucide-react';

interface PropertyProps {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Satılık' | 'Kiralık';
}

export default function PropertyCard({ property }: { property: PropertyProps }) {
  // Fiyat formatlama (örn: 1.250.000 ₺)
  const formattedPrice = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link href={`/ilan/${property.id}`} className="group block bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Resim Alanı */}
      <div className="relative h-64 w-full overflow-hidden">
        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white rounded-full z-10 ${property.type === 'Satılık' ? 'bg-blue-600' : 'bg-green-600'}`}>
          {property.type}
        </span>
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* İçerik Alanı */}
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={16} className="mr-1" />
          {property.location}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{property.title}</h3>
        <div className="text-2xl font-bold text-blue-600 mb-4">{formattedPrice}</div>

        <div className="flex justify-between items-center text-gray-600 border-t pt-4">
          <div className="flex items-center gap-1">
            <Bed size={18} />
            <span className="text-sm font-medium">{property.beds} Oda</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={18} />
            <span className="text-sm font-medium">{property.baths} Banyo</span>
          </div>
          <div className="flex items-center gap-1">
            <Move size={18} />
            <span className="text-sm font-medium">{property.sqft} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
}