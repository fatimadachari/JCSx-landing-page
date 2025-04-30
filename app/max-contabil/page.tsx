import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calculator, ArrowRight, CheckCircle, HelpCircle, FileSpreadsheet, FileText } from "lucide-react"
import Header from "@/components/header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MaxContabilPage() {
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
                                <span className="text-white">Max</span> <span className="text-green-500">Contábil</span>
                            </h1>
                            <p className="text-gray-400 mb-8 text-lg">
                                Integração contábil completa para empresas organizadas que não necessitam lançar os registros novamente.
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
                            <span className="text-white">Recursos</span> <span className="text-green-500">completos</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            O Max Contábil oferece uma solução integrada e completa para a gestão contábil da sua empresa, com
                            recursos que facilitam o dia a dia do seu negócio.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Calculator className="w-12 h-12" />,
                                title: "Plano de Contas Configurável",
                                description:
                                    "Personalize seu plano de contas de acordo com as necessidades específicas da sua empresa e do seu segmento de atuação.",
                            },
                            {
                                icon: <FileText className="w-12 h-12" />,
                                title: "Lançamentos Configuráveis",
                                description:
                                    "Configure seus lançamentos contábeis com múltiplas partidas, permitindo maior flexibilidade e controle das suas operações.",
                            },
                            {
                                icon: <FileSpreadsheet className="w-12 h-12" />,
                                title: "Relatórios Completos",
                                description:
                                    "Gere relatórios detalhados como Razão, Balancete, Diário, DRE, DOAR e DMPL com apenas alguns cliques.",
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
                                <span className="text-white">Todas as</span> <span className="text-green-500">ferramentas</span>{" "}
                                <span className="text-white">que você precisa</span>
                            </h2>
                            <p className="text-gray-400 mb-8">
                                O Max Contábil foi desenvolvido para oferecer todas as ferramentas necessárias para a gestão contábil
                                eficiente da sua empresa, atendendo às exigências legais e proporcionando informações precisas para a
                                tomada de decisão.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Lançamentos Configuráveis</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Múltiplas Partidas</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Demonstração de Resultado</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Lançamentos Retroativos</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Emissão Livro Caixa</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Razão, Balancete e Diário</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Controle Patrimonial</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Emissão DOAR</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Emissão DMPL</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">Geração SPED Contábil</p>
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
                                    alt="Max Contábil Dashboard"
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
                            <span className="text-green-500">Max Contábil</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Descubra como o Max Contábil pode transformar a gestão contábil da sua empresa, trazendo mais eficiência e
                            precisão para os seus processos.
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
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Aumento de Produtividade</h3>
                            <p className="text-gray-400">
                                Com a integração automática dos lançamentos, sua equipe economiza tempo e reduz erros, aumentando
                                significativamente a produtividade.
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
                            <h3 className="text-xl font-bold mb-3 text-white">Conformidade Legal</h3>
                            <p className="text-gray-400">
                                Esteja sempre em conformidade com as exigências legais e fiscais, com a geração automática do SPED
                                Contábil e demais obrigações.
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
                                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Decisões Estratégicas</h3>
                            <p className="text-gray-400">
                                Tenha acesso a relatórios detalhados e análises financeiras que auxiliam na tomada de decisões
                                estratégicas para o crescimento do seu negócio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                                <p className="text-green-500 font-medium text-sm">INTEGRAÇÃO</p>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="text-white">Integração</span> <span className="text-green-500">completa</span>
                            </h2>
                            <p className="text-gray-400 mb-8">
                                O Max Contábil se integra perfeitamente com os demais módulos do sistema JCSx, garantindo que você não
                                necessite lançar os registros novamente. Todos os dados são sincronizados automaticamente,
                                proporcionando maior agilidade e precisão para sua gestão contábil.
                            </p>

                            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
                                <h3 className="text-xl font-bold mb-4 text-white">Módulos integrados:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3 bg-black/50 p-3 rounded-lg">
                                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">Max Agrícola</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-black/50 p-3 rounded-lg">
                                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">Max Controle</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-black/50 p-3 rounded-lg">
                                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">Conhecimento de Frete</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-black/50 p-3 rounded-lg">
                                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">Financeiro</span>
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
                                    alt="Max Contábil Integration"
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02]" />
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-20"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-20"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            <span className="text-white">Simplifique sua</span> <span className="text-green-500">contabilidade</span>{" "}
                            <span className="text-white">com o Max Contábil</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Automatize seus processos contábeis, elimine a redigitação e tenha acesso a informações precisas para a
                            tomada de decisão. Entre em contato conosco e descubra como o Max Contábil pode transformar a gestão
                            contábil da sua empresa.
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
            <footer className="bg-black border-t border-gray-800 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div>
                            <div className="flex items-center mb-6">
                                <span className="text-green-500 font-bold text-2xl">JCSx</span>
                                <span className="ml-1 text-white">SISTEMAS</span>
                            </div>
                            <p className="text-gray-400 mb-6">Soluções completas para automação comercial desde 2010.</p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-black transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-black transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-black transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-6">Soluções</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Max Agrícola
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Max Contábil
                                    </a>
                                </li>
                                <li>
                                    <a href="/modulos/max-controle" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Max Controle
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Suporte Técnico
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-6">Empresa</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Sobre nós
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Nossa história
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Equipe
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Carreiras
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-6">Contato</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Suporte
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Vendas
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        Demonstração
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 JCSx Sistemas. Todos os direitos reservados.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-green-500 text-sm">
                                Termos de Uso
                            </a>
                            <a href="#" className="text-gray-500 hover:text-green-500 text-sm">
                                Política de Privacidade
                            </a>
                            <a href="#" className="text-gray-500 hover:text-green-500 text-sm">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
