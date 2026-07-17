// ===================== DADOS DA METODOLOGIA (extraídos da planilha) =====================

const PEST_DATA = {
  politico: {
    label: "Ambiente Político",
    itens: [
      "Impacto tributário / informalidade / incentivos fiscais",
      "Mudança de legislação",
      "Concessões do Estado",
      "Legislação anti-truste e monopólios",
      "Política internacional (incentivos à exportação/importação; acordos internacionais)",
      "Direito do consumidor",
      "Legislação trabalhista",
      "Fiscalização",
      "Compras governamentais",
      "Infraestrutura (estradas, portos, aeroportos, ferrovias etc.)",
      "Direito comercial / propriedade intelectual"
    ]
  },
  economico: {
    label: "Ambiente Econômico",
    itens: [
      "Mercados globais",
      "Abertura da economia",
      "Aumento do comércio entre países",
      "Queda de barreiras comerciais",
      "Estabilização econômica",
      "Aumento do poder de compra das classes mais pobres",
      "(Des)valorização da moeda nacional",
      "Planejamento financeiro nas famílias",
      "Liberalização do crédito",
      "Taxa de juros",
      "Crescimento dos serviços",
      "Fusões e aquisições entre empresas"
    ]
  },
  social: {
    label: "Ambiente Social",
    itens: [
      "Envelhecimento da população",
      "Preocupação com saúde",
      "Preocupação com estética",
      "Pressões pela conservação do meio ambiente",
      "Busca por qualidade de vida / entretenimento / viagens",
      "Concentração nas grandes cidades x migração para subúrbios",
      "Aumento do trânsito nas grandes cidades",
      "Menor tempo livre",
      "Fim do emprego (tradicional)",
      "Mais atividades centradas no lar",
      "Maior participação feminina na força de trabalho",
      "Crescimento no nível educacional",
      "Aumento dos valores democráticos",
      "Transformação da família",
      "Aumento das taxas de violência",
      "Convergência x divergência cultural",
      "Consumo ético (respeito a patentes, direitos autorais, certificação de origem etc.)",
      "Responsabilidade social e ambiental na comunidade"
    ]
  },
  tecnologico: {
    label: "Ambiente Tecnológico",
    itens: [
      "Internet em nuvem",
      "Internet das coisas (IoT)",
      "Digitalização",
      "Inteligência artificial",
      "Convergência tecnológica",
      "Novos materiais",
      "Nanotecnologia",
      "Automação",
      "Biotecnologia e engenharia genética",
      "Redução do ciclo de vida dos produtos"
    ]
  }
};

const PORTER_DATA = {
  forca1: {
    label: "Força 1 · Possibilidade de entrada de concorrentes",
    curto: "Entrada de concorrentes",
    itens: [
      "É possível ser pequeno para entrar no negócio.",
      "Empresas concorrentes têm marcas desconhecidas ou os clientes não são fiéis.",
      "Baixo investimento em infraestrutura, crédito a clientes e produtos.",
      "Os clientes terão baixos custos para trocarem seus atuais fornecedores.",
      "Tecnologia dos concorrentes não é patenteada. Não é necessário investimento em pesquisa.",
      "O local/negócio, compatível com a concorrência, exigirá pouco investimento.",
      "Não há exigências do governo que beneficiam empresas existentes ou limitam a entrada de novas empresas.",
      "Empresas estabelecidas têm pouca experiência no negócio ou custos altos.",
      "É improvável uma guerra com os novos concorrentes.",
      "O mercado não está saturado."
    ]
  },
  forca2: {
    label: "Força 2 · Rivalidade entre as empresas do ramo",
    curto: "Rivalidade entre concorrentes",
    itens: [
      "Existe grande número de concorrentes, com relativo equilíbrio em termos de tamanho e recursos.",
      "O setor onde se situa o negócio mostra lento crescimento. Uns prosperam em detrimento de outros.",
      "Custos fixos altos e pressão no sentido de vender o máximo para cobrir estes custos.",
      "Acirrada disputa de preços entre os concorrentes.",
      "Não há diferenciação entre os produtos/serviços comercializados pelos concorrentes.",
      "É muito dispendioso para as empresas já estabelecidas saírem do negócio."
    ]
  },
  forca3: {
    label: "Força 3 · Ameaça de produtos substitutos",
    curto: "Produtos substitutos",
    itens: [
      "Verifica-se uma enorme quantidade de produtos/serviços substitutos.",
      "Produtos/serviços substitutos têm custos mais baixos que os das empresas existentes no negócio.",
      "Empresas existentes não costumam utilizar publicidade para promover sua imagem e dos produtos/serviços.",
      "Setores de atuação dos produtos/serviços substitutos estão em expansão, aumentando a concorrência."
    ]
  },
  forca4: {
    label: "Força 4 · Poder de negociação dos compradores",
    curto: "Poder dos compradores",
    itens: [
      "Clientes compram em grandes quantidades e sempre fazem forte pressão por preços menores.",
      "Produto/serviço vendido pela empresa representa muito nos custos dos clientes ou de suas compras.",
      "Produtos/serviços que os clientes compram são padronizados.",
      "Clientes não têm custos adicionais significativos se mudarem de fornecedores.",
      "Há sempre uma ameaça dos clientes virem a produzir os produtos/serviços adquiridos no setor.",
      "Produto/serviço vendido pela empresa existente não é essencial para melhorar os produtos do comprador.",
      "Clientes são muito bem informados sobre preços e custos do setor.",
      "Clientes trabalham com margens de lucro achatadas."
    ]
  },
  forca5: {
    label: "Força 5 · Poder de negociação dos fornecedores",
    curto: "Poder dos fornecedores",
    itens: [
      "O fornecimento de produtos, insumos e serviços necessários é concentrado em poucas empresas fornecedoras.",
      "Produtos/serviços adquiridos pelas empresas existentes não são facilmente substituídos por outros.",
      "Empresas existentes no negócio não são clientes importantes para os fornecedores.",
      "Materiais/serviços adquiridos dos fornecedores são importantes para o sucesso dos negócios no setor.",
      "Os produtos comprados dos fornecedores são diferenciados.",
      "Existem custos significativos para se mudar de fornecedor.",
      "Ameaça permanente de os fornecedores entrarem no negócio do setor."
    ]
  }
};

