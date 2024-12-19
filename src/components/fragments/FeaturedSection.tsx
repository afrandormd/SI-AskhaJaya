import React from "react";
import ProductList from "./ProductList";

export default function FeaturedSection() {
  return (
    <>
      <section className="container mx-auto my-4 px-4">
        <h1 className="font-notoSerif text-3xl font-bold text-center py-4">
          Featured Products
        </h1>
        {/* featured card */}
        <ProductList />
      </section>
    </>
  );
}
