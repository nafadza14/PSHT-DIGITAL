
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-6xl font-black tracking-tighter mb-20 text-center">FAQ</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 last:border-0">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex justify-between items-center py-8 text-left group"
              >
                <span className="text-2xl font-bold group-hover:text-red-600 transition-colors">{faq.q}</span>
                <div className={`transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`}>
                  {openIdx === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === i ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                <p className="text-xl text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold">Tanya Pertanyaan Lain</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
