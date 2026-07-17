// ===================== DADOS DA METODOLOGIA (ambientado em serviços de saúde) =====================

const PEST_DATA = {
  politico: {
    label: "Ambiente Político",
    itens: [
      "Regulação sanitária e fiscalização (ANVISA, vigilância sanitária local)",
      "Política de reajuste e regulação de planos de saúde (ANS)",
      "Judicialização da saúde (ações judiciais por procedimentos/medicamentos)",
      "Política de saúde pública e investimento no SUS",
      "Legislação trabalhista para profissionais de saúde (jornada, plantões, escalas)",
      "Programas de acreditação e certificação de qualidade (ONA, ISO, Joint Commission)",
      "Política de incentivo à exportação de serviços de saúde (turismo médico)",
      "Compras públicas e licitações em saúde",
      "Legislação sobre telemedicina e prontuário eletrônico",
      "Direito do consumidor aplicado a serviços de saúde",
      "Políticas de segurança do paciente e obrigatoriedade de protocolos"
    ]
  },
  economico: {
    label: "Ambiente Econômico",
    itens: [
      "Inflação médica (custo de insumos e procedimentos acima da inflação geral)",
      "Taxa de juros e custo de capital para investimento em equipamentos",
      "Câmbio e dependência de insumos/equipamentos importados",
      "Renda disponível das famílias e adesão a planos de saúde privados",
      "Taxa de desemprego e perda de planos de saúde corporativos",
      "Crescimento do mercado de planos de saúde e seguros",
      "Consolidação e fusões entre operadoras de saúde",
      "Custo de mão de obra especializada (enfermagem, médicos, técnicos)",
      "Financiamento e crédito para expansão de clínicas/hospitais",
      "Participação da saúde privada no PIB",
      "Poder de compra das classes emergentes para saúde suplementar",
      "Custo de seguros de responsabilidade civil médica"
    ]
  },
  social: {
    label: "Ambiente Social",
    itens: [
      "Envelhecimento da população e aumento da demanda por cuidados crônicos",
      "Aumento de doenças crônicas não transmissíveis (diabetes, hipertensão, obesidade)",
      "Busca por bem-estar, prevenção e medicina integrativa",
      "Mudança de hábitos de consumo de saúde pós-pandemia",
      "Maior exigência do paciente como \"consumidor\" (experiência, conveniência)",
      "Redes sociais e reputação online de profissionais e instituições de saúde",
      "Aumento da conscientização sobre saúde mental",
      "Crescimento da telemedicina e do atendimento remoto",
      "Desigualdade de acesso a serviços de saúde entre regiões e classes sociais",
      "Maior participação feminina no mercado de trabalho em saúde",
      "Crescimento no nível educacional e informação sobre saúde (\"Dr. Google\")",
      "Aumento da expectativa de vida",
      "Mudança no perfil familiar (menos cuidadores informais disponíveis)",
      "Aumento da judicialização e das reclamações por parte de pacientes",
      "Valorização da humanização no atendimento",
      "Consumo ético e sustentabilidade em saúde (descarte de resíduos, ESG)",
      "Responsabilidade social e programas de saúde comunitária",
      "Diversidade e inclusão no atendimento a diferentes públicos"
    ]
  },
  tecnologico: {
    label: "Ambiente Tecnológico",
    itens: [
      "Telemedicina e teleconsulta",
      "Prontuário eletrônico e interoperabilidade de dados de saúde",
      "Inteligência artificial aplicada a diagnóstico e triagem",
      "Cirurgia robótica e técnicas minimamente invasivas",
      "Medicina personalizada e genômica",
      "Wearables e monitoramento remoto de pacientes",
      "Automação de processos administrativos e agendamento",
      "Cibersegurança e proteção de dados sensíveis de saúde (LGPD)",
      "Novos materiais e dispositivos médicos",
      "Redução do ciclo de vida de tecnologias e equipamentos médicos"
    ]
  }
};

const PORTER_DATA = {
  forca1: {
    label: "Força 1 · Possibilidade de entrada de novos concorrentes",
    curto: "Entrada de concorrentes",
    itens: [
      "É possível abrir uma clínica/consultório pequeno com baixo investimento inicial.",
      "Marcas de clínicas/hospitais concorrentes são pouco conhecidas ou os pacientes não são fiéis.",
      "Baixo investimento em infraestrutura, equipamentos e credenciamento já é suficiente para operar.",
      "Pacientes trocam facilmente de prestador, sem custo relevante.",
      "A tecnologia médica utilizada não é exclusiva/patenteada; não exige P&D intenso.",
      "A localização exigida (proximidade de hospitais, bairros de interesse) é fácil de replicar.",
      "Não há exigências regulatórias (habilitação sanitária, credenciamento) que restrinjam a entrada de novos prestadores.",
      "Prestadores já estabelecidos não têm vantagem relevante de experiência ou custo.",
      "É improvável uma disputa agressiva de preços com os novos entrantes.",
      "O mercado local não está saturado de oferta."
    ]
  },
  forca2: {
    label: "Força 2 · Rivalidade entre prestadores do mesmo ramo",
    curto: "Rivalidade entre prestadores",
    itens: [
      "Existe grande número de clínicas/prestadores concorrentes, com porte parecido.",
      "O setor de saúde nesta região mostra crescimento lento.",
      "Custos fixos altos (equipe, equipamentos, aluguel) pressionam a necessidade de ocupar a agenda.",
      "Há disputa acirrada de preços/tabelas com operadoras e pacientes particulares.",
      "Não há diferenciação clara entre os serviços oferecidos pelos concorrentes.",
      "É muito custoso para clínicas/hospitais já estabelecidos encerrar as atividades."
    ]
  },
  forca3: {
    label: "Força 3 · Ameaça de serviços substitutos",
    curto: "Serviços substitutos",
    itens: [
      "Existe grande quantidade de alternativas substitutas (telemedicina, apps de saúde, farmácias com serviços).",
      "Os serviços substitutos têm custo mais baixo que o atendimento presencial tradicional.",
      "Os prestadores existentes não costumam investir em marketing/imagem institucional.",
      "Os setores de serviços substitutos (telessaúde, medicina preventiva digital) estão em expansão, aumentando a concorrência."
    ]
  },
  forca4: {
    label: "Força 4 · Poder de negociação de pacientes e operadoras",
    curto: "Poder de pacientes/operadoras",
    itens: [
      "Operadoras de saúde negociam em grande volume e pressionam por tabelas menores.",
      "O serviço prestado representa parcela significativa do custo da operadora ou do orçamento do paciente.",
      "Os procedimentos/consultas oferecidos são padronizados, facilitando a comparação.",
      "Pacientes não têm custo relevante para trocar de prestador.",
      "Há ameaça de operadoras/redes verticalizarem e prestarem o serviço internamente.",
      "O serviço prestado não é percebido como essencial ou diferenciado pelo paciente.",
      "Pacientes e operadoras são bem informados sobre preços e qualidade (comparadores, avaliações online).",
      "Operadoras e pacientes trabalham com margens de reembolso ou orçamento apertado."
    ]
  },
  forca5: {
    label: "Força 5 · Poder de negociação dos fornecedores (equipamentos, insumos, profissionais)",
    curto: "Poder dos fornecedores",
    itens: [
      "O fornecimento de equipamentos/insumos médicos é concentrado em poucos fabricantes.",
      "Insumos e equipamentos médicos não são facilmente substituíveis por alternativas.",
      "A clínica/hospital não é um cliente relevante para os grandes fornecedores.",
      "Profissionais especializados (médicos, técnicos) são essenciais e escassos.",
      "Os equipamentos/insumos comprados são diferenciados ou exclusivos.",
      "Existem custos altos para trocar de fornecedor de equipamentos/insumos.",
      "Há ameaça permanente de fornecedores (fabricantes, redes de diagnóstico) entrarem no negócio assistencial."
    ]
  }
};

const CICLO_DATA = {
  introducao: {
    label: "Introdução",
    itens: [
      "O serviço/especialidade representa ou cria uma nova frente de atuação, com pouca ou nenhuma concorrência estabelecida.",
      "O serviço ainda não tem mercado definido: a organização precisa educar pacientes e médicos referenciadores sobre seu valor.",
      "Não há canal de encaminhamento/distribuição consolidado; a organização está construindo essa rede.",
      "A capacidade de atendimento ainda é baixa, com poucos profissionais capacitados e custos elevados.",
      "O serviço exige investimento pesado em divulgação para explicar aos pacientes/médicos do que se trata.",
      "Não há padrão de protocolo estabelecido: há muita variação entre os poucos que já oferecem esse serviço.",
      "O mercado potencial deste serviço é muito maior do que a demanda atual capturada."
    ]
  },
  crescimento: {
    label: "Crescimento",
    itens: [
      "O serviço está em forte crescimento, superior ao crescimento do setor de saúde como um todo.",
      "O serviço já é reconhecido; a maioria dos pacientes está experimentando pela primeira vez ou é usuária recente.",
      "O serviço é \"desejado\" por muitos pacientes que ainda não o utilizam, mas pretendem utilizar em breve.",
      "Os canais de encaminhamento (médicos referenciadores, operadoras) aumentam rapidamente.",
      "A organização investe para aumentar a capacidade de atendimento e acompanhar a demanda.",
      "Novos concorrentes entram no mercado para atender a demanda crescente.",
      "A capacidade instalada não dá conta da demanda; pode haver fila de espera para o atendimento.",
      "A comunicação deixa de ser só educativa e passa a reforçar marca e reputação."
    ]
  },
  maturidade: {
    label: "Maturidade",
    itens: [
      "O serviço está em um segmento de baixo crescimento, equiparado ao crescimento do setor de saúde em geral.",
      "O serviço é bem estabelecido; a maioria dos pacientes já utilizou ou utiliza rotineiramente.",
      "O serviço atingiu sua capacidade máxima; crescer exige atingir novos públicos ou nichos.",
      "Os canais de encaminhamento estão estáveis e saturados; crescer exige investir em novos canais (ex: digital).",
      "A capacidade instalada do setor está saturada ou ociosa; há pouco investimento em expansão.",
      "O setor passa por um forte movimento de fusões e aquisições entre clínicas e redes.",
      "A oferta de prestadores é superior à demanda.",
      "As organizações estabelecidas têm tradição no setor e/ou marca forte.",
      "As organizações monitoram de perto sua participação de mercado e a ação dos concorrentes.",
      "As organizações operam com escala e atendem grandes volumes ou populações."
    ]
  },
  declinio: {
    label: "Declínio",
    itens: [
      "A demanda por este serviço está em declínio ou bem abaixo do que já representou no passado.",
      "Vários prestadores estão desinvestindo nesta linha de serviço.",
      "A tecnologia ou abordagem clínica utilizada é vista como obsoleta.",
      "Há novos serviços/tecnologias que substituem esta linha, e esses substitutos estão em expansão.",
      "Os pacientes que ainda buscam este serviço têm perfil específico (tradicionais, sem acesso a alternativas).",
      "Para sobreviver, os prestadores precisam se especializar em um nicho.",
      "Os canais de encaminhamento são específicos para esse nicho remanescente.",
      "Há hoje muito menos prestadores atuando nesta linha de serviço do que no passado."
    ]
  }
};

const ESTRATEGIAS_DATA = {
  custo: {
    label: "Liderança em custo / excelência operacional",
    itens: [
      "A organização possui capacidade para atendimento em grande escala/volume.",
      "A organização reduz custos constantemente, buscando eficiência operacional.",
      "A organização controla rigidamente custos e despesas (gestão de insumos, ociosidade, glosas).",
      "A organização tem estrutura enxuta, minimizando custos fora do atendimento direto ao paciente.",
      "A organização oferece incentivos baseados em produtividade (metas de atendimento).",
      "A organização tem processos bem definidos, evitando retrabalho e duplicidade.",
      "A organização tem acesso a capital de baixo custo para investir em equipamentos e estrutura.",
      "A organização padroniza protocolos para ganhar eficiência sem perder segurança.",
      "A organização tem boa capacidade de engenharia de processos assistenciais.",
      "A organização tem baixo custo logístico e operacional (agendamento, suprimentos, escalas).",
      "A organização negocia agressivamente com fornecedores para reduzir custos.",
      "A organização oferece atendimento padronizado, sem grande customização.",
      "Serviços adicionais (personalização, conforto extra) são cobrados à parte.",
      "A organização opera bem em grande escala/alto volume de pacientes.",
      "A organização tem reputação de oferecer o atendimento mais acessível do setor.",
      "A organização oferece atendimento rápido e padronizado, de baixo custo."
    ]
  },
  diferenciacao: {
    label: "Diferenciação / inovação",
    itens: [
      "A organização tem forte imagem de marca construída por meio de comunicação institucional.",
      "A organização tem grande habilidade de marketing e relacionamento com pacientes e médicos.",
      "A organização é ágil em incorporar novas tecnologias e abordagens clínicas.",
      "Há forte coordenação entre o corpo clínico e as áreas de inovação/pesquisa.",
      "A organização tem reputação de ser líder em qualidade ou tecnologia no setor.",
      "A organização tem longa tradição no setor, ou traz reputação de outra área com grande sinergia.",
      "A organização reconhece e avalia a equipe de forma subjetiva (ambiente de trabalho, flexibilidade), não só por metas.",
      "A organização tem peculiaridades (história, especialistas renomados) que a tornam única.",
      "A organização desenvolve planos de cuidado personalizados, sob medida para o paciente.",
      "A organização tem rede de fornecedores/parceiros confiáveis e, às vezes, exclusivos.",
      "A organização oferece atendimento exclusivo (tecnologia, conforto, precisão diagnóstica, experiência do paciente).",
      "Pacientes pagam valores premium para acessar os serviços da organização.",
      "A organização tem programas de relacionamento e acompanhamento contínuo do paciente."
    ]
  },
  foco: {
    label: "Foco (diferenciação ou custo em um segmento)",
    itens: [
      "A organização atende um segmento específico (especialidade, faixa etária, região) dentro de um setor mais amplo.",
      "A organização é líder nesse segmento específico, mas tem pouca presença no setor de saúde como um todo.",
      "A organização oferece cuidados e facilidades únicas para o grupo de pacientes que atende.",
      "A organização é reconhecida por ser especializada nesse segmento/nicho.",
      "A organização tem rede de relacionamento personalizada dentro do seu nicho de atuação."
    ]
  }
};

const NEGOCIO_PERGUNTAS = [
  { key: "q1", titulo: "1. Produtos e serviços de saúde atuais", ajuda: "Pense com os olhos da concorrência ampliada: não só os procedimentos/consultas, mas os serviços de apoio (agendamento, acompanhamento, telemonitoramento), a jornada do paciente, e o que cada serviço resolve para quem o procura. Enumere as linhas de serviço da organização (especialidades, procedimentos, exames, programas de saúde)." },
  { key: "q2", titulo: "2. Negócio atual da organização", ajuda: "Tomando por base o item 1, defina o negócio até agora: o que há em comum por trás desses serviços de saúde? (ex: promoção de saúde, tratamento de uma condição específica, conveniência/acesso, excelência clínica em um nicho)" },
  { key: "q3", titulo: "3. Avaliação do negócio atual", ajuda: "Há alguma nova linha de serviço, especialidade ou modelo de atendimento (ex: telemedicina, day clinic, home care) em que a organização pode ou quer entrar, que está próxima e exigirá pouco esforço?" },
  { key: "q4", titulo: "4. Negócio no futuro", ajuda: "Escreva o novo negócio considerando os novos serviços/especialidades possíveis de serem incorporados, observando o que eles têm em comum." }
];

const PLANOS_AREAS = [
  { key: "financeiro", label: "Financeiro" },
  { key: "commkt", label: "Comercial & Marketing" },
  { key: "processo", label: "Processos" },
  { key: "rh", label: "Pessoas & RH" }
];

const ESCALA_CONCORDANCIA = ["", "Discordo totalmente", "Discordo", "Parcialmente verdadeiro", "Concordo", "Concordo totalmente"];
const ESCALA_IMPORTANCIA = ["", "Desprezível", "Baixa", "Média", "Alta", "Muito alta"];
// ===================== CÁLCULOS AGREGADOS =====================

function mediaSimples(arr) {
  const validos = arr.filter((v) => v > 0);
  if (!validos.length) return 0;
  return validos.reduce((a, b) => a + b, 0) / validos.length;
}

function pestResumo() {
  const out = {};
  for (const k in PEST_DATA) {
    const linhas = S.pest[k];
    const ops = linhas.map((l) => l.op).filter((v) => v > 0);
    const ams = linhas.map((l) => l.am).filter((v) => v > 0);
    out[k] = {
      label: PEST_DATA[k].label,
      oportunidade: ops.length ? mediaSimples(ops) : 0,
      ameaca: ams.length ? mediaSimples(ams) : 0
    };
  }
  return out;
}

function porterResumo() {
  const out = {};
  for (const k in PORTER_DATA) {
    out[k] = { label: PORTER_DATA[k].curto, media: mediaSimples(S.porter[k]) };
  }
  return out;
}

function porterMediaGeral() {
  const meds = Object.values(porterResumo()).map((f) => f.media).filter((v) => v > 0);
  return meds.length ? meds.reduce((a, b) => a + b, 0) / meds.length : 0;
}

function cicloResumo() {
  const out = {};
  for (const k in CICLO_DATA) {
    out[k] = { label: CICLO_DATA[k].label, media: mediaSimples(S.ciclo[k]) };
  }
  return out;
}

function cicloEstagioDominante() {
  const r = cicloResumo();
  let melhor = null;
  for (const k in r) {
    if (r[k].media > 0 && (!melhor || r[k].media > r[melhor].media)) melhor = k;
  }
  return melhor ? r[melhor].label : "Ainda sem dados suficientes";
}

function estrategiasResumo() {
  const out = {};
  for (const k in ESTRATEGIAS_DATA) {
    out[k] = { label: ESTRATEGIAS_DATA[k].label, media: mediaSimples(S.estrategias[k]) };
  }
  return out;
}

function estrategiaDominante() {
  const r = estrategiasResumo();
  let melhor = null;
  for (const k in r) {
    if (r[k].media > 0 && (!melhor || r[k].media > r[melhor].media)) melhor = k;
  }
  return melhor ? r[melhor].label : "Ainda sem dados suficientes";
}

// listas ordenadas para sugerir na SWOT
function topPestOportunidades(n) {
  const list = [];
  for (const k in PEST_DATA) {
    S.pest[k].forEach((linha, i) => {
      if (linha.op > 0) list.push({ texto: PEST_DATA[k].itens[i], nota: linha.op, origem: PEST_DATA[k].label });
    });
  }
  return list.sort((a, b) => b.nota - a.nota).slice(0, n);
}
function topPestAmeacas(n) {
  const list = [];
  for (const k in PEST_DATA) {
    S.pest[k].forEach((linha, i) => {
      if (linha.am > 0) list.push({ texto: PEST_DATA[k].itens[i], nota: linha.am, origem: PEST_DATA[k].label });
    });
  }
  return list.sort((a, b) => b.nota - a.nota).slice(0, n);
}

// progresso 0-100 por etapa
function progressoNegocio() {
  const total = NEGOCIO_PERGUNTAS.length;
  const preenchidos = NEGOCIO_PERGUNTAS.filter((p) => S.negocio[p.key] && S.negocio[p.key].trim().length > 0).length;
  return Math.round((preenchidos / total) * 100);
}
function progressoPest() {
  let total = 0, feito = 0;
  for (const k in PEST_DATA) {
    S.pest[k].forEach((l) => { total += 2; if (l.op > 0) feito++; if (l.am > 0) feito++; });
  }
  return total ? Math.round((feito / total) * 100) : 0;
}
function progressoPorter() {
  let total = 0, feito = 0;
  for (const k in PORTER_DATA) { S.porter[k].forEach((v) => { total++; if (v > 0) feito++; }); }
  return total ? Math.round((feito / total) * 100) : 0;
}
function progressoCiclo() {
  let total = 0, feito = 0;
  for (const k in CICLO_DATA) { S.ciclo[k].forEach((v) => { total++; if (v > 0) feito++; }); }
  return total ? Math.round((feito / total) * 100) : 0;
}
function progressoEstrategias() {
  let total = 0, feito = 0;
  for (const k in ESTRATEGIAS_DATA) { S.estrategias[k].forEach((v) => { total++; if (v > 0) feito++; }); }
  return total ? Math.round((feito / total) * 100) : 0;
}
function progressoFcs() {
  return S.fcs.linhas.length > 1 && S.fcs.fatores.length > 0 ? 100 : (S.fcs.fatores.length > 0 ? 40 : 0);
}
function progressoSwot() {
  const n = S.swot.oportunidades.length + S.swot.ameacas.length + S.swot.forcas.length + S.swot.fraquezas.length;
  return n === 0 ? 0 : Math.min(100, n * 10);
}
function progressoMv() {
  const campos = ["missaoAtual", "missaoFutura", "visaoAtual", "visaoFutura", "valores"];
  const feitos = campos.filter((c) => S.mv[c] && S.mv[c].trim().length > 0).length;
  return Math.round((feitos / campos.length) * 100);
}
function progressoPlanos() {
  const total = PLANOS_AREAS.reduce((acc, a) => acc + S.planos[a.key].length, 0);
  return total === 0 ? 0 : Math.min(100, total * 12);
}

const ETAPAS = [
  { key: "geral", label: "Visão geral", num: "" },
  { key: "negocio", label: "Definição do negócio", num: "1", progresso: progressoNegocio },
  { key: "pest", label: "Análise PEST", num: "2", progresso: progressoPest },
  { key: "porter", label: "5 Forças de Porter", num: "3", progresso: progressoPorter },
  { key: "ciclo", label: "Ciclo de vida do setor", num: "4", progresso: progressoCiclo },
  { key: "fcs", label: "Fatores críticos de sucesso", num: "5", progresso: progressoFcs },
  { key: "estrategias", label: "Estratégias genéricas", num: "6", progresso: progressoEstrategias },
  { key: "swot", label: "Síntese SWOT", num: "7", progresso: progressoSwot },
  { key: "mv", label: "Missão, visão e valores", num: "8", progresso: progressoMv },
  { key: "planos", label: "Planos de ação", num: "9", progresso: progressoPlanos }
];
// ===================== UI: CASCA, BARRA LATERAL, HELPERS =====================

function esc(s) {
  return (s || "").toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function pathAttr(path) {
  return `data-path='${JSON.stringify(path)}'`;
}

function scoreRow(path, value, opts) {
  opts = opts || {};
  const max = opts.max || 5;
  const labels = opts.labels;
  let btns = "";
  for (let i = 1; i <= max; i++) {
    const active = value === i ? " active" : "";
    const title = labels && labels[i] ? ` title="${esc(labels[i])}"` : "";
    btns += `<button type="button" class="scorebtn${active}" data-score-path='${JSON.stringify(path)}' data-sv="${i}"${title}>${i}</button>`;
  }
  const clearActive = value === 0 ? " active" : "";
  btns += `<button type="button" class="scorebtn clear${clearActive}" data-score-path='${JSON.stringify(path)}' data-sv="0" title="Sem avaliação">–</button>`;
  return `<div class="score-row">${btns}</div>`;
}

function progressBar(pct, tone) {
  tone = tone || "";
  return `<div class="pbar ${tone}"><div class="pbar-fill" style="width:${pct}%"></div></div>`;
}

function renderShell() {
  document.body.classList.toggle("somente-leitura", !souEditor());
  const root = document.getElementById("app");
  root.innerHTML = `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">PE</div>
          <div class="brand-text">
            <div class="brand-title">Planejamento<br/>Estratégico</div>
            <div class="brand-sub">Roteiro de MBA · edição em equipe</div>
          </div>
        </div>
        <div class="modo-switch">
          <button type="button" class="modo-btn ${modoAtual === "plano" ? "active" : ""}" data-action="modo-plano">Planejamento</button>
          <button type="button" class="modo-btn ${modoAtual === "jogo" ? "active" : ""}" data-action="modo-jogo">Business Game</button>
        </div>
        <nav id="nav" class="nav"></nav>
        <div class="sidebar-foot">
          <div class="foot-label">Participantes</div>
          <div id="participantesList" class="participantes-list"></div>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <div class="topbar-left">
            <input id="empresaInput" class="empresa-input" placeholder="Nome da empresa / unidade de negócio" value="${esc(S.meta.empresa)}" ${pathAttr(["meta", "empresa"])} ${souEditor() && modoAtual === "plano" && planoTimeAtualId ? "" : "disabled"} style="${modoAtual === "plano" && planoTimeAtualId ? "" : "visibility:hidden"}" />
          </div>
          <div class="topbar-right">
            <span id="saveStatus" class="save-status">${souEditor() ? "Pronto" : "Modo visualização"}</span>
            <span class="user-badge">${esc(meuNome)} <span class="role-pill role-${minhaRole}">${minhaRole}</span></span>
            <button id="sairBtn" class="who-btn" type="button">Sair</button>
          </div>
        </header>
        ${!souEditor() ? `<div class="readonly-banner">Você está em modo visualização — pode ler todo o plano, mas as alterações ficam bloqueadas.</div>` : ""}
        <div id="stage" class="stage"></div>
      </main>
    </div>
  `;

  document.getElementById("stage").addEventListener("input", onInputDelegated);
  document.getElementById("stage").addEventListener("click", onClickDelegated);
  document.getElementById("stage").addEventListener("change", onChangeDelegated);
  document.getElementById("empresaInput").addEventListener("input", onInputDelegated);
  document.getElementById("nav").addEventListener("click", onNavClick);
  document.querySelector(".modo-switch").addEventListener("click", onClickDelegated);
  document.getElementById("sairBtn").addEventListener("click", sair);

  renderAll();
  if (modoAtual === "jogo" && !jogoSessoes.length) carregarSessoesJogo().then(renderStageOnly);
}

let investimentoDebounceTimers = {};
function onChangeDelegated(e) {
  // reservado para eventos futuros de 'change' (checkbox/select); investimentos usam 'input', ver onInputDelegated
}

function onNavClick(e) {
  const btn = e.target.closest("[data-stage]");
  if (!btn) return;
  stageAtual = btn.getAttribute("data-stage");
  renderAll();
}

function onInputDelegated(e) {
  const investInput = e.target.closest("[data-jogo-investimento]");
  if (investInput) {
    const campoId = investInput.getAttribute("data-jogo-investimento");
    const valor = Math.max(0, Number(investInput.value) || 0);
    jogoMeusInvestimentosRascunho[campoId] = valor;
    atualizarBarraOrcamentoDOM();
    clearTimeout(investimentoDebounceTimers[campoId]);
    investimentoDebounceTimers[campoId] = setTimeout(() => salvarMeuInvestimento(campoId, valor), 700);
    return;
  }
  if (!souEditor()) return;
  const t = e.target;
  const pathStr = t.getAttribute("data-path");
  if (!pathStr) return;
  const path = JSON.parse(pathStr);
  setPath(S, path, t.value);
  scheduleSave();
}

// atualiza só a barra de orçamento e o "efeito %" de cada campo, lendo os valores
// direto do DOM — evita re-renderizar tudo e perder o foco de quem está digitando
function atualizarBarraOrcamentoDOM() {
  const inputs = document.querySelectorAll("[data-jogo-investimento]");
  let total = 0;
  inputs.forEach((inp) => {
    const valor = Math.max(0, Number(inp.value) || 0);
    total += valor;
    const campo = campoPorId(inp.getAttribute("data-jogo-investimento"));
    const fatorSpan = inp.closest(".investimento-item-input");
    const fatorEl = fatorSpan ? fatorSpan.querySelector(".investimento-fator") : null;
    if (fatorEl && campo) {
      const fator = fatorInvestimento(valor, campo.valorReferencia);
      fatorEl.textContent = valor > 0 ? "efeito " + Math.round(fator * 100) + "%" : "";
    }
  });
  const barra = document.querySelector(".orcamento-barra");
  if (!barra) return;
  const orcamento = GAME_DESIGN.orcamentoPorRodada;
  const restante = orcamento - total;
  const estourou = restante < 0;
  barra.classList.toggle("orcamento-estourado", estourou);
  barra.innerHTML = `
    <span>Orçamento da rodada: <strong>${fmtR$Curto(orcamento)}</strong></span>
    <span>Alocado: <strong>${fmtR$Curto(total)}</strong></span>
    <span>${estourou ? "Excedeu em " + fmtR$Curto(-restante) + " — reduza algum campo" : "Restante: " + fmtR$Curto(restante)}</span>
  `;
}

function onClickDelegated(e) {
  if (!souEditor()) return;
  const scoreBtn = e.target.closest("[data-score-path]");
  if (scoreBtn) {
    const path = JSON.parse(scoreBtn.getAttribute("data-score-path"));
    const val = parseInt(scoreBtn.getAttribute("data-sv"), 10);
    setPath(S, path, val);
    scheduleSave();
    renderStageOnly();
    return;
  }
  const actionEl = e.target.closest("[data-action]");
  if (actionEl) handleAction(actionEl.getAttribute("data-action"), actionEl);
}

function handleAction(action, el) {
  if (action === "modo-plano" || action === "modo-jogo") {
    modoAtual = action === "modo-plano" ? "plano" : "jogo";
    if (modoAtual === "plano" && !planoTimeAtualId) {
      carregarMeusTimes().then(renderShell);
    } else {
      renderShell();
    }
    return;
  }
  if (action === "plano-selecionar-time") {
    selecionarTimeParaPlano(el.getAttribute("data-team-id"));
    return;
  }
  if (action === "plano-trocar-time") {
    planoTimeAtualId = null;
    if (planoCanalRealtime) { sbClient.removeChannel(planoCanalRealtime); planoCanalRealtime = null; }
    carregarMeusTimes().then(renderAll);
    return;
  }
  if (action.indexOf("jogo-") === 0) {
    handleJogoAction(action, el);
    return;
  }
  if (action === "planos-area") {
    planoAreaAtual = el.getAttribute("data-area");
    renderStageOnly();
    return;
  }
  if (!souEditor()) return;
  if (action === "fcs-add-fator") {
    S.fcs.fatores.push("Novo fator");
    S.fcs.linhas.forEach((l) => l.notas.push(0));
    scheduleSave(); renderStageOnly(); return;
  }
  if (action === "fcs-remove-fator") {
    const i = parseInt(el.getAttribute("data-i"), 10);
    S.fcs.fatores.splice(i, 1);
    S.fcs.linhas.forEach((l) => l.notas.splice(i, 1));
    scheduleSave(); renderStageOnly(); return;
  }
  if (action === "fcs-add-linha") {
    S.fcs.linhas.push({ nome: "Novo concorrente", notas: S.fcs.fatores.map(() => 0) });
    scheduleSave(); renderStageOnly(); return;
  }
  if (action === "fcs-remove-linha") {
    const i = parseInt(el.getAttribute("data-i"), 10);
    S.fcs.linhas.splice(i, 1);
    scheduleSave(); renderStageOnly(); return;
  }
  if (action === "planos-add-row") {
    S.planos[planoAreaAtual].push({ indicador: "", meta: "", acoes: "", responsavel: "", prazo: "", recursos: "" });
    scheduleSave(); renderStageOnly(); return;
  }
  if (action === "planos-remove-row") {
    const i = parseInt(el.getAttribute("data-i"), 10);
    S.planos[planoAreaAtual].splice(i, 1);
    scheduleSave(); renderStageOnly(); return;
  }
  if (action === "swot-add") {
    S.swot[el.getAttribute("data-cat")].push("");
    scheduleSave(); renderStageOnly(); return;
  }
  if (action === "swot-remove") {
    const cat = el.getAttribute("data-cat");
    const i = parseInt(el.getAttribute("data-i"), 10);
    S.swot[cat].splice(i, 1);
    scheduleSave(); renderStageOnly(); return;
  }
  if (action === "swot-suggest-op") {
    const atuais = new Set(S.swot.oportunidades);
    topPestOportunidades(5).forEach((o) => atuais.add(o.texto));
    S.swot.oportunidades = Array.from(atuais);
    scheduleSave(); renderStageOnly(); return;
  }
  if (action === "swot-suggest-am") {
    const atuais = new Set(S.swot.ameacas);
    topPestAmeacas(5).forEach((a) => atuais.add(a.texto));
    S.swot.ameacas = Array.from(atuais);
    scheduleSave(); renderStageOnly(); return;
  }
}

function renderAll() {
  renderNav();
  renderParticipantes();
  renderStageOnly();
  const empresaInput = document.getElementById("empresaInput");
  if (empresaInput && document.activeElement !== empresaInput) empresaInput.value = S.meta.empresa;
}

function renderNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  if (modoAtual === "jogo") {
    nav.innerHTML = `<div class="nav-jogo-info">
      <div class="nav-jogo-titulo">Business Game</div>
      <p class="nav-jogo-texto">${jogoSessaoAtual ? esc(jogoSessaoAtual.nome) : "Escolha ou crie uma partida"}</p>
      ${jogoSessaoAtual ? `<button type="button" class="btn btn-ghost btn-xs" data-action="jogo-voltar-lista">← Trocar de partida</button>` : ""}
    </div>`;
    return;
  }
  if (!planoTimeAtualId) {
    nav.innerHTML = `<div class="nav-jogo-info">
      <div class="nav-jogo-titulo">Planejamento Estratégico</div>
      <p class="nav-jogo-texto">Escolha o time para o qual você vai planejar</p>
    </div>`;
    return;
  }
  nav.innerHTML = `<div class="nav-jogo-info" style="padding-bottom:0">
      <p class="nav-jogo-texto">Plano de <strong>${esc(planoTimeAtualNome)}</strong> · <button type="button" class="link-btn" data-action="plano-trocar-time" style="font-size:11px">trocar</button></p>
    </div>` + ETAPAS.map((et) => {
    const active = et.key === stageAtual ? " active" : "";
    const pct = et.progresso ? et.progresso() : null;
    return `
      <button type="button" class="nav-item${active}" data-stage="${et.key}">
        <span class="nav-num">${et.num}</span>
        <span class="nav-body">
          <span class="nav-label">${et.label}</span>
          ${pct !== null ? progressBar(pct) : ""}
        </span>
      </button>`;
  }).join("");
}

function renderParticipantes() {
  const el = document.getElementById("participantesList");
  if (!el) return;
  if (!S.participantes.length) { el.innerHTML = `<span class="muted">Ninguém ainda.</span>`; return; }
  el.innerHTML = S.participantes.map((p) => `<span class="chip">${esc(p)}</span>`).join("");
}

function renderStageOnly() {
  const stage = document.getElementById("stage");
  if (!stage) return;
  if (modoAtual === "jogo") {
    stage.innerHTML = renderJogo();
    renderNav();
    return;
  }
  if (!planoTimeAtualId) {
    stage.innerHTML = renderEscolherTimeParaPlano();
    renderNav();
    return;
  }
  const fns = {
    geral: renderGeral, negocio: renderNegocio, pest: renderPest, porter: renderPorter,
    ciclo: renderCiclo, fcs: renderFcs, estrategias: renderEstrategias, swot: renderSwot,
    mv: renderMv, planos: renderPlanos
  };
  stage.innerHTML = fns[stageAtual] ? fns[stageAtual]() : "";
  renderNav();
}

function renderEscolherTimeParaPlano() {
  return `
    <div class="stage-head">
      <div class="eyebrow">Planejamento Estratégico</div>
      <h1>Para qual time você vai planejar?</h1>
      <p class="lede">Cada time do Business Game tem o próprio Planejamento Estratégico — as decisões do jogo serão avaliadas em relação a esse plano.</p>
    </div>
    <div class="card">
      ${meusTimesDoUsuario.length ? meusTimesDoUsuario.map((t) => `
        <div class="sessao-item">
          <div><strong>${esc(t.teamNome)}</strong><span class="muted"> · partida "${esc(t.sessaoNome)}"</span></div>
          <button class="btn btn-primary btn-xs" type="button" data-action="plano-selecionar-time" data-team-id="${t.teamId}">Planejar para este time</button>
        </div>`).join("") : `
        <p class="card-note">Você ainda não está em nenhum time de uma partida do Business Game. Peça ao facilitador para te adicionar a um time (pelo seu e-mail de login) — depois disso, o plano desse time aparece aqui automaticamente.</p>
      `}
    </div>
  `;
}
// ===================== ETAPA: VISÃO GERAL (DASHBOARD) =====================

function renderGeral() {
  const pest = pestResumo();
  const porter = porterResumo();
  const porterMedia = porterMediaGeral();
  const estagio = cicloEstagioDominante();
  const perfil = estrategiaDominante();

  const etapasSemGeral = ETAPAS.filter((e) => e.key !== "geral");
  const mediaGeral = Math.round(etapasSemGeral.reduce((acc, e) => acc + (e.progresso ? e.progresso() : 0), 0) / etapasSemGeral.length);

  return `
    <div class="stage-head">
      <div class="eyebrow">Visão geral</div>
      <h1>${S.meta.empresa ? esc(S.meta.empresa) : "Seu plano estratégico"}</h1>
      <p class="lede">Este roteiro segue o processo clássico de planejamento estratégico usado em MBAs: entender o negócio, ler o ambiente externo, avaliar a posição competitiva, sintetizar em uma SWOT, revisar missão e visão, e desdobrar tudo em planos de ação por área. Preencha em qualquer ordem — a equipe toda edita o mesmo documento em tempo real.</p>
    </div>

    <div class="grid-cards">
      <div class="card card-progress">
        <div class="card-kicker">Progresso do plano</div>
        <div class="big-number">${mediaGeral}%</div>
        ${progressBar(mediaGeral)}
        <div class="mini-legend">${etapasSemGeral.map((e) => `<span>${e.label}: ${e.progresso ? e.progresso() : 0}%</span>`).join("")}</div>
      </div>

      <div class="card">
        <div class="card-kicker">Ambiente externo · PEST</div>
        ${Object.keys(pest).map((k) => `
          <div class="bar-line">
            <span class="bar-label">${pest[k].label}</span>
            <div class="dual-bar">
              <div class="dual-bar-op" style="width:${(pest[k].oportunidade / 5) * 100}%"></div>
              <div class="dual-bar-am" style="width:${(pest[k].ameaca / 5) * 100}%"></div>
            </div>
            <span class="bar-vals">Op ${pest[k].oportunidade.toFixed(1)} · Am ${pest[k].ameaca.toFixed(1)}</span>
          </div>`).join("")}
        <div class="card-note">Barra clara = intensidade média das oportunidades · barra escura = intensidade média das ameaças.</div>
      </div>

      <div class="card">
        <div class="card-kicker">Atratividade do setor · 5 Forças de Porter</div>
        ${Object.keys(porter).map((k) => `
          <div class="bar-line">
            <span class="bar-label">${porter[k].label}</span>
            <div class="single-bar"><div class="single-bar-fill" style="width:${(porter[k].media / 5) * 100}%"></div></div>
            <span class="bar-vals">${porter[k].media ? porter[k].media.toFixed(1) : "–"}</span>
          </div>`).join("")}
        <div class="card-note">Média geral das forças: <strong>${porterMedia ? porterMedia.toFixed(1) : "–"} / 5</strong> ${porterMedia ? (porterMedia >= 3.5 ? "(setor pouco atrativo — forças fortes)" : porterMedia <= 2.2 ? "(setor atrativo — forças fracas)" : "(atratividade intermediária)") : ""}</div>
      </div>

      <div class="card card-two">
        <div>
          <div class="card-kicker">Estágio do ciclo de vida</div>
          <div class="highlight-value">${esc(estagio)}</div>
        </div>
        <div>
          <div class="card-kicker">Perfil estratégico dominante</div>
          <div class="highlight-value">${esc(perfil)}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-kicker">Como usar este roteiro</div>
      <ol class="howto">
        <li><strong>Negócio</strong> — alinhe o que a empresa realmente vende e para onde ela vai.</li>
        <li><strong>PEST</strong> e <strong>5 Forças</strong> — leiam o ambiente externo e o setor juntos, cada pessoa pode marcar suas notas.</li>
        <li><strong>Ciclo de vida</strong> e <strong>Estratégias genéricas</strong> — avaliem em que fase o setor está e qual perfil competitivo a empresa realmente pratica.</li>
        <li><strong>Fatores críticos de sucesso</strong> — comparem a empresa aos concorrentes nos fatores que decidem quem vence no setor.</li>
        <li><strong>SWOT</strong> — a ferramenta sugere oportunidades/ameaças com base nas notas da PEST; vocês completam forças e fraquezas.</li>
        <li><strong>Missão, visão e valores</strong> — decidam se precisam ser revistas à luz de tudo isso.</li>
        <li><strong>Planos de ação</strong> — desdobrem em metas e responsáveis por Financeiro, Comercial/Marketing, Processos e Pessoas.</li>
      </ol>
    </div>
  `;
}

