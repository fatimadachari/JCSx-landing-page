import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calculator, ArrowRight, CheckCircle, HelpCircle, FileSpreadsheet, FileText } from "lucide-react"
import Header from "@/components/header"
import Footer from '@/components/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MaxContabilPage() {
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
                                <span className="text-white">Max</span> <span className="text-green-500">Contábil</span>
                            </h1>
                            <p className="text-gray-400 mb-8 text-lg">
                                Integração contábil completa para empresas organizadas que não necessitam lançar os registros novamente.
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
            <section className="py-20 bg-gray-900 relative overflow-hidden px-10">
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden px-10">
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
