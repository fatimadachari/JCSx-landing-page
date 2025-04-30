import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface FeatureCardProps {
  number: string
  title: string
  description: string
  variant?: "dark" | "green"
}

export default function FeatureCard({ number, title, description, variant = "dark" }: FeatureCardProps) {
  return (
    <div
      className={`
        rounded-2xl p-8 h-full flex flex-col
        ${variant === "green" ? "bg-green-500 text-black" : "bg-gray-900 border border-gray-800 text-white"}
      `}
    >
      <div className="mb-6">
        <span
          className={`
            text-4xl font-bold
            ${variant === "green" ? "text-black/80" : "text-green-500"}
          `}
        >
          {number}.
        </span>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className={`mb-6 flex-grow ${variant === "green" ? "text-black/80" : "text-gray-400"}`}>{description}</p>
    </div>
  )
}
