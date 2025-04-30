"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "O sistema da JCSx Sistemas revolucionou a forma como gerenciamos nossa empresa agrícola. A eficiência aumentou significativamente.",
    author: "João Silva",
    role: "Diretor, Agro Solutions",
  },
  {
    id: 2,
    content:
      "A integração contábil do Max Contábil nos economiza horas de trabalho todos os meses. Recomendo fortemente.",
    author: "Maria Oliveira",
    role: "Contadora, Contabilidade Express",
  },
  {
    id: 3,
    content:
      "O módulo de Conhecimento de Frete simplificou completamente nossa logística. O suporte técnico é excepcional.",
    author: "Carlos Santos",
    role: "Gerente de Logística, Transportes BR",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12">
        <div className="text-green-500 mb-6">
          <Quote className="w-12 h-12" />
        </div>
        <p className="text-white text-xl md:text-2xl mb-8 italic">"{testimonials[currentIndex].content}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 font-bold">
            {testimonials[currentIndex].author.charAt(0)}
          </div>
          <div className="ml-4">
            <h4 className="font-bold text-white">{testimonials[currentIndex].author}</h4>
            <p className="text-gray-400">{testimonials[currentIndex].role}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6 space-x-2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-green-500 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-green-500 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-green-500" : "bg-gray-700"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
