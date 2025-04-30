import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  value: string
  label: string
  description: string
}

export default function StatCard({ icon, value, label, description }: StatCardProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-16 h-16 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-white">{value}</span>
        </div>
        <h3 className="text-lg font-semibold text-green-500 mb-1">{label}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}
