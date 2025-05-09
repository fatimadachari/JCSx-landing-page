import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, LineChart, BarChart3, PieChart, ArrowRight, CheckCircle, HelpCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from '@/components/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MaxControlePage() {
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

                <div className="container relative z-10 mx-auto px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-6">
                                <p className="text-green-500 font-medium text-sm flex items-center">
                                    MÓDULO ESPECIALIZADO <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full ml-2"></span>
                                </p>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                <span className="text-white">Max</span> <span className="text-green-500">Controle</span>
                            </h1>
                            <p className="text-gray-400 mb-8 text-lg">
                                Módulo para consultas rápidas e intuitivas de saldos e movimentações. Praticidade e controle em um só
                                lugar.
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
                            <span className="text-white">Recursos</span> <span className="text-green-500">poderosos</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            O Max Controle oferece uma série de funcionalidades para facilitar a gestão financeira e operacional da
                            sua empresa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <LineChart className="w-12 h-12" />,
                                title: "Consultas Rápidas",
                                description:
                                    "Acesse informações de saldos e movimentações de forma rápida e intuitiva, sem a necessidade de relatórios complexos.",
                            },
                            {
                                icon: <BarChart3 className="w-12 h-12" />,
                                title: "Análise de Dados",
                                description:
                                    "Visualize gráficos e indicadores de desempenho para tomar decisões baseadas em dados concretos.",
                            },
                            {
                                icon: <PieChart className="w-12 h-12" />,
                                title: "Controle Financeiro",
                                description:
                                    "Acompanhe receitas, despesas e fluxo de caixa com painéis personalizáveis e atualizados em tempo real.",
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

            {/* Benefits Section */}
            <section className="py-20 relative overflow-hidden px-10">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                                <p className="text-green-500 font-medium text-sm">BENEFÍCIOS</p>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="text-white">Por que escolher o</span>{" "}
                                <span className="text-green-500">Max Controle</span>
                            </h2>
                            <p className="text-gray-400 mb-8">
                                O Max Controle foi desenvolvido para empresas que precisam de agilidade e precisão no controle de suas
                                operações financeiras. Com uma interface intuitiva e recursos poderosos, o módulo oferece uma visão
                                completa do seu negócio.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Aumento de produtividade com consultas rápidas",
                                    "Redução de erros operacionais",
                                    "Tomada de decisão baseada em dados",
                                    "Integração com outros módulos do sistema",
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-300">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                                <Image
                                    src="/placeholder.svg?height=600&width=600"
                                    alt="Max Controle Dashboard"
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

            {/* Screenshots Section */}
            <section className="py-20 bg-gray-900 relative overflow-hidden px-10">
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                            <p className="text-green-500 font-medium text-sm">INTERFACE</p>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-white">Conheça a</span> <span className="text-green-500">interface</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Uma interface moderna e intuitiva para facilitar o seu dia a dia. Veja alguns exemplos de telas do Max
                            Controle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Consulta de Saldo", desc: "Consulta de saldo por produtos" },
                            { title: "Consulta de Movimentações", desc: "Acompanhe todas as entradas e saídas" },
                            { title: "Controle de Pessoas", desc: "Controle quem pode ser usuario" },
                        ].map((screen, index) => (
                            <div
                                key={index}
                                className="bg-black border border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                            >
                                <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <LineChart className="w-6 h-6 text-green-500" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-white">{screen.title}</h3>
                                    <p className="text-gray-400">{screen.desc}</p>
                                </div>
                            </div>
                        ))}
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
                            <span className="text-white">Pronto para ter mais</span> <span className="text-green-500">controle</span>{" "}
                            <span className="text-white">no seu negócio?</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Entre em contato conosco hoje mesmo e descubra como o Max Controle pode ajudar a impulsionar seu negócio
                            com mais eficiência e precisão.
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