// ===================== ETAPA: NEGÓCIO =====================

function renderNegocio() {
  return `
    <div class="stage-head">
      <div class="eyebrow">Etapa 1</div>
      <h1>Definição do negócio</h1>
      <p class="lede">Antes de olhar para fora, alinhem o que a empresa efetivamente é hoje — e o que ela pode vir a ser.</p>
    </div>
    <div class="card">
      ${NEGOCIO_PERGUNTAS.map((p) => `
        <div class="field-block">
          <label class="field-title">${p.titulo}</label>
          <p class="field-help">${p.ajuda}</p>
          <textarea class="field-textarea" rows="4" ${pathAttr(["negocio", p.key])} placeholder="Escreva aqui...">${esc(S.negocio[p.key])}</textarea>
        </div>
      `).join("")}
    </div>
  `;
}

// ===================== ETAPA: PEST =====================

function renderPest() {
  const grupos = Object.keys(PEST_DATA).map((k) => {
    const dados = PEST_DATA[k];
    const linhas = S.pest[k];
    return `
      <details class="accordion" open>
        <summary>${dados.label} <span class="accordion-count">${linhas.length} variáveis</span></summary>
        <div class="pest-table">
          <div class="pest-head">
            <span></span><span>Oportunidade (1–5)</span><span>Ameaça (1–5)</span><span>Justificativa</span>
          </div>
          ${dados.itens.map((texto, i) => `
            <div class="pest-row">
              <span class="pest-var">${esc(texto)}</span>
              <span>${scoreRow(["pest", k, i, "op"], linhas[i].op, { labels: ESCALA_IMPORTANCIA })}</span>
              <span>${scoreRow(["pest", k, i, "am"], linhas[i].am, { labels: ESCALA_IMPORTANCIA })}</span>
              <input class="pest-just" type="text" placeholder="Por quê?" ${pathAttr(["pest", k, i, "just"])} value="${esc(linhas[i].just)}" />
            </div>
          `).join("")}
        </div>
      </details>`;
  }).join("");

  return `
    <div class="stage-head">
      <div class="eyebrow">Etapa 2</div>
      <h1>Análise PEST</h1>
      <p class="lede">Para cada variável dos ambientes Político, Econômico, Social e Tecnológico, avaliem a intensidade como oportunidade e como ameaça. Escala: 1 desprezível · 2 baixa · 3 média · 4 alta · 5 muito alta. Deixe em branco (–) se não se aplica.</p>
    </div>
    ${grupos}
  `;
}
// ===================== ETAPA: 5 FORÇAS DE PORTER =====================

function renderPorter() {
  const resumo = porterResumo();
  const grupos = Object.keys(PORTER_DATA).map((k) => {
    const dados = PORTER_DATA[k];
    const valores = S.porter[k];
    const media = resumo[k].media;
    return `
      <details class="accordion" open>
        <summary>${dados.label} <span class="accordion-count">${media ? "média " + media.toFixed(1) : "sem dados"}</span></summary>
        <div class="stmt-table">
          ${dados.itens.map((texto, i) => `
            <div class="stmt-row">
              <span class="stmt-text">${esc(texto)}</span>
              ${scoreRow(["porter", k, i], valores[i], { labels: ESCALA_CONCORDANCIA })}
            </div>
          `).join("")}
        </div>
      </details>`;
  }).join("");

  return `
    <div class="stage-head">
      <div class="eyebrow">Etapa 3</div>
      <h1>5 Forças de Porter</h1>
      <p class="lede">Para cada afirmação, marquem o quanto concordam: 1 discordo totalmente · 2 discordo · 3 parte falsa e parte verdadeira · 4 concordo · 5 concordo totalmente. Médias mais altas indicam uma força mais intensa (setor menos atrativo naquele aspecto).</p>
    </div>
    ${grupos}
  `;
}

// ===================== ETAPA: CICLO DE VIDA =====================

function renderCiclo() {
  const resumo = cicloResumo();
  const grupos = Object.keys(CICLO_DATA).map((k) => {
    const dados = CICLO_DATA[k];
    const valores = S.ciclo[k];
    const media = resumo[k].media;
    return `
      <details class="accordion" open>
        <summary>${dados.label} <span class="accordion-count">${media ? "média " + media.toFixed(1) : "sem dados"}</span></summary>
        <div class="stmt-table">
          ${dados.itens.map((texto, i) => `
            <div class="stmt-row">
              <span class="stmt-text">${esc(texto)}</span>
              ${scoreRow(["ciclo", k, i], valores[i], { labels: ESCALA_CONCORDANCIA })}
            </div>
          `).join("")}
        </div>
      </details>`;
  }).join("");

  return `
    <div class="stage-head">
      <div class="eyebrow">Etapa 4</div>
      <h1>Ciclo de vida do setor</h1>
      <p class="lede">Avaliem as afirmações de cada estágio (introdução, crescimento, maturidade e declínio). O estágio com maior média tende a ser o estágio atual do setor — não do produto isoladamente.</p>
    </div>
    ${grupos}
    <div class="card">
      <div class="card-kicker">Estágio dominante</div>
      <div class="highlight-value">${esc(cicloEstagioDominante())}</div>
    </div>
  `;
}

// ===================== ETAPA: FATORES CRÍTICOS DE SUCESSO =====================

