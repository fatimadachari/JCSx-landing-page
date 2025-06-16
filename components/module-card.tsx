import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ModuleCardProps {
  icon: ReactNode
  title: string
  description: string
  link: string
}

export function ModuleCard({ icon, title, description, link }: ModuleCardProps) {
  return (
    <div className="bg-black border border-gray-800 rounded-2xl p-8 transition-all hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col h-full">
      <div className="mb-6 text-green-500">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{description}</p>
      {/*<Link href={link} className="inline-flex items-center text-green-500 font-medium hover:text-green-400">
        Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
      </Link>*/}
    </div>
  )
}
