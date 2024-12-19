import { Card, CardContent } from "@/components/elements/card";
import Image from "next/image";

export default function ProductSection() {
  const products = [
    {
      name: "Keripik Pisang Karamel Madu",
      price: "27.500",
      image: "/products/gambar2.JPG?height=200&width=200",
    },
    {
      name: "Pisang Muli Oven",
      price: "25.000",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Keripik Sale Pisang",
      price: "25.000",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Keripik Nangka Oven",
      price: "27.000",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#FDF6E9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#8B4513] mb-4">
          Produk Pilihan
        </h2>
        <p className="text-center mb-12 text-[#8B4513]">
          Produk premium rekomendasi dari kami yang wajib kamu coba!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-[#8B4513] text-center mb-2">
                  {product.name}
                </h3>
                <p className="text-center text-[#8B4513] font-semibold">
                  Rp. {product.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