const CICLO_DATA = {
  introducao: {
    label: "Introdução",
    itens: [
      "O produto/serviço representa ou cria um novo setor: entra num ramo no qual ainda não existem (ou existem poucas) companhias concorrentes.",
      "O produto/serviço ainda não tem um mercado específico: a empresa terá que construir este mercado sensibilizando clientes a experimentarem o produto.",
      "O produto/serviço não conta com um canal de distribuição específico: a empresa está construindo-o (ou já construiu) para todo o setor.",
      "A produção ainda é em baixa escala no setor como um todo, mas com possibilidade de crescer; os poucos competidores estão aprendendo a produzir com qualidade e os custos ainda são elevados.",
      "O produto/serviço consome bastante investimento em publicidade para demonstrar aos clientes para que serve.",
      "O produto/serviço não apresenta um padrão: há muita variação na oferta entre os poucos competidores.",
      "O mercado do produto/serviço é muito pequeno diante do potencial a que pode chegar."
    ]
  },
  crescimento: {
    label: "Crescimento",
    itens: [
      "O produto/serviço está em um setor em forte crescimento: as taxas de crescimento do setor são superiores ao crescimento da economia como um todo.",
      "O produto/serviço é reconhecido pelo cliente; a maior parte dos clientes compra pela primeira vez, ou é usuário recente.",
      "O produto/serviço é \"sonho de consumo\" de muitos compradores que ainda não o têm, mas pretendem adquiri-lo em breve.",
      "Os canais de distribuição do produto/serviço aumentam de forma rápida.",
      "As empresas do setor fazem investimentos para aumentar a capacidade de produção e acompanhar as taxas de crescimento no consumo.",
      "Novas empresas entram no setor para atender o consumo crescente.",
      "As empresas estabelecidas não dão conta de atender a demanda; pode acontecer \"filas\" de espera para adquirir o produto/serviço.",
      "As empresas começam a fazer propaganda não mais para conscientizar compradores, mas para fixar sua marca."
    ]
  },
  maturidade: {
    label: "Maturidade",
    itens: [
      "O produto/serviço está em um setor de baixo crescimento: as taxas de crescimento equiparam-se ao crescimento da economia como um todo.",
      "O produto/serviço é reconhecido pelo cliente; a maior parte já compra habitualmente, ou já comprou repetidas vezes.",
      "O produto/serviço atingiu sua capacidade máxima; expansão só é viável descobrindo novos grupos de clientes (nichos).",
      "Os canais de distribuição são estáveis e estão saturados; as empresas tentam crescer investindo em novos canais.",
      "A capacidade produtiva do setor está saturada ou mesmo ociosa; não há muitos investimentos de ampliação.",
      "O setor passa (ou já passou) por um forte movimento de fusões e aquisições de empresas.",
      "A oferta é superior à demanda no setor.",
      "As empresas têm tradição no setor e/ou marcas fortes.",
      "As empresas monitoram com atenção sua participação de mercado e a ação dos concorrentes.",
      "As empresas têm métodos de produção/operação de larga escala e atendem mercados de massa."
    ]
  },
  declinio: {
    label: "Declínio",
    itens: [
      "O mercado para este produto/serviço está em declínio ou está hoje num patamar bem inferior ao que representou no passado.",
      "Várias empresas fazem desinvestimento nesta linha de produtos/serviços (saem do setor).",
      "A tecnologia adotada no setor é vista como obsoleta.",
      "Há novos produtos/serviços que substituem os do setor, e tais substitutos estão em expansão.",
      "Os compradores podem ser considerados \"saudosistas\", \"tradicionalistas\", \"colecionadores\" ou pessoas de mais baixa renda que ainda não migraram para os substitutos.",
      "Para sobreviver, as empresas do setor devem especializar-se em um nicho.",
      "Os canais de distribuição são especiais para tais nichos.",
      "Há hoje muito menos empresas atuando neste setor do que já houve no passado."
    ]
  }
};

