import { Utensils, Banana, Umbrella } from "lucide-react";
import { Card, CardContent } from "@/components/elements/card";

export default function CtaSection() {
  return (
    <section className="py-16 px-4 bg-[#FDF6E9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#8B4513] mb-8">
          Kenapa Pilih Askha Jaya?
        </h2>
        <p className="text-center mb-12 text-[#8B4513]">
          Temukan kelezatan kami di sini dan rasakan sendiri kenikmatannya!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 border-[#FFB800] bg-[#FFB800]/10">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#FFB800] flex items-center justify-center mb-4">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-[#8B4513] mb-2">
                Rasa Otentik
              </h3>
              <p className="text-center text-sm text-[#8B4513]">
                Cita rasa asli terejawantahkan yang tak terlupakan
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#FFB800] bg-[#FFB800]/10">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#FFB800] flex items-center justify-center mb-4">
                <Banana className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-[#8B4513] mb-2">
                Bahan Berkualitas
              </h3>
              <p className="text-center text-sm text-[#8B4513]">
                Bahan baku pilihan terbaik langsung dari alam Lampung
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#FFB800] bg-[#FFB800]/10">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#FFB800] flex items-center justify-center mb-4">
                <Umbrella className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-[#8B4513] mb-2">
                Cocok untuk Segala Momen
              </h3>
              <p className="text-center text-sm text-[#8B4513]">
                Camilan nikmat untuk segala jenis hingga hidangan spesial
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
