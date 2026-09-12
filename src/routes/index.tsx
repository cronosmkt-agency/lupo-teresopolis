import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Star,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Send,
  Zap,
  Truck,
  RotateCcw,
  Flame,
  Navigation
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LupoLandingPage,
});

export default function LupoLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState("inverno");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Simulador Form State
  const [customerName, setCustomerName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Linha Térmica Heat (Segunda Pele & Meias Felpudas)");
  const [selectedSize, setSelectedSize] = useState("Tamanho M");
  const [deliveryMode, setDeliveryMode] = useState("Entrega Rápida em Teresópolis (Delivery)");
  const [customerNotes, setCustomerNotes] = useState("");

  const phone = "552127426437";
  const phoneDisplay = "(21) 2742-6437";
  const address = "R. Duque de Caxias, 90 - Várzea, Teresópolis - RJ, 25953-390";
  const hours = "Segunda a Sábado: 09:00 às 19:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site oficial da Lupo Teresópolis (Duque de Caxias) e gostaria de consultar disponibilidade de peças."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, equipe da Lupo Teresópolis! Vim pelo site oficial e gostaria de consultar peças:

*Nome:* ${customerName || "Não informado"}
*Linha de Interesse:* ${selectedCategory}
*Tamanho Aproximado:* ${selectedSize}
*Modalidade:* ${deliveryMode}
${customerNotes ? `*Detalhes / Peça:* ${customerNotes}` : ""}

Poderiam me confirmar a disponibilidade e valores?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // Linhas e Produtos por Categoria
  const catalogCategories = {
    inverno: {
      label: "Especial Frio Serrano",
      badge: "Indispensável na Serra",
      description: "Segunda pele térmica com retenção de calor, meias felpudas e ceroulas para você curtir as temperaturas da serra com aconchego.",
      items: [
        {
          name: "Camisa Térmica Segunda Pele Heat",
          highlight: "Retenção Térmica Avançada",
          tag: "Masculino & Feminino",
          desc: "Tecido tecnológico com toque macio que mantém a temperatura corporal estável sob casacos ou roupas do dia a dia.",
          benefit: "Do P ao Plus Size adulto e linha infantil."
        },
        {
          name: "Ceroula Térmica Masculina Lupo",
          highlight: "Conforto Anatômico",
          tag: "Mais Vendida no Inverno",
          desc: "Ajuste perfeito que não empapa sob calças jeans ou sociais, protegendo pernas e articulações do vento serrano.",
          benefit: "Cós elástico suave sem marcar."
        },
        {
          name: "Meias Térmicas Felpudas & Lã",
          highlight: "Pés Sempre Quentinhos",
          tag: "Alta Gramatura",
          desc: "Interior aveludado e felpudo para usar em casa, na cama ou com botas nos dias mais frios de Teresópolis.",
          benefit: "Solado macio e cano médio/longo."
        },
        {
          name: "Meia-Calça Fio 40, 80 e 120",
          highlight: "Opacidade & Elegância",
          tag: "Moda Outono/Inverno",
          desc: "Fios grossos de alta resistência para compor looks de frio com vestidos, saias e casacos pesados com elegância.",
          benefit: "Trama uniforme e alta durabilidade."
        }
      ]
    },
    sport: {
      label: "Lupo Sport (Alta Performance)",
      badge: "Tecnologia Seamless Dry",
      description: "Desenvolvida com a tecnologia sem costura que evita atrito na pele, proporcionando liberdade máxima para treinos, trilhas e corridas.",
      items: [
        {
          name: "Legging Seamless Lupo Sport",
          highlight: "Zero Transparência",
          tag: "Alta Compressão",
          desc: "Modela sem apertar, com cós alto anatômico que não enrola durante agachamentos, treinos ou caminhadas.",
          benefit: "Tecnologia antimicrobiana de secagem rápida."
        },
        {
          name: "Bermuda de Compressão Anti-Assadura",
          highlight: "Proteção Muscular",
          tag: "Corrida & Academia",
          desc: "Reduz a vibração muscular e elimina qualquer atrito entre as coxas, garantindo rendimento em treinos longos.",
          benefit: "Bolso funcional embutido para celular/chave."
        },
        {
          name: "Tops Fitness de Alta Sustentação",
          highlight: "Suporte Confortável",
          tag: "Treino Pesado ou Casual",
          desc: "Costas nadador, bojo removível e tecido respirável que acomoda o busto com firmeza e suavidade.",
          benefit: "Sem aros de metal, 100% anatômico."
        },
        {
          name: "Meias de Alta Compressão & Corrida",
          highlight: "Recuperação Venosa",
          tag: "Esportistas Serranos",
          desc: "Ideal para corredores de rua, praticantes de CrossFit e trilhas na serra dos órgãos, ativando a circulação.",
          benefit: "Amortecimento localizado no calcanhar."
        }
      ]
    },
    underwear: {
      label: "Underwear Conforto Absoluto",
      badge: "O Padrão Ouro do Brasil",
      description: "As peças íntimas mais premiadas do país. Tecidos nobres que abraçam o corpo sem apertar, costuras ultrafinas e durabilidade extrema.",
      items: [
        {
          name: "Cueca Boxer Modal Lupo",
          highlight: "Toque Pele Sobre Pele",
          tag: "Conforto Premium",
          desc: "Feita com fibra vegetal sustentável modal: não esquenta, transpira com perfeição e não enrola na perna.",
          benefit: "A queridinha absoluta dos clientes."
        },
        {
          name: "Cueca Boxer Sem Costura Microfibra",
          highlight: "Durabilidade Lendária",
          tag: "Líder de Vendas",
          desc: "Não deforma após dezenas de lavagens, não desbota e possui ajuste elástico imperceptível ao longo do dia.",
          benefit: "Kits de 3, 5 ou 10 unidades com desconto."
        },
        {
          name: "Calcinha Corte a Laser Sem Costura",
          highlight: "Invisível sob Roupas",
          tag: "Linha Feminina Essencial",
          desc: "Não marca calças justas, leggings de academia ou vestidos finos. Aderência suave e forro 100% algodão.",
          benefit: "Modelos caleçon, biquíni e tanga."
        },
        {
          name: "Sutiã Top Conforto Sem Aro",
          highlight: "Sustentação sem Dor",
          tag: "Uso Diário",
          desc: "Acabou a dor dos aros de metal. O desenho anatômico da Lupo distribui o peso com alças confortáveis.",
          benefit: "Tecido que respira e não machuca."
        }
      ]
    },
    pijamas: {
      label: "Pijamas & Sleepwear",
      badge: "Noites Aconchegantes",
      description: "Durma nas nuvens. Linha completa de pijamas longos, conjuntos térmicos e roupões para toda a família enfrentar o frio serrano.",
      items: [
        {
          name: "Pijama Longo Fleece Térmico",
          highlight: "Toque Aveludado Quentinho",
          tag: "Inverno Rigoroso",
          desc: "Confeccionado em microfibra felpada de alta densidade que cria uma barreira térmica perfeita contra o frio da noite.",
          benefit: "Modelos masculinos, femininos e infantis."
        },
        {
          name: "Pijama Clássico em Algodão Nobre",
          highlight: "100% Fibras Naturais",
          tag: "Conforto Atemporal",
          desc: "Fios penteados que proporcionam toque sedoso e leveza, perfeitos para noites de meia estação.",
          benefit: "Golas e punhos com acabamento impecável."
        },
        {
          name: "Camisolas & Sleepshirts Aconchegantes",
          highlight: "Elegância & Praticidade",
          tag: "Linha Feminina",
          desc: "Modelagens fluidas que não prendem os movimentos durante o sono, com caimento gracioso e moderno.",
          benefit: "Fácil de lavar e secagem ágil."
        },
        {
          name: "Linha Pijama Kids & Família",
          highlight: "Estampas Divertidas",
          tag: "Para as Crianças",
          desc: "Pijaminhas térmicos e macios para garantir que as crianças durmam quentinhas e protegidas sem destampar.",
          benefit: "Tecidos antialérgicos testados."
        }
      ]
    },
    presentes: {
      label: "Kits de Presente Express",
      badge: "Presente Rápido & Certeiro",
      description: "A solução número 1 em Teresópolis para aniversários e datas especiais. Embalagens elegantes e peças que todo mundo ama ganhar.",
      items: [
        {
          name: "Kit Caixa Presente Boxer Masculina",
          highlight: "Embalagem Oficial Lupo",
          tag: "Presente sem Erro",
          desc: "Caixa rígida exclusiva montada com 3 ou 5 cuecas boxer de microfibra ou modal em cores elegantes.",
          benefit: "Troca garantida no balcão da loja física."
        },
        {
          name: "Kit Inverno Serrano (Gorro + Meia Térmica)",
          highlight: "Aconchego Serrano",
          tag: "Edição Especial",
          desc: "Combinação de peças essenciais para quem sobe a serra ou quer presentear familiares com carinho prático.",
          benefit: "Embalado com fita oficial Lupo."
        },
        {
          name: "Kit Lupo Sport Fitness Premium",
          highlight: "Incentivo à Saúde",
          tag: "Para quem Pratica Esportes",
          desc: "Conjunto de top + bermuda seamless ou conjunto de meias esportivas de compressão com squeeze exclusivo.",
          benefit: "Tamanhos ajustáveis com assessoria da equipe."
        },
        {
          name: "Vale Presente Lupo Teresópolis",
          highlight: "O Presenteado Escolhe",
          tag: "Flexibilidade Total",
          desc: "Quando você tem dúvida do tamanho exato: envie um voucher oficial com mensagem personalizada para retirada na Duque de Caxias.",
          benefit: "Válido para todo o estoque da loja física."
        }
      ]
    }
  };

  const storeBenefits = [
    {
      icon: Zap,
      title: "Pronta Entrega em Teresópolis",
      desc: "Não espere 5 a 8 dias úteis pelo correio. Compre com nossa equipe no WhatsApp e receba hoje mesmo por delivery na sua casa."
    },
    {
      icon: Clock,
      title: "Retirada em 15 Minutos",
      desc: "Faça seu pedido antes de sair do trabalho. Nossas consultoras separam tudo na loja física (Duque de Caxias, 90) para você só retirar."
    },
    {
      icon: Flame,
      title: "Especial Frio Serrano",
      desc: "O maior estoque da serra em segunda pele térmica Heat, ceroulas masculinas, meias felpudas e pijamas fleece quentinhos."
    },
    {
      icon: RotateCcw,
      title: "Troca Fácil no Balcão",
      desc: "Precisou trocar a cor ou o tamanho? Nada de filas de correios ou formulários complexos. Basta passar na loja física com a peça."
    }
  ];

  const comparisonPoints = [
    {
      feature: "Prazo de Recebimento",
      ecommerce: "5 a 8 dias úteis dependendo dos Correios",
      lojaLocal: "Receba HOJE por delivery ou retire em 15 minutos"
    },
    {
      feature: "Experimentar & Sentir o Toque",
      ecommerce: "Impossível, você só descobre se serve ao receber",
      lojaLocal: "Consultoras locais auxiliam tamanhos e você toca nos tecidos"
    },
    {
      feature: "Linha Térmica para o Frio de Hoje",
      ecommerce: "Quando chegar, a frente fria já passou",
      lojaLocal: "Estoque completo a pronta entrega no centro da Várzea"
    },
    {
      feature: "Processo de Troca",
      ecommerce: "Burocrático: postar no correio e esperar nova remessa",
      lojaLocal: "Imediato no balcão da Rua Duque de Caxias, 90"
    }
  ];

  const sizeGuideData = [
    {
      category: "Cuecas Boxer & Slips",
      sizes: "P (38 a 40) · M (42 a 44) · G (46 a 48) · GG (50 a 52) · XG (54 a 56)",
      tip: "Se você prefere um ajuste mais solto no dia a dia, opte por um número acima na microfibra."
    },
    {
      category: "Segunda Pele Térmica Heat",
      sizes: "Infantil (4 a 14 anos) · Adulto P (38/40) · M (42) · G (44/46) · GG (48/50)",
      tip: "A segunda pele deve ficar justa ao corpo para reter o calor biológico de forma ideal."
    },
    {
      category: "Meias & Calçados",
      sizes: "Infantil (24 a 32) · Juvenil (33 a 36) · Adulto Padrão (37 a 40) · Grande (41 a 44)",
      tip: "Todas as meias Lupo contam com elastano de alta recuperação que abraça o pé sem deslizar."
    },
    {
      category: "Leggings & Tops Lupo Sport",
      sizes: "P (36 a 38) · M (40 a 42) · G (44 a 46) · GG (48)",
      tip: "Tecnologia Seamless Dry: compressão muscular balanceada sem marcar roupas íntimas."
    }
  ];

  const testimonials = [
    {
      name: "Waldilea Avila",
      role: "Local Guide Google Maps",
      text: "Ótimo atendimento, sempre encontro o que eu quero! A loja na Duque de Caxias é muito bem localizada e as meninas são super atenciosas.",
      stars: 5
    },
    {
      name: "Raquel Oliveira",
      role: "Local Guide com 300+ Avaliações",
      text: "Amo todas as coisas da Lupo, produtos de durabilidade e qualidade incomparáveis. Comprei minha segunda pele e meias de lã para o inverno aqui e foi a melhor escolha!",
      stars: 5
    },
    {
      name: "Destaque dos Clientes Google",
      role: "Avaliações Oficiais Google Maps",
      text: "Peças de altíssima qualidade e grande variedade! Ótimas opções de presentes prontos e atendimento prestativo via WhatsApp. Sempre salva nas datas comemorativas.",
      stars: 5
    }
  ];

  const faqItems = [
    {
      q: "Como funciona a compra pelo WhatsApp e entrega em Teresópolis?",
      a: "Você envia mensagem informando os produtos e tamanhos desejados. Nossa equipe verifica o estoque na hora, envia fotos se necessário e coordena a entrega rápida por motoboy no mesmo dia para todos os bairros de Teresópolis."
    },
    {
      q: "Posso reservar pelo WhatsApp e passar só para retirar?",
      a: "Sim! Essa é a modalidade Retirada Express em 15 minutos. Nossas consultoras separam seu pedido e deixam no balcão da loja física (Duque de Caxias, 90). Você só chega, efetua o pagamento e retira suas peças sem filas."
    },
    {
      q: "Vocês possuem a linha térmica completa para o frio de Teresópolis?",
      a: "Sim! Somos o principal ponto de venda da Lupo na Região Serrana com estoque dedicado de inverno: segunda pele térmica Heat (masculina, feminina e infantil), ceroulas térmicas, meias felpudas, meias-calças de alta gramatura e pijamas fleece."
    },
    {
      q: "Como funciona a troca de produtos?",
      a: "Para itens de vestuário e pijamas (com etiqueta original afixada e sem indícios de uso), a troca é realizada diretamente no balcão da loja da Duque de Caxias de forma rápida e transparente. Peças íntimas seguem as normas sanitárias vigentes para garantir a segurança de todos os clientes."
    },
    {
      q: "Quais são as formas de pagamento aceitas?",
      a: "Aceitamos Pix, cartões de crédito e débito de todas as bandeiras (com parcelamento nas compras acima do valor mínimo), além de dinheiro em espécie."
    },
    {
      q: "A loja da Duque de Caxias vende kits prontos para presente?",
      a: "Sim! Temos caixas e embalagens exclusivas da Lupo montadas para aniversários, Dia dos Pais, Dia das Mães, Dia dos Namorados e Natal. Você pode escolher as peças ou optar pelo Vale-Presente da loja."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-rose-100 selection:text-rose-900 pb-24 lg:pb-0 font-sans">
      {/* TOP NOTIFICATION RIBBON */}
      <div className="bg-slate-950 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="font-medium text-slate-200">
              Inverno Serrano em Teresópolis: Linha Térmica Heat & Pijamas Quentinhos com pronta entrega imediata!
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden md:inline-flex items-center gap-1 text-[11px]">
              <MapPin className="h-3.5 w-3.5 text-rose-400" /> R. Duque de Caxias, 90 · Várzea
            </span>
            <a
              href={`tel:${phone}`}
              className="font-semibold text-rose-400 hover:text-rose-300 transition"
            >
              {phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* 1. NAVBAR - ZERO EMOJIS - SEM ÍCONE NA HEADER (APENAS O NOME DA MARCA) */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5">
          {/* LOGO TYPOGRAPHIC ONLY - ZERO ICONS IN HEADER */}
          <a href="#" className="flex flex-col group transition">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-slate-950 group-hover:text-rose-600 transition">
                LUPO
              </span>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-rose-600 px-2 py-0.5 rounded shadow-sm">
                Teresópolis
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5">
              Loja Exclusiva · R. Duque de Caxias, 90 · Várzea
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#colecoes" className="text-sm font-semibold text-slate-700 hover:text-rose-600 transition">
              Coleções & Inverno
            </a>
            <a href="#diferenciais" className="text-sm font-semibold text-slate-700 hover:text-rose-600 transition">
              Por que a Loja Local
            </a>
            <a href="#medidas" className="text-sm font-semibold text-slate-700 hover:text-rose-600 transition">
              Guia de Medidas
            </a>
            <a href="#avaliacoes" className="text-sm font-semibold text-slate-700 hover:text-rose-600 transition">
              Depoimentos
            </a>
            <a href="#localizacao" className="text-sm font-semibold text-slate-700 hover:text-rose-600 transition">
              Localização
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-rose-600 transition">
              Dúvidas
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                "Olá! Vim pelo site oficial da Lupo Teresópolis e gostaria de consultar peças com a consultora."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-rose-600/20 transition-all active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Consultar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 lg:hidden hover:bg-slate-100 transition"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-6 py-5 lg:hidden animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-4">
              <a
                href="#colecoes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-600 transition py-1"
              >
                Coleções & Linha Inverno
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-600 transition py-1"
              >
                Vantagens da Loja Local (Duque de Caxias)
              </a>
              <a
                href="#medidas"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-600 transition py-1"
              >
                Guia de Medidas & Tamanhos
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-600 transition py-1"
              >
                Avaliações de Clientes
              </a>
              <a
                href="#localizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-600 transition py-1"
              >
                Localização & Horários
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-rose-600 transition py-1"
              >
                Perguntas Frequentes
              </a>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 py-3 text-sm font-bold text-white shadow-md shadow-rose-600/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  Atendimento WhatsApp Oficial
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-700"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Ligar para {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION - ICONIC HERITAGE & SERRANO WARMTH */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 py-12 md:py-20 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Col: Main Value Proposition */}
            <div className="lg:col-span-7">
              {/* Trust Badges */}
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-3.5 py-1.5 text-xs font-bold text-rose-900 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-rose-600 animate-pulse"></span>
                <span>Franquia Oficial Lupo</span>
                <span className="text-rose-300">·</span>
                <span>Rua Duque de Caxias, 90</span>
                <span className="text-rose-300">·</span>
                <span className="text-emerald-700 font-extrabold">Pronta Entrega na Serra</span>
              </div>

              <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                O conforto lendário da Lupo{" "}
                <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">
                  com entrega hoje mesmo
                </span>{" "}
                em Teresópolis.
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                Não espere dias pelo frete de compras online. A loja oficial na <strong>Rua Duque de Caxias, 90</strong> reúne a maior variedade da região em <strong>segunda pele térmica Heat</strong>, ceroulas, meias felpudas para o frio da serra, a tecnologia <strong>Lupo Sport Seamless</strong> e opções impecáveis de presentes.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-rose-600/25 hover:bg-rose-700 transition-all hover:scale-[1.02] active:scale-95 text-center"
                >
                  <MessageCircle className="h-5 w-5" />
                  Pedir no WhatsApp & Receber Hoje
                </a>
                <a
                  href="#colecoes"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition-all text-center"
                >
                  <span>Explorar Coleções</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Social Proof Google Review Strip */}
              <div className="mt-8 pt-6 border-t border-slate-200/90 flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                    <span>4.1 Estrelas no Google Maps</span>
                    <span className="text-xs font-semibold text-slate-500">· 22 Avaliações Reais</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    "Peças de qualidade, variedade completa e atendimento excelente!"
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Local Experience Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xl shadow-slate-900/10">
                {/* Card Top Label */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-slate-950">LUPO</span>
                      <span className="text-xs font-bold bg-slate-900 text-white px-2 py-0.5 rounded">
                        Duque de Caxias
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 mt-0.5 block">
                      Ponto Oficial na Várzea
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                      Loja Aberta até 19:00
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="py-5 space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                      <Flame className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Especial Frio Serrano (Segunda Pele Heat)</p>
                      <p className="text-xs text-slate-600">Camisas térmicas, ceroulas e meias felpudas a pronta entrega para noites frias.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Retirada Express em 15 Minutos</p>
                      <p className="text-xs text-slate-600">Peça com a equipe no WhatsApp e retire pronto no balcão sem filas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                      <Sparkles className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Kits de Presente com Embalagem Oficial</p>
                      <p className="text-xs text-slate-600">Opções sofisticadas prontas para presentear em aniversários e datas especiais.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <RotateCcw className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Troca Fácil no Balcão da Loja</p>
                      <p className="text-xs text-slate-600">Segurança de resolver tudo direto com a equipe local na Duque de Caxias.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Phone Bar */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-rose-600" />
                    <span className="text-xs font-bold text-slate-800">{phoneDisplay}</span>
                  </div>
                  <a
                    href={defaultWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                  >
                    Falar agora <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST STATS STRIP */}
      <section className="border-b border-slate-200 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="block text-2xl sm:text-3xl font-black text-rose-600">1921</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-700">Tradição Lupo</span>
              <span className="text-[11px] text-slate-500">Mais de 100 anos de excelência têxtil</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="block text-2xl sm:text-3xl font-black text-slate-900">15 min</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-700">Retirada Express</span>
              <span className="text-[11px] text-slate-500">Separação ágil na loja da Duque de Caxias</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="block text-2xl sm:text-3xl font-black text-rose-600">100%</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-700">Produtos Oficiais</span>
              <span className="text-[11px] text-slate-500">Coleções originais com garantia de fábrica</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="block text-2xl sm:text-3xl font-black text-slate-900">Nº 90</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-700">Duque de Caxias</span>
              <span className="text-[11px] text-slate-500">Ponto nobre no coração da Várzea</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COLEÇÕES INTERATIVAS COM ABAS (CATÁLOGO DA ESTAÇÃO) */}
      <section id="colecoes" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-rose-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-rose-700 border border-rose-200">
              Vitrine Oficial Teresópolis
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
              Coleções & Linhas em Destaque
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Consulte a disponibilidade de tamanhos e modelos em tempo real com nossas consultoras pelo WhatsApp.
            </p>
          </div>

          {/* Categories Tab Navigation */}
          <div className="mt-10 flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 sm:gap-3 no-scrollbar">
            {Object.entries(catalogCategories).map(([key, category]) => {
              const isActive = activeCategoryTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategoryTab(key)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Tab Description Header */}
          <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200/70 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {catalogCategories[activeCategoryTab as keyof typeof catalogCategories].label}
                </h3>
                <span className="rounded-full bg-rose-100 text-rose-800 text-[10px] font-extrabold uppercase px-2.5 py-0.5">
                  {catalogCategories[activeCategoryTab as keyof typeof catalogCategories].badge}
                </span>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                {catalogCategories[activeCategoryTab as keyof typeof catalogCategories].description}
              </p>
            </div>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                `Olá! Gostaria de consultar peças e estoque da linha: ${catalogCategories[activeCategoryTab as keyof typeof catalogCategories].label}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 transition"
            >
              <MessageCircle className="h-3.5 w-3.5 text-rose-400" />
              <span>Ver Modelos no WhatsApp</span>
            </a>
          </div>

          {/* Cards Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {catalogCategories[activeCategoryTab as keyof typeof catalogCategories].items.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-extrabold text-rose-600">
                      {item.highlight}
                    </span>
                  </div>

                  <h4 className="mt-4 text-base sm:text-lg font-bold text-slate-900 group-hover:text-rose-600 transition">
                    {item.name}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-4 rounded-xl bg-slate-50 border border-slate-100 p-2.5">
                    <p className="text-[11px] text-slate-700 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      {item.benefit}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de consultar tamanho e valor de: ${item.name}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 group-hover:bg-rose-600 group-hover:text-white py-2.5 text-xs font-bold text-slate-800 transition"
                  >
                    <span>Consultar Tamanho</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIFERENCIAIS DA LOJA LOCAL VS E-COMMERCE NACIONAL */}
      <section id="diferenciais" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-slate-200/80 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Vantagem Local Exclusiva
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
              Por Que Comprar na Loja de Teresópolis?
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Veja por que os clientes preferem a loja física da Duque de Caxias em vez de arriscar o e-commerce tradicional.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700">
              <div className="p-4 md:col-span-4 hidden md:block">Aspecto da Compra</div>
              <div className="p-4 md:col-span-4 bg-slate-200/50 text-slate-500">Site Nacional / E-commerce</div>
              <div className="p-4 md:col-span-4 bg-rose-50 text-rose-900 font-extrabold">Loja Lupo Teresópolis (Duque de Caxias)</div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonPoints.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 items-center text-xs sm:text-sm">
                  <div className="p-4 md:col-span-4 font-bold text-slate-900 bg-slate-50/50">
                    {row.feature}
                  </div>
                  <div className="p-4 md:col-span-4 text-slate-500 flex items-start gap-2">
                    <X className="h-3.5 w-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.ecommerce}</span>
                  </div>
                  <div className="p-4 md:col-span-4 font-semibold text-slate-900 bg-rose-50/30 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.lojaLocal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {storeBenefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. GUIA DIDÁTICO DE TAMANHOS & MEDIDAS */}
      <section id="medidas" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-slate-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Acerte de Primeira
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
              Guia Prático de Medidas Lupo
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Consulte nossa tabela simplificada antes de pedir pelo WhatsApp para receber exatamente o tamanho certo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sizeGuideData.map((item, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white text-xs font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{item.category}</h3>
                </div>

                <div className="mt-4 rounded-2xl bg-white border border-slate-200/80 p-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
                    Grade de Tamanhos:
                  </span>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-slate-900">{item.sizes}</p>
                </div>

                <p className="mt-3 text-xs text-slate-600 italic flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                  <span><strong>Dica da Consultora:</strong> {item.tip}</span>
                </p>
              </div>
            ))}
          </div>

          {/* WhatsApp Support Callout */}
          <div className="mt-10 rounded-2xl bg-rose-50 border border-rose-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-rose-950">Ficou com dúvida sobre o caimento ou elasticidade?</p>
              <p className="text-xs text-rose-700">Nossas consultoras medem a peça e auxiliam no WhatsApp antes do envio.</p>
            </div>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                "Olá! Gostaria de ajuda para escolher o tamanho correto de uma peça Lupo."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-5 py-3 transition shadow-md shadow-rose-600/20"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Tirar Dúvida de Tamanho</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. PROVA SOCIAL / AVALIAÇÕES REAIS GOOGLE MAPS */}
      <section id="avaliacoes" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-amber-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-800 border border-amber-200">
              Opinião dos Moradores da Serra
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
              O Que Dizem os Clientes
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Relatos reais extraídos do perfil oficial da loja na Rua Duque de Caxias, 90 no Google Maps.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-800 italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-slate-950">{t.name}</span>
                    <span className="block text-[11px] text-slate-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SIMULADOR DE PEDIDO / DELIVERY WHATSAPP */}
      <section id="contato" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-12 shadow-2xl shadow-slate-900/10">
            <div className="text-center">
              <span className="inline-block rounded-full bg-rose-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-rose-700 border border-rose-200">
                Atendimento Ágil
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-950">
                Consulte Estoque & Peça no WhatsApp
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Preencha os dados abaixo para gerar a solicitação formatada para a equipe da loja na Duque de Caxias:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Oliveira"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-rose-600 focus:ring-2 focus:ring-rose-600/10"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Linha de Interesse:
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-rose-600 focus:ring-2 focus:ring-rose-600/10"
                  >
                    <option value="Linha Térmica Heat (Segunda Pele & Meias Felpudas)">Linha Térmica Heat (Inverno Serrano)</option>
                    <option value="Ceroulas Térmicas Masculinas">Ceroulas Térmicas Masculinas</option>
                    <option value="Lupo Sport (Leggings, Tops e Bermudas)">Lupo Sport (Fitness & Corrida)</option>
                    <option value="Cuecas Boxer Modal / Microfibra">Cuecas Boxer Modal / Microfibra</option>
                    <option value="Lingeries sem Costura / Sutiãs sem Aro">Lingeries sem Costura / Sutiãs</option>
                    <option value="Pijamas Quentinhos Fleece / Algodão">Pijamas Quentinhos (Fleece / Algodão)</option>
                    <option value="Kits Prontos para Presente">Kits Prontos para Presente</option>
                    <option value="Meias Infantis / Adulto / Compressão">Meias em Geral</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Tamanho Estimado:
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-rose-600 focus:ring-2 focus:ring-rose-600/10"
                  >
                    <option value="Tamanho P (38/40)">Tamanho P (38/40)</option>
                    <option value="Tamanho M (42/44)">Tamanho M (42/44)</option>
                    <option value="Tamanho G (46/48)">Tamanho G (46/48)</option>
                    <option value="Tamanho GG (50/52)">Tamanho GG (50/52)</option>
                    <option value="Tamanho XG / Plus Size (54+)">Tamanho XG / Plus Size (54+)</option>
                    <option value="Infantil / Juvenil (4 a 14)">Infantil / Juvenil (4 a 14)</option>
                    <option value="Calçados / Meias 34 a 38">Calçados / Meias 34 a 38</option>
                    <option value="Calçados / Meias 39 a 44">Calçados / Meias 39 a 44</option>
                    <option value="Quero orientação da consultora">Quero orientação da consultora</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Como prefere receber?
                </label>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setDeliveryMode("Entrega Rápida em Teresópolis (Delivery)")}
                    className={`cursor-pointer rounded-xl border p-3.5 flex items-center gap-3 transition ${
                      deliveryMode.includes("Delivery")
                        ? "border-rose-600 bg-rose-50/60 text-slate-900 font-bold"
                        : "border-slate-200 bg-white text-slate-600"
                    }`}
                  >
                    <Truck className="h-4 w-4 text-rose-600 shrink-0" />
                    <span className="text-xs">Receber Hoje por Delivery</span>
                  </label>

                  <label
                    onClick={() => setDeliveryMode("Retirada Express em 15 Min na Duque de Caxias, 90")}
                    className={`cursor-pointer rounded-xl border p-3.5 flex items-center gap-3 transition ${
                      deliveryMode.includes("Retirada")
                        ? "border-rose-600 bg-rose-50/60 text-slate-900 font-bold"
                        : "border-slate-200 bg-white text-slate-600"
                    }`}
                  >
                    <Clock className="h-4 w-4 text-rose-600 shrink-0" />
                    <span className="text-xs">Retirar em 15 min na Loja</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Observações ou Peça Específica (Opcional):
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Gostaria de saber se tem camisa segunda pele térmica preta tamanho M e meias felpudas..."
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-rose-600 focus:ring-2 focus:ring-rose-600/10"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white py-4 text-base font-bold shadow-xl shadow-rose-600/25 transition-all active:scale-95"
              >
                <Send className="h-4 w-4" />
                <span>Enviar Pedido para o WhatsApp da Loja</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. LOCALIZAÇÃO NA DUQUE DE CAXIAS COM MAPA */}
      <section id="localizacao" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-block rounded-full bg-slate-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  Visite Nossa Loja Física
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Lupo Teresópolis
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Localizada no centro comercial da Várzea, a passos da praça e dos principais bancos e lojas.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Endereço Oficial</span>
                    <p className="text-sm font-semibold text-slate-900">{address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Horário de Funcionamento</span>
                    <p className="text-sm font-semibold text-slate-900">{hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Telefone & WhatsApp Comercial</span>
                    <p className="text-sm font-semibold text-slate-900">{phoneDisplay}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Rua+Duque+de+Caxias+90+Varzea+Teresopolis+RJ"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 text-xs font-bold transition"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 px-5 py-3 text-xs font-bold transition"
                >
                  <Phone className="h-4 w-4 text-rose-600" />
                  <span>Ligar Agora</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl h-[380px] sm:h-[420px]">
                <iframe
                  title="Localização Lupo Teresópolis na Duque de Caxias"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.037286694602!2d-42.96985012398453!3d-22.414002621376865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98529f7d2cb6d9%3A0x633190df03530960!2sR.%20Duque%20de%20Caxias%2C%2090%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025953-390!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SANFONADO (DÚVIDAS FREQUENTES) */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-slate-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Esclarecimentos Rápidos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
              Perguntas Frequentes
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Tudo o que você precisa saber sobre pronta entrega, trocas e funcionamento da loja.
            </p>
          </div>

          <div className="mt-12 space-y-3.5">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/40 transition"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 hover:bg-slate-100/60 transition"
                >
                  <span className="text-sm sm:text-base pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180 text-rose-600" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER - ZERO EMOJIS */}
      <footer className="border-t border-slate-200 bg-slate-950 text-slate-400 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Brand Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white">LUPO</span>
                <span className="text-xs font-black uppercase tracking-widest text-white bg-rose-600 px-2 py-0.5 rounded">
                  Teresópolis
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                Loja física exclusiva na Rua Duque de Caxias, 90. Linha térmica de inverno, meias felpudas, Lupo Sport e moda íntima com pronta entrega para toda a cidade.
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-300 block">Atendimento Oficial:</span>
                <p className="text-sm font-extrabold text-white">{phoneDisplay}</p>
              </div>
            </div>

            {/* Col 2: Linhas Principais */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Linhas Principais</h4>
              <ul className="mt-3 space-y-2 text-xs">
                <li>
                  <a href="#colecoes" className="hover:text-rose-400 transition">Especial Frio Serrano (Heat)</a>
                </li>
                <li>
                  <a href="#colecoes" className="hover:text-rose-400 transition">Ceroulas & Meias Felpudas</a>
                </li>
                <li>
                  <a href="#colecoes" className="hover:text-rose-400 transition">Lupo Sport (Seamless Dry)</a>
                </li>
                <li>
                  <a href="#colecoes" className="hover:text-rose-400 transition">Cuecas Boxer Modal & Microfibra</a>
                </li>
                <li>
                  <a href="#colecoes" className="hover:text-rose-400 transition">Pijamas Fleece & Algodão Nobre</a>
                </li>
                <li>
                  <a href="#colecoes" className="hover:text-rose-400 transition">Kits para Presentes</a>
                </li>
              </ul>
            </div>

            {/* Col 3: Horários & Endereço */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Loja Física</h4>
              <p className="mt-3 text-xs leading-relaxed text-slate-300 font-semibold">{address}</p>
              <p className="mt-3 text-xs text-slate-400">
                <strong className="text-slate-300">Horário:</strong> {hours}
              </p>
              <p className="mt-1 text-xs text-emerald-400 font-semibold">
                Estoque a pronta entrega na serra
              </p>
            </div>

            {/* Col 4: Acesso Rápido WhatsApp */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Canal Direto</h4>
              <p className="mt-3 text-xs text-slate-400">
                Envie uma mensagem e nossa equipe verifica tamanhos e cores na hora:
              </p>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 text-xs font-bold transition shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-800 text-center text-[11px] text-slate-500">
            © {new Date().getFullYear()} Lupo Teresópolis · Franquia Exclusiva na Rua Duque de Caxias, 90 · Todos os direitos reservados · Desenvolvimento e Performance por Cronos Agency
          </div>
        </div>
      </footer>

      {/* 12. MOBILE FIXED BOTTOM ACTION BAR (COMPENSADO POR pb-24 lg:pb-0) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 py-3 lg:hidden shadow-lg">
        <div className="flex items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-slate-50 py-3 text-xs font-bold text-slate-800 active:scale-95 transition"
          >
            <Phone className="h-4 w-4 text-rose-600" />
            <span>Ligar</span>
          </a>
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="flex-[2] flex items-center justify-center gap-1.5 rounded-xl bg-rose-600 py-3 text-xs font-bold text-white shadow-md shadow-rose-600/20 active:scale-95 transition"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Pedir no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* BOTÃO FLUTUANTE WHATSAPP - FECHAR COMPRA DO SITE COM A CRONOS */}
      <a
        href="https://wa.me/5521964639999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Lupo%20Teres%C3%B3polis%20e%20gostaria%20de%20ver%20como%20funciona%20para%20fechar%20a%20compra%20dele%20com%20voc%C3%AA."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Falar sobre a compra deste site no WhatsApp"
        title="Falar sobre a compra deste site"
      >
        <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <span className="absolute right-16 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap opacity-0 shadow-xl transition-opacity group-hover:opacity-100 lg:block pointer-events-none">
          Comprar este site
        </span>
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
