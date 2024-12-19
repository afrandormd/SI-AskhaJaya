// import ProductList from "@/components/fragments/ProductList";
// import CardDynamicTest from "@/components/fragments/CardDynamicTest";
import FAQSection from "@/components/fragments/FaqSection";
import FeaturedSection from "@/components/fragments/FeaturedSection";
import HeroSection from "@/components/fragments/HeroSection";
import React from "react";
import TestimonialCarousel from "../components/fragments/TestimonialCarousel";
import CtaSection from "@/components/fragments/CtaSection";
import ProductSection from "@/components/elements/ProductCard";

export default function Home() {
  return (
    <>
      {/* <ProductList /> */}
      {/* <CardDynamicTest /> */}
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Section */}
      <ProductSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Testimonial Section */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
