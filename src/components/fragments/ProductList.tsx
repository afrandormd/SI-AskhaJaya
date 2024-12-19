import React from "react";
import ProductCard from "../elements/ProductCard";

const ProductList: React.FC = () => {
  const products = [
    {
      id: 1,
      image: "/products/gambar3.JPG", // Path relatif dari folder public
      name: "Singkong Keju",
      price: "Rp. 35.000",
    },
    {
      id: 2,
      image: "/products/gambar2.JPG",
      name: "Pisang Cokelat",
      price: "Rp. 10.000",
    },
    {
      id: 3,
      image: "/products/gambar3.JPG",
      name: "Pisang Ucok",
      price: "Rp. 25.000",
    },
    {
      id: 4,
      image: "/products/gambar3.JPG",
      name: "Pisang Jabrik",
      price: "Rp. 45.000",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
