import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800 py-12 px-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo e descrição */}
                    <div>
                        <div className="flex items-center mb-6">
                            <span className="text-green-500 font-bold text-2xl">JCSx</span>
                            <span className="ml-1 text-white">SISTEMAS</span>
                        </div>
                        <p className="text-gray-400 mb-6">Soluções completas para automação comercial desde 2013.</p>
                        
                    </div>

                    {/* Soluções */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Sistemas</h3>
                        <ul className="space-y-4">
                            {["Max Agrícola", "Max Contábil", "Max Controle", "Conhecimento de Frete"].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Empresa</h3>
                        <ul className="space-y-4">
                            {["Nossas soluções", "Nossa história", "Prodan Software"].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Contato</h3>
                        <ul className="space-y-4">
                            {["Suporte", "Vendas"].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Rodapé inferior */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 JCSx Sistemas. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
