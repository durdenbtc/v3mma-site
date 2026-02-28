import Image from "next/image";

const photos = [
  { src: "/images/01bfa571c65b.jpg", alt: "V3 MMA gym interior with heavy bags and blue mats" },
  { src: "/images/2a03328ffe45.jpg", alt: "Members sparring during boxing class" },
  { src: "/images/8835996ec94a.jpg", alt: "Group training session at V3 MMA" },
  { src: "/images/a9ace73f1c66.jpg", alt: "Multiple pairs training on the mats" },
  { src: "/images/def064c56ca4.jpg", alt: "Members practicing striking techniques" },
  { src: "/images/6a0ea4d4aa1a.jpg", alt: "Wide view of V3 MMA training floor" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gradient-to-b from-[#0f1729] to-[#111d35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Inside the Gym
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Blue mats, heavy bags, and a crew that works hard. Step inside V3 MMA in Port St. Lucie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
