"use client";

import { useState } from "react";

const faqs = [
  {
    question: "I have no experience — can I still join?",
    answer:
      "Absolutely! Most of our members started with zero experience. Our classes are designed to be beginner-friendly, and with a max of 10 people per class, you get real attention from our coaches. We'll teach you everything from scratch.",
  },
  {
    question: "What does the MMA Fitness class involve?",
    answer:
      "MMA Fitness combines striking techniques (boxing, kickboxing, Muay Thai) with conditioning drills for a full-body workout. You'll learn real techniques while getting an incredible cardio and strength workout. No sparring required.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a free 30-minute trial class so you can experience V3 before committing to anything. No obligations, no pressure. Just show up and see if it's for you.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No contracts. Our memberships are month-to-month and you can cancel anytime. We believe if you love the training, you'll stay — and most people do.",
  },
  {
    question: "What should I bring to my first class?",
    answer:
      "Just wear comfortable workout clothes and bring water. We have gloves and wraps available for beginners. As you progress, we can help you pick out your own gear.",
  },
  {
    question: "Do you offer private training?",
    answer:
      "Yes! We offer private 1-on-1 sessions with our head coach Shane Mistretta, a professional MMA fighter. Private sessions are available as part of our Gold membership or as standalone packages.",
  },
  {
    question: "Do you have kids classes?",
    answer:
      "Yes! Our Kids MMA Program is designed for children and teaches discipline, fitness, and self-defense in a safe, fun environment. Classes are led by experienced coaches who specialize in working with young athletes.",
  },
  {
    question: "What makes V3 different from other gyms?",
    answer:
      "Three things: class size (max 10 people, so you actually get coached), price ($129/month for unlimited access to all disciplines), and our coaching (Shane Mistretta is an active professional fighter, not just a fitness instructor). You get real martial arts training at a fraction of what most gyms charge.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-[#111d35] to-[#0f1729]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="text-white font-semibold text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
