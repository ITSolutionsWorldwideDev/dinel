import { HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  sec: {
    faqTitle: string;
    faqs?: FaqItem[];
  };
}

export default function FaqSection({ sec }: FaqProps) {
  const faqs = sec.faqs || [];
  const midpoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midpoint);
  const rightFaqs = faqs.slice(midpoint);

  const renderFaq = (faq: FaqItem, i: number) => (
    <div key={i} className="bg-[#f7fafa] p-6 rounded-2xl border border-[#1a4550]/10">
      <h3 className="text-base md:text-lg font-bold text-[#0d2b33] mb-2 flex items-center gap-3">
        <HelpCircle className="w-5 h-5 text-[#1a4550] shrink-0" />
        {faq.question}
      </h3>
      <p className="text-gray-600 text-sm pl-8 leading-relaxed">
        {faq.answer}
      </p>
    </div>
  );

  return (
    <section className="w-full">
      <div className="text-center mb-16">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1a4550]/10 text-[#1a4550] text-xs font-bold tracking-wider uppercase mb-3">
          ~ Got Questions? ~
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d2b33] tracking-tight">
          {sec.faqTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="space-y-4">
          {leftFaqs.map((faq, i) => renderFaq(faq, i))}
        </div>
        <div className="space-y-4">
          {rightFaqs.map((faq, i) => renderFaq(faq, i + midpoint))}
        </div>
      </div>
    </section>
  );
}