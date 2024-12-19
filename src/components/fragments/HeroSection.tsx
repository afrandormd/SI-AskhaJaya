import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/elements/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-yellow-50">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image - Top on mobile, Right on tablet and desktop */}
          <div className="w-full md:w-1/2 md:order-2">
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
              <Image
                src="/gambar-toko.png"
                alt="E-Catalog Products Showcase"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Greeting and CTA - Bottom on mobile, Left on tablet and desktop */}
          <div className="w-full md:w-1/2 md:order-1 text-center md:text-left">
            <div className="mb-24">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
                Askha Jaya
              </h1>
              <p>Lampung Surganya Pisang</p>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Discover our amazing products and find exactly what you need.
            </p>
            <Button asChild size="lg">
              <Link href="/products">See Our Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
