import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/elements/accordion";

const faqs = [
  {
    question: "Apakah bisa pesan secara online?",
    answer:
      "Produk Askha keripik bisa dipesan lewat aplikasi GO-FOOD untuk daerah Bandar Lampung",
  },
  {
    question: "Apakah bisa dikirim keluar kota?",
    answer:
      "Produk Askha keripik bisa dikirim keluar kota, silahkan langsung hubungi via WhatsApp",
  },
  {
    question: "How long will it take to receive my order?",
    answer:
      "Delivery times vary depending on your location and the shipping method chosen. Typically, orders are processed within 1-2 business days, and shipping can take 3-7 business days for standard delivery, or 1-3 business days for express shipping.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. If you're not satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange. Please note that items must be unused and in their original packaging.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on the destination. You can see the available shipping options and costs during the checkout process.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-gradient-to-t from-yellow-100 to-yellow-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