const ESTRATEGIAS_DATA = {
  custo: {
    label: "Liderança em custo / excelência operacional",
    itens: [
      "A empresa possui instalações para produção em larga escala.",
      "A empresa constantemente reduz custos ao longo do tempo: pesquisa e implanta novas formas de operar com mais eficiência.",
      "A empresa controla de forma rígida os custos e despesas gerais.",
      "A empresa possui uma estrutura enxuta e sempre minimiza custos em áreas não relacionadas diretamente com a produção.",
      "A empresa oferece incentivos baseados em metas quantitativas (produtividade, vendas etc.).",
      "A empresa tem organização e responsabilidades bem estruturadas, evitando duplicidade e retrabalho.",
      "A empresa tem acesso a capital de custo mais baixo para seus investimentos.",
      "A empresa desenvolve produtos projetados para facilitar a fabricação.",
      "A empresa possui boa capacidade de engenharia de processo.",
      "A empresa possui um sistema de distribuição com baixo custo.",
      "A empresa coloca grande energia na negociação com fornecedores para reduzir custos.",
      "A empresa vende produtos padronizados, sem especificação e customização/personalização.",
      "Os produtos e serviços que a empresa oferece são básicos; adicionais são cobrados separadamente.",
      "A empresa lida bem com operação em larga escala / grandes volumes.",
      "A empresa possui reputação de ter os custos mais baixos em seu setor.",
      "A empresa oferece atendimento rápido, padronizado e de baixo custo."
    ]
  },
  diferenciacao: {
    label: "Diferenciação / inovação",
    itens: [
      "A empresa possui uma forte imagem de marca formada por meio de publicidade intensiva.",
      "A empresa possui grande habilidade de marketing (propaganda e pesquisa de mercado).",
      "A empresa possui excelente engenharia de produtos: capta desejos e os transforma rapidamente em produtos viáveis.",
      "A empresa possui forte coordenação entre P&D e marketing.",
      "A empresa possui reputação de ser líder em qualidade ou tecnologia no seu setor.",
      "A empresa possui longa tradição na indústria ou traz reputação de outro setor com grande sinergia.",
      "A empresa realiza avaliação e incentivos subjetivos em vez de medidas quantitativas.",
      "A empresa possui peculiaridades (história, tradição etc.) que a tornam única.",
      "A empresa desenvolve produtos e serviços sob encomenda.",
      "A empresa possui rede de fornecedores confiáveis, de qualidade e, algumas vezes, exclusivos.",
      "A empresa oferece produtos exclusivos (design, sofisticação, tecnologia, precisão, durabilidade, atendimento, inovação etc.).",
      "Os clientes pagam preços-prêmio para obter os produtos/serviços da empresa.",
      "A empresa tem programas de relacionamento com seus clientes."
    ]
  },
  foco: {
    label: "Foco (diferenciação ou custo em um segmento)",
    itens: [
      "A empresa atende a um segmento específico dentro de uma indústria mais abrangente.",
      "A empresa é líder no segmento específico em que atua, mas possui pouca participação na indústria como um todo.",
      "A empresa oferece produtos, facilidades e serviços únicos para o grupo de clientes que atende.",
      "A empresa é reconhecida por ser especializada neste segmento.",
      "A empresa possui uma rede de relacionamento personalizada dentro de seu segmento de atuação."
    ]
  }
};

