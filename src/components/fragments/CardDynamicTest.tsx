"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/elements/card";

const ProductDisplay = () => {
  // Data produk (biasanya dari API/database)
  const products = [
    {
      id: 1,
      name: "Sepatu Sport",
      image: "https://www.pngmart.com/files/6/Shoe-PNG-Picture.png",
      description: "Sepatu olahraga berkualitas tinggi",
      price: 599000,
    },
    {
      id: 2,
      name: "Tas Ransel",
      image:
        "https://i.pinimg.com/originals/4c/ab/54/4cab54c47764c58d03e1eed00f9ba2d7.png",
      description: "Tas ransel untuk kegiatan sehari-hari",
      price: 299000,
    },
    {
      id: 3,
      name: "Jaket Denim",
      image: "https://www.pngarts.com/files/1/Jeans-Jacket-PNG-Image.png",
      description: "Jaket denim stylish dan nyaman",
      price: 450000,
    },
  ];

  // State untuk produk yang aktif
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Product Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Detail Produk */}
        <Card className="p-6">
          <img
            src={activeProduct.image}
            alt={activeProduct.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <CardContent className="mt-4">
            <h2 className="text-2xl font-notoSerif font-bold">
              {activeProduct.name}
            </h2>
            <p className="text-gray-600 mt-2">{activeProduct.description}</p>
            <p className="text-xl font-semibold mt-4">
              Rp {activeProduct.price.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        {/* Thumbnail List */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className={`cursor-pointer p-4 rounded-lg border transition-all ${
                activeProduct.id === product.id
                  ? "border-secondary"
                  : "border-gray-200 hover:border-secondary"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <h3 className="mt-2 font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">
                Rp {product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
