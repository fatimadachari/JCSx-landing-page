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
                <Button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-6 rounded-xl">
                  Explorar agora
                </Button>
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 px-6 py-6 rounded-xl">
                  Saiba mais <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
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
              title="Serviço para Qualquer N��vel de Expertise"
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
              className="z-50 border-gray-700 text-white hover:bg-gray-800 px-6 py-4 rounded-xl group"
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
      <section className="py-20 bg-gray-900 relative overflow-hidden px-10">
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
      <section className="py-20 bg-gray-900 relative overflow-hidden px-10">
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
      <section className="py-20 relative overflow-hidden px-10">
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
                    <p className="text-gray-400">Gen. Flores da Cunha, 61 - Centro, Ijuí - RS, 98700-000</p>
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
                    <p className="text-gray-400">(55) 3332-8388</p>
                    <p className="text-gray-400">(55) 99139-0767</p>
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
                    <p className="text-gray-400">atendimento@prodan.com.br</p>
                    <p className="text-gray-400">financeiro@prodan.com.br</p>
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
              <p className="text-gray-400 mb-6">Soluções completas para automação comercial desde 2013.</p>
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
                    Max cONTROLE
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                    Conhecimento de Frete
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
