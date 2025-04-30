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
            <section className="relative overflow-hidden py-20 md:py-28">
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
                                <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-6 rounded-xl">
                                    Solicitar demonstração
                                </Button>
                                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 px-6 py-6 rounded-xl">
                                    Saiba mais <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-900 relative overflow-hidden">
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
                                <Button variant="link" className="text-green-500 hover:text-green-400 p-0 flex items-center">
                                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources List Section */}
            <section className="py-20 relative overflow-hidden">
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

                            <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-6 rounded-xl">
                                Solicitar demonstração
                            </Button>
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
            <section className="py-20 bg-gray-900 relative overflow-hidden">
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

            {/* Features Highlight Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                                <p className="text-green-500 font-medium text-sm">DESTAQUES</p>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="text-white">Interface</span> <span className="text-green-500">intuitiva</span>{" "}
                                <span className="text-white">e produtiva</span>
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Trabalhe com uma interface amigável que simplifica a emissão de documentos de transporte, permitindo a
                                digitação em uma única tela e o uso de modelos pré-configurados.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">Digitação Simplificada</h3>
                                        <p className="text-gray-400">
                                            Preencha todos os dados necessários em uma única tela, sem precisar navegar entre diferentes
                                            módulos ou janelas.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FileCheck className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">Pré-cadastro de Tributação</h3>
                                        <p className="text-gray-400">
                                            Configure previamente a tributação com base na origem e destino, agilizando a emissão de
                                            documentos e reduzindo erros.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">Comunicação Automática</h3>
                                        <p className="text-gray-400">
                                            Envie automaticamente o XML e PDF dos documentos por email para os destinatários, melhorando a
                                            comunicação com clientes e parceiros.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-6 rounded-xl">
                                Solicitar demonstração
                            </Button>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                                <Image
                                    src="/placeholder.svg?height=600&width=600"
                                    alt="Conhecimento de Frete Interface"
                                    width={600}
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

            {/* FAQ Section */}
            <section className="py-20 bg-gray-900 relative overflow-hidden">
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                            <p className="text-green-500 font-medium text-sm">DÚVIDAS</p>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-white">Perguntas</span> <span className="text-green-500">frequentes</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Tire suas dúvidas sobre o módulo Conhecimento de Frete e descubra como ele pode ajudar sua empresa.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                {
                                    question: "O que é um CTe e para que serve?",
                                    answer:
                                        "O CTe (Conhecimento de Transporte Eletrônico) é um documento fiscal digital que substitui os documentos em papel relacionados ao transporte de cargas, como o conhecimento de transporte rodoviário de cargas. Ele serve para documentar uma prestação de serviço de transporte entre duas partes, contendo todas as informações necessárias exigidas pela legislação fiscal.",
                                },
                                {
                                    question: "Qual a diferença entre CTe e MDFe?",
                                    answer:
                                        "O CTe (Conhecimento de Transporte Eletrônico) é um documento que registra a prestação de serviço de transporte para cada operação. Já o MDFe (Manifesto Eletrônico de Documentos Fiscais) é um documento que vincula os documentos fiscais (como CTes e NFes) transportados em uma mesma viagem/veículo, servindo como manifesto de carga para o trânsito.",
                                },
                                {
                                    question: "O que é um CTe-OS e quando devo utilizá-lo?",
                                    answer:
                                        "O CTe-OS (Conhecimento de Transporte Eletrônico para Outros Serviços) é utilizado para documentar prestações de serviços de transporte diferentes do transporte de cargas, como locação de veículos, transporte de pessoas (fretamento de ônibus ou vans), transporte de valores, entre outros.",
                                },
                                {
                                    question: "Como funciona a carta de correção para CTe?",
                                    answer:
                                        "A Carta de Correção Eletrônica (CC-e) permite corrigir informações não relacionadas ao polo passivo, valores fiscais, dados do transporte ou da mercadoria transportada, como erros de digitação ou complemento de informações. O módulo Conhecimento de Frete possui uma funcionalidade específica para emitir CC-e de forma simples e em conformidade com a legislação.",
                                },
                                {
                                    question: "O sistema está de acordo com a legislação vigente?",
                                    answer:
                                        "Sim, o módulo Conhecimento de Frete da JCSx Sistemas é constantemente atualizado para atender às exigências da legislação fiscal vigente. Nossa equipe monitora as mudanças regulatórias e implementa as atualizações necessárias para garantir a conformidade dos documentos emitidos através do sistema.",
                                },
                            ].map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-gray-800 rounded-xl overflow-hidden"
                                >
                                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-900/50 text-white font-medium text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 py-4 text-gray-400">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <div className="mt-12 bg-black border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <HelpCircle className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Ainda tem dúvidas?</h3>
                                    <p className="text-gray-400">
                                        Nossa equipe está pronta para ajudar você a encontrar a melhor solução para sua empresa.
                                    </p>
                                </div>
                            </div>
                            <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-6 rounded-xl whitespace-nowrap">
                                Fale conosco
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden">
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
                            <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-6 rounded-xl text-lg">
                                Solicitar demonstração
                            </Button>
                            <Button
                                variant="outline"
                                className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 rounded-xl text-lg"
                            >
                                Fale com um consultor
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    )
}
