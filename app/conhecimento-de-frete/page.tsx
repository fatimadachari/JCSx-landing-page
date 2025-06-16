import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Truck, ArrowRight, CheckCircle, HelpCircle, FileText, Mail, FileCheck } from 'lucide-react'
import Header from "@/components/header"
import Footer from '@/components/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ConhecimentoFretePage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 md:py-28 px-10">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-grid-white/[0.05]" />
                </div>

                {/* Green glow effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500 rounded-full blur-[150px] opacity-15"></div>
                <div className="absolute -bottom-80 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-20"></div>

                <div className="container relative z-10 mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-6">
                                <p className="text-green-500 font-medium text-sm flex items-center">
                                    MÓDULO ESPECIALIZADO <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full ml-2"></span>
                                </p>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                <span className="text-white">Conhecimento</span> <span className="text-green-500">de Frete</span>
                            </h1>
                            <p className="text-gray-400 mb-8 text-lg">
                                Soluções completas para agilizar o processo de emissão e organização dos CTes e MDFes de sua empresa.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://wa.me/555591489625" target="blank">
                                    <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-6 rounded-xl">
                                        Converse conosco
                                    </Button>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-900 relative overflow-hidden px-10">
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                            <p className="text-green-500 font-medium text-sm">FUNCIONALIDADES</p>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-white">Soluções</span> <span className="text-green-500">completas</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            O módulo Conhecimento de Frete oferece todas as ferramentas necessárias para a emissão e gestão eficiente
                            dos seus documentos de transporte.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FileText className="w-12 h-12" />,
                                title: "Emissão de CTe",
                                description:
                                    "Emita Conhecimentos de Transporte Eletrônico (CTe) com facilidade, atendendo a todas as exigências fiscais.",
                            },
                            {
                                icon: <Truck className="w-12 h-12" />,
                                title: "Geração de MDFe",
                                description:
                                    "Crie Manifestos de Documentos Fiscais Eletrônicos (MDFe) para cargas fracionadas com vários CTes.",
                            },
                            {
                                icon: <FileCheck className="w-12 h-12" />,
                                title: "Gestão de CTe-OS",
                                description:
                                    "Emita Conhecimentos de Transporte de Outros Serviços (CTe-OS) para serviços como locação de veículos.",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-black border border-gray-800 rounded-2xl p-8 transition-all hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col h-full"
                            >
                                <div className="mb-6 text-green-500">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400 mb-6 flex-grow">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources List Section */}
            <section className="py-20 relative overflow-hidden px-10">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                                <p className="text-green-500 font-medium text-sm">RECURSOS AVANÇADOS</p>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="text-white">Simplifique o</span> <span className="text-green-500">transporte</span>{" "}
                                <span className="text-white">da sua empresa</span>
                            </h2>
                            <p className="text-gray-400 mb-8">
                                O módulo Conhecimento de Frete foi desenvolvido para simplificar os processos de emissão e gestão de
                                documentos de transporte, atendendo às exigências fiscais e otimizando o fluxo de trabalho da sua
                                empresa.
                            </p>

                            <div className="grid grid-cols-1 gap-6 mb-8">
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Emissão de CTe (Conhecimento de Transporte Eletrônico)</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">MDFe (Manifesto de Fretes Eletrônico) para carga fracionada</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">CTe-OS (Conhecimento de Transporte de Outros Serviços)</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Digitação do documento em uma única tela</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Pré-cadastro de tributação baseado na origem e destino</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Emissão de carta de correção</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Envio do XML e PDF por email</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Geração de informações para o MDFe</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Emissão de CTe globalizado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                                <Image
                                    src="/placeholder.svg?height=600&width=800"
                                    alt="Conhecimento de Frete Dashboard"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-green-500/20 rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-green-500 rounded-full blur-[50px]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-900 relative overflow-hidden px-10">
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                            <p className="text-green-500 font-medium text-sm">BENEFÍCIOS</p>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-white">Por que escolher o</span>{" "}
                            <span className="text-green-500">Conhecimento de Frete</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Descubra como o módulo Conhecimento de Frete pode transformar a logística da sua empresa, trazendo mais
                            eficiência e precisão para os seus processos de transporte.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-black border border-gray-800 rounded-2xl p-8 transition-all hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                            <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                                <svg
                                    className="w-8 h-8 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Agilidade Operacional</h3>
                            <p className="text-gray-400">
                                Reduza o tempo de emissão de documentos fiscais de transporte com interface intuitiva e processos
                                otimizados.
                            </p>
                        </div>

                        <div className="bg-black border border-gray-800 rounded-2xl p-8 transition-all hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                            <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                                <svg
                                    className="w-8 h-8 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Conformidade Fiscal</h3>
                            <p className="text-gray-400">
                                Garanta a conformidade com a legislação fiscal, evitando multas e problemas com as autoridades
                                fiscalizadoras.
                            </p>
                        </div>

                        <div className="bg-black border border-gray-800 rounded-2xl p-8 transition-all hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                            <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                                <svg
                                    className="w-8 h-8 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Gestão Eficiente</h3>
                            <p className="text-gray-400">
                                Tenha controle total sobre os documentos de transporte da sua empresa, com acesso rápido às informações
                                e relatórios detalhados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden px-10">
                <div className="absolute inset-0 bg-grid-white/[0.02]" />
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-20"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-20"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            <span className="text-white">Simplifique a</span> <span className="text-green-500">logística</span>{" "}
                            <span className="text-white">da sua empresa</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Automatize a emissão de documentos de transporte, garanta a conformidade fiscal e otimize seus processos
                            com o módulo Conhecimento de Frete. Entre em contato conosco e descubra como nossa solução pode
                            transformar a gestão de transportes da sua empresa.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://wa.me/555591489625" target="blank">
                                <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-6 rounded-xl text-lg">
                                    Converse conosco
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
