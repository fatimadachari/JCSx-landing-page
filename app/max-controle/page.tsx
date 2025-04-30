import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, LineChart, BarChart3, PieChart, ArrowRight, CheckCircle, HelpCircle } from "lucide-react"
import Header from "@/components/header"
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
                                <Button variant="link" className="text-green-500 hover:text-green-400 p-0 flex items-center">
                                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
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

                            <div className="mt-8">
                                <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-6 rounded-xl">
                                    Solicitar demonstração
                                </Button>
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

            {/* FAQ Section */}
            <section className="py-20 relative overflow-hidden px-10">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                            <p className="text-green-500 font-medium text-sm">DÚVIDAS</p>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-white">Perguntas</span> <span className="text-green-500">frequentes</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Tire suas dúvidas sobre o Max Controle e descubra como ele pode ajudar sua empresa.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                {
                                    question: "O Max Controle pode ser integrado com outros sistemas?",
                                    answer:
                                        "Sim, o Max Controle foi desenvolvido para se integrar perfeitamente com outros módulos do sistema JCSx, como o Max Agrícola e o Max Contábil. Além disso, oferecemos APIs para integração com sistemas de terceiros.",
                                },
                                {
                                    question: "Quais relatórios estão disponíveis no Max Controle?",
                                    answer:
                                        "O Max Controle oferece uma ampla variedade de relatórios, incluindo fluxo de caixa, movimentações financeiras, análise de receitas e despesas, projeções financeiras, entre outros. Todos os relatórios são personalizáveis e podem ser exportados em diversos formatos.",
                                },
                                {
                                    question: "É possível acessar o Max Controle de dispositivos móveis?",
                                    answer:
                                        "Sim, o Max Controle possui uma interface responsiva que se adapta a diferentes tamanhos de tela, permitindo o acesso via smartphones e tablets. Além disso, estamos desenvolvendo aplicativos nativos para iOS e Android para uma experiência ainda melhor.",
                                },
                                {
                                    question: "Como funciona o suporte técnico para o Max Controle?",
                                    answer:
                                        "Oferecemos suporte técnico especializado por telefone, e-mail e chat, com atendimento em horário comercial. Nossos clientes com planos premium têm acesso a suporte 24/7 e atendimento prioritário.",
                                },
                                {
                                    question: "O Max Controle é adequado para pequenas empresas?",
                                    answer:
                                        "Absolutamente! O Max Controle foi projetado para atender empresas de todos os tamanhos. Para pequenas empresas, oferecemos planos com preços acessíveis e funcionalidades essenciais para o controle financeiro eficiente.",
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

                        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
                            <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-6 rounded-xl text-lg">
                                Solicitar demonstração
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-gray-800 py-12 px-10">
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
                                    <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
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