const NEGOCIO_PERGUNTAS = [
  { key: "q1", titulo: "1. Produtos e serviços atuais", ajuda: "Pense com os olhos da concorrência ampliada e de produtos substitutos: não só o produto, mas os serviços que presta, o uso que o cliente faz dele, e o que ele satisfaz no cliente. Enumere os produtos/serviços da empresa." },
  { key: "q2", titulo: "2. Negócio atual da organização", ajuda: "Tomando por base o item 1, defina o negócio até agora: o que há em comum por trás destes produtos/serviços?" },
  { key: "q3", titulo: "3. Avaliação do negócio atual", ajuda: "Há algum novo produto/serviço em que a empresa pode ou quer entrar, que está muito próximo e exigirá pouco esforço para entrar?" },
  { key: "q4", titulo: "4. Negócio no futuro", ajuda: "Escreva o novo negócio considerando os novos produtos/serviços possíveis de serem incorporados, observando o que eles têm em comum." }
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
            <input id="empresaInput" class="empresa-input" placeholder="Nome da empresa / unidade de negócio" value="${esc(S.meta.empresa)}" ${pathAttr(["meta", "empresa"])} ${souEditor() ? "" : "disabled"} />
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

function onChangeDelegated(e) {
  const radio = e.target.closest("[data-jogo-decisao]");
  if (radio) {
    const area = radio.getAttribute("data-jogo-decisao");
    jogoMinhasDecisoesRascunho[area] = radio.value;
    salvarMinhaDecisao(area, radio.value);
  }
}

function onNavClick(e) {
  const btn = e.target.closest("[data-stage]");
  if (!btn) return;
  stageAtual = btn.getAttribute("data-stage");
  renderAll();
}

function onInputDelegated(e) {
  if (!souEditor()) return;
  const t = e.target;
  const pathStr = t.getAttribute("data-path");
  if (!pathStr) return;
  const path = JSON.parse(pathStr);
  setPath(S, path, t.value);
  scheduleSave();
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
    renderShell();
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
  nav.innerHTML = ETAPAS.map((et) => {
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
  const fns = {
    geral: renderGeral, negocio: renderNegocio, pest: renderPest, porter: renderPorter,
    ciclo: renderCiclo, fcs: renderFcs, estrategias: renderEstrategias, swot: renderSwot,
    mv: renderMv, planos: renderPlanos
  };
  stage.innerHTML = fns[stageAtual] ? fns[stageAtual]() : "";
  renderNav();
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
        "acao": "Renegociar preço para baixo com o hospital-âncora",
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
        "acao": "Trocar desconto por volume/exclusividade",
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
        "acao": "Verticalizar faturamento junto às operadoras",
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
        "acao": "Investir em comunicação institucional / gestão de imagem",
        "tema": "Imagem",
        "observacao": "Constrói reputação de forma proativa; custa margem",
        "efeitos": {
          "F1": -0.015,
          "G1": 12
        }
      },
      {
        "acao": "Responder à concorrência com oferta agressiva de retenção",
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
        "acao": "Padronizar protocolos com rigor",
        "tema": "",
        "observacao": "Mais segurança e adesão, mas gera resistência (alinhamento societário cai)",
        "efeitos": {
          "P1": 0.15,
          "P2": -0.015,
          "R4": -8
        }
      },
      {
        "acao": "Investir em sistema de gestão/dados",
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
        "acao": "Ampliar cobertura de plantão",
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
        "acao": "Reduzir cobertura para eficiência",
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
        "acao": "Avaliação pré-anestésica obrigatória",
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
        "acao": "Transformar médicos em sócios",
        "tema": "",
        "observacao": "Muito mais retenção e alinhamento, reparte mais do resultado",
        "efeitos": {
          "R1": -8,
          "R4": 15,
          "F1": -0.02
        }
      },
      {
        "acao": "Contratar mais equipe",
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
        "acao": "Formar talento internamente (residentes)",
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
        "acao": "Manter equipe enxuta / PJ",
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
        "acao": "Programa de retenção anti-aliciamento (bônus de permanência)",
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
        "acao": "Reter parte para reinvestir (formar reserva)",
        "tema": "",
        "observacao": "Constrói fôlego financeiro, mas sócios recebem menos agora",
        "efeitos": {
          "P4": 6,
          "R4": -6,
          "F4": 0.1
        }
      },
      {
        "acao": "Migrar custo fixo para variável",
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

function encontrarAcao(area, nomeAcao) {
  const lista = GAME_DESIGN.decisoesPorArea[area] || [];
  return lista.find((a) => a.acao === nomeAcao) || lista[0];
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
// decisoesTime: { Comercial: "nome da ação", Processos: "...", RH: "...", Financeiro: "..." }
// contexto: { numeroRodada, eventoNome (ou null), rodadaConcorrente (numero ou null), concorrenteJaChegou (bool antes desta rodada) }
function resolverRodadaTime(team, decisoesTime, contexto) {
  let estado = Object.assign({}, team.estado);
  const efeitosAplicados = [];

  for (const area of Object.keys(AREAS_INDICADORES)) {
    const nomeAcao = decisoesTime[area] || "Manter estratégia atual";
    const acao = encontrarAcao(area, nomeAcao);
    if (acao) {
      estado = aplicarEfeitos(estado, acao.efeitos);
      efeitosAplicados.push({ tipo: "decisao", area, acao: acao.acao });
    }
  }

  if (contexto.eventoNome) {
    const evento = eventoPorNome(contexto.eventoNome);
    if (evento) {
      estado = aplicarEfeitos(estado, evento.efeitos);
      efeitosAplicados.push({ tipo: "evento", nome: evento.nome });
    }
  }

  const chegaNestaRodada = contexto.rodadaConcorrente === contexto.numeroRodada;
  const concorrenteAtivo = contexto.concorrenteJaChegou || chegaNestaRodada;
  if (chegaNestaRodada) {
    estado = aplicarEfeitos(estado, GAME_DESIGN.marcoConcorrente.choqueImediato);
    efeitosAplicados.push({ tipo: "marco", nome: "Chegada do concorrente" });
  }
  if (concorrenteAtivo) {
    const pressao = Object.assign({}, GAME_DESIGN.marcoConcorrente.pressaoPassiva);
    const mitigouComercial = decisoesTime.Comercial === GAME_DESIGN.marcoConcorrente.mitigacaoComercial;
    const mitigouRH = decisoesTime.RH === GAME_DESIGN.marcoConcorrente.mitigacaoRH;
    if (mitigouComercial) delete pressao.C1;
    if (mitigouRH) delete pressao.R1;
    if (Object.keys(pressao).length) {
      estado = aplicarEfeitos(estado, pressao);
      efeitosAplicados.push({ tipo: "pressao_concorrencia", mitigouComercial, mitigouRH });
    }
  }

  const contadores = Object.assign({ P2: 0, G1: 0, R4: 0 }, team.rodadasRisco || {});
  contadores.P2 = zonaIndicador("P2", estado.P2) === "vermelho" ? contadores.P2 + 1 : 0;
  contadores.G1 = estado.G1 < 20 ? contadores.G1 + 1 : 0;
  contadores.R4 = zonaIndicador("R4", estado.R4) === "vermelho" ? contadores.R4 + 1 : 0;

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
    decisoes: decisoesTime,
    evento: contexto.eventoNome || null,
    marcoConcorrente: chegaNestaRodada,
    efeitosAplicados
  };

  return {
    estado,
    status,
    rodadasRisco: contadores,
    historico: (team.historico || []).concat([snapshot]),
    concorrenteJaChegou: concorrenteAtivo
  };
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

function seletorDecisoes(decisoesAtuais, disabled) {
  const areas = ["Comercial", "Processos", "RH", "Financeiro"];
  return areas.map((area) => {
    const opcoes = GAME_DESIGN.decisoesPorArea[area];
    const atual = decisoesAtuais[area] || "Manter estratégia atual";
    return `<div class="decisao-area-card">
      <div class="decisao-area-titulo">${area}</div>
      <div class="decisao-opcoes">
        ${opcoes.map((op) => `
          <label class="decisao-opcao ${atual === op.acao ? "selecionada" : ""}">
            <input type="radio" name="decisao-${area}" value="${esc(op.acao)}" ${atual === op.acao ? "checked" : ""} ${disabled ? "disabled" : ""} data-jogo-decisao="${area}" />
            <span class="decisao-opcao-nome">${esc(op.acao)}${op.tema ? ` <span class="decisao-tag">${esc(op.tema)}</span>` : ""}</span>
            <span class="decisao-opcao-obs">${esc(op.observacao)}</span>
          </label>`).join("")}
      </div>
    </div>`;
  }).join("");
}

function contarDecisoesDoTime(teamId) {
  return jogoDecisoesDoTime.filter((d) => d.team_id === teamId).length;
}

function prazoRestanteTexto(prazoISO) {
  if (!prazoISO) return "sem prazo definido";
  const diff = new Date(prazoISO).getTime() - Date.now();
  if (diff <= 0) return "prazo esgotado";
  const horas = Math.floor(diff / 3600000);
  const min = Math.floor((diff % 3600000) / 60000);
  if (horas > 0) return `${horas}h ${min}min restantes`;
  return `${min}min restantes`;
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
let jogoDecisoesDoTime = []; // decisões da rodada aberta, de todos os times (facilitador usa para ver quem já decidiu)
let jogoMeuTimeId = null;
let jogoMinhasDecisoesRascunho = {};
let jogoCanalRealtime = null;
let jogoUltimoRelatorio = null; // guarda o resultado do fechamento da última rodada, para exibir o "relatório da rodada"

function souFacilitador() {
  return minhaRole === "facilitador" || minhaRole === "admin";
}

async function carregarSessoesJogo() {
  const { data, error } = await supabase.from("game_sessions").select("*").order("criado_em", { ascending: false });
  if (!error) jogoSessoes = data || [];
}

async function criarSessaoJogo(nome, totalRodadas, rodadaConcorrente) {
  const { data, error } = await supabase.from("game_sessions").insert({
    nome, total_rodadas: totalRodadas, rodada_concorrente: rodadaConcorrente || null, criado_por: sessaoUsuarioId()
  }).select().single();
  if (!error) { await carregarSessoesJogo(); await abrirSessaoJogo(data.id); }
  return { data, error };
}

function sessaoUsuarioId() {
  // supabase.auth guarda a sessão internamente; recuperamos o id síncrono via getSession já resolvido no login
  return window.__meuUserId || null;
}

async function abrirSessaoJogo(sessionId) {
  const [{ data: sessao }, { data: times }, { data: rodadas }] = await Promise.all([
    supabase.from("game_sessions").select("*").eq("id", sessionId).single(),
    supabase.from("game_teams").select("*").eq("session_id", sessionId).order("nome"),
    supabase.from("game_rounds").select("*").eq("session_id", sessionId).order("numero")
  ]);
  jogoSessaoAtual = sessao || null;
  jogoTimes = times || [];
  jogoRodadas = rodadas || [];
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  if (rodadaAberta) {
    const { data: decisoes } = await supabase.from("game_decisions").select("*").eq("round_id", rodadaAberta.id);
    jogoDecisoesDoTime = decisoes || [];
  } else {
    jogoDecisoesDoTime = [];
  }
  // descobre se sou membro de algum time desta sessão
  jogoMeuTimeId = null;
  if (window.__meuUserId) {
    const { data: meuVinculo } = await supabase
      .from("game_team_members")
      .select("team_id, game_teams!inner(session_id)")
      .eq("user_id", window.__meuUserId)
      .eq("game_teams.session_id", sessionId)
      .maybeSingle();
    if (meuVinculo) jogoMeuTimeId = meuVinculo.team_id;
  }
  jogoView = souFacilitador() ? "facilitador" : "time";
  jogoMinhasDecisoesRascunho = {};
  assinarRealtimeJogo(sessionId);
  renderStageOnly();
}

function assinarRealtimeJogo(sessionId) {
  if (jogoCanalRealtime) { supabase.removeChannel(jogoCanalRealtime); jogoCanalRealtime = null; }
  jogoCanalRealtime = supabase
    .channel("jogo-" + sessionId)
    .on("postgres_changes", { event: "*", schema: "public", table: "game_teams", filter: "session_id=eq." + sessionId }, () => recarregarSessaoSilencioso())
    .on("postgres_changes", { event: "*", schema: "public", table: "game_rounds", filter: "session_id=eq." + sessionId }, () => recarregarSessaoSilencioso())
    .on("postgres_changes", { event: "*", schema: "public", table: "game_decisions" }, () => recarregarSessaoSilencioso())
    .subscribe();
}

async function recarregarSessaoSilencioso() {
  if (!jogoSessaoAtual) return;
  const sessionId = jogoSessaoAtual.id;
  const [{ data: sessao }, { data: times }, { data: rodadas }] = await Promise.all([
    supabase.from("game_sessions").select("*").eq("id", sessionId).single(),
    supabase.from("game_teams").select("*").eq("session_id", sessionId).order("nome"),
    supabase.from("game_rounds").select("*").eq("session_id", sessionId).order("numero")
  ]);
  jogoSessaoAtual = sessao || jogoSessaoAtual;
  jogoTimes = times || jogoTimes;
  jogoRodadas = rodadas || jogoRodadas;
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  if (rodadaAberta) {
    const { data: decisoes } = await supabase.from("game_decisions").select("*").eq("round_id", rodadaAberta.id);
    jogoDecisoesDoTime = decisoes || [];
  }
  if (modoAtual === "jogo") renderStageOnly();
}

async function criarTimeJogo(nome) {
  const novoEstado = estadoInicial();
  const { error } = await supabase.from("game_teams").insert({
    session_id: jogoSessaoAtual.id, nome, estado: novoEstado
  });
  if (!error) await abrirSessaoJogo(jogoSessaoAtual.id);
  return error;
}

async function adicionarMembroPorEmail(teamId, email) {
  const { data: perfil, error: erroPerfil } = await supabase.from("profiles").select("id").eq("email", email.trim()).maybeSingle();
  if (erroPerfil || !perfil) return { error: "Não achei ninguém com esse e-mail entre as pessoas convidadas." };
  const { error } = await supabase.from("game_team_members").insert({ team_id: teamId, user_id: perfil.id });
  if (!error) await abrirSessaoJogo(jogoSessaoAtual.id);
  return { error: error ? "Essa pessoa já está em um time desta partida, ou algo deu errado." : null };
}

async function abrirNovaRodada(prazoISO) {
  const numero = (jogoSessaoAtual.rodada_atual || 0) + 1;
  const { error } = await supabase.from("game_rounds").insert({
    session_id: jogoSessaoAtual.id, numero, prazo: prazoISO || null, status: "aberta"
  });
  if (!error) {
    await supabase.from("game_sessions").update({ rodada_atual: numero, status: "ativa" }).eq("id", jogoSessaoAtual.id);
    await abrirSessaoJogo(jogoSessaoAtual.id);
  }
  return error;
}

async function salvarMinhaDecisao(area, acao) {
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  if (!rodadaAberta || !jogoMeuTimeId) return;
  await supabase.from("game_decisions").upsert({
    round_id: rodadaAberta.id, team_id: jogoMeuTimeId, area, acao, decidido_por: window.__meuUserId
  }, { onConflict: "round_id,team_id,area" });
  jogoMinhasDecisoesRascunho[area] = acao;
  await recarregarSessaoSilencioso();
}

// ---------- Fechamento de rodada: roda o motor localmente e grava o resultado ----------
async function fecharRodadaAtual() {
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  if (!rodadaAberta || !jogoSessaoAtual) return;
  const numeroRodada = rodadaAberta.numero;
  const relatorio = [];

  for (const team of jogoTimes) {
    if (team.status !== "ativo") { relatorio.push({ time: team.nome, pulou: true }); continue; }
    const decisoesDoTime = jogoDecisoesDoTime.filter((d) => d.team_id === team.id);
    const decisoesTime = {};
    ["Comercial", "Processos", "RH", "Financeiro"].forEach((area) => {
      const d = decisoesDoTime.find((x) => x.area === area);
      decisoesTime[area] = d ? d.acao : "Manter estratégia atual";
    });

    let eventoNome = null;
    if (Math.random() < 0.4) {
      eventoNome = sortearEvento(team.estado).nome;
    }

    const contexto = {
      numeroRodada,
      eventoNome,
      rodadaConcorrente: jogoSessaoAtual.rodada_concorrente,
      concorrenteJaChegou: team.concorrente_ja_chegou
    };
    const resultado = resolverRodadaTime(team, decisoesTime, contexto);
    const ultimoSnapshot = resultado.historico[resultado.historico.length - 1];
    const linhasContabeis = new Set();
    ultimoSnapshot.efeitosAplicados.forEach((ap) => {
      let efeitos = null;
      if (ap.tipo === "decisao") efeitos = encontrarAcao(ap.area, ap.acao).efeitos;
      if (ap.tipo === "evento") efeitos = eventoPorNome(ap.nome).efeitos;
      if (ap.tipo === "marco") efeitos = GAME_DESIGN.marcoConcorrente.choqueImediato;
      if (ap.tipo === "pressao_concorrencia") efeitos = GAME_DESIGN.marcoConcorrente.pressaoPassiva;
      if (efeitos) linhasContabeisTocadas(efeitos).forEach((l) => linhasContabeis.add(l));
    });

    await supabase.from("game_teams").update({
      estado: resultado.estado,
      status: resultado.status,
      rodadas_risco: resultado.rodadasRisco,
      historico: resultado.historico,
      concorrente_ja_chegou: resultado.concorrenteJaChegou
    }).eq("id", team.id);

    relatorio.push({
      time: team.nome,
      decisoes: decisoesTime,
      evento: eventoNome,
      indiceFinalAnterior: (team.historico && team.historico.length) ? team.historico[team.historico.length - 1].indiceFinal : computeIndiceFinal(team.estado),
      indiceFinalNovo: resultado.historico[resultado.historico.length - 1].indiceFinal,
      statusAnterior: team.status,
      statusNovo: resultado.status,
      marcoConcorrente: resultado.historico[resultado.historico.length - 1].marcoConcorrente,
      linhasContabeis: Array.from(linhasContabeis)
    });
  }

  await supabase.from("game_rounds").update({ status: "fechada" }).eq("id", rodadaAberta.id);
  jogoUltimoRelatorio = { numeroRodada, itens: relatorio };
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

  return `
    <div class="stage-head">
      <div class="eyebrow">Business Game · Facilitador</div>
      <h1>${esc(sessao.nome)}</h1>
      <p class="lede">Rodada ${sessao.rodada_atual} de ${sessao.total_rodadas} · concorrente chega na rodada ${sessao.rodada_concorrente || "—"} · <button class="link-btn" type="button" data-action="jogo-voltar-lista">← voltar às partidas</button></p>
    </div>

    ${jogoUltimoRelatorio ? renderRelatorioRodada(jogoUltimoRelatorio) : ""}

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
            ${rodadaAberta ? `<span class="muted"> · ${contarDecisoesDoTime(t.id)}/4 decisões nesta rodada</span>` : ""}
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
        <p>Rodada <strong>${rodadaAberta.numero}</strong> aberta ${rodadaAberta.prazo ? `· prazo: ${new Date(rodadaAberta.prazo).toLocaleString("pt-BR")} (${prazoRestanteTexto(rodadaAberta.prazo)})` : "· sem prazo definido"}</p>
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
          <div class="relatorio-decisoes">${Object.entries(item.decisoes).map(([area, acao]) => `<span class="tag">${area}: ${esc(acao)}</span>`).join(" ")}</div>
          ${item.linhasContabeis && item.linhasContabeis.length ? `<div class="relatorio-contabil">📊 Linhas contábeis afetadas: ${item.linhasContabeis.map((l) => `<span class="tag tag-contabil">${esc(l)}</span>`).join(" ")}</div>` : ""}
          ${item.statusNovo !== item.statusAnterior ? `<div class="relatorio-status-mudou">⚠️ Situação mudou: ${STATUS_LABEL[item.statusNovo]}</div>` : ""}
        </div>`;
      }).join("")}
    </div>
  `;
}
// ===================== BUSINESS GAME — PAINEL DO TIME (JOGADORES) =====================

function renderPainelTime() {
  const sessao = jogoSessaoAtual;
  if (!jogoMeuTimeId) {
    return `
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

  const meuTime = jogoTimes.find((t) => t.id === jogoMeuTimeId);
  const rodadaAberta = jogoRodadas.find((r) => r.status === "aberta");
  const minhasDecisoes = {};
  jogoDecisoesDoTime.filter((d) => d.team_id === jogoMeuTimeId).forEach((d) => { minhasDecisoes[d.area] = d.acao; });
  Object.assign(minhasDecisoes, jogoMinhasDecisoesRascunho);

  const emJogo = meuTime.status === "ativo";

  return `
    <div class="stage-head">
      <div class="eyebrow">Business Game · Time ${esc(meuTime.nome)}</div>
      <h1>${esc(sessao.nome)}</h1>
      <p class="lede">Rodada ${sessao.rodada_atual} de ${sessao.total_rodadas} · <button class="link-btn" type="button" data-action="jogo-voltar-lista">← voltar às partidas</button></p>
    </div>

    ${!emJogo ? `
    <div class="card card-encerrado">
      <div class="card-kicker">Fim de jogo para o seu time</div>
      <div class="highlight-value">${STATUS_LABEL[meuTime.status]}</div>
      <p class="card-note">Acompanhe o restante da partida pelo placar abaixo.</p>
    </div>` : rodadaAberta ? `
    <div class="card">
      <div class="card-kicker">Rodada ${rodadaAberta.numero} — decisões da sua equipe</div>
      <p class="card-note">${rodadaAberta.prazo ? `Prazo: ${new Date(rodadaAberta.prazo).toLocaleString("pt-BR")} (${prazoRestanteTexto(rodadaAberta.prazo)})` : "Sem prazo definido — combine com o facilitador."} Escolham 1 ação por área. Podem mudar de ideia até o facilitador fechar a rodada.</p>
      ${seletorDecisoes(minhasDecisoes, false)}
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

    ${jogoSessaoAtual.mini_caso_atual !== null && jogoSessaoAtual.mini_caso_atual !== undefined ? painelMiniCaso(jogoSessaoAtual) : ""}

    <details class="accordion-simples">
      <summary>Histórico contábil pré-jogo (os 4 trimestres antes da rodada 1)</summary>
      ${painelHistoricoPreJogo()}
    </details>

    ${meuTime.historico && meuTime.historico.length ? `
    <div class="card">
      <div class="card-kicker">Histórico de rodadas</div>
      <table class="historico-table">
        <thead><tr><th>Rodada</th><th>Índice final</th><th>Decisões</th><th>Linhas contábeis afetadas</th><th>Evento</th><th>Situação</th></tr></thead>
        <tbody>
          ${meuTime.historico.map((h) => {
            const linhas = new Set();
            (h.efeitosAplicados || []).forEach((ap) => {
              let efeitos = null;
              if (ap.tipo === "decisao") { const a = encontrarAcao(ap.area, ap.acao); efeitos = a ? a.efeitos : null; }
              if (ap.tipo === "evento") { const ev = eventoPorNome(ap.nome); efeitos = ev ? ev.efeitos : null; }
              if (ap.tipo === "marco") efeitos = GAME_DESIGN.marcoConcorrente.choqueImediato;
              if (ap.tipo === "pressao_concorrencia") efeitos = GAME_DESIGN.marcoConcorrente.pressaoPassiva;
              if (efeitos) linhasContabeisTocadas(efeitos).forEach((l) => linhas.add(l));
            });
            return `<tr>
            <td>${h.rodada}</td><td>${h.indiceFinal.toFixed(1)}</td>
            <td>${Object.entries(h.decisoes || {}).map(([area, acao]) => `<span class="tag">${esc(acao)}</span>`).join(" ")}</td>
            <td>${Array.from(linhas).map((l) => `<span class="tag tag-contabil">${esc(l)}</span>`).join(" ") || "—"}</td>
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
  if (souFacilitador() && jogoView === "facilitador") return renderPainelFacilitador();
  return renderPainelTime();
}

async function handleJogoAction(action, el) {
  if (action === "jogo-voltar-lista") {
    jogoSessaoAtual = null;
    if (jogoCanalRealtime) { supabase.removeChannel(jogoCanalRealtime); jogoCanalRealtime = null; }
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
      container.innerHTML = painelIndicadores(time.estado) + painelDemonstracoes(time.estado);
      document.querySelectorAll('[data-action="jogo-ver-time-detalhe"]').forEach((b) => b.classList.remove("active"));
      el.classList.add("active");
    }
    return;
  }

  if (action === "jogo-lancar-minicaso") {
    const i = parseInt(el.getAttribute("data-i"), 10);
    await supabase.from("game_sessions").update({ mini_caso_atual: i, mini_caso_revelado: false }).eq("id", jogoSessaoAtual.id);
    await abrirSessaoJogo(jogoSessaoAtual.id);
    return;
  }

  if (action === "jogo-revelar-minicaso") {
    await supabase.from("game_sessions").update({ mini_caso_revelado: true }).eq("id", jogoSessaoAtual.id);
    await abrirSessaoJogo(jogoSessaoAtual.id);
    return;
  }

  if (action === "jogo-esconder-minicaso") {
    await supabase.from("game_sessions").update({ mini_caso_atual: null, mini_caso_revelado: false }).eq("id", jogoSessaoAtual.id);
    await abrirSessaoJogo(jogoSessaoAtual.id);
    return;
  }
}
// ===================== SUPABASE: CLIENTE, LOGIN, SINCRONIZAÇÃO =====================

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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

function scheduleSave() {
  if (!souEditor()) return;
  const st = document.getElementById("saveStatus");
  if (st) st.textContent = "Editando…";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(doSave, 900);
}

async function doSave() {
  if (!souEditor()) return;
  saving = true;
  const agoraIso = new Date().toISOString();
  S.meta.atualizadoEm = Date.now();
  S.meta.atualizadoPor = meuNome || meuEmail;
  const statusEl = document.getElementById("saveStatus");
  try {
    if (statusEl) statusEl.textContent = "Salvando…";
    const { error } = await supabase
      .from("plano")
      .update({ dados: S, atualizado_em: agoraIso, atualizado_por: meuNome || meuEmail })
      .eq("id", 1);
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

async function carregarDados() {
  const { data, error } = await supabase.from("plano").select("dados").eq("id", 1).single();
  if (!error && data && data.dados && Object.keys(data.dados).length) {
    S = mesclarComPadrao(data.dados);
    lastSyncedAt = S.meta.atualizadoEm || 0;
  }
  if (!S.participantes.includes(meuNome)) {
    S.participantes.push(meuNome);
    scheduleSave();
  }
  renderShell();
  assinarRealtime();
}

function assinarRealtime() {
  supabase
    .channel("plano-realtime")
    .on("postgres_changes", { event: "UPDATE", schema: "public", table: "plano", filter: "id=eq.1" }, (payload) => {
      if (saving) return;
      const active = document.activeElement;
      const editando = active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA");
      if (editando) return;
      const remote = payload.new.dados;
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
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    await aoLogar(session);
  } else {
    renderLogin();
  }
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session) aoLogar(session);
    if (event === "SIGNED_OUT") location.reload();
  });
}

async function aoLogar(session) {
  meuEmail = session.user.email;
  window.__meuUserId = session.user.id;
  let { data: perfil, error } = await supabase.from("profiles").select("nome, role").eq("id", session.user.id).single();
  if (error || !perfil) {
    // perfil ainda não existe (ex: gatilho não configurado) — trata como visualizador
    perfil = { nome: meuEmail.split("@")[0], role: "viewer" };
  }
  minhaRole = perfil.role || "viewer";
  meuNome = perfil.nome || meuEmail.split("@")[0];
  await carregarDados();
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
  const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
  if (error) erroEl.textContent = "E-mail ou senha inválidos, ou o convite ainda não foi ativado.";
}

async function recuperarSenha() {
  const email = document.getElementById("loginEmail").value.trim();
  const erroEl = document.getElementById("loginErro");
  if (!email) { erroEl.textContent = "Digite seu e-mail primeiro."; return; }
  await supabase.auth.resetPasswordForEmail(email);
  erroEl.textContent = "Enviamos um link de redefinição de senha para " + email;
}

async function sair() {
  await supabase.auth.signOut();
}

iniciarApp();