function renderFcs() {
  const fatores = S.fcs.fatores;
  const linhas = S.fcs.linhas;
  return `
    <div class="stage-head">
      <div class="eyebrow">Etapa 5</div>
      <h1>Fatores críticos de sucesso</h1>
      <p class="lede">Listem os fatores que decidem quem vence no setor e comparem sua empresa aos principais concorrentes. Escala: 1 muito fraco · 2 fraco · 3 regular · 4 bom · 5 excelente / benchmark.</p>
    </div>
    <div class="card fcs-card">
      <div class="table-scroll">
        <table class="fcs-table">
          <thead>
            <tr>
              <th class="fcs-corner">Concorrentes \\ Fatores</th>
              ${fatores.map((f, i) => `
                <th>
                  <input class="fcs-fator-input" type="text" ${pathAttr(["fcs", "fatores", i])} value="${esc(f)}" />
                  <button class="row-remove" type="button" data-action="fcs-remove-fator" data-i="${i}" title="Remover fator">✕</button>
                </th>`).join("")}
              <th class="fcs-add-col"><button class="btn btn-ghost" type="button" data-action="fcs-add-fator">+ Fator</button></th>
            </tr>
          </thead>
          <tbody>
            ${linhas.map((linha, li) => `
              <tr>
                <td>
                  <input class="fcs-nome-input" type="text" ${pathAttr(["fcs", "linhas", li, "nome"])} value="${esc(linha.nome)}" />
                  <button class="row-remove" type="button" data-action="fcs-remove-linha" data-i="${li}" title="Remover linha">✕</button>
                </td>
                ${fatores.map((_, fi) => `<td>${scoreRow(["fcs", "linhas", li, "notas", fi], linha.notas[fi] || 0)}</td>`).join("")}
                <td></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <button class="btn btn-primary" type="button" data-action="fcs-add-linha" style="margin-top:14px">+ Adicionar empresa / concorrente</button>
    </div>
  `;
}

// ===================== ETAPA: ESTRATÉGIAS GENÉRICAS =====================

function renderEstrategias() {
  const resumo = estrategiasResumo();
  const grupos = Object.keys(ESTRATEGIAS_DATA).map((k) => {
    const dados = ESTRATEGIAS_DATA[k];
    const valores = S.estrategias[k];
    const media = resumo[k].media;
    return `
      <details class="accordion" open>
        <summary>${dados.label} <span class="accordion-count">${media ? "média " + media.toFixed(1) : "sem dados"}</span></summary>
        <div class="stmt-table">
          ${dados.itens.map((texto, i) => `
            <div class="stmt-row">
              <span class="stmt-text">${esc(texto)}</span>
              ${scoreRow(["estrategias", k, i], valores[i], { labels: ESCALA_CONCORDANCIA })}
            </div>
          `).join("")}
        </div>
      </details>`;
  }).join("");

  return `
    <div class="stage-head">
      <div class="eyebrow">Etapa 6</div>
      <h1>Estratégias genéricas</h1>
      <p class="lede">Avaliem em que medida a empresa hoje pratica cada perfil competitivo de Porter: liderança em custo, diferenciação, ou foco. Um perfil claramente mais alto que os outros indica coerência estratégica; perfis parecidos podem indicar uma posição "no meio do caminho".</p>
    </div>
    ${grupos}
    <div class="card">
      <div class="card-kicker">Perfil dominante</div>
      <div class="highlight-value">${esc(estrategiaDominante())}</div>
    </div>
  `;
}
// ===================== ETAPA: SWOT =====================

function swotListEditor(cat, titulo, ajuda, sugerirAction) {
  const itens = S.swot[cat];
  return `
    <div class="swot-quad swot-${cat}">
      <div class="swot-quad-head">
        <h3>${titulo}</h3>
        ${sugerirAction ? `<button class="btn btn-ghost btn-xs" type="button" data-action="${sugerirAction}">Sugerir da PEST</button>` : ""}
      </div>
      <p class="field-help">${ajuda}</p>
      ${itens.map((v, i) => `
        <div class="swot-item">
          <input type="text" ${pathAttr(["swot", cat, i])} value="${esc(v)}" placeholder="Descreva..." />
          <button class="row-remove" type="button" data-action="swot-remove" data-cat="${cat}" data-i="${i}" title="Remover">✕</button>
        </div>
      `).join("")}
      <button class="btn btn-ghost btn-xs" type="button" data-action="swot-add" data-cat="${cat}">+ Adicionar</button>
    </div>
  `;
}

function renderSwot() {
  const sugOp = topPestOportunidades(5);
  const sugAm = topPestAmeacas(5);
  return `
    <div class="stage-head">
      <div class="eyebrow">Etapa 7</div>
      <h1>Síntese SWOT</h1>
      <p class="lede">Oportunidades e ameaças vêm da leitura do ambiente externo (PEST); forças e fraquezas são internas à empresa. Use "Sugerir da PEST" para trazer automaticamente as variáveis mais bem avaliadas.</p>
    </div>
    ${(sugOp.length || sugAm.length) ? `
      <div class="card card-note-block">
        <div class="card-kicker">O que a PEST está indicando até agora</div>
        <div class="two-col">
          <div>
            <strong>Maiores oportunidades:</strong>
            <ul>${sugOp.map((o) => `<li>${esc(o.texto)} <span class="tag">${o.nota}/5 · ${esc(o.origem)}</span></li>`).join("") || "<li class='muted'>Ainda sem notas</li>"}</ul>
          </div>
          <div>
            <strong>Maiores ameaças:</strong>
            <ul>${sugAm.map((a) => `<li>${esc(a.texto)} <span class="tag">${a.nota}/5 · ${esc(a.origem)}</span></li>`).join("") || "<li class='muted'>Ainda sem notas</li>"}</ul>
          </div>
        </div>
      </div>` : ""}
    <div class="swot-grid">
      ${swotListEditor("oportunidades", "Oportunidades", "Fatores externos favoráveis ao negócio.", "swot-suggest-op")}
      ${swotListEditor("ameacas", "Ameaças", "Fatores externos que representam risco.", "swot-suggest-am")}
      ${swotListEditor("forcas", "Forças", "Pontos fortes internos da empresa em relação aos concorrentes.")}
      ${swotListEditor("fraquezas", "Fraquezas", "Pontos fracos internos que precisam ser endereçados.")}
    </div>
  `;
}

// ===================== ETAPA: MISSÃO, VISÃO E VALORES =====================

function renderMv() {
  const campo = (key, titulo, ajuda) => `
    <div class="field-block">
      <label class="field-title">${titulo}</label>
      ${ajuda ? `<p class="field-help">${ajuda}</p>` : ""}
      <textarea class="field-textarea" rows="3" ${pathAttr(["mv", key])} placeholder="Escreva aqui...">${esc(S.mv[key])}</textarea>
    </div>`;
  return `
    <div class="stage-head">
      <div class="eyebrow">Etapa 8</div>
      <h1>Missão, visão e valores</h1>
      <p class="lede">À luz das análises anteriores, avaliem se é o caso de revisar a missão e a visão da empresa.</p>
    </div>
    <div class="card">
      <h2 class="card-title">Missão</h2>
      ${campo("missaoAtual", "1. Declaração da missão atual")}
      ${campo("missaoAvaliacao", "2. Avaliação da missão atual", "Ainda faz sentido diante do negócio, do ambiente e da concorrência?")}
      ${campo("missaoFutura", "3. Declaração da missão para o futuro")}
    </div>
    <div class="card">
      <h2 class="card-title">Visão</h2>
      ${campo("visaoAtual", "1. Definição atual da visão")}
      ${campo("visaoAvaliacao", "2. Avaliação da visão atual")}
      ${campo("visaoFutura", "3. Declaração da nova visão")}
    </div>
    <div class="card">
      <h2 class="card-title">Valores</h2>
      ${campo("valores", "4. Valores sugeridos")}
    </div>
  `;
}

// ===================== ETAPA: PLANOS DE AÇÃO =====================

function renderPlanos() {
  const tabs = PLANOS_AREAS.map((a) => `
    <button type="button" class="tab-btn${a.key === planoAreaAtual ? " active" : ""}" data-action="planos-area" data-area="${a.key}">${a.label}
      <span class="tab-count">${S.planos[a.key].length}</span>
    </button>`).join("");

  const linhas = S.planos[planoAreaAtual];
  const cols = [
    { k: "indicador", w: "16%" }, { k: "meta", w: "14%" }, { k: "acoes", w: "26%" },
    { k: "responsavel", w: "14%" }, { k: "prazo", w: "12%" }, { k: "recursos", w: "18%" }
  ];
  const labels = { indicador: "Indicador", meta: "Meta", acoes: "Ações", responsavel: "Responsável", prazo: "Prazo", recursos: "Recursos" };

  return `
    <div class="stage-head">
      <div class="eyebrow">Etapa 9</div>
      <h1>Planos de ação</h1>
      <p class="lede">Desdobrem a estratégia em indicadores, metas e ações por área, com responsável e prazo definidos.</p>
    </div>
    <div class="tabs">${tabs}</div>
    <div class="card">
      <div class="table-scroll">
        <table class="planos-table">
          <thead>
            <tr>${cols.map((c) => `<th style="width:${c.w}">${labels[c.k]}</th>`).join("")}<th class="fcs-add-col"></th></tr>
          </thead>
          <tbody>
            ${linhas.length ? linhas.map((row, i) => `
              <tr>
                ${cols.map((c) => `<td><input type="text" ${pathAttr(["planos", planoAreaAtual, i, c.k])} value="${esc(row[c.k])}" /></td>`).join("")}
                <td><button class="row-remove" type="button" data-action="planos-remove-row" data-i="${i}" title="Remover linha">✕</button></td>
              </tr>`).join("") : `<tr><td colspan="${cols.length + 1}" class="empty-row">Nenhuma linha ainda. Adicione a primeira ação abaixo.</td></tr>`}
          </tbody>
        </table>
      </div>
      <button class="btn btn-primary" type="button" data-action="planos-add-row" style="margin-top:14px">+ Adicionar linha</button>
    </div>
  `;
}
const GAME_DESIGN = {
  "indicadores": [
    {
      "codigo": "C1",
      "area": "Comercial",
      "nome": "Faturamento (índice)",
      "direcao": "maior",
      "faixaVermelho": "< 60",
      "faixaAmarelo": "60–80",
      "faixaVerde": "> 80",
      "valorInicial": 68,
      "unidade": "índice 0–100"
    },
    {
      "codigo": "C2",
      "area": "Comercial",
      "nome": "Concentração do maior cliente",
      "direcao": "menor",
      "faixaVermelho": "> 40%",
      "faixaAmarelo": "25–40%",
      "faixaVerde": "< 25%",
      "valorInicial": 0.35,
      "unidade": "%"
    },
    {
      "codigo": "C3",
      "area": "Comercial",
      "nome": "Nº de contratos ativos",
      "direcao": "maior",
      "faixaVermelho": "1–2",
      "faixaAmarelo": "3–4",
      "faixaVerde": "≥ 5",
      "valorInicial": 3,
      "unidade": "contratos"
    },
    {
      "codigo": "C4",
      "area": "Comercial",
      "nome": "Satisfação do hospital (NPS)",
      "direcao": "maior",
      "faixaVermelho": "< 30",
      "faixaAmarelo": "30–60",
      "faixaVerde": "> 60",
      "valorInicial": 45,
      "unidade": "índice 0–100"
    },
    {
      "codigo": "P1",
      "area": "Processos",
      "nome": "Adesão a protocolos",
      "direcao": "maior",
      "faixaVermelho": "< 60%",
      "faixaAmarelo": "60–85%",
      "faixaVerde": "> 85%",
      "valorInicial": 0.65,
      "unidade": "%"
    },
    {
      "codigo": "P2",
      "area": "Processos",
      "nome": "Taxa de eventos adversos",
      "direcao": "menor",
      "faixaVermelho": "> 5%",
      "faixaAmarelo": "2–5%",
      "faixaVerde": "< 2%",
      "valorInicial": 0.035,
      "unidade": "%"
    },
    {
      "codigo": "P3",
      "area": "Processos",
      "nome": "Ociosidade da equipe",
      "direcao": "menor",
      "faixaVermelho": "> 30%",
      "faixaAmarelo": "15–30%",
      "faixaVerde": "< 15%",
      "valorInicial": 0.22,
      "unidade": "%"
    },
    {
      "codigo": "P4",
      "area": "Processos",
      "nome": "Maturidade de gestão (dados)",
      "direcao": "maior",
      "faixaVermelho": "< 40",
      "faixaAmarelo": "40–70",
      "faixaVerde": "> 70",
      "valorInicial": 50,
      "unidade": "índice 0–100"
    },
    {
      "codigo": "R1",
      "area": "RH",
      "nome": "Turnover anual",
      "direcao": "menor",
      "faixaVermelho": "> 20%",
      "faixaAmarelo": "10–20%",
      "faixaVerde": "< 10%",
      "valorInicial": 0.15,
      "unidade": "%"
    },
    {
      "codigo": "R2",
      "area": "RH",
      "nome": "Índice de burnout",
      "direcao": "menor",
      "faixaVermelho": "> 60",
      "faixaAmarelo": "35–60",
      "faixaVerde": "< 35",
      "valorInicial": 48,
      "unidade": "índice 0–100"
    },
    {
      "codigo": "R3",
      "area": "RH",
      "nome": "Cobertura de escala",
      "direcao": "maior",
      "faixaVermelho": "< 85%",
      "faixaAmarelo": "85–95%",
      "faixaVerde": "> 95%",
      "valorInicial": 0.9,
      "unidade": "%"
    },
    {
      "codigo": "R4",
      "area": "RH",
      "nome": "Alinhamento societário",
      "direcao": "maior",
      "faixaVermelho": "< 40",
      "faixaAmarelo": "40–70",
      "faixaVerde": "> 70",
      "valorInicial": 50,
      "unidade": "índice 0–100"
    },
    {
      "codigo": "F1",
      "area": "Financeiro",
      "nome": "Margem líquida",
      "direcao": "maior",
      "faixaVermelho": "< 8%",
      "faixaAmarelo": "8–18%",
      "faixaVerde": "> 18%",
      "valorInicial": 0.12,
      "unidade": "%"
    },
    {
      "codigo": "F2",
      "area": "Financeiro",
      "nome": "Caixa (meses de folha)",
      "direcao": "maior",
      "faixaVermelho": "< 1",
      "faixaAmarelo": "1–3",
      "faixaVerde": "> 3",
      "valorInicial": 2,
      "unidade": "meses"
    },
    {
      "codigo": "F3",
      "area": "Financeiro",
      "nome": "Taxa de glosa",
      "direcao": "menor",
      "faixaVermelho": "> 12%",
      "faixaAmarelo": "5–12%",
      "faixaVerde": "< 5%",
      "valorInicial": 0.08,
      "unidade": "%"
    },
    {
      "codigo": "F4",
      "area": "Financeiro",
      "nome": "Reserva / reinvestimento",
      "direcao": "maior",
      "faixaVermelho": "< 5%",
      "faixaAmarelo": "5–15%",
      "faixaVerde": "> 15%",
      "valorInicial": 0.09,
      "unidade": "%"
    },
    {
      "codigo": "G1",
      "area": "Transversal",
      "nome": "Reputação / imagem corporativa",
      "direcao": "maior",
      "faixaVermelho": "< 20 crítico · 20–40 vermelho",
      "faixaAmarelo": "40–70",
      "faixaVerde": "> 70",
      "valorInicial": 55,
      "unidade": "índice 0–100"
    }
  ],
  "faixasAmarelas": {
    "C1": [
      60,
      80
    ],
    "C2": [
      0.25,
      0.4
    ],
    "C3": [
      3,
      4
    ],
    "C4": [
      30,
      60
    ],
    "P1": [
      0.6,
      0.85
    ],
    "P2": [
      0.02,
      0.05
    ],
    "P3": [
      0.15,
      0.3
    ],
    "P4": [
      40,
      70
    ],
    "R1": [
      0.1,
      0.2
    ],
    "R2": [
      35,
      60
    ],
    "R3": [
      0.85,
      0.95
    ],
    "R4": [
      40,
      70
    ],
    "F1": [
      0.08,
      0.18
    ],
    "F2": [
      1,
      3
    ],
    "F3": [
      0.05,
      0.12
    ],
    "F4": [
      0.05,
      0.15
    ],
    "G1": [
      40,
      70
    ]
  },
  "decisoesPorArea": {
    "Comercial": [
      {
        "acao": "Manter estratégia atual",
        "tema": "",
        "observacao": "Sem mudança deliberada nesta área na rodada",
        "efeitos": {}
      },
      {
        "acao": "Renegociar preço para baixo com o hospital-âncora", "perfilEstrategico": "custo",
        "tema": "",
        "observacao": "Fatura menos e aperta margem, mas melhora a relação com o cliente",
        "efeitos": {
          "C1": -8,
          "C4": 10,
          "F1": -0.02
        }
      },
      {
        "acao": "Encerrar o contrato-âncora",
        "tema": "Imagem",
        "observacao": "Corta a dependência de uma vez — choque forte de receita, caixa e imagem",
        "efeitos": {
          "C1": -25,
          "C2": -0.2,
          "P3": 0.15,
          "F2": -1,
          "G1": -10
        }
      },
      {
        "acao": "Entrar em hospital novo com margem baixa",
        "tema": "",
        "observacao": "Diversifica clientes, mas custa margem, caixa e sobrecarrega a equipe",
        "efeitos": {
          "C2": -0.08,
          "C3": 1,
          "R2": 8,
          "F1": -0.03,
          "F2": -0.5
        }
      },
      {
        "acao": "Trocar desconto por volume/exclusividade", "perfilEstrategico": "custo",
        "tema": "",
        "observacao": "Mais receita e cliente mais satisfeito, mas aumenta a dependência dele",
        "efeitos": {
          "C1": 10,
          "C2": 0.05,
          "C4": 8,
          "F1": -0.02
        }
      },
      {
        "acao": "Verticalizar faturamento junto às operadoras", "perfilEstrategico": "diferenciacao",
        "tema": "",
        "observacao": "Menos glosa e mais maturidade, custa estrutura e caixa no início",
        "efeitos": {
          "P4": 12,
          "F1": -0.02,
          "F2": -0.6,
          "F3": -0.04
        }
      },
      {
        "acao": "Investir em comunicação institucional / gestão de imagem", "perfilEstrategico": "diferenciacao",
        "tema": "Imagem",
        "observacao": "Constrói reputação de forma proativa; custa margem",
        "efeitos": {
          "F1": -0.015,
          "G1": 12
        }
      },
      {
        "acao": "Responder à concorrência com oferta agressiva de retenção", "perfilEstrategico": "custo",
        "tema": "Concorrência",
        "observacao": "Protege carteira de clientes diante do novo concorrente — se escolhida na rodada da chegada em diante, cancela a erosão passiva de Faturamento daquela rodada",
        "efeitos": {
          "C1": 5,
          "C4": 5,
          "F1": -0.04
        }
      }
    ],
    "Processos": [
      {
        "acao": "Manter estratégia atual",
        "tema": "",
        "observacao": "Sem mudança deliberada nesta área na rodada",
        "efeitos": {}
      },
      {
        "acao": "Padronizar protocolos com rigor", "perfilEstrategico": "diferenciacao",
        "tema": "",
        "observacao": "Mais segurança e adesão, mas gera resistência (alinhamento societário cai)",
        "efeitos": {
          "P1": 0.15,
          "P2": -0.015,
          "R4": -8
        }
      },
      {
        "acao": "Investir em sistema de gestão/dados", "perfilEstrategico": "diferenciacao",
        "tema": "",
        "observacao": "Ganho grande de maturidade, custa caixa e margem no curto prazo",
        "efeitos": {
          "P4": 18,
          "F1": -0.02,
          "F2": -0.6,
          "F3": -0.03
        }
      },
      {
        "acao": "Ampliar cobertura de plantão", "perfilEstrategico": "diferenciacao",
        "tema": "",
        "observacao": "Cliente mais satisfeito e menos risco, mas sobra estrutura e cai margem",
        "efeitos": {
          "C4": 8,
          "P2": -0.01,
          "P3": 0.1,
          "F1": -0.02
        }
      },
      {
        "acao": "Reduzir cobertura para eficiência", "perfilEstrategico": "custo",
        "tema": "Imagem",
        "observacao": "Melhora margem e ociosidade, mas sobe risco clínico, cai satisfação e expõe a imagem",
        "efeitos": {
          "C4": -8,
          "P2": 0.015,
          "P3": -0.1,
          "F1": 0.03,
          "G1": -4
        }
      },
      {
        "acao": "Avaliação pré-anestésica obrigatória", "perfilEstrategico": "diferenciacao",
        "tema": "",
        "observacao": "Mais segurança e adesão, com um pouco mais de carga operacional",
        "efeitos": {
          "P1": 0.08,
          "P2": -0.01,
          "P3": 0.03,
          "R2": 4
        }
      }
    ],
    "RH": [
      {
        "acao": "Manter estratégia atual",
        "tema": "",
        "observacao": "Sem mudança deliberada nesta área na rodada",
        "efeitos": {}
      },
      {
        "acao": "Transformar médicos em sócios", "perfilEstrategico": "diferenciacao",
        "tema": "",
        "observacao": "Muito mais retenção e alinhamento, reparte mais do resultado",
        "efeitos": {
          "R1": -8,
          "R4": 15,
          "F1": -0.02
        }
      },
      {
        "acao": "Contratar mais equipe", "perfilEstrategico": "diferenciacao",
        "tema": "",
        "observacao": "Alivia muito a sobrecarga e melhora escala, custa margem e caixa",
        "efeitos": {
          "R1": -5,
          "R2": -15,
          "R3": 0.08,
          "F1": -0.03,
          "F2": -0.5
        }
      },
      {
        "acao": "Formar talento internamente (residentes)", "perfilEstrategico": "diferenciacao",
        "tema": "",
        "observacao": "Ganho mais lento de retenção e cobertura, custo menor que contratar pronto",
        "efeitos": {
          "P4": 5,
          "R1": -4,
          "R3": 0.05,
          "F1": -0.02
        }
      },
      {
        "acao": "Manter equipe enxuta / PJ", "perfilEstrategico": "custo",
        "tema": "Imagem",
        "observacao": "Melhora margem agora, mas dispara burnout, turnover e risco de imagem",
        "efeitos": {
          "C4": -5,
          "R1": 10,
          "R2": 18,
          "F1": 0.03,
          "G1": -6
        }
      },
      {
        "acao": "Programa de retenção anti-aliciamento (bônus de permanência)", "perfilEstrategico": "diferenciacao",
        "tema": "Concorrência",
        "observacao": "Protege o time da tentativa do concorrente de aliciar profissionais — se escolhida na rodada da chegada em diante, cancela a erosão passiva de Turnover daquela rodada",
        "efeitos": {
          "R1": -6,
          "F1": -0.01,
          "F2": -0.4
        }
      }
    ],
    "Financeiro": [
      {
        "acao": "Manter estratégia atual",
        "tema": "",
        "observacao": "Sem mudança deliberada nesta área na rodada",
        "efeitos": {}
      },
      {
        "acao": "Bancar descasamento de caixa com crédito",
        "tema": "",
        "observacao": "Resolve o caixa rápido, mas o custo do juro pesa na margem",
        "efeitos": {
          "F1": -0.02,
          "F2": 1
        }
      },
      {
        "acao": "Endurecer política de recebíveis",
        "tema": "",
        "observacao": "Melhora caixa e glosa sem dívida, mas gera atrito comercial",
        "efeitos": {
          "C4": -6,
          "F2": 0.8,
          "F3": -0.02
        }
      },
      {
        "acao": "Distribuir 100% do resultado",
        "tema": "",
        "observacao": "Sócios satisfeitos agora, mas some a reserva para o próximo choque",
        "efeitos": {
          "R4": 10,
          "F2": -0.8,
          "F4": -0.1
        }
      },
      {
        "acao": "Reter parte para reinvestir (formar reserva)", "perfilEstrategico": "diferenciacao",
        "tema": "",
        "observacao": "Constrói fôlego financeiro, mas sócios recebem menos agora",
        "efeitos": {
          "P4": 6,
          "R4": -6,
          "F4": 0.1
        }
      },
      {
        "acao": "Migrar custo fixo para variável", "perfilEstrategico": "custo",
        "tema": "Imagem",
        "observacao": "Protege a margem em baixa demanda, mas reduz previsibilidade e imagem de marca",
        "efeitos": {
          "C4": -5,
          "P2": 0.01,
          "P3": -0.08,
          "F1": 0.02,
          "G1": -3
        }
      }
    ]
  },
  "eventosAleatorios": [
    {
      "nome": "Operadora atrasa pagamento",
      "pesoBase": 15,
      "descricao": "Fluxo de caixa aperta no curto prazo",
      "efeitos": {
        "F2": -1
      }
    },
    {
      "nome": "Um sócio pede demissão",
      "pesoBase": 10,
      "descricao": "Choque pontual de turnover e cobertura",
      "efeitos": {
        "R1": 8,
        "R3": -0.06,
        "R4": -5
      }
    },
    {
      "nome": "Hospital-âncora ameaça sair",
      "pesoBase": 20,
      "descricao": "Cliente concentrado sinaliza insatisfação",
      "efeitos": {
        "C1": -5,
        "C4": -15
      }
    },
    {
      "nome": "Evento adverso grave",
      "pesoBase": 20,
      "descricao": "Incidente clínico expõe falhas de processo",
      "efeitos": {
        "C4": -10,
        "P2": 0.03,
        "R4": -8,
        "G1": -8
      }
    },
    {
      "nome": "Denúncia nas redes sociais / imprensa",
      "pesoBase": 15,
      "descricao": "Exposição pública negativa viraliza",
      "efeitos": {
        "C4": -8,
        "G1": -18
      }
    },
    {
      "nome": "Reconhecimento público / prêmio de qualidade",
      "pesoBase": 10,
      "descricao": "Grupo é destaque positivo na mídia ou em ranking do setor",
      "efeitos": {
        "C4": 6,
        "G1": 12
      }
    },
    {
      "nome": "Racha societário",
      "pesoBase": 10,
      "descricao": "Sócios ameaçam sair — peso dobra (20) se Alinhamento societário já estiver em vermelho nessa rodada",
      "efeitos": {
        "C3": -1,
        "R1": 10,
        "R4": -15,
        "F2": -0.5
      }
    }
  ],
  "cenarioBase": [
    {
      "parametro": "Nº de anestesistas no grupo",
      "valor": 12,
      "unidade": "pessoas",
      "observacao": "6 sócios + 6 contratados PJ, como ponto de partida"
    },
    {
      "parametro": "Nº de hospitais atendidos",
      "valor": 3,
      "unidade": "contratos",
      "observacao": "Coerente com Nº de contratos ativos = 3 (zona amarela)"
    },
    {
      "parametro": "Folha de pagamento mensal aproximada",
      "valor": 400000,
      "unidade": "R$/mês",
      "observacao": "Usada só como referência para 'meses de folha' em caixa"
    },
    {
      "parametro": "Caixa inicial",
      "valor": 800000,
      "unidade": "R$",
      "observacao": "≈ 2 meses de folha — cai na faixa amarela do indicador Caixa"
    }
  ],
  "pesosCompostos": {
    "Financeiro": 0.3,
    "RH": 0.25,
    "Processos": 0.25,
    "Comercial": 0.2
  },
  "marcoConcorrente": {
    "choqueImediato": {
      "C4": -8,
      "F1": -0.02,
      "C2": 0.05
    },
    "pressaoPassiva": {
      "C1": -3,
      "R1": 2
    },
    "mitigacaoComercial": "Responder à concorrência com oferta agressiva de retenção",
    "mitigacaoRH": "Programa de retenção anti-aliciamento (bônus de permanência)"
  }
};

// ===================== EXTENSÃO CONTÁBIL =====================
// Parâmetros para converter os indicadores abstratos em R$ de verdade.
GAME_DESIGN.cenarioFinanceiro = {
  receitaPotencialTrimestral: 1810000, // R$ — calibrado para bater com o histórico pré-jogo quando Faturamento (índice) = 68 (linha de base)
  folhaMensal: 400000, // R$ — referência já usada no indicador "Caixa (meses de folha)"
  contasAReceberMeses: 1, // quantos meses de receita líquida ficam "a receber" em média
  proporcaoCustos: { equipeMedica: 0.60, operacionalAdministrativo: 0.25, comercialMarketing: 0.15 }
};

// mapeia cada código de indicador para a linha contábil que ele mais influencia —
// usado para anotar, no relatório da rodada, qual linha do DRE/Balanço cada decisão mexeu.
GAME_DESIGN.indicadorParaLinhaContabil = {
  C1: "Receita Bruta de Serviços (DRE)",
  C2: "Concentração de clientes (nota explicativa do Balanço)",
  C3: "Receita Bruta de Serviços (DRE)",
  C4: "Contas a Receber — risco de renovação (Balanço)",
  P1: "Custos com Equipe Médica (DRE)",
  P2: "Provisões/Contingências (nota explicativa do Balanço)",
  P3: "Custos Operacionais e Administrativos (DRE)",
  P4: "Confiabilidade das demonstrações (nota explicativa)",
  R1: "Custos com Equipe Médica (DRE)",
  R2: "Custos com Equipe Médica (DRE)",
  R3: "Custos com Equipe Médica (DRE)",
  R4: "Patrimônio Líquido — nota de governança (Balanço)",
  F1: "Resultado Líquido do Período (DRE)",
  F2: "Caixa e Equivalentes (Balanço)",
  F3: "Glosas e Deduções (DRE)",
  F4: "Reservas de Lucros — Patrimônio Líquido (Balanço)",
  G1: "Contas a Receber — risco de renovação (Balanço)"
};

// histórico estático dos 4 trimestres ANTES da rodada 1 — dado de contexto para os
// times lerem e discutirem antes de decidir qualquer coisa.
GAME_DESIGN.historicoPreJogo = [
  {
    label: "4 trimestres atrás",
    receitaBruta: 1150000, glosas: 0.06, margemLiquida: 0.16,
    caixaMeses: 3.2, reservaPct: 0.14, observacao: "Grupo estável, ainda só com o hospital-âncora e um contrato pequeno."
  },
  {
    label: "3 trimestres atrás",
    receitaBruta: 1180000, glosas: 0.07, margemLiquida: 0.145,
    caixaMeses: 2.8, reservaPct: 0.12, observacao: "Pequena queda de margem — operadora começou a glosar mais."
  },
  {
    label: "2 trimestres atrás",
    receitaBruta: 1210000, glosas: 0.075, margemLiquida: 0.13,
    caixaMeses: 2.4, reservaPct: 0.11, observacao: "Contratação pontual de plantonista aumentou o custo fixo."
  },
  {
    label: "trimestre passado",
    receitaBruta: 1230000, glosas: 0.08, margemLiquida: 0.12,
    caixaMeses: 2.0, reservaPct: 0.09, observacao: "Ponto de partida do jogo — é daqui que a rodada 1 começa."
  }
];

// banco de mini-casos de diagnóstico contábil — o facilitador dispara manualmente
GAME_DESIGN.miniCasos = [
  {
    titulo: "Caso 1 — Liquidez apertada",
    enunciado: "Um grupo concorrente reporta: Caixa de 0,6 mês de folha, Contas a Receber equivalentes a 2 meses de receita, e Reserva de 3% do resultado. Nos últimos 2 trimestres, distribuíram 100% do lucro aos sócios.",
    pergunta: "Qual é o maior risco desse cenário?",
    opcoes: [
      "Nenhum — Contas a Receber alto compensa o caixa baixo",
      "Risco de insolvência de curto prazo: caixa não cobre nem 1 mês de folha, e não há reserva para amortecer um atraso de recebimento",
      "O problema é só de imagem, não financeiro"
    ],
    respostaCorreta: 1,
    explicacao: "Contas a Receber não paga folha — só o caixa em mãos paga. Distribuir 100% do lucro sem formar reserva, com caixa abaixo de 1 mês, deixa o grupo exposto a qualquer atraso de recebimento (comum com operadoras)."
  },
  {
    titulo: "Caso 2 — Margem enganosa",
    enunciado: "Um grupo reporta Margem Líquida de 20% (ótima) mas Concentração de receita de 78% num único hospital, e Nº de contratos = 1.",
    pergunta: "Essa margem alta é motivo de tranquilidade?",
    opcoes: [
      "Sim — margem de 20% é excelente em qualquer cenário",
      "Não — o resultado depende quase inteiramente de um cliente; perder esse contrato provavelmente devora a margem inteira",
      "Não tem como saber sem ver o Balanço"
    ],
    respostaCorreta: 1,
    explicacao: "Margem alta com concentração extrema é frágil: o DRE parece ótimo hoje, mas um único evento (fim de contrato, renegociação forçada) derruba a receita inteira. Isso é exatamente o que o indicador de Concentração tenta capturar."
  },
  {
    titulo: "Caso 3 — Confiabilidade da informação",
    enunciado: "Um grupo nunca investiu em sistema de gestão (Maturidade de gestão em zona vermelha) e apresenta um DRE 'redondo demais': todas as linhas em números fechados, sem provisão para glosa.",
    pergunta: "O que isso sugere?",
    opcoes: [
      "Que a contabilidade do grupo é exemplarmente simples",
      "Que os números provavelmente não refletem a realidade operacional — sem sistema, é difícil rastrear glosas, provisões e custos reais",
      "Nada — números redondos são normais em qualquer relatório"
    ],
    respostaCorreta: 1,
    explicacao: "Baixa maturidade de gestão costuma vir acompanhada de controles fracos: as demonstrações podem estar desatualizadas, sem provisões adequadas, ou serem estimativas grosseiras. É por isso que investir em sistema de gestão/dados também é decisão financeira, não só operacional."
  },
  {
    titulo: "Caso 4 — Custo fixo x variável",
    enunciado: "Dois grupos têm a mesma Margem Líquida (12%). O Grupo A tem 90% de custo fixo (equipe própria/sócios); o Grupo B tem 60% de custo variável (equipe PJ/sob demanda). O mercado sinaliza possível queda de 20% na demanda no próximo trimestre.",
    pergunta: "Qual grupo tende a sofrer mais com a queda de demanda?",
    opcoes: [
      "O Grupo A, porque o custo fixo não cai junto com a receita — a margem desaba",
      "O Grupo B, porque equipe PJ é sempre mais cara",
      "Os dois sofrem exatamente igual, já que a margem atual é a mesma"
    ],
    respostaCorreta: 0,
    explicacao: "Estrutura de custo fixo alto amplifica quedas de receita no resultado (alavancagem operacional). O Grupo B, com mais custo variável, reduz despesas junto com a queda de demanda e protege melhor a margem — o trade-off é menos previsibilidade para a equipe."
  }
];
// ===================== EXTENSÃO: CAMPOS DE INVESTIMENTO (substitui o menu de decisões) =====================
// Em vez de escolher entre frases prontas, o time aloca um orçamento da rodada
// entre 12 campos de investimento (3 por área). O efeito de cada campo escala
// com o valor investido, com retorno decrescente acima do valor de referência.

GAME_DESIGN.orcamentoPorRodada = 450000; // R$ — total disponível por rodada, livre entre todos os campos

GAME_DESIGN.camposInvestimento = {
  Comercial: [
    {
      id: "marketing_relacionamento",
      nome: "Marketing e relacionamento com clientes",
      descricao: "Comunicação institucional, atendimento e fidelização de hospitais/operadoras e pacientes.",
      valorReferencia: 40000,
      perfilEstrategico: "diferenciacao",
      tema: "Imagem",
      efeitoBase: { C4: 8, G1: 10 }
    },
    {
      id: "negociacao_preco",
      nome: "Negociação comercial e política de preços",
      descricao: "Descontos, condições comerciais e agressividade de preço para reter e ganhar contratos.",
      valorReferencia: 35000,
      perfilEstrategico: "custo",
      tema: "Concorrência",
      efeitoBase: { C1: 12, F1: -0.03 }
    },
    {
      id: "diversificacao_carteira",
      nome: "Diversificação e novos contratos",
      descricao: "Buscar novos clientes/hospitais para reduzir a dependência de um só cliente grande.",
      valorReferencia: 50000,
      perfilEstrategico: null,
      tema: "",
      efeitoBase: { C2: -0.08, F1: -0.02, R2: 6 }
    }
  ],
  Processos: [
    {
      id: "sistemas_dados",
      nome: "Sistemas de gestão e dados",
      descricao: "Tecnologia de gestão, prontuário, indicadores e rastreabilidade.",
      valorReferencia: 40000,
      perfilEstrategico: "diferenciacao",
      tema: "",
      efeitoBase: { P4: 18, F3: -0.03 }
    },
    {
      id: "seguranca_protocolos",
      nome: "Segurança e protocolos clínicos",
      descricao: "Padronização de protocolos, checklists e avaliação de segurança do paciente.",
      valorReferencia: 35000,
      perfilEstrategico: "diferenciacao",
      tema: "",
      efeitoBase: { P2: -0.015, P1: 15 }
    },
    {
      id: "capacidade_cobertura",
      nome: "Capacidade e cobertura de atendimento",
      descricao: "Ampliação de estrutura, plantão e nível de serviço.",
      valorReferencia: 45000,
      perfilEstrategico: "diferenciacao",
      tema: "",
      efeitoBase: { C4: 8, P2: -0.008, P3: 6, F1: -0.015 }
    }
  ],
  RH: [
    {
      id: "contratacao_retencao",
      nome: "Contratação e retenção de equipe",
      descricao: "Mais equipe, redução de sobrecarga e programas de retenção de profissionais.",
      valorReferencia: 50000,
      perfilEstrategico: "diferenciacao",
      tema: "Concorrência",
      efeitoBase: { R2: -15, R3: 8, R1: -5, F1: -0.02 }
    },
    {
      id: "capacitacao",
      nome: "Capacitação e desenvolvimento",
      descricao: "Formação técnica, treinamento e desenvolvimento de talento interno.",
      valorReferencia: 30000,
      perfilEstrategico: "diferenciacao",
      tema: "",
      efeitoBase: { P4: 5, R3: 4, R1: -3 }
    },
    {
      id: "remuneracao_incentivos",
      nome: "Programa de remuneração e incentivos",
      descricao: "Bônus, plantão diferenciado e incentivos de permanência.",
      valorReferencia: 35000,
      perfilEstrategico: null,
      tema: "",
      efeitoBase: { R1: -6, F1: -0.015 }
    }
  ],
  Financeiro: [
    {
      id: "cobranca_glosas",
      nome: "Gestão ativa de recebíveis e glosas",
      descricao: "Estrutura e processo de cobrança e acompanhamento de glosas junto às operadoras.",
      valorReferencia: 30000,
      perfilEstrategico: "custo",
      tema: "",
      efeitoBase: { F3: -0.035, F1: 0.015 }
    },
    {
      id: "modernizacao_faturamento",
      nome: "Modernização de faturamento e cobrança",
      descricao: "Verticalização e melhoria dos processos de faturamento junto às operadoras.",
      valorReferencia: 35000,
      perfilEstrategico: "diferenciacao",
      tema: "",
      efeitoBase: { F3: -0.02, P4: 8 }
    },
    {
      id: "reserva_reinvestimento",
      nome: "Formação de reserva estratégica",
      descricao: "Retenção de parte do resultado para reinvestir e formar fôlego financeiro.",
      valorReferencia: 40000,
      perfilEstrategico: "diferenciacao",
      tema: "",
      efeitoBase: { F4: 0.10, R4: -4 }
    }
  ]
};

// substitui o marco de mercado antigo (mitigação por nome de decisão) por mitigação por valor mínimo investido
GAME_DESIGN.marcoConcorrente = {
  choqueImediato: { C4: -8, F1: -0.02, C2: 0.05 },
  pressaoPassiva: { C1: -3, R1: 2 },
  campoMitigacaoComercial: "negociacao_preco",
  campoMitigacaoRH: "contratacao_retencao"
};

// não usamos mais o menu de decisões prontas — mantido apenas como referência histórica, sem uso no motor
delete GAME_DESIGN.decisoesPorArea;
// ===================== MOTOR DO JOGO (funções puras) =====================
// Depende de GAME_DESIGN (game-data.js) já carregado no escopo global.
// Sem dependência de DOM ou Supabase — testável isoladamente com node.

const IND_INFO = {};
GAME_DESIGN.indicadores.forEach((i) => { IND_INFO[i.codigo] = i; });

const CLAMPS = {
  C1: [0, 150], C2: [0, 1], C3: [0, 20], C4: [0, 100],
  P1: [0, 1], P2: [0, 0.3], P3: [0, 1], P4: [0, 100],
  R1: [0, 1], R2: [0, 100], R3: [0, 1.2], R4: [0, 100],
  F1: [-0.5, 0.6], F2: [-6, 12], F3: [0, 0.5], F4: [-0.3, 0.5],
  G1: [0, 100]
};

const AREAS_INDICADORES = { Comercial: ["C1","C2","C3","C4"], Processos: ["P1","P2","P3","P4"], RH: ["R1","R2","R3","R4"], Financeiro: ["F1","F2","F3","F4"] };

function clampValor(codigo, valor) {
  const [lo, hi] = CLAMPS[codigo];
  return Math.min(hi, Math.max(lo, valor));
}

function estadoInicial() {
  const estado = {};
  GAME_DESIGN.indicadores.forEach((i) => { estado[i.codigo] = i.valorInicial; });
  return estado;
}

function piecewiseLinear(x, pontos) {
  if (x <= pontos[0][0]) return pontos[0][1];
  if (x >= pontos[pontos.length - 1][0]) return pontos[pontos.length - 1][1];
  for (let i = 0; i < pontos.length - 1; i++) {
    const [x0, y0] = pontos[i];
    const [x1, y1] = pontos[i + 1];
    if (x >= x0 && x <= x1) {
      if (x1 === x0) return y0;
      const t = (x - x0) / (x1 - x0);
      return y0 + t * (y1 - y0);
    }
  }
  return pontos[pontos.length - 1][1];
}

function normalizarIndicador(codigo, valor) {
  const [lo, hi] = GAME_DESIGN.faixasAmarelas[codigo];
  const largura = hi - lo;
  const floor = lo - largura;
  const ceil = hi + largura;
  const direcao = IND_INFO[codigo].direcao;
  let pontos;
  if (direcao === "maior") {
    pontos = [[floor, 0], [lo, 33], [hi, 66], [ceil, 100]];
  } else {
    pontos = [[floor, 100], [lo, 66], [hi, 33], [ceil, 0]];
  }
  return Math.round(piecewiseLinear(valor, pontos) * 10) / 10;
}

function zonaIndicador(codigo, valor) {
  const [lo, hi] = GAME_DESIGN.faixasAmarelas[codigo];
  const direcao = IND_INFO[codigo].direcao;
  if (valor >= lo && valor <= hi) return "amarelo";
  if (direcao === "maior") return valor < lo ? "vermelho" : "verde";
  return valor > hi ? "vermelho" : "verde";
}

function computeAreaScore(estado, area) {
  const codigos = AREAS_INDICADORES[area];
  const soma = codigos.reduce((acc, c) => acc + normalizarIndicador(c, estado[c]), 0);
  return soma / codigos.length;
}

function computeComposite(estado) {
  const pesos = GAME_DESIGN.pesosCompostos;
  let total = 0;
  for (const area in pesos) total += computeAreaScore(estado, area) * pesos[area];
  return Math.round(total * 10) / 10;
}

function fatorReputacao(g1) {
  if (g1 < 20) return 0.65;
  if (g1 < 40) return 0.85;
  if (g1 <= 70) return 1.00;
  return 1.05;
}

function computeIndiceFinal(estado) {
  return Math.round(computeComposite(estado) * fatorReputacao(estado.G1) * 10) / 10;
}

function aplicarEfeitos(estado, efeitos) {
  const novo = Object.assign({}, estado);
  for (const cod in efeitos) {
    novo[cod] = clampValor(cod, (novo[cod] || 0) + efeitos[cod]);
  }
  return novo;
}

// ---------- Campos de investimento (substituem o menu de decisões prontas) ----------

function todosOsCampos() {
  const lista = [];
  for (const area in GAME_DESIGN.camposInvestimento) {
    GAME_DESIGN.camposInvestimento[area].forEach((c) => lista.push(Object.assign({ area }, c)));
  }
  return lista;
}

function campoPorId(id) {
  return todosOsCampos().find((c) => c.id === id);
}

// retorno decrescente: até o valor de referência o efeito escala linear (0 a 100%);
// acima da referência, o excedente vale só 40% do que valeria dentro da referência.
function fatorInvestimento(valor, referencia) {
  if (!referencia || referencia <= 0) return 0;
  const razao = valor / referencia;
  if (razao <= 1) return Math.max(0, razao);
  return 1 + (razao - 1) * 0.4;
}

// investimentos: { campoId: valorEmReais, ... } — campos não incluídos contam como 0
function aplicarInvestimentos(estado, investimentos) {
  let novoEstado = Object.assign({}, estado);
  let totalGasto = 0;
  const efeitosAplicados = [];
  todosOsCampos().forEach((campo) => {
    const valor = Math.max(0, investimentos[campo.id] || 0);
    totalGasto += valor;
    if (valor > 0) {
      const fator = fatorInvestimento(valor, campo.valorReferencia);
      const efeitosEscalados = {};
      for (const cod in campo.efeitoBase) efeitosEscalados[cod] = campo.efeitoBase[cod] * fator;
      novoEstado = aplicarEfeitos(novoEstado, efeitosEscalados);
      efeitosAplicados.push({ tipo: "investimento", area: campo.area, campoId: campo.id, campoNome: campo.nome, valor, fator, efeitos: efeitosEscalados });
    }
  });
  if (totalGasto > 0) {
    const folhaMensal = GAME_DESIGN.cenarioFinanceiro.folhaMensal;
    novoEstado = aplicarEfeitos(novoEstado, { F2: -(totalGasto / folhaMensal) });
  }
  return { estado: novoEstado, totalGasto, efeitosAplicados };
}

function eventoPorNome(nome) {
  return GAME_DESIGN.eventosAleatorios.find((e) => e.nome === nome);
}

// sorteia um evento respeitando pesos, com "Racha societário" em peso dobrado se R4 já vermelho
function sortearEvento(estadoAtual, rand) {
  rand = rand || Math.random;
  const eventos = GAME_DESIGN.eventosAleatorios.map((e) => {
    let peso = e.pesoBase;
    if (e.nome.indexOf("Racha societário") !== -1 && zonaIndicador("R4", estadoAtual.R4) === "vermelho") {
      peso = peso * 2;
    }
    return { evento: e, peso };
  });
  const total = eventos.reduce((acc, e) => acc + e.peso, 0);
  let r = rand() * total;
  for (const item of eventos) {
    if (r < item.peso) return item.evento;
    r -= item.peso;
  }
  return eventos[eventos.length - 1].evento;
}

// ---------- Resolução de uma rodada para UM time ----------
// investimentos: { campoId: valorEmReais, ... } (12 campos possíveis, os que faltarem contam como 0)
// contexto: { numeroRodada, eventoNome (ou null), rodadaConcorrente (numero ou null), concorrenteJaChegou (bool antes desta rodada) }
function resolverRodadaTime(team, investimentos, contexto, planoTime) {
  let estado = Object.assign({}, team.estado);
  const efeitosAplicados = [];

  const resultadoInvest = aplicarInvestimentos(estado, investimentos);
  estado = resultadoInvest.estado;
  efeitosAplicados.push(...resultadoInvest.efeitosAplicados);

  if (contexto.eventoNome) {
    const evento = eventoPorNome(contexto.eventoNome);
    if (evento) {
      estado = aplicarEfeitos(estado, evento.efeitos);
      efeitosAplicados.push({ tipo: "evento", nome: evento.nome });
    }
  }

  const contadorAlinhamentoAnterior = (team.rodadasRisco && team.rodadasRisco.desalinhamentoPlano) || 0;
  const alinhamento = avaliarAlinhamentoPlano(investimentos, planoTime, contadorAlinhamentoAnterior);
  if (alinhamento.penalidadeAplicada) {
    estado = aplicarEfeitos(estado, alinhamento.efeitos);
    efeitosAplicados.push({ tipo: "penalidade_desalinhamento", detalhes: alinhamento.camposConflitantes });
  }

  const chegaNestaRodada = contexto.rodadaConcorrente === contexto.numeroRodada;
  const concorrenteAtivo = contexto.concorrenteJaChegou || chegaNestaRodada;
  if (chegaNestaRodada) {
    estado = aplicarEfeitos(estado, GAME_DESIGN.marcoConcorrente.choqueImediato);
    efeitosAplicados.push({ tipo: "marco", nome: "Chegada do concorrente" });
  }
  if (concorrenteAtivo) {
    const pressao = Object.assign({}, GAME_DESIGN.marcoConcorrente.pressaoPassiva);
    const campoComercial = campoPorId(GAME_DESIGN.marcoConcorrente.campoMitigacaoComercial);
    const campoRH = campoPorId(GAME_DESIGN.marcoConcorrente.campoMitigacaoRH);
    const mitigouComercial = (investimentos[campoComercial.id] || 0) >= campoComercial.valorReferencia;
    const mitigouRH = (investimentos[campoRH.id] || 0) >= campoRH.valorReferencia;
    if (mitigouComercial) delete pressao.C1;
    if (mitigouRH) delete pressao.R1;
    if (Object.keys(pressao).length) {
      estado = aplicarEfeitos(estado, pressao);
      efeitosAplicados.push({ tipo: "pressao_concorrencia", mitigouComercial, mitigouRH });
    }
  }

  const contadores = Object.assign({ P2: 0, G1: 0, R4: 0, desalinhamentoPlano: 0 }, team.rodadasRisco || {});
  contadores.P2 = zonaIndicador("P2", estado.P2) === "vermelho" ? contadores.P2 + 1 : 0;
  contadores.G1 = estado.G1 < 20 ? contadores.G1 + 1 : 0;
  contadores.R4 = zonaIndicador("R4", estado.R4) === "vermelho" ? contadores.R4 + 1 : 0;
  contadores.desalinhamentoPlano = alinhamento.novoContador;

  let status = team.status && team.status !== "ativo" ? team.status : "ativo";
  if (status === "ativo") {
    if (estado.F2 <= 0) status = "insolvente";
    else if (contadores.P2 >= 2) status = "crise_seguranca";
    else if (contadores.G1 >= 2) status = "crise_imagem";
    else if (contadores.R4 >= 2) status = "ruptura_societaria";
  }

  const indiceFinal = computeIndiceFinal(estado);
  const snapshot = {
    rodada: contexto.numeroRodada,
    estado,
    indiceFinal,
    indiceComposto: computeComposite(estado),
    fatorReputacao: fatorReputacao(estado.G1),
    status,
    investimentos,
    totalGasto: resultadoInvest.totalGasto,
    evento: contexto.eventoNome || null,
    marcoConcorrente: chegaNestaRodada,
    efeitosAplicados,
    alinhamentoPlano: {
      perfilPlano: alinhamento.perfilPlano,
      desalinhado: alinhamento.desalinhado,
      camposConflitantes: alinhamento.camposConflitantes,
      penalidadeAplicada: alinhamento.penalidadeAplicada,
      avisoJaAtivo: contadorAlinhamentoAnterior > 0
    }
  };

  return {
    estado,
    status,
    rodadasRisco: contadores,
    historico: (team.historico || []).concat([snapshot]),
    concorrenteJaChegou: concorrenteAtivo
  };
}

// ===================== EXTENSÃO: ALINHAMENTO COM O PLANO ESTRATÉGICO DO TIME =====================

// dado um objeto de plano (mesma estrutura da ferramenta de Planejamento Estratégico),
// retorna qual perfil (custo | diferenciacao | foco) tem a maior média de notas — ou
// null se o time ainda não preencheu a etapa de Estratégias Genéricas.
function estrategiaDominanteDoPlano(plano) {
  if (!plano || !plano.estrategias) return null;
  let melhor = null;
  let melhorMedia = 0;
  for (const chave of ["custo", "diferenciacao", "foco"]) {
    const valores = (plano.estrategias[chave] || []).filter((v) => v > 0);
    if (!valores.length) continue;
    const media = valores.reduce((a, b) => a + b, 0) / valores.length;
    if (media > melhorMedia) { melhorMedia = media; melhor = chave; }
  }
  return melhor;
}

// desalinhado = o time investiu bem mais nos campos do perfil OPOSTO ao que declarou no plano
// (custo x diferenciação — "foco" não conflita diretamente com nenhum dos dois hoje)
function avaliarAlinhamentoPlano(investimentos, planoTime, contadorAnterior) {
  const perfilPlano = estrategiaDominanteDoPlano(planoTime);
  if (!perfilPlano || perfilPlano === "foco") {
    return { perfilPlano: perfilPlano || null, desalinhado: false, camposConflitantes: [], novoContador: 0, efeitos: {}, penalidadeAplicada: false };
  }
  const perfilOposto = perfilPlano === "custo" ? "diferenciacao" : "custo";
  let somaDeclarado = 0;
  let somaOposto = 0;
  const camposConflitantes = [];
  todosOsCampos().forEach((campo) => {
    const valor = Math.max(0, investimentos[campo.id] || 0);
    if (valor <= 0) return;
    if (campo.perfilEstrategico === perfilPlano) somaDeclarado += valor;
    if (campo.perfilEstrategico === perfilOposto) {
      somaOposto += valor;
      camposConflitantes.push({ area: campo.area, campo: campo.nome, valor, perfilCampo: perfilOposto });
    }
  });
  const desalinhado = somaOposto > 0 && somaOposto > somaDeclarado * 1.3;
  let novoContador = desalinhado ? (contadorAnterior || 0) + 1 : 0;
  let efeitos = {};
  let penalidadeAplicada = false;
  if (novoContador >= 2) {
    efeitos = { R4: -8 };
    penalidadeAplicada = true;
    novoContador = 0;
  }
  return { perfilPlano, desalinhado, camposConflitantes, novoContador, efeitos, penalidadeAplicada };
}

function zonasDoEstado(estado) {
  const zonas = {};
  GAME_DESIGN.indicadores.forEach((i) => { zonas[i.codigo] = zonaIndicador(i.codigo, estado[i.codigo]); });
  return zonas;
}

// ===================== EXTENSÃO CONTÁBIL: DRE, BALANÇO E ÍNDICES =====================

function gerarDRE(estado) {
  const cf = GAME_DESIGN.cenarioFinanceiro;
  const receitaBruta = cf.receitaPotencialTrimestral * (estado.C1 / 100);
  const glosas = receitaBruta * estado.F3;
  const receitaLiquida = receitaBruta - glosas;
  const resultadoLiquido = receitaLiquida * estado.F1;
  const custosTotais = receitaLiquida - resultadoLiquido;
  const custoEquipeMedica = custosTotais * cf.proporcaoCustos.equipeMedica;
  const custoOperacional = custosTotais * cf.proporcaoCustos.operacionalAdministrativo;
  const custoComercial = custosTotais * cf.proporcaoCustos.comercialMarketing;
  return {
    receitaBruta, glosas, receitaLiquida,
    custoEquipeMedica, custoOperacional, custoComercial, custosTotais,
    resultadoLiquido,
    margemLiquida: estado.F1
  };
}

function gerarBalanco(estado, dre) {
  const cf = GAME_DESIGN.cenarioFinanceiro;
  const caixa = estado.F2 * cf.folhaMensal;
  const contasAReceber = (dre.receitaLiquida / 3) * cf.contasAReceberMeses; // dre é trimestral, /3 = mensal
  const ativoTotal = caixa + contasAReceber;
  const obrigacoesCurtoPrazo = cf.folhaMensal; // aproximação: 1 mês de folha em obrigações
  const passivoTotal = Math.max(0, obrigacoesCurtoPrazo - Math.max(0, caixa));
  const reservaLucros = Math.max(0, ativoTotal - passivoTotal) * estado.F4;
  const patrimonioLiquido = ativoTotal - passivoTotal;
  return { caixa, contasAReceber, ativoTotal, obrigacoesCurtoPrazo, passivoTotal, reservaLucros, patrimonioLiquido };
}

function calcularIndicesContabeis(dre, balanco) {
  const liquidezCorrente = balanco.passivoTotal > 0 ? balanco.ativoTotal / balanco.passivoTotal : null;
  const endividamento = balanco.ativoTotal > 0 ? balanco.passivoTotal / balanco.ativoTotal : 0;
  const margemBruta = dre.receitaLiquida > 0 ? (dre.receitaLiquida - dre.custoEquipeMedica) / dre.receitaLiquida : null;
  return { liquidezCorrente, endividamento, margemBruta };
}

function confiabilidadeDemonstracoes(estado) {
  const zona = zonaIndicador("P4", estado.P4);
  if (zona === "vermelho") return { nivel: "baixa", texto: "Dados pouco confiáveis — sem sistema de gestão estruturado, os números abaixo são estimativas grosseiras." };
  if (zona === "amarelo") return { nivel: "media", texto: "Confiabilidade média — controles parciais, alguns números podem estar defasados." };
  return { nivel: "alta", texto: "Dados confiáveis — sistema de gestão maduro sustenta estas demonstrações." };
}

// anota, a partir das chaves de efeitos de uma decisão/evento, quais linhas contábeis foram tocadas
function linhasContabeisTocadas(efeitos) {
  const linhas = new Set();
  for (const cod in efeitos) {
    const linha = GAME_DESIGN.indicadorParaLinhaContabil[cod];
    if (linha) linhas.add(linha);
  }
  return Array.from(linhas);
}
// ===================== BUSINESS GAME — COMPONENTES VISUAIS COMPARTILHADOS =====================

const ZONA_LABEL = { vermelho: "🔴", amarelo: "🟡", verde: "🟢" };
const STATUS_LABEL = {
  ativo: "Em jogo",
  insolvente: "Insolvente — caixa esgotado",
  crise_seguranca: "Crise de segurança clínica",
  crise_imagem: "Crise de imagem pública",
  ruptura_societaria: "Ruptura societária"
};

function formatarValorIndicador(cod, valor) {
  const info = IND_INFO[cod];
  if (info.unidade === "%") return (valor * 100).toFixed(1) + "%";
  if (info.unidade === "meses") return valor.toFixed(1) + " meses";
  if (info.unidade === "contratos") return Math.round(valor).toString();
  return Math.round(valor).toString();
}

function painelIndicadores(estado, opts) {
  opts = opts || {};
  const grupos = ["Comercial", "Processos", "RH", "Financeiro"];
  let html = `<div class="kpi-grid">`;
  grupos.forEach((area) => {
    const codigos = AREAS_INDICADORES[area];
    html += `<div class="kpi-area-card">
      <div class="kpi-area-titulo">${area}</div>
      ${codigos.map((cod) => {
        const info = IND_INFO[cod];
        const zona = zonaIndicador(cod, estado[cod]);
        return `<div class="kpi-row kpi-${zona}">
          <span class="kpi-nome">${info.nome}</span>
          <span class="kpi-valor">${formatarValorIndicador(cod, estado[cod])}</span>
          <span class="kpi-zona">${ZONA_LABEL[zona]}</span>
        </div>`;
      }).join("")}
    </div>`;
  });
  html += `</div>`;
  const zonaRep = zonaIndicador("G1", estado.G1);
  const critico = estado.G1 < 20;
  html += `<div class="kpi-reputacao kpi-${critico ? "critico" : zonaRep}">
    <span class="kpi-reputacao-label">Reputação / imagem corporativa</span>
    <span class="kpi-reputacao-valor">${Math.round(estado.G1)} / 100</span>
    <span class="kpi-reputacao-zona">${critico ? "🔴 crítico" : ZONA_LABEL[zonaRep]} · fator ${fatorReputacao(estado.G1).toFixed(2)}×</span>
  </div>`;
  if (!opts.semIndice) {
    html += `<div class="kpi-indice-final">
      <span>Índice composto: <strong>${computeComposite(estado).toFixed(1)}</strong></span>
      <span>Índice final (com reputação): <strong>${computeIndiceFinal(estado).toFixed(1)}</strong></span>
    </div>`;
  }
  return html;
}

function tabelaLeaderboard(times) {
  const linhas = times.map((t) => {
    const ultimo = t.historico && t.historico.length ? t.historico[t.historico.length - 1] : null;
    const indice = ultimo ? ultimo.indiceFinal : computeIndiceFinal(t.estado);
    return { nome: t.nome, indice, status: t.status };
  }).sort((a, b) => {
    const aAtivo = a.status === "ativo" ? 1 : 0;
    const bAtivo = b.status === "ativo" ? 1 : 0;
    if (aAtivo !== bAtivo) return bAtivo - aAtivo;
    return b.indice - a.indice;
  });
  return `<table class="leaderboard-table">
    <thead><tr><th>#</th><th>Time</th><th>Índice final</th><th>Situação</th></tr></thead>
    <tbody>
      ${linhas.map((l, i) => `<tr class="${l.status !== "ativo" ? "leaderboard-encerrado" : ""}">
        <td>${i + 1}</td><td>${esc(l.nome)}</td><td>${l.indice.toFixed(1)}</td>
        <td>${STATUS_LABEL[l.status] || l.status}</td>
      </tr>`).join("")}
    </tbody>
  </table>`;
}

function fmtR$Curto(v) {
  return "R$ " + Math.round(v).toLocaleString("pt-BR");
}

function seletorInvestimentos(investimentosAtuais, orcamentoTotal, disabled) {
  const areas = ["Comercial", "Processos", "RH", "Financeiro"];
  const totalAlocado = Object.values(investimentosAtuais).reduce((a, b) => a + (Number(b) || 0), 0);
  const restante = orcamentoTotal - totalAlocado;
  const estourou = restante < 0;

  const cardsAreas = areas.map((area) => {
    const campos = GAME_DESIGN.camposInvestimento[area];
    return `<div class="decisao-area-card">
      <div class="decisao-area-titulo">${area}</div>
      <div class="investimento-campos">
        ${campos.map((c) => {
          const valor = Number(investimentosAtuais[c.id]) || 0;
          const fator = fatorInvestimento(valor, c.valorReferencia);
          return `<div class="investimento-item">
            <div class="investimento-item-cabecalho">
              <span class="investimento-item-nome">${esc(c.nome)}${c.tema ? ` <span class="decisao-tag">${esc(c.tema)}</span>` : ""}</span>
              <span class="investimento-item-referencia">referência: ${fmtR$Curto(c.valorReferencia)}</span>
            </div>
            <p class="decisao-opcao-obs">${esc(c.descricao)}</p>
            <div class="investimento-item-input">
              <span class="investimento-prefixo">R$</span>
              <input type="number" min="0" step="1000" class="investimento-valor-input" value="${valor || ""}" placeholder="0"
                data-jogo-investimento="${c.id}" ${disabled ? "disabled" : ""} />
              <span class="investimento-fator">${valor > 0 ? "efeito " + Math.round(fator * 100) + "%" : ""}</span>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>`;
  }).join("");

  return `
    <div class="orcamento-barra ${estourou ? "orcamento-estourado" : ""}">
      <span>Orçamento da rodada: <strong>${fmtR$Curto(orcamentoTotal)}</strong></span>
      <span>Alocado: <strong>${fmtR$Curto(totalAlocado)}</strong></span>
      <span>${estourou ? "Excedeu em " + fmtR$Curto(-restante) + " — reduza algum campo" : "Restante: " + fmtR$Curto(restante)}</span>
    </div>
    ${cardsAreas}
  `;
}

const PERFIL_LABEL = { custo: "Liderança em custo", diferenciacao: "Diferenciação", foco: "Foco" };

function renderAvisoAlinhamento(al) {
  if (!al || !al.perfilPlano) return "";
  if (al.penalidadeAplicada) {
    return `<div class="relatorio-desalinho relatorio-desalinho-forte">
      🔴 <strong>Desalinhamento persistente com o plano</strong> — 2ª rodada seguida investindo predominantemente no perfil oposto à Estratégia Genérica declarada (${PERFIL_LABEL[al.perfilPlano]}). Alinhamento societário caiu como consequência.
      <div class="relatorio-desalinho-detalhe">${al.camposConflitantes.map((d) => `<span class="tag tag-alerta">${d.area}: ${esc(d.campo)} (${fmtR$Curto(d.valor)})</span>`).join(" ")}</div>
    </div>`;
  }
  if (al.desalinhado) {
    return `<div class="relatorio-desalinho">
      ⚠️ Os investimentos desta rodada foram predominantemente no perfil oposto à Estratégia Genérica do plano (<strong>${PERFIL_LABEL[al.perfilPlano]}</strong>). Reequilibrem os investimentos na próxima rodada, ou revisem o plano se o rumo mudou de verdade — senão isso afeta o Alinhamento societário.
      <div class="relatorio-desalinho-detalhe">${al.camposConflitantes.map((d) => `<span class="tag tag-alerta">${d.area}: ${esc(d.campo)} (${fmtR$Curto(d.valor)})</span>`).join(" ")}</div>
    </div>`;
  }
  return `<div class="relatorio-alinhado">✅ Investimentos coerentes com a Estratégia Genérica do plano (${PERFIL_LABEL[al.perfilPlano]}).</div>`;
}

function totalInvestidoDoTime(teamId) {
  return jogoInvestimentosDoTime.filter((d) => d.team_id === teamId).reduce((acc, d) => acc + (Number(d.valor) || 0), 0);
}

function prazoRestanteTexto(prazoISO) {
  if (!prazoISO) return "sem prazo definido";
  const diff = new Date(prazoISO).getTime() - Date.now();
  if (diff <= 0) return "prazo esgotado";
  const horas = Math.floor(diff / 3600000);
  const min = Math.floor((diff % 3600000) / 60000);
  const seg = Math.floor((diff % 60000) / 1000);
  if (horas > 0) return `${horas}h ${min}min ${seg}s restantes`;
  if (min > 0) return `${min}min ${seg}s restantes`;
  return `${seg}s restantes`;
}

// cronômetro ao vivo: um span com data-cronometro="<prazo ISO>" se atualiza sozinho a cada segundo
function cronometroSpan(prazoISO) {
  if (!prazoISO) return "sem prazo definido";
  return `<span class="cronometro-vivo" data-cronometro="${prazoISO}">${prazoRestanteTexto(prazoISO)}</span>`;
}

function atualizarCronometrosNaTela() {
  document.querySelectorAll("[data-cronometro]").forEach((el) => {
    const prazo = el.getAttribute("data-cronometro");
    const texto = prazoRestanteTexto(prazo);
    el.textContent = texto;
    el.classList.toggle("cronometro-esgotado", texto === "prazo esgotado");
  });
}

function iniciarCronometroGlobal() {
  if (window.__cronometroIniciado) return;
  window.__cronometroIniciado = true;
  setInterval(atualizarCronometrosNaTela, 1000);
}

// ===================== BUSINESS GAME — DEMONSTRAÇÕES CONTÁBEIS =====================

function fmtR$(v) {
  return "R$ " + Math.round(v).toLocaleString("pt-BR");
}

function painelDemonstracoes(estado) {
  const dre = gerarDRE(estado);
  const bal = gerarBalanco(estado, dre);
  const idx = calcularIndicesContabeis(dre, bal);
  const conf = confiabilidadeDemonstracoes(estado);

  return `
    <div class="conf-badge conf-${conf.nivel}">📋 ${conf.texto}</div>
    <div class="dre-balanco-grid">
      <div class="demonstrativo-card">
        <div class="demonstrativo-titulo">DRE — Demonstração do Resultado (trimestre)</div>
        <div class="dre-linha"><span>Receita Bruta de Serviços</span><span>${fmtR$(dre.receitaBruta)}</span></div>
        <div class="dre-linha dre-neg"><span>(–) Glosas e Deduções</span><span>(${fmtR$(dre.glosas)})</span></div>
        <div class="dre-linha dre-subtotal"><span>= Receita Líquida</span><span>${fmtR$(dre.receitaLiquida)}</span></div>
        <div class="dre-linha dre-neg"><span>(–) Custos com Equipe Médica</span><span>(${fmtR$(dre.custoEquipeMedica)})</span></div>
        <div class="dre-linha dre-neg"><span>(–) Custos Operacionais e Administrativos</span><span>(${fmtR$(dre.custoOperacional)})</span></div>
        <div class="dre-linha dre-neg"><span>(–) Despesas Comerciais e Marketing</span><span>(${fmtR$(dre.custoComercial)})</span></div>
        <div class="dre-linha dre-total"><span>= Resultado Líquido do Período</span><span>${fmtR$(dre.resultadoLiquido)}</span></div>
        <div class="dre-nota">Custos por linha são estimados a partir de proporções fixas do setor — o Resultado Líquido é o número que realmente vem do jogo.</div>
      </div>
      <div class="demonstrativo-card">
        <div class="demonstrativo-titulo">Balanço Patrimonial simplificado</div>
        <div class="balanco-cols">
          <div>
            <div class="balanco-subtitulo">Ativo</div>
            <div class="dre-linha"><span>Caixa e Equivalentes</span><span>${fmtR$(bal.caixa)}</span></div>
            <div class="dre-linha"><span>Contas a Receber</span><span>${fmtR$(bal.contasAReceber)}</span></div>
            <div class="dre-linha dre-total"><span>Ativo Total</span><span>${fmtR$(bal.ativoTotal)}</span></div>
          </div>
          <div>
            <div class="balanco-subtitulo">Passivo + Patrimônio Líquido</div>
            <div class="dre-linha"><span>Obrigações de Curto Prazo</span><span>${fmtR$(bal.passivoTotal)}</span></div>
            <div class="dre-linha"><span>&nbsp;&nbsp;· inclui reserva de lucros de</span><span>${fmtR$(bal.reservaLucros)}</span></div>
            <div class="dre-linha dre-total"><span>Patrimônio Líquido</span><span>${fmtR$(bal.patrimonioLiquido)}</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="indices-contabeis">
      <div class="indice-item"><span>Liquidez corrente</span><strong>${idx.liquidezCorrente === null ? "sem passivo de curto prazo" : idx.liquidezCorrente.toFixed(2) + "×"}</strong></div>
      <div class="indice-item"><span>Endividamento</span><strong>${(idx.endividamento * 100).toFixed(1)}%</strong></div>
      <div class="indice-item"><span>Margem bruta (após custo de equipe)</span><strong>${idx.margemBruta === null ? "—" : (idx.margemBruta * 100).toFixed(1) + "%"}</strong></div>
    </div>
  `;
}

function painelHistoricoPreJogo() {
  const hist = GAME_DESIGN.historicoPreJogo;
  return `
    <div class="card">
      <div class="card-kicker">Histórico contábil — os 4 trimestres antes do jogo começar</div>
      <p class="card-note">Leiam esta trajetória antes de decidir a rodada 1: de onde a empresa vem ajuda a entender os riscos que ela já carrega.</p>
      <div class="table-scroll">
        <table class="historico-contabil-table">
          <thead><tr><th>Período</th><th>Receita Bruta</th><th>Glosas</th><th>Margem líquida</th><th>Caixa (meses)</th><th>Reserva</th><th>Observação</th></tr></thead>
          <tbody>
            ${hist.map((h) => `<tr>
              <td>${h.label}</td>
              <td>${fmtR$(h.receitaBruta)}</td>
              <td>${(h.glosas * 100).toFixed(1)}%</td>
              <td>${(h.margemLiquida * 100).toFixed(1)}%</td>
              <td>${h.caixaMeses.toFixed(1)}</td>
              <td>${(h.reservaPct * 100).toFixed(1)}%</td>
              <td class="muted">${esc(h.observacao)}</td>
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function painelMiniCaso(sessao) {
  if (sessao.mini_caso_atual === null || sessao.mini_caso_atual === undefined) return "";
  const caso = GAME_DESIGN.miniCasos[sessao.mini_caso_atual];
  if (!caso) return "";
  return `
    <div class="card card-minicaso">
      <div class="card-kicker">Mini-caso de diagnóstico contábil · ${esc(caso.titulo)}</div>
      <p>${esc(caso.enunciado)}</p>
      <p class="minicaso-pergunta"><strong>${esc(caso.pergunta)}</strong></p>
      <ol class="minicaso-opcoes">
        ${caso.opcoes.map((op, i) => `<li class="${sessao.mini_caso_revelado && i === caso.respostaCorreta ? "minicaso-correta" : ""}">${esc(op)}</li>`).join("")}
      </ol>
      ${sessao.mini_caso_revelado ? `<div class="minicaso-explicacao">✅ Resposta: opção ${caso.respostaCorreta + 1}. ${esc(caso.explicacao)}</div>` : `<p class="muted">Discutam em equipe — o facilitador revela a resposta quando quiser.</p>`}
    </div>
  `;
}
// ===================== BUSINESS GAME — ESTADO E ACESSO A DADOS =====================

let modoAtual = "plano"; // 'plano' | 'jogo'
let jogoView = "lista"; // 'lista' | 'facilitador' | 'time'
let jogoSessoes = [];
let jogoSessaoAtual = null;
let jogoTimes = [];
let jogoRodadas = [];
let jogoInvestimentosDoTime = []; // investimentos da rodada aberta, de todos os times (facilitador usa para acompanhar)
let jogoMeuTimeId = null;
let jogoMeusInvestimentosRascunho = {};
let jogoCanalRealtime = null;
let jogoUltimoRelatorio = null; // guarda o resultado do fechamento da última rodada, para exibir o "relatório da rodada"
let jogoRelatoriosPorRodada = {}; // relatórios de TODAS as rodadas fechadas já lidos do banco (numero -> itens), só para facilitador
let jogoRelatorioAbertoNumero = null; // qual número de rodada está expandido no navegador de relatórios do facilitador
let jogoVisualizandoComoTimeId = null; // se preenchido, o facilitador está pré-visualizando a tela de um time específico

function timeAtivoParaDecisao() {
  return jogoVisualizandoComoTimeId || jogoMeuTimeId;
}

function souFacilitador() {
  return minhaRole === "facilitador" || minhaRole === "admin";
}

async function carregarSessoesJogo() {
  const { data, error } = await sbClient.from("game_sessions").select("*").order("criado_em", { ascending: false });
  if (!error) jogoSessoes = data || [];
}

async function criarSessaoJogo(nome, totalRodadas, rodadaConcorrente) {
  const { data, error } = await sbClient.from("game_sessions").insert({
    nome, total_rodadas: totalRodadas, rodada_concorrente: rodadaConcorrente || null, criado_por: sessaoUsuarioId()
  }).select().single();
  if (!error) { await carregarSessoesJogo(); await abrirSessaoJogo(data.id); }
  return { data, error };
}

function sessaoUsuarioId() {
  return window.__meuUserId || null;
}

async function abrirSessaoJogo(sessionId) {
  const [{ data: sessao }, { data: times }, { data: rodadas }] = await Promise.all([
    sbClient.from("game_sessions").select("*").eq("id", sessionId).single(),
    sbClient.from("game_teams").select("*").eq("session_id", sessionId).order("nome"),
    sbClient.from("game_rounds").select("*").eq("session_id", sessionId).order("numero")
  ]);
  jogoSessaoAtual = sessao || null;
  jogoTimes = times || [];
  jogoRodadas = rodadas || [];
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  if (rodadaAberta) {
    const { data: investimentos } = await sbClient.from("game_investimentos").select("*").eq("round_id", rodadaAberta.id);
    jogoInvestimentosDoTime = investimentos || [];
  } else {
    jogoInvestimentosDoTime = [];
  }
  // descobre se sou membro de algum time desta sessão
  jogoMeuTimeId = null;
  if (window.__meuUserId) {
    const { data: meuVinculo } = await sbClient
      .from("game_team_members")
      .select("team_id, game_teams!inner(session_id)")
      .eq("user_id", window.__meuUserId)
      .eq("game_teams.session_id", sessionId)
      .maybeSingle();
    if (meuVinculo) jogoMeuTimeId = meuVinculo.team_id;
  }
  jogoView = souFacilitador() ? "facilitador" : "time";
  jogoMeusInvestimentosRascunho = {};
  jogoRelatoriosPorRodada = {};
  if (souFacilitador()) {
    const rodadasFechadas = jogoRodadas.filter((r) => r.status === "fechada");
    if (rodadasFechadas.length) {
      const { data: relatorios } = await sbClient
        .from("game_round_reports")
        .select("round_id, relatorio")
        .in("round_id", rodadasFechadas.map((r) => r.id));
      (relatorios || []).forEach((r) => {
        const rodada = rodadasFechadas.find((x) => x.id === r.round_id);
        if (rodada) jogoRelatoriosPorRodada[rodada.numero] = r.relatorio;
      });
    }
  }
  assinarRealtimeJogo(sessionId);
  renderStageOnly();
}

function assinarRealtimeJogo(sessionId) {
  if (jogoCanalRealtime) { sbClient.removeChannel(jogoCanalRealtime); jogoCanalRealtime = null; }
  jogoCanalRealtime = sbClient
    .channel("jogo-" + sessionId)
    .on("postgres_changes", { event: "*", schema: "public", table: "game_teams", filter: "session_id=eq." + sessionId }, () => recarregarSessaoSilencioso())
    .on("postgres_changes", { event: "*", schema: "public", table: "game_rounds", filter: "session_id=eq." + sessionId }, () => recarregarSessaoSilencioso())
    .on("postgres_changes", { event: "*", schema: "public", table: "game_investimentos" }, () => recarregarSessaoSilencioso())
    .subscribe();
}

async function recarregarSessaoSilencioso() {
  if (!jogoSessaoAtual) return;
  const sessionId = jogoSessaoAtual.id;
  const [{ data: sessao }, { data: times }, { data: rodadas }] = await Promise.all([
    sbClient.from("game_sessions").select("*").eq("id", sessionId).single(),
    sbClient.from("game_teams").select("*").eq("session_id", sessionId).order("nome"),
    sbClient.from("game_rounds").select("*").eq("session_id", sessionId).order("numero")
  ]);
  jogoSessaoAtual = sessao || jogoSessaoAtual;
  jogoTimes = times || jogoTimes;
  jogoRodadas = rodadas || jogoRodadas;
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  if (rodadaAberta) {
    const { data: investimentos } = await sbClient.from("game_investimentos").select("*").eq("round_id", rodadaAberta.id);
    jogoInvestimentosDoTime = investimentos || [];
  }
  if (modoAtual === "jogo") renderStageOnly();
}

async function criarTimeJogo(nome) {
  const novoEstado = estadoInicial();
  const { error } = await sbClient.from("game_teams").insert({
    session_id: jogoSessaoAtual.id, nome, estado: novoEstado
  });
  if (!error) await abrirSessaoJogo(jogoSessaoAtual.id);
  return error;
}

async function adicionarMembroPorEmail(teamId, email) {
  const { data: perfil, error: erroPerfil } = await sbClient.from("profiles").select("id").eq("email", email.trim()).maybeSingle();
  if (erroPerfil || !perfil) return { error: "Não achei ninguém com esse e-mail entre as pessoas convidadas." };
  const { error } = await sbClient.from("game_team_members").insert({ team_id: teamId, user_id: perfil.id });
  if (!error) await abrirSessaoJogo(jogoSessaoAtual.id);
  return { error: error ? "Essa pessoa já está em um time desta partida, ou algo deu errado." : null };
}

async function abrirNovaRodada(prazoISO) {
  const numero = (jogoSessaoAtual.rodada_atual || 0) + 1;
  const { error } = await sbClient.from("game_rounds").insert({
    session_id: jogoSessaoAtual.id, numero, prazo: prazoISO || null, status: "aberta"
  });
  if (!error) {
    await sbClient.from("game_sessions").update({ rodada_atual: numero, status: "ativa" }).eq("id", jogoSessaoAtual.id);
    await abrirSessaoJogo(jogoSessaoAtual.id);
  }
  return error;
}

async function salvarMeuInvestimento(campoId, valor) {
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  const timeId = timeAtivoParaDecisao();
  if (!rodadaAberta || !timeId) return;
  const valorNumerico = Math.max(0, Number(valor) || 0);
  await sbClient.from("game_investimentos").upsert({
    round_id: rodadaAberta.id, team_id: timeId, campo_id: campoId, valor: valorNumerico, decidido_por: window.__meuUserId
  }, { onConflict: "round_id,team_id,campo_id" });
  jogoMeusInvestimentosRascunho[campoId] = valorNumerico;
  await recarregarSessaoSilencioso();
}

function investimentosDoTimeNaRodada(teamId) {
  const mapa = {};
  jogoInvestimentosDoTime.filter((d) => d.team_id === teamId).forEach((d) => { mapa[d.campo_id] = Number(d.valor) || 0; });
  return mapa;
}

// ---------- Fechamento de rodada: roda o motor localmente e grava o resultado ----------
async function fecharRodadaAtual() {
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  if (!rodadaAberta || !jogoSessaoAtual) return;
  const numeroRodada = rodadaAberta.numero;
  const relatorio = [];

  for (const team of jogoTimes) {
    if (team.status !== "ativo") { relatorio.push({ time: team.nome, pulou: true }); continue; }
    const investimentosTime = investimentosDoTimeNaRodada(team.id);

    let eventoNome = null;
    if (Math.random() < 0.4) {
      eventoNome = sortearEvento(team.estado).nome;
    }

    const { data: planoRow } = await sbClient.from("team_plans").select("plano").eq("team_id", team.id).maybeSingle();
    const planoTime = planoRow ? planoRow.plano : null;

    const contexto = {
      numeroRodada,
      eventoNome,
      rodadaConcorrente: jogoSessaoAtual.rodada_concorrente,
      concorrenteJaChegou: team.concorrente_ja_chegou
    };
    const resultado = resolverRodadaTime(team, investimentosTime, contexto, planoTime);
    const ultimoSnapshot = resultado.historico[resultado.historico.length - 1];
    const linhasContabeis = new Set();
    ultimoSnapshot.efeitosAplicados.forEach((ap) => {
      let efeitos = null;
      if (ap.tipo === "investimento") efeitos = ap.efeitos;
      if (ap.tipo === "evento") efeitos = eventoPorNome(ap.nome).efeitos;
      if (ap.tipo === "marco") efeitos = GAME_DESIGN.marcoConcorrente.choqueImediato;
      if (ap.tipo === "pressao_concorrencia") efeitos = GAME_DESIGN.marcoConcorrente.pressaoPassiva;
      if (efeitos) linhasContabeisTocadas(efeitos).forEach((l) => linhasContabeis.add(l));
    });

    await sbClient.from("game_teams").update({
      estado: resultado.estado,
      status: resultado.status,
      rodadas_risco: resultado.rodadasRisco,
      historico: resultado.historico,
      concorrente_ja_chegou: resultado.concorrenteJaChegou
    }).eq("id", team.id);

    relatorio.push({
      time: team.nome,
      investimentos: investimentosTime,
      totalGasto: ultimoSnapshot.totalGasto,
      evento: eventoNome,
      indiceFinalAnterior: (team.historico && team.historico.length) ? team.historico[team.historico.length - 1].indiceFinal : computeIndiceFinal(team.estado),
      indiceFinalNovo: resultado.historico[resultado.historico.length - 1].indiceFinal,
      statusAnterior: team.status,
      statusNovo: resultado.status,
      marcoConcorrente: resultado.historico[resultado.historico.length - 1].marcoConcorrente,
      linhasContabeis: Array.from(linhasContabeis),
      alinhamentoPlano: ultimoSnapshot.alinhamentoPlano
    });
  }

  await sbClient.from("game_rounds").update({ status: "fechada" }).eq("id", rodadaAberta.id);
  await sbClient.from("game_round_reports").upsert({ round_id: rodadaAberta.id, relatorio }, { onConflict: "round_id" });
  jogoUltimoRelatorio = { numeroRodada, itens: relatorio };
  jogoRelatorioAbertoNumero = numeroRodada;
  await abrirSessaoJogo(jogoSessaoAtual.id);
}
// ===================== BUSINESS GAME — PAINEL DO FACILITADOR =====================

function renderListaSessoesJogo() {
  return `
    <div class="stage-head">
      <div class="eyebrow">Business Game</div>
      <h1>Partidas</h1>
      <p class="lede">Cada partida é uma simulação independente, com seus próprios times e rodadas.</p>
    </div>
    ${souFacilitador() ? `
    <div class="card">
      <div class="card-kicker">Nova partida</div>
      <div class="form-linha">
        <input id="novaSessaoNome" type="text" placeholder="Nome da partida (ex: Turma A — Julho 2026)" class="field-textarea" style="min-height:auto" />
      </div>
      <div class="form-linha form-linha-dupla">
        <label>Total de rodadas
          <input id="novaSessaoRodadas" type="number" min="4" max="12" value="6" />
        </label>
        <label>Rodada da chegada do concorrente
          <input id="novaSessaoConcorrente" type="number" min="1" max="12" value="3" />
        </label>
      </div>
      <button class="btn btn-primary" type="button" data-action="jogo-criar-sessao">Criar partida</button>
    </div>` : ""}
    <div class="card">
      <div class="card-kicker">Partidas existentes</div>
      ${jogoSessoes.length ? jogoSessoes.map((s) => `
        <div class="sessao-item">
          <div>
            <strong>${esc(s.nome)}</strong>
            <span class="muted"> · rodada ${s.rodada_atual}/${s.total_rodadas} · ${s.status}</span>
          </div>
          <button class="btn btn-ghost btn-xs" type="button" data-action="jogo-abrir-sessao" data-id="${s.id}">Abrir</button>
        </div>`).join("") : `<span class="muted">Nenhuma partida ainda.</span>`}
    </div>
  `;
}

function renderPainelFacilitador() {
  const sessao = jogoSessaoAtual;
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  const ultimaFechada = [...jogoRodadas].reverse().find((r) => r.status === "fechada");
  const rodadasComRelatorio = jogoRodadas.filter((r) => r.status === "fechada" && jogoRelatoriosPorRodada[r.numero]).sort((a, b) => b.numero - a.numero);
  const numeroRelatorioAberto = jogoRelatorioAbertoNumero !== null ? jogoRelatorioAbertoNumero : (ultimaFechada ? ultimaFechada.numero : null);

  return `
    <div class="stage-head">
      <div class="eyebrow">Business Game · Facilitador</div>
      <h1>${esc(sessao.nome)}</h1>
      <p class="lede">Rodada ${sessao.rodada_atual} de ${sessao.total_rodadas} · concorrente chega na rodada ${sessao.rodada_concorrente || "—"} · <button class="link-btn" type="button" data-action="jogo-voltar-lista">← voltar às partidas</button></p>
    </div>

    ${rodadasComRelatorio.length ? `
    <div class="card">
      <div class="card-kicker">Relatórios de rodada (só você vê — os times nunca veem os rivais)</div>
      <div class="minicaso-botoes">
        ${rodadasComRelatorio.map((r) => `<button type="button" class="btn btn-ghost btn-xs ${numeroRelatorioAberto === r.numero ? "active" : ""}" data-action="jogo-ver-relatorio" data-numero="${r.numero}">Rodada ${r.numero}</button>`).join("")}
      </div>
      ${numeroRelatorioAberto !== null && jogoRelatoriosPorRodada[numeroRelatorioAberto] ? renderRelatorioRodada({ numeroRodada: numeroRelatorioAberto, itens: jogoRelatoriosPorRodada[numeroRelatorioAberto] }) : ""}
    </div>` : ""}

    <div class="card">
      <div class="card-kicker">Times</div>
      <div class="form-linha">
        <input id="novoTimeNome" type="text" placeholder="Nome do novo time" class="field-textarea" style="min-height:auto" />
        <button class="btn btn-ghost btn-xs" type="button" data-action="jogo-criar-time">+ Time</button>
      </div>
      ${jogoTimes.length ? jogoTimes.map((t) => `
        <div class="time-item">
          <div>
            <strong>${esc(t.nome)}</strong>
            <span class="pill pill-${t.status === "ativo" ? "ok" : "risco"}">${STATUS_LABEL[t.status]}</span>
            ${rodadaAberta ? `<span class="muted"> · ${fmtR$Curto(totalInvestidoDoTime(t.id))} de ${fmtR$Curto(GAME_DESIGN.orcamentoPorRodada)} alocados</span>` : ""}
            <button class="btn btn-ghost btn-xs" type="button" data-action="jogo-ver-como-jogador" data-team-id="${t.id}" style="margin-left:8px">👁️ Ver como jogador</button>
          </div>
          <div class="form-linha-inline">
            <input type="email" placeholder="e-mail da pessoa" class="membro-email-input" data-team-id="${t.id}" />
            <button class="btn btn-ghost btn-xs" type="button" data-action="jogo-add-membro" data-team-id="${t.id}">+ Adicionar</button>
          </div>
        </div>`).join("") : `<span class="muted">Crie pelo menos 2 times para começar.</span>`}
    </div>

    <div class="card">
      <div class="card-kicker">Controle de rodada</div>
      ${rodadaAberta ? `
        <p>Rodada <strong>${rodadaAberta.numero}</strong> aberta ${rodadaAberta.prazo ? `· prazo: ${new Date(rodadaAberta.prazo).toLocaleString("pt-BR")} (${cronometroSpan(rodadaAberta.prazo)})` : "· sem prazo definido"}</p>
        <button class="btn btn-primary" type="button" data-action="jogo-fechar-rodada">Fechar rodada e calcular resultado</button>
      ` : `
        <p>${ultimaFechada ? `Última rodada fechada: ${ultimaFechada.numero}.` : "Nenhuma rodada aberta ainda."} ${sessao.rodada_atual >= sessao.total_rodadas ? "Esta partida já chegou ao total de rodadas." : ""}</p>
        ${sessao.rodada_atual < sessao.total_rodadas && jogoTimes.length >= 2 ? `
        <div class="form-linha">
          <label>Prazo da próxima rodada (opcional)
            <input id="novaRodadaPrazo" type="datetime-local" />
          </label>
        </div>
        <button class="btn btn-primary" type="button" data-action="jogo-abrir-rodada">Abrir rodada ${sessao.rodada_atual + 1}</button>
        ` : jogoTimes.length < 2 ? `<p class="muted">Crie pelo menos 2 times antes de abrir a primeira rodada.</p>` : ""}
      `}
    </div>

    <div class="card">
      <div class="card-kicker">Mini-casos de diagnóstico contábil</div>
      <p class="card-note">Lance um caso para a turma discutir entre rodadas — todos veem o mesmo caso ao mesmo tempo.</p>
      <div class="minicaso-botoes">
        ${GAME_DESIGN.miniCasos.map((c, i) => `<button type="button" class="btn btn-ghost btn-xs ${sessao.mini_caso_atual === i ? "active" : ""}" data-action="jogo-lancar-minicaso" data-i="${i}">${esc(c.titulo)}</button>`).join("")}
      </div>
      ${sessao.mini_caso_atual !== null && sessao.mini_caso_atual !== undefined ? `
        ${painelMiniCaso(sessao)}
        <div class="form-linha">
          ${!sessao.mini_caso_revelado ? `<button class="btn btn-primary btn-xs" type="button" data-action="jogo-revelar-minicaso">Revelar resposta para a turma</button>` : ""}
          <button class="btn btn-ghost btn-xs" type="button" data-action="jogo-esconder-minicaso">Encerrar mini-caso</button>
        </div>` : ""}
    </div>

    <div class="card">
      <div class="card-kicker">Placar</div>
      ${jogoTimes.length ? tabelaLeaderboard(jogoTimes) : `<span class="muted">Sem times ainda.</span>`}
    </div>

    ${jogoTimes.length ? `
    <div class="card">
      <div class="card-kicker">Painel detalhado por time</div>
      <div class="tabs">${jogoTimes.map((t, i) => `<button type="button" class="tab-btn ${i === 0 ? "active" : ""}" data-action="jogo-ver-time-detalhe" data-team-id="${t.id}">${esc(t.nome)}</button>`).join("")}</div>
      <div id="jogoDetalheTime">${jogoTimes[0] ? painelIndicadores(jogoTimes[0].estado) + painelDemonstracoes(jogoTimes[0].estado) : ""}</div>
    </div>` : ""}
  `;
}

function resumoPlanoTime(plano) {
  if (!plano || !Object.keys(plano).length) {
    return `<div class="card"><div class="card-kicker">Plano estratégico do time</div><p class="muted">Este time ainda não preencheu o Planejamento Estratégico.</p></div>`;
  }
  const perfil = estrategiaDominanteDoPlano(plano);
  const missao = plano.mv && plano.mv.missaoFutura ? plano.mv.missaoFutura : (plano.mv && plano.mv.missaoAtual) || "";
  const swotCount = plano.swot ? (plano.swot.forcas || []).length + (plano.swot.fraquezas || []).length + (plano.swot.oportunidades || []).length + (plano.swot.ameacas || []).length : 0;
  return `<div class="card">
    <div class="card-kicker">Plano estratégico do time</div>
    <div class="dre-linha"><span>Estratégia genérica dominante</span><span>${perfil ? PERFIL_LABEL[perfil] : "ainda não definida"}</span></div>
    <div class="dre-linha"><span>Itens na SWOT</span><span>${swotCount}</span></div>
    ${missao ? `<p class="card-note" style="margin-top:8px"><strong>Missão:</strong> ${esc(missao)}</p>` : ""}
  </div>`;
}

function renderRelatorioRodada(relatorio) {
  return `
    <div class="card card-relatorio">
      <div class="card-kicker">Relatório da rodada ${relatorio.numeroRodada}</div>
      ${relatorio.itens.map((item) => {
        if (item.pulou) return `<div class="relatorio-item"><strong>${esc(item.time)}</strong> — já estava fora do jogo, não participou desta rodada.</div>`;
        const delta = item.indiceFinalNovo - item.indiceFinalAnterior;
        return `<div class="relatorio-item">
          <strong>${esc(item.time)}</strong>
          <span class="muted"> · índice ${item.indiceFinalAnterior.toFixed(1)} → ${item.indiceFinalNovo.toFixed(1)} (${delta >= 0 ? "+" : ""}${delta.toFixed(1)})</span>
          ${item.marcoConcorrente ? `<div class="relatorio-marco">📍 O concorrente chegou ao mercado nesta rodada.</div>` : ""}
          ${item.evento ? `<div class="relatorio-evento">🎲 Evento: ${esc(item.evento)}</div>` : `<div class="muted">Sem evento nesta rodada.</div>`}
          <div class="relatorio-decisoes">${(item.investimentos ? Object.entries(item.investimentos).filter(([, v]) => v > 0) : []).map(([campoId, valor]) => {
            const campo = campoPorId(campoId);
            return `<span class="tag">${campo ? campo.area + ": " + campo.nome : campoId} — ${fmtR$Curto(valor)}</span>`;
          }).join(" ") || `<span class="muted">Nenhum investimento lançado nesta rodada.</span>`}
          ${item.totalGasto ? `<div class="muted" style="margin-top:4px">Total investido: ${fmtR$Curto(item.totalGasto)} de ${fmtR$Curto(GAME_DESIGN.orcamentoPorRodada)}</div>` : ""}</div>
          ${item.linhasContabeis && item.linhasContabeis.length ? `<div class="relatorio-contabil">📊 Linhas contábeis afetadas: ${item.linhasContabeis.map((l) => `<span class="tag tag-contabil">${esc(l)}</span>`).join(" ")}</div>` : ""}
          ${renderAvisoAlinhamento(item.alinhamentoPlano)}
          ${item.statusNovo !== item.statusAnterior ? `<div class="relatorio-status-mudou">⚠️ Situação mudou: ${STATUS_LABEL[item.statusNovo]}</div>` : ""}
        </div>`;
      }).join("")}
    </div>
  `;
}
// ===================== BUSINESS GAME — PAINEL DO TIME (JOGADORES) =====================

function renderPainelTime() {
  const sessao = jogoSessaoAtual;
  const timeId = timeAtivoParaDecisao();
  const emPreview = !!jogoVisualizandoComoTimeId && souFacilitador();
  const bannerPreview = emPreview ? `<div class="readonly-banner">👁️ Você está vendo como o time <strong>${esc((jogoTimes.find((t) => t.id === jogoVisualizandoComoTimeId) || {}).nome || "")}</strong> vê esta tela. Os investimentos que você lançar aqui valem de verdade para esse time. <button class="link-btn" type="button" data-action="jogo-voltar-facilitador">← Voltar ao painel de facilitador</button></div>` : "";

  if (!timeId) {
    return `
      ${bannerPreview}
      <div class="stage-head">
        <div class="eyebrow">Business Game</div>
        <h1>${esc(sessao.nome)}</h1>
        <p class="lede"><button class="link-btn" type="button" data-action="jogo-voltar-lista">← voltar às partidas</button></p>
      </div>
      <div class="card">
        <p>Você ainda não foi colocado em nenhum time desta partida. Peça ao facilitador para te adicionar pelo seu e-mail de login.</p>
      </div>
      ${jogoTimes.length ? `<div class="card"><div class="card-kicker">Placar (visão geral)</div>${tabelaLeaderboard(jogoTimes)}</div>` : ""}
    `;
  }

  const meuTime = jogoTimes.find((t) => t.id === timeId);
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  const meusInvestimentos = investimentosDoTimeNaRodada(timeId);
  if (!emPreview) Object.assign(meusInvestimentos, jogoMeusInvestimentosRascunho);

  const emJogo = meuTime.status === "ativo";

  return `
    ${bannerPreview}
    <div class="stage-head">
      <div class="eyebrow">Business Game · Time ${esc(meuTime.nome)}</div>
      <h1>${esc(sessao.nome)}</h1>
      <p class="lede">Rodada ${sessao.rodada_atual} de ${sessao.total_rodadas} · <button class="link-btn" type="button" data-action="jogo-voltar-lista">← voltar às partidas</button></p>
    </div>

    ${jogoSessaoAtual.mini_caso_atual !== null && jogoSessaoAtual.mini_caso_atual !== undefined ? painelMiniCaso(jogoSessaoAtual) : ""}

    ${!emJogo ? `
    <div class="card card-encerrado">
      <div class="card-kicker">Fim de jogo para o seu time</div>
      <div class="highlight-value">${STATUS_LABEL[meuTime.status]}</div>
      <p class="card-note">Acompanhe o restante da partida pelo placar abaixo.</p>
    </div>` : rodadaAberta ? `
    <div class="card">
      <div class="card-kicker">Rodada ${rodadaAberta.numero} — investimentos da sua equipe</div>
      <p class="card-note">${rodadaAberta.prazo ? `Prazo: ${new Date(rodadaAberta.prazo).toLocaleString("pt-BR")} (${cronometroSpan(rodadaAberta.prazo)})` : "Sem prazo definido — combine com o facilitador."} Distribuam o orçamento da rodada entre os campos abaixo. Podem ajustar quantas vezes quiserem até o facilitador fechar a rodada — só o valor final em cada campo conta.</p>
      ${seletorInvestimentos(meusInvestimentos, GAME_DESIGN.orcamentoPorRodada, false)}
    </div>` : `
    <div class="card">
      <p class="card-note">Nenhuma rodada aberta agora. Aguardem o facilitador abrir a próxima.</p>
    </div>`}

    <div class="card">
      <div class="card-kicker">Painel do seu time</div>
      ${painelIndicadores(meuTime.estado)}
    </div>

    <div class="card">
      <div class="card-kicker">Demonstrações contábeis do seu time (trimestre atual)</div>
      ${painelDemonstracoes(meuTime.estado)}
    </div>

    <details class="accordion-simples">
      <summary>Histórico contábil pré-jogo (os 4 trimestres antes da rodada 1)</summary>
      ${painelHistoricoPreJogo()}
    </details>

    ${meuTime.historico && meuTime.historico.length && meuTime.historico[meuTime.historico.length - 1].alinhamentoPlano && meuTime.historico[meuTime.historico.length - 1].alinhamentoPlano.perfilPlano ? `
    <div class="card">
      <div class="card-kicker">Alinhamento com o seu plano estratégico</div>
      ${renderAvisoAlinhamento(meuTime.historico[meuTime.historico.length - 1].alinhamentoPlano)}
    </div>` : ""}

    ${meuTime.historico && meuTime.historico.length ? `
    <div class="card">
      <div class="card-kicker">Histórico de rodadas</div>
      <table class="historico-table">
        <thead><tr><th>Rodada</th><th>Índice final</th><th>Total investido</th><th>Linhas contábeis afetadas</th><th>Plano</th><th>Evento</th><th>Situação</th></tr></thead>
        <tbody>
          ${meuTime.historico.map((h) => {
            const linhas = new Set();
            (h.efeitosAplicados || []).forEach((ap) => {
              let efeitos = null;
              if (ap.tipo === "investimento") efeitos = ap.efeitos;
              if (ap.tipo === "evento") { const ev = eventoPorNome(ap.nome); efeitos = ev ? ev.efeitos : null; }
              if (ap.tipo === "marco") efeitos = GAME_DESIGN.marcoConcorrente.choqueImediato;
              if (ap.tipo === "pressao_concorrencia") efeitos = GAME_DESIGN.marcoConcorrente.pressaoPassiva;
              if (efeitos) linhasContabeisTocadas(efeitos).forEach((l) => linhas.add(l));
            });
            const al = h.alinhamentoPlano;
            const alIcone = !al || !al.perfilPlano ? "—" : al.penalidadeAplicada ? "🔴" : al.desalinhado ? "⚠️" : "✅";
            const camposInvestidos = (h.efeitosAplicados || []).filter((ap) => ap.tipo === "investimento");
            return `<tr>
            <td>${h.rodada}</td><td>${h.indiceFinal.toFixed(1)}</td>
            <td title="${camposInvestidos.map((c) => c.campoNome + ": " + fmtR$Curto(c.valor)).join(" · ")}">${fmtR$Curto(h.totalGasto || 0)}</td>
            <td>${Array.from(linhas).map((l) => `<span class="tag tag-contabil">${esc(l)}</span>`).join(" ") || "—"}</td>
            <td title="${al && al.perfilPlano ? PERFIL_LABEL[al.perfilPlano] : ""}">${alIcone}</td>
            <td>${h.evento ? esc(h.evento) : "—"}${h.marcoConcorrente ? " · 📍 concorrente chegou" : ""}</td>
            <td>${STATUS_LABEL[h.status]}</td>
          </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>` : ""}

    <div class="card">
      <div class="card-kicker">Placar geral</div>
      ${tabelaLeaderboard(jogoTimes)}
    </div>
  `;
}
// ===================== BUSINESS GAME — DISPATCHER =====================

function renderJogo() {
  if (!jogoSessaoAtual) return renderListaSessoesJogo();
  if (jogoVisualizandoComoTimeId) return renderPainelTime();
  if (souFacilitador() && jogoView === "facilitador") return renderPainelFacilitador();
  return renderPainelTime();
}

async function handleJogoAction(action, el) {
  if (action === "jogo-voltar-lista") {
    jogoSessaoAtual = null;
    jogoVisualizandoComoTimeId = null;
    if (jogoCanalRealtime) { sbClient.removeChannel(jogoCanalRealtime); jogoCanalRealtime = null; }
    await carregarSessoesJogo();
    renderStageOnly();
    return;
  }

  if (action === "jogo-criar-sessao") {
    const nome = document.getElementById("novaSessaoNome").value.trim();
    if (!nome) return;
    const rodadas = parseInt(document.getElementById("novaSessaoRodadas").value, 10) || 6;
    const concorrente = parseInt(document.getElementById("novaSessaoConcorrente").value, 10) || null;
    await criarSessaoJogo(nome, rodadas, concorrente);
    return;
  }

  if (action === "jogo-abrir-sessao") {
    await abrirSessaoJogo(el.getAttribute("data-id"));
    return;
  }

  if (action === "jogo-criar-time") {
    const nome = document.getElementById("novoTimeNome").value.trim();
    if (!nome) return;
    await criarTimeJogo(nome);
    return;
  }

  if (action === "jogo-add-membro") {
    const teamId = el.getAttribute("data-team-id");
    const input = document.querySelector(`.membro-email-input[data-team-id="${teamId}"]`);
    const email = input ? input.value.trim() : "";
    if (!email) return;
    const { error } = await adicionarMembroPorEmail(teamId, email);
    if (error) alert(error);
    return;
  }

  if (action === "jogo-abrir-rodada") {
    const prazoInput = document.getElementById("novaRodadaPrazo");
    const prazoISO = prazoInput && prazoInput.value ? new Date(prazoInput.value).toISOString() : null;
    jogoUltimoRelatorio = null;
    await abrirNovaRodada(prazoISO);
    return;
  }

  if (action === "jogo-fechar-rodada") {
    const confirmar = confirm("Fechar a rodada agora vai calcular o resultado de todos os times com as decisões atuais (times que não decidiram usam 'Manter estratégia atual'). Continuar?");
    if (!confirmar) return;
    await fecharRodadaAtual();
    return;
  }

  if (action === "jogo-ver-time-detalhe") {
    const teamId = el.getAttribute("data-team-id");
    const time = jogoTimes.find((t) => t.id === teamId);
    const container = document.getElementById("jogoDetalheTime");
    if (time && container) {
      container.innerHTML = painelIndicadores(time.estado) + painelDemonstracoes(time.estado) + `<div class="card-note">Carregando resumo do plano…</div>`;
      document.querySelectorAll('[data-action="jogo-ver-time-detalhe"]').forEach((b) => b.classList.remove("active"));
      el.classList.add("active");
      const { data } = await sbClient.from("team_plans").select("plano").eq("team_id", teamId).maybeSingle();
      container.innerHTML = painelIndicadores(time.estado) + painelDemonstracoes(time.estado) + resumoPlanoTime(data ? data.plano : null);
    }
    return;
  }

  if (action === "jogo-ver-relatorio") {
    jogoRelatorioAbertoNumero = parseInt(el.getAttribute("data-numero"), 10);
    renderStageOnly();
    return;
  }

  if (action === "jogo-ver-como-jogador") {
    jogoVisualizandoComoTimeId = el.getAttribute("data-team-id");
    renderStageOnly();
    return;
  }

  if (action === "jogo-voltar-facilitador") {
    jogoVisualizandoComoTimeId = null;
    renderStageOnly();
    return;
  }

  if (action === "jogo-lancar-minicaso") {
    const i = parseInt(el.getAttribute("data-i"), 10);
    await sbClient.from("game_sessions").update({ mini_caso_atual: i, mini_caso_revelado: false }).eq("id", jogoSessaoAtual.id);
    await abrirSessaoJogo(jogoSessaoAtual.id);
    return;
  }

  if (action === "jogo-revelar-minicaso") {
    await sbClient.from("game_sessions").update({ mini_caso_revelado: true }).eq("id", jogoSessaoAtual.id);
    await abrirSessaoJogo(jogoSessaoAtual.id);
    return;
  }

  if (action === "jogo-esconder-minicaso") {
    await sbClient.from("game_sessions").update({ mini_caso_atual: null, mini_caso_revelado: false }).eq("id", jogoSessaoAtual.id);
    await abrirSessaoJogo(jogoSessaoAtual.id);
    return;
  }
}
// ===================== SUPABASE: CLIENTE, LOGIN, SINCRONIZAÇÃO =====================

const sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let S = novoEstadoPadrao();
let meuNome = "";
let meuEmail = "";
let minhaRole = "viewer";
let stageAtual = "geral";
let planoAreaAtual = "financeiro";
let lastSyncedAt = 0;
let saveTimer = null;
let saving = false;

function novoEstadoPadrao() {
  const st = {
    meta: { empresa: "", atualizadoEm: 0, atualizadoPor: "" },
    participantes: [],
    negocio: { q1: "", q2: "", q3: "", q4: "" },
    pest: {}, porter: {}, ciclo: {}, estrategias: {},
    fcs: {
      fatores: ["Preço", "Qualidade", "Atendimento"],
      linhas: [{ nome: "Nossa empresa", notas: [] }, { nome: "Concorrente A", notas: [] }]
    },
    swot: { oportunidades: [], ameacas: [], forcas: [], fraquezas: [] },
    mv: { missaoAtual: "", missaoAvaliacao: "", missaoFutura: "", visaoAtual: "", visaoAvaliacao: "", visaoFutura: "", valores: "" },
    planos: { financeiro: [], commkt: [], processo: [], rh: [] }
  };
  for (const k in PEST_DATA) st.pest[k] = PEST_DATA[k].itens.map(() => ({ op: 0, am: 0, just: "" }));
  for (const k in PORTER_DATA) st.porter[k] = PORTER_DATA[k].itens.map(() => 0);
  for (const k in CICLO_DATA) st.ciclo[k] = CICLO_DATA[k].itens.map(() => 0);
  for (const k in ESTRATEGIAS_DATA) st.estrategias[k] = ESTRATEGIAS_DATA[k].itens.map(() => 0);
  return st;
}

function getPath(obj, path) { return path.reduce((o, k) => (o == null ? o : o[k]), obj); }
function setPath(obj, path, value) {
  let o = obj;
  for (let i = 0; i < path.length - 1; i++) o = o[path[i]];
  o[path[path.length - 1]] = value;
}

function mesclarComPadrao(remote) {
  const base = novoEstadoPadrao();
  return Object.assign(base, remote, {
    pest: Object.assign(base.pest, remote.pest),
    porter: Object.assign(base.porter, remote.porter),
    ciclo: Object.assign(base.ciclo, remote.ciclo),
    estrategias: Object.assign(base.estrategias, remote.estrategias),
    negocio: Object.assign(base.negocio, remote.negocio),
    mv: Object.assign(base.mv, remote.mv),
    fcs: remote.fcs || base.fcs,
    swot: Object.assign(base.swot, remote.swot),
    planos: Object.assign(base.planos, remote.planos),
    meta: Object.assign(base.meta, remote.meta)
  });
}

function souEditor() { return minhaRole === "editor" || minhaRole === "admin"; }

let planoTimeAtualId = null;
let planoTimeAtualNome = "";
let meusTimesDoUsuario = [];
let planoCanalRealtime = null;

async function carregarMeusTimes() {
  if (!window.__meuUserId) { meusTimesDoUsuario = []; return; }
  const { data } = await sbClient
    .from("game_team_members")
    .select("team_id, game_teams(id, nome, session_id, game_sessions(nome))")
    .eq("user_id", window.__meuUserId);
  meusTimesDoUsuario = (data || [])
    .filter((r) => r.game_teams)
    .map((r) => ({
      teamId: r.game_teams.id,
      teamNome: r.game_teams.nome,
      sessaoNome: r.game_teams.game_sessions ? r.game_teams.game_sessions.nome : ""
    }));
}

async function selecionarTimeParaPlano(teamId) {
  const time = meusTimesDoUsuario.find((t) => t.teamId === teamId);
  planoTimeAtualId = teamId;
  planoTimeAtualNome = time ? time.teamNome : "";
  let { data } = await sbClient.from("team_plans").select("plano").eq("team_id", teamId).maybeSingle();
  if (!data) {
    const novo = novoEstadoPadrao();
    await sbClient.from("team_plans").insert({ team_id: teamId, plano: novo, atualizado_por: meuNome || meuEmail });
    data = { plano: novo };
  }
  S = mesclarComPadrao(data.plano || {});
  lastSyncedAt = S.meta.atualizadoEm || 0;
  if (!S.participantes.includes(meuNome)) {
    S.participantes.push(meuNome);
    scheduleSave();
  }
  assinarRealtimePlano(teamId);
  renderAll();
}

function scheduleSave() {
  if (!souEditor() || !planoTimeAtualId) return;
  const st = document.getElementById("saveStatus");
  if (st) st.textContent = "Editando…";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(doSave, 900);
}

async function doSave() {
  if (!souEditor() || !planoTimeAtualId) return;
  saving = true;
  const agoraIso = new Date().toISOString();
  S.meta.atualizadoEm = Date.now();
  S.meta.atualizadoPor = meuNome || meuEmail;
  const statusEl = document.getElementById("saveStatus");
  try {
    if (statusEl) statusEl.textContent = "Salvando…";
    const { error } = await sbClient
      .from("team_plans")
      .update({ plano: S, atualizado_em: agoraIso, atualizado_por: meuNome || meuEmail })
      .eq("team_id", planoTimeAtualId);
    if (error) throw error;
    lastSyncedAt = S.meta.atualizadoEm;
    if (statusEl) statusEl.textContent = "Salvo · sincronizado com a equipe";
  } catch (e) {
    if (statusEl) statusEl.textContent = "Não foi possível salvar agora. Tentando de novo…";
    setTimeout(doSave, 3000);
  } finally {
    saving = false;
  }
}

function assinarRealtimePlano(teamId) {
  if (planoCanalRealtime) { sbClient.removeChannel(planoCanalRealtime); planoCanalRealtime = null; }
  planoCanalRealtime = sbClient
    .channel("plano-time-" + teamId)
    .on("postgres_changes", { event: "UPDATE", schema: "public", table: "team_plans", filter: "team_id=eq." + teamId }, (payload) => {
      if (saving) return;
      const active = document.activeElement;
      const editando = active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA");
      if (editando) return;
      const remote = payload.new.plano;
      const remoteTime = (remote.meta && remote.meta.atualizadoEm) || 0;
      if (remoteTime > lastSyncedAt) {
        S = mesclarComPadrao(remote);
        lastSyncedAt = remoteTime;
        renderAll();
        const st = document.getElementById("saveStatus");
        if (st) st.textContent = "Atualizado por " + (payload.new.atualizado_por || "alguém da equipe");
      }
    })
    .subscribe();
}

// ===================== LOGIN / SESSÃO =====================

async function iniciarApp() {
  iniciarCronometroGlobal();
  const { data: { session } } = await sbClient.auth.getSession();
  if (session) {
    await aoLogar(session);
  } else {
    renderLogin();
  }
  sbClient.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session) aoLogar(session);
    if (event === "SIGNED_OUT") location.reload();
  });
}

async function aoLogar(session) {
  meuEmail = session.user.email;
  window.__meuUserId = session.user.id;
  let { data: perfil, error } = await sbClient.from("profiles").select("nome, role").eq("id", session.user.id).single();
  if (error || !perfil) {
    // perfil ainda não existe (ex: gatilho não configurado) — trata como visualizador
    perfil = { nome: meuEmail.split("@")[0], role: "viewer" };
  }
  minhaRole = perfil.role || "viewer";
  meuNome = perfil.nome || meuEmail.split("@")[0];
  await carregarMeusTimes();
  renderShell();
}

function renderLogin() {
  document.getElementById("app").innerHTML = `
    <div class="login-screen">
      <div class="login-card">
        <div class="brand-mark login-mark">PE</div>
        <h1>Planejamento Estratégico</h1>
        <p>Acesso restrito à equipe convidada. Entre com o e-mail e a senha definidos a partir do convite recebido.</p>
        <input id="loginEmail" class="modal-input" type="email" placeholder="seu@email.com" autocomplete="username" />
        <input id="loginSenha" class="modal-input" type="password" placeholder="Senha" autocomplete="current-password" />
        <button class="btn btn-primary" id="loginBtn" type="button" style="width:100%">Entrar</button>
        <p id="loginErro" class="login-erro"></p>
        <button id="esqueciBtn" class="btn btn-ghost btn-xs" type="button">Esqueci minha senha</button>
      </div>
    </div>`;
  document.getElementById("loginBtn").addEventListener("click", fazerLogin);
  document.getElementById("esqueciBtn").addEventListener("click", recuperarSenha);
  document.getElementById("loginSenha").addEventListener("keydown", (e) => { if (e.key === "Enter") fazerLogin(); });
}

async function fazerLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginSenha").value;
  const erroEl = document.getElementById("loginErro");
  erroEl.textContent = "Entrando…";
  const { error } = await sbClient.auth.signInWithPassword({ email, password: senha });
  if (error) erroEl.textContent = "E-mail ou senha inválidos, ou o convite ainda não foi ativado.";
}

async function recuperarSenha() {
  const email = document.getElementById("loginEmail").value.trim();
  const erroEl = document.getElementById("loginErro");
  if (!email) { erroEl.textContent = "Digite seu e-mail primeiro."; return; }
  await sbClient.auth.resetPasswordForEmail(email);
  erroEl.textContent = "Enviamos um link de redefinição de senha para " + email;
}

async function sair() {
  await sbClient.auth.signOut();
}

iniciarApp();
