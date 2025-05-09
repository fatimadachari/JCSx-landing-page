"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Truck,
  Wallet,
  Calculator,
  ArrowRight,
  BarChart3,
  Database,
  FileCheck,
  Receipt,
  ClipboardCheck,
  Scale,
  FileText,
  ShoppingCart,
  Sprout,
  PieChart,
  CreditCard,
  Boxes,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { useState } from "react"
import FeatureCard from "@/components/feature-card"
import { ModuleCard } from "@/components/module-card"
import Header from "@/components/header"
import Footer from '@/components/footer'

export default function Home() {
  const [showAllFeatures, setShowAllFeatures] = useState(false)

  // Array de recursos do Max Agrícola
  const maxAgricolaFeatures = [
    {
      icon: <Scale className="text-green-500 w-6 h-6" />,
      title: "Integração com Balança Rodoviária",
      description:
        "Integração completa com balanças rodoviárias para pesagem automática de veículos e cargas, eliminando erros manuais e aumentando a produtividade.",
    },
    {
      icon: <PieChart className="text-green-500 w-6 h-6" />,
      title: "Tabela de Descontos",
      description:
        "Configuração flexível de tabelas de descontos físicos e financeiros, permitindo ajustes automáticos baseados em critérios personalizáveis.",
    },
    {
      icon: <Receipt className="text-green-500 w-6 h-6" />,
      title: "Emissão de Contra Nota de Depósito",
      description:
        "Emissão simplificada de contra notas de depósito, garantindo o controle eficiente do fluxo de documentos e facilitando processos de armazenagem.",
    },
    {
      icon: <FileText className="text-green-500 w-6 h-6" />,
      title: "Contrato de Compra e Venda",
      description:
        "Criação, gestão e acompanhamento de contratos de compra e venda, com alertas de vencimento e relatórios de cumprimento.",
    },
    {
      icon: <BarChart3 className="text-green-500 w-6 h-6" />,
      title: "Relatórios Gerenciais e Estatísticos",
      description:
        "Dashboards e relatórios detalhados para tomada de decisões, com dados em tempo real sobre operações, vendas, estoque e financeiro.",
    },
    {
      icon: <Sprout className="text-green-500 w-6 h-6" />,
      title: "Controle de Grãos por Lavoura",
      description:
        "Rastreabilidade completa dos grãos por lavoura e talião, permitindo acompanhamento detalhado da produção e qualidade do produto.",
    },
    {
      icon: <ShoppingCart className="text-green-500 w-6 h-6" />,
      title: "Controle de Pedidos",
      description:
        "Gerenciamento eficiente de pedidos de compra e venda, com acompanhamento de status, histórico e integração com estoque e financeiro.",
    },
    {
      icon: <ClipboardCheck className="text-green-500 w-6 h-6" />,
      title: "Emissão de Receituário Agronômico",
      description:
        "Emissão e controle de receituários agronômicos, atendendo às exigências legais e facilitando o trabalho dos profissionais técnicos.",
    },
    {
      icon: <Database className="text-green-500 w-6 h-6" />,
      title: "Compra e Venda de Sementes",
      description:
        "Gestão completa de compra e venda de sementes por lote e pilha, garantindo rastreabilidade e controle de qualidade.",
    },
    {
      icon: <FileCheck className="text-green-500 w-6 h-6" />,
      title: "Emissão de NF-e",
      description:
        "Emissão integrada de Notas Fiscais Eletrônicas (NF-e), com validação automática, armazenamento e gestão de documentos fiscais.",
    },
    {
      icon: <CreditCard className="text-green-500 w-6 h-6" />,
      title: "Emissão de Boletos e Duplicatas",
      description:
        "Sistema completo para emissão e controle de boletos bancários e duplicatas, com integração bancária e acompanhamento de pagamentos.",
    },
    {
      icon: <Boxes className="text-green-500 w-6 h-6" />,
      title: "Controle de Inventário",
      description:
        "Gestão eficiente de inventário com controle em tempo real, alertas de estoque mínimo e máximo, e histórico de movimentações.",
    },
  ]

  // Determinar quais recursos mostrar
  const visibleFeatures = showAllFeatures ? maxAgricolaFeatures : maxAgricolaFeatures.slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section with Laptop Display */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
        </div>

        {/* Green glow effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500 rounded-full blur-[150px] opacity-15"></div>
        <div className="absolute -bottom-80 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-20"></div>

        <div className="container relative z-10 mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text content - 5 columns */}
            <div className="lg:col-span-5">
              <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-6">
                <p className="text-green-500 font-medium text-sm flex items-center">
                  SOLUÇÕES CONFIÁVEIS <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full ml-2"></span>
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Automação</span> <span className="text-green-500">comercial</span>{" "}
                <span className="text-gray-400">para seu futuro.</span>
              </h1>
              <p className="text-gray-400 mb-8 text-lg">
                Buscando soluções para automação comercial? A JCSx Sistemas oferece soluções completas para o seu
                negócio.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#solucoes">
                  <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-6 rounded-xl">
                    Explorar agora
                  </Button>
                </a>
                <a href="https://wa.me/555591489625" target="blank">
                  <Button variant="outline" className="bg-transparent border-gray-700 text-white hover:bg-gray-800 hover:text-white px-6 py-6 rounded-xl">
                    Saiba mais <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Laptop display - 7 columns */}
            <div className="lg:col-span-7"></div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 relative overflow-hidden px-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                <p className="text-green-500 font-medium text-sm">NOSSAS SOLUÇÕES</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Seu parceiro</span> <span className="text-green-500">confiável</span>{" "}
                <br />
                <span className="text-gray-400">em automação.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              number="01"
              title="Serviço para Qualquer Nível de Expertise"
              description="Soluções adaptadas para empresas de todos os tamanhos e níveis de conhecimento técnico."
              variant="dark"
            />
            <FeatureCard
              number="02"
              title="Melhores Práticas do Mercado"
              description="O ERP Max Agrícola segue as melhores práticas do mercado, garantindo eficiência e conformidade."
              variant="green"
            />
            <FeatureCard
              number="03"
              title="Suporte Técnico Especializado"
              description="Equipe de suporte técnico especializado para ajudar em qualquer situação."
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* Max Agricola Detailed Features Section - NEW SECTION */}
      <section className="py-20 relative overflow-hidden px-10 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-15 pointer-events-none"></div>
        <div className="absolute top-40 right-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
              <p className="text-green-500 font-medium text-sm">DETALHES DO SISTEMA</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Recursos</span> <span className="text-green-500">Max Agrícola</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              O Max Agrícola é a solução completa para empresas do ramo agrícola que necessitam eficiência e agilidade.
              Conheça os principais recursos que vão transformar a gestão do seu negócio:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Recursos visíveis */}
            {visibleFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/5 group"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Botão Ver Mais / Ver Menos */}
          <div className="mt-10 text-center">
            <Button
              onClick={() => {
                console.log("Toggle botão clicado!")
                setShowAllFeatures(!showAllFeatures)
              }

              }
              variant="outline"
              className="bg-transparent z-50 border-gray-700 text-white hover:bg-gray-800 hover:text-white px-6 py-4 rounded-xl group"
            >
              {showAllFeatures ? (
                <>
                  Ver menos <ChevronUp className="ml-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                </>
              ) : (
                <>
                  Ver mais <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden px-10" id="solucoes">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
              <p className="text-green-500 font-medium text-sm">MÓDULOS ESPECIALIZADOS</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Plataforma</span> <span className="text-green-500">completa</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              O ERP Max Agrícola é essencial para a produtividade de sua empresa, composto por módulos que podem ser adquiridos separadamente:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModuleCard
              icon={<Calculator className="w-12 h-12" />}
              title="Max Contábil"
              description="Integração contábil completa para empresas organizadas que não necessitam lançar os registros novamente."
              link="/max-contabil"
            />
            <ModuleCard
              icon={<Truck className="w-12 h-12" />}
              title="Conhecimento de Frete"
              description="O módulo de frete foi desenvolvido para empresas que precisam de controle na emissão e organização dos CTes e MDFes."
              link="/conhecimento-de-frete"
            />

            <ModuleCard
              icon={<Wallet className="w-12 h-12" />}
              title="Max Controle"
              description="Modulo para consultas rápidas e intuitiva de saldos e movimentações. Praticidade e controle em um só lugar."
              link="/max-controle"
            />
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden px-10" id="empresa">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                <p className="text-green-500 font-medium text-sm">A EMPRESA</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Conheça a</span> <span className="text-green-500">JCSx Sistemas</span>
              </h2>
              <p className="text-gray-400 mb-6">
                A JCSx Sistemas foi fundada em 02 Janeiro de 2013, focada no ramo agrícola, com o objetivo de trazer
                novos conceitos de administração empresarial, buscando novas ferramentas de desenvolvimento de sistemas
                para atender melhor os nossos clientes.
              </p>
              <p className="text-gray-400 mb-8">
                Com a nossa constante busca de aprimoramento de nosso produto principal, novos módulos vem sendo
                incluídos no sistema, atendendo as exigências legais e de mercado, nunca esquecendo as necessidades do
                cliente.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/50 border border-gray-800 rounded-xl p-4">
                  <h3 className="font-semibold text-green-500 mb-2">Missão</h3>
                  <p className="text-gray-400 text-sm">
                    Fornecer soluções tecnológicas que impulsionem o crescimento dos nossos clientes.
                  </p>
                </div>
                <div className="bg-black/50 border border-gray-800 rounded-xl p-4">
                  <h3 className="font-semibold text-green-500 mb-2">Visão</h3>
                  <p className="text-gray-400 text-sm">
                    Ser referência em sistemas de automação comercial para o setor agrícola.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="JCSx Equipe"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-green-500/20 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-green-500 rounded-full blur-[50px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden px-10" id="contato">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-4 py-1 bg-green-500/10 rounded-full mb-4">
                <p className="text-green-500 font-medium text-sm">CONTATO</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Entre em</span> <span className="text-green-500">contato</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Estamos prontos para atender às suas necessidades. Entre em contato conosco para saber mais sobre nossas
                soluções.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Endereço</h3>
                    <p className="text-gray-400"><a href="https://maps.app.goo.gl/3mtZKiTRYsyfN4Xv8" target="blank">Gen. Flores da Cunha, 61 - Centro, Ijuí - RS, 98700-000</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Telefones</h3>
                    <p className="text-gray-400"><a href="tel:+55553332-8388">(55) 3332-8388</a></p>
                    <p className="text-gray-400"><a href="tel:+555599139-0767">(55) 99139-0767</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-400"><a href="mailto:atendimento@prodan.com.br" target="blank">atendimento@prodan.com.br</a></p>
                    <p className="text-gray-400"><a href="mailto:financeiro@prodan.com.br" target="blank">financeiro@prodan.com.br</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              {/* Map placeholder - would be replaced with actual map */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.82903153936!2d-53.91802169999999!3d-28.394231399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fc2d675ceacf39%3A0x8581b7bc790a2c07!2sProdan%20Software%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1746035145780!5m2!1spt-BR!2sbr"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
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
              <span className="text-white">Pronto para</span> <span className="text-green-500">automatizar</span>{" "}
              <span className="text-white">seu negócio?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Entre em contato conosco hoje mesmo e descubra como nossas soluções podem ajudar a impulsionar seu
              negócio.
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

      <Footer />
    </div>
  )
}
