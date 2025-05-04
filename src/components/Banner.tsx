"use client";

import { fetcher } from "@/utils/fetcher";
import { useState, useEffect } from "react";
import useSWR from "swr";

interface ImageFile {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  thumbnailURL: string | null;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
}

interface BannerImage {
  id: string;
  title: string;
  description: string;
  image: ImageFile;
}

interface BannerData {
  id: number;
  images: BannerImage[];
  updatedAt: string;
  createdAt: string;
  globalType: string;
}

const Banner = () => {
  const { data, error, isLoading } = useSWR<BannerData>(
    "/api/globals/banner?depth=1",
    fetcher
  );
  const [activeSlide, setActiveSlide] = useState(0);

  const banners = data?.images || [];

  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  if (isLoading) {
    return (
      <div className="w-full h-[300px] bg-gray-100 animate-pulse flex items-center justify-center">
        <div className="text-gray-500">Loading banner...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[200px] bg-red-50 flex items-center justify-center">
        <div className="text-red-500">Failed to load banner</div>
      </div>
    );
  }

  if (!data || !banners || banners.length === 0) {
    return null;
  }

  const apiBaseUrl =
    typeof import.meta.env !== "undefined"
      ? import.meta.env.VITE_API_BACKEND_URL
      : process.env.NEXT_PUBLIC_API_BACKEND_URL || "";

  return (
    <section
      aria-label="Promotional banners"
      className="relative w-full h-[500px] overflow-hidden"
    >
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${apiBaseUrl}${banner.image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={banner.image.alt || banner.title}
        >
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {banner.title}
            </h2>
            <p className="text-xl text-white mb-8">{banner.description}</p>
          </div>
        </div>
      ))}

      {banners.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              className={`h-2 w-8 rounded-full transition-all ${
                index === activeSlide ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Banner;
