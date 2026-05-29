"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoGallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#e8e8e8] cursor-zoom-in"
            onClick={() => { setIdx(i); setOpen(true); }}
          >
            <Image src={img} alt={`${title} — фото ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setOpen(false)}
          >
            <X size={32} />
          </button>

          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 text-white/80 hover:text-white p-2"
                onClick={(e) => { e.stopPropagation(); prev(); }}
              >
                <ChevronLeft size={40} />
              </button>
              <button
                className="absolute right-4 text-white/80 hover:text-white p-2"
                onClick={(e) => { e.stopPropagation(); next(); }}
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}

          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[idx]}
              alt={`${title} — фото ${idx + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 text-white/60 text-sm">
            {idx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
