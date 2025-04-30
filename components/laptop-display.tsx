"use client"

import { useState, useEffect } from "react"

export default function LaptopDisplay() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      {/* Main laptop container */}
      <div className="relative laptop-container">
        {/* Laptop body */}
        <div className="relative mx-auto w-full max-w-[850px]">
          {/* Green glowing background */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-green-400/60 to-green-950 blur-sm"></div>

          {/* Laptop frame */}
          <div className="relative z-10 rounded-[30px] bg-black border-2 border-gray-800 shadow-2xl p-8">
           

            {/* Screen bezel */}
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              {/* Screen with content */}
              <div className="relative w-full pt-[60%] bg-gradient-to-r from-black to-gray-900 border border-gray-800 rounded-lg">
                {/* Green grid background with animation */}
                <div className="absolute inset-0 bg-grid-white/[0.02]"></div>

                {/* Dashboard screen */}
                <div
                  className={`absolute inset-0 p-4 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                >
                  {/* App header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <h2 className="text-white font-medium text-sm md:text-base">Dashboard ERP Max</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-500 text-xs">JT</span>
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Stats cards */}
                    <div className="col-span-2 grid grid-cols-3 gap-3">
                      {["Vendas", "Estoque", "Pedidos"].map((title, i) => (
                        <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                          <p className="text-gray-400 text-xs mb-1">{title}</p>
                          <p className="text-white font-bold text-sm md:text-lg">
                            {i === 0 ? "R$ 45.659,00" : i === 1 ? "1.230 itens" : "23 novos"}
                          </p>
                          <div className="flex items-center mt-1">
                            <div className={`text-xs ${i === 2 ? "text-red-400" : "text-green-400"}`}>
                              {i === 2 ? "-5%" : "+12%"}
                            </div>
                            <div className="text-gray-400 text-xs ml-1">vs mês anterior</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mini chart */}
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-2">Vendas do Mês</p>
                      <div className="flex items-end h-10 space-x-1">
                        {[40, 65, 35, 80, 55, 70, 45, 60].map((height, i) => (
                          <div
                            key={i}
                            className="w-full bg-green-500/70 rounded-sm"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Table */}
                    <div className="col-span-3 bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-white text-xs font-medium">Últimas Transações</p>
                      </div>
                      <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center text-xs border-b border-gray-700 pb-2"
                          >
                            <div className="flex items-center">
                              <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center mr-2">
                                <span className="text-green-500 text-[8px]">#{i + 1}</span>
                              </div>
                              <span className="text-gray-300">Cliente {i + 1}</span>
                            </div>
                            <div>
                              <span className="text-white">R$ {(i + 1) * 1200},00</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loading state */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-green-500 font-semibold text-lg animate-pulse">Carregando ERP Max...</span>
                    <div className="mt-3 w-40 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 animate-[leftToRight_1.5s_ease-in-out_infinite]"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reflective surface / laptop bottom */}
      <div className="hidden sm:block w-[70%] h-[30px] mx-auto bg-gradient-to-b from-gray-900 to-black rounded-b-[100px]"></div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10 z-0"></div>
      <div className="absolute -bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full blur-[60px] opacity-10 z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-green-500/10 rounded-full z-0"></div>
    </div>
  )
}
