"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black/50 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-green-500 font-bold text-2xl">JCSx</span>
            <span className="ml-1 text-white">SISTEMAS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-green-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/solucoes" className="text-gray-400 hover:text-green-500 transition-colors font-medium">
              Soluções
            </Link>
            <Link href="/empresa" className="text-gray-400 hover:text-green-500 transition-colors font-medium">
              Empresa
            </Link>
            <Link href="/contato" className="text-gray-400 hover:text-green-500 transition-colors font-medium">
              Contato
            </Link>
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
            >
              Ajuda
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-green-500 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/solucoes"
              className="block text-gray-400 hover:text-green-500 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluções
            </Link>
            <Link
              href="/empresa"
              className="block text-gray-400 hover:text-green-500 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Empresa
            </Link>
            <Link
              href="/contato"
              className="block text-gray-400 hover:text-green-500 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Button
              variant="outline"
              className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Ajuda
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
