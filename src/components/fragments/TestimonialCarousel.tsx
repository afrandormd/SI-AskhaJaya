import * as React from "react";
import { Card, CardContent } from "@/components/elements/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/elements/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/elements/carousel";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO, PT Maju Bersama",
    content:
      "Produk ini sangat membantu meningkatkan produktivitas tim kami. Sangat direkomendasikan!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Siti Nurhaliza",
    role: "Marketing Manager, CV Sukses Mandiri",
    content:
      "Layanan pelanggan yang luar biasa dan produk berkualitas tinggi. Kami sangat puas!",
    avatar: "/avatar/woman-avatar.jpg?height=40&width=40",
  },
  {
    name: "Agus Purnomo",
    role: "CTO, Startup Inovasi",
    content:
      "Fitur-fiturnya lengkap dan mudah digunakan. Telah membantu kami mengoptimalkan proses bisnis.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Dewi Lestari",
    role: "Pemilik, Toko Online Berkah",
    content:
      "Sejak menggunakan produk ini, penjualan online kami meningkat signifikan. Terima kasih!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-notoSerif text-center mb-8">
          Apa Kata Pelanggan Kami
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <Avatar className="w-16 h-16 mb-4">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <blockquote className="text-center mb-4">
                        "{testimonial.content}"
                      </blockquote>
                      <cite className="not-italic font-medium">
                        {testimonial.name}
                      </cite>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
