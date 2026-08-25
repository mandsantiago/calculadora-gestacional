export interface FaqSemana {
  pergunta: string;
  resposta: string;
}

export interface SemanaGravidez {
  numero: number;
  trimestre: 1 | 2 | 3;
  tamanho: string;
  resumo: string;
  desenvolvimentoBebe: string;
  mudancasMae: string;
  exames: string;
  dicas: string;
  faq: FaqSemana[];
}

/**
 * Conteúdo de cada semana de gravidez (1 a 42).
 * Preenchido em lotes — semanas ainda não escritas simplesmente não aparecem aqui,
 * e a página /semana/N mostra um aviso de "conteúdo a caminho" nesse caso.
 *
 * Lote 1 (semanas 1–10): concluído em 2026-08-24.
 */
export const semanas: SemanaGravidez[] = [
  {
    numero: 1,
    trimestre: 1,
    tamanho:
      "ainda não existe um embrião — esta é uma semana de contagem, não de desenvolvimento",
    resumo:
      "Pode parecer estranho, mas a 1ª semana de gravidez, pelo método usado por praticamente todos os médicos (contagem a partir da DUM), começa antes mesmo da concepção acontecer. É a mesma lógica usada pela nossa calculadora: o relógio da gestação começa a contar no primeiro dia da sua última menstruação.",
    desenvolvimentoBebe:
      "Como a contagem começa no primeiro dia do seu último ciclo menstrual, ainda não existe um óvulo fertilizado nesta semana — a ovulação normalmente só acontece por volta da 2ª semana, e a fertilização, perto do fim dela ou já na 3ª semana. Pode parecer contraintuitivo, mas essa é a forma padrão de contar a idade gestacional no mundo todo, porque a data exata da concepção raramente é conhecida com certeza, enquanto a data da última menstruação costuma ser mais fácil de lembrar. Por isso, quando o médico diz que você está 'de 6 semanas', por exemplo, o bebê na prática se desenvolveu por cerca de 4 semanas desde a fertilização.",
    mudancasMae:
      "Nesta semana seu corpo está menstruando normalmente e, ao mesmo tempo, começando a preparar um novo revestimento no útero (endométrio) que vai, futuramente, receber o óvulo fertilizado. Os hormônios FSH (hormônio folículo-estimulante) começam a estimular os ovários a amadurecer óvulos para a ovulação que vem a seguir. Não há nenhum sintoma de gravidez nesta fase, porque, tecnicamente, a gravidez ainda não começou.",
    exames:
      "Não há exames específicos de pré-natal nesta semana. Se você está tentando engravidar, esse é um bom momento para começar (ou confirmar com seu médico) a suplementação de ácido fólico, idealmente antes mesmo da concepção, já que ele ajuda a prevenir defeitos do tubo neural que se formam já nas primeiras semanas.",
    dicas:
      "Se a gravidez é planejada, aproveite para revisar hábitos: iniciar ácido fólico, reduzir ou parar o consumo de álcool e cigarro, e agendar uma consulta pré-concepcional com seu ginecologista. Manter um calendário do seu ciclo menstrual ajuda a identificar o período fértil e a estimar a DUM com mais precisão mais adiante.",
    faq: [
      {
        pergunta: "Por que a gravidez é contada a partir da menstruação, se o bebê ainda nem existe?",
        resposta:
          "Porque a data da última menstruação (DUM) é um marco que a maioria das mulheres consegue identificar com precisão, enquanto a data exata da concepção raramente é conhecida. Contar a partir da DUM é o padrão internacional usado por obstetras, e é o mesmo método usado por esta calculadora.",
      },
      {
        pergunta: "Isso quer dizer que a gravidez dura mais do que 9 meses?",
        resposta:
          "Não exatamente — é uma questão de como se conta. As clássicas '40 semanas' de gravidez, contadas a partir da DUM, correspondem a cerca de 38 semanas (aproximadamente 266 dias) desde a concepção real, que costuma acontecer por volta da 2ª ou 3ª semana dessa contagem.",
      },
    ],
  },
  {
    numero: 2,
    trimestre: 1,
    tamanho: "um óvulo microscópico, ainda antes ou no momento da fertilização",
    resumo:
      "A 2ª semana, na contagem a partir da DUM, é geralmente quando a ovulação acontece — o momento em que um óvulo maduro é liberado pelo ovário. É também a janela em que a fertilização, se ocorrer, normalmente acontece.",
    desenvolvimentoBebe:
      "Durante esta semana, um dos folículos que amadureceram no ovário libera um óvulo (ovulação), que é captado pela trompa de Falópio. Se houver relação sexual no período fértil (geralmente entre 2 dias antes e 1 dia depois da ovulação) e um espermatozoide alcançar e fertilizar esse óvulo, forma-se o zigoto — a primeira célula do futuro bebê, ainda microscópica. Nas horas seguintes à fertilização, essa célula começa a se dividir rapidamente enquanto viaja em direção ao útero, um trajeto que leva de 3 a 4 dias.",
    mudancasMae:
      "É comum notar sinais físicos da ovulação: um leve aumento na temperatura corporal basal, mudança na textura do muco cervical (mais parecido com clara de ovo, sinal de fertilidade) e, em algumas mulheres, uma pontada leve de um lado da barriga (chamada de dor do meio, ou mittelschmerz). Ainda não há nenhum sintoma de gravidez perceptível nesta semana, mesmo que a fertilização já tenha acontecido — é cedo demais para o corpo reagir.",
    exames:
      "Para quem está tentando engravidar, testes de ovulação (que detectam o pico do hormônio LH na urina) podem ajudar a identificar os dias mais férteis desta semana. Não há exames de pré-natal ainda, já que a gravidez em si só se estabelece nos dias seguintes.",
    dicas:
      "Se você está tentando engravidar, esta é a semana mais importante para ter relações no período fértil. Continue (ou comece) a tomar ácido fólico, e evite álcool, cigarro e medicamentos sem orientação médica, já que a fertilização pode acontecer a qualquer momento nesta janela.",
    faq: [
      {
        pergunta: "Como saber se estou ovulando nesta semana?",
        resposta:
          "Sinais como mudança no muco cervical, leve aumento da temperatura basal e testes de ovulação de farmácia podem ajudar a identificar o período. Ainda assim, o ciclo varia de mulher para mulher, então esses sinais são indicativos, não uma certeza absoluta.",
      },
      {
        pergunta: "Já dá para fazer teste de gravidez nesta semana?",
        resposta:
          "Não. Mesmo que a fertilização aconteça nesta semana, o hormônio hCG (detectado pelos testes) só começa a ser produzido em quantidade significativa após a implantação, que ocorre cerca de 6 a 10 dias depois da fertilização — geralmente já na semana seguinte.",
      },
      {
        pergunta: "O óvulo pode ser fertilizado mais de uma vez, gerando gêmeos?",
        resposta:
          "Gêmeos idênticos vêm de um único óvulo fertilizado que se divide em dois. Já gêmeos fraternos acontecem quando dois óvulos diferentes são liberados na mesma ovulação (o que é mais raro, mas pode acontecer) e cada um é fertilizado por um espermatozoide distinto.",
      },
    ],
  },
  {
    numero: 3,
    trimestre: 1,
    tamanho: "um zigoto microscópico, menor que a ponta de um alfinete",
    resumo:
      "Se a fertilização aconteceu na semana anterior, a 3ª semana é marcada por uma corrida silenciosa: o óvulo fertilizado se divide repetidamente enquanto viaja pela trompa até o útero, onde vai tentar se implantar.",
    desenvolvimentoBebe:
      "O zigoto se divide em múltiplas células ao longo de vários dias, formando uma estrutura chamada mórula e, em seguida, o blastocisto — uma bolinha oca de células com cerca de 100 a 200 células, ainda menor que a cabeça de um alfinete. Por volta do 5º ou 6º dia após a fertilização, o blastocisto chega ao útero, e entre o 6º e o 10º dia começa o processo de implantação, quando ele se fixa no endométrio (revestimento uterino). É só a partir da implantação que o corpo da mãe começa a reconhecer a gravidez e a produzir o hormônio hCG.",
    mudancasMae:
      "Fisicamente, ainda não há sintomas perceptíveis, já que mesmo com a fertilização bem-sucedida, a implantação pode não ter acontecido ainda nesta semana. Algumas mulheres relatam, próximo ao fim desta semana ou início da seguinte, um pequeno sangramento leve (sangramento de implantação) ou cólicas discretas, mas isso não acontece com todas e não é um sinal obrigatório de gravidez.",
    exames:
      "Ainda é cedo para exames de sangue ou de urina detectarem gravidez com confiabilidade. Testes de farmácia muito sensíveis podem, em alguns casos, dar positivo perto do fim desta semana se a implantação ocorreu precocemente, mas o ideal é aguardar a data prevista da próxima menstruação para testar, evitando resultados falso-negativos.",
    dicas:
      "Continue a suplementação de ácido fólico e evite álcool, cigarro, banheiras muito quentes e medicamentos não indicados por um médico — mesmo antes de a gravidez ser confirmada, esses cuidados protegem o embrião nesta fase inicial e decisiva de formação.",
    faq: [
      {
        pergunta: "O que é o sangramento de implantação e como diferenciar da menstruação?",
        resposta:
          "É um sangramento leve, geralmente rosado ou marrom claro (bem mais fraco que o fluxo menstrual normal), que pode ocorrer quando o embrião se fixa no útero. Costuma durar poucas horas a 1-2 dias, ao contrário da menstruação, que normalmente é mais intensa e dura vários dias. Nem toda mulher apresenta esse sinal.",
      },
      {
        pergunta: "Quantos dias depois da relação a fertilização acontece?",
        resposta:
          "O espermatozoide pode fertilizar o óvulo em poucas horas até cerca de 5 dias após a relação (ele sobrevive esse tempo no trato reprodutivo), mas a fertilização em si só é possível enquanto o óvulo está viável, geralmente até 24 horas após a ovulação.",
      },
      {
        pergunta: "Dá para sentir alguma coisa diferente no corpo nesta semana?",
        resposta:
          "Na maioria dos casos, não. Como o embrião ainda é microscópico e a implantação pode nem ter terminado, é raro haver qualquer sintoma físico perceptível nesta fase — a ansiedade de tentar identificar sinais precoces é comum, mas geralmente não corresponde a mudanças reais no corpo ainda.",
      },
    ],
  },
  {
    numero: 4,
    trimestre: 1,
    tamanho: "do tamanho de uma semente de papoula, com cerca de 2 mm",
    resumo:
      "Esta costuma ser a semana em que muitas mulheres descobrem que estão grávidas: a implantação se completa, o hormônio hCG começa a ser produzido em quantidade suficiente para ser detectado, e a menstruação esperada não vem.",
    desenvolvimentoBebe:
      "O blastocisto termina de se implantar no endométrio e começa a se diferenciar em duas estruturas principais: o embrião propriamente dito e a placenta, que vai nutri-lo ao longo da gestação. Já é possível identificar duas camadas de células que, nas próximas semanas, vão dar origem a todos os órgãos e tecidos do corpo. O saco gestacional começa a se formar, e é geralmente a primeira estrutura visível num ultrassom bem precoce, embora ainda seja cedo demais para ver o embrião claramente.",
    mudancasMae:
      "O sintoma mais marcante desta semana costuma ser justamente a ausência: a menstruação esperada não aparece. Alguns testes de farmácia já detectam o hCG neste ponto, embora a confiabilidade aumente conforme os dias passam. Sintomas físicos ainda costumam ser discretos ou ausentes — sensibilidade leve nas mamas e um cansaço um pouco maior que o normal são os mais comuns, quando presentes.",
    exames:
      "Se a menstruação atrasou e o teste de farmácia deu positivo, esse é o momento de agendar a primeira consulta com o obstetra (algumas clínicas preferem aguardar até a 6ª ou 8ª semana para o primeiro ultrassom, quando os batimentos cardíacos já são visíveis). Um exame de sangue (beta-hCG quantitativo) pode confirmar e até estimar a idade gestacional com mais precisão que o teste de urina.",
    dicas:
      "Assim que o teste der positivo, comece (ou continue) o ácido fólico, corte álcool e cigarro por completo, e revise com seu médico qualquer medicamento de uso contínuo. Evitar alimentos crus, mal cozidos ou não pasteurizados também já vale a partir de agora, mesmo antes da primeira consulta oficial.",
    faq: [
      {
        pergunta: "O teste de farmácia pode dar falso negativo nesta semana?",
        resposta:
          "Sim, principalmente se feito muito cedo ou com urina diluída. Os níveis de hCG ainda estão subindo nesta fase; se o teste vier negativo mas a menstruação continuar atrasada, vale repetir em alguns dias ou fazer um exame de sangue, que é mais sensível.",
      },
      {
        pergunta: "Já dá para ver o bebê no ultrassom nesta semana?",
        resposta:
          "Geralmente não, ou só um pontinho correspondente ao saco gestacional. A maioria dos médicos prefere aguardar até cerca de 6-8 semanas para o primeiro ultrassom, quando o embrião e os batimentos cardíacos já podem ser identificados com mais clareza.",
      },
    ],
  },
  {
    numero: 5,
    trimestre: 1,
    tamanho: "do tamanho de uma semente de gergelim, com cerca de 3 mm",
    resumo:
      "Na 5ª semana, o embrião entra numa fase de formação acelerada: os primeiros rascunhos do coração e do sistema nervoso começam a se organizar, enquanto os hormônios da gravidez sobem rapidamente no corpo da mãe.",
    desenvolvimentoBebe:
      "O disco embrionário se dobra e começa a formar um tubo neural, a estrutura que vai dar origem ao cérebro e à medula espinhal — por isso o ácido fólico é tão importante justamente nesta fase inicial. Um tubo cardíaco primitivo também começa a se formar e, em poucos dias, iniciará suas primeiras contrações, ainda irregulares. O saco vitelínico, uma estrutura temporária, nutre o embrião até que a placenta assuma essa função por completo.",
    mudancasMae:
      "É comum que os primeiros sintomas de gravidez apareçam com mais força nesta semana: fadiga incomum, sensibilidade ou inchaço nas mamas, aumento da frequência urinária e, em algumas mulheres, os primeiros sinais de náusea. O olfato costuma ficar mais sensível, e certos cheiros que antes eram neutros podem passar a incomodar.",
    exames:
      "Se ainda não foi feita, esta é uma boa semana para a primeira consulta de pré-natal. O médico normalmente solicita exames de sangue (hemograma, tipagem sanguínea e fator Rh, glicemia, sorologias) e de urina, além de conversar sobre suplementação e histórico de saúde.",
    dicas:
      "Mantenha o ácido fólico em dia — é especialmente crítico nesta fase de formação do tubo neural. Priorize descanso, hidratação e refeições leves e frequentes se a náusea começar a incomodar. Evite exposição a produtos químicos fortes, raios-x sem proteção adequada e qualquer medicamento sem orientação médica.",
    faq: [
      {
        pergunta: "É normal ainda não sentir nenhum sintoma na 5ª semana?",
        resposta:
          "Sim, totalmente normal. Cada corpo reage num ritmo diferente aos hormônios da gravidez — algumas mulheres sentem sintomas fortes já nesta fase, outras só notam mudanças bem mais adiante, ou quase não sentem nada durante toda a gestação.",
      },
      {
        pergunta: "O coração do bebê já bate nesta semana?",
        resposta:
          "As primeiras contrações do tubo cardíaco costumam começar por volta do fim da 5ª semana ou início da 6ª, mas ainda são fracas e irregulares demais para serem detectadas num ultrassom comum — isso só costuma ser visível a partir de aproximadamente 6 semanas.",
      },
      {
        pergunta: "Por que o ácido fólico é tão importante justamente agora?",
        resposta:
          "Porque é exatamente nesta fase que o tubo neural — a estrutura que dará origem ao cérebro e à medula espinhal do bebê — está se formando e se fechando. A deficiência de ácido fólico nesse período está associada a um risco maior de defeitos do tubo neural, como a espinha bífida.",
      },
    ],
  },
  {
    numero: 6,
    trimestre: 1,
    tamanho: "do tamanho de uma lentilha, com cerca de 5 a 6 mm",
    resumo:
      "A 6ª semana costuma trazer uma das primeiras emoções marcantes da gravidez: é frequentemente quando os batimentos cardíacos do embrião podem ser detectados pela primeira vez num ultrassom.",
    desenvolvimentoBebe:
      "O coração, que começou a se formar há pouco, já bate de forma mais regular — em geral entre 100 e 160 batimentos por minuto nesta fase, embora ainda varie bastante semana a semana. Pequenos brotos que vão se tornar braços e pernas começam a aparecer nas laterais do corpo. Os primeiros sinais dos olhos e das orelhas também surgem, como pequenos pontos escuros e reentrâncias na região da cabeça, que ainda é desproporcionalmente grande em relação ao resto do corpo.",
    mudancasMae:
      "As náuseas (o chamado enjoo matinal, que na prática pode acontecer a qualquer hora do dia) costumam se intensificar nesta semana para quem já as sentia, ou começar agora para quem ainda não tinha sintomas. Fadiga, sensibilidade nas mamas e mudanças de humor também são comuns. O útero começa a crescer, mas ainda não é perceptível por fora.",
    exames:
      "Muitos médicos agendam o primeiro ultrassom por volta desta semana, justamente para tentar visualizar os batimentos cardíacos e confirmar que a gestação está no local certo (dentro do útero, descartando gravidez ectópica). Caso ainda não tenham sido pedidos, os exames de sangue de rotina do primeiro trimestre também costumam ser solicitados agora.",
    dicas:
      "Para lidar com a náusea, experimente comer pequenas porções ao longo do dia, evitar ficar de estômago vazio por muito tempo e testar alimentos secos (como torradas) pela manhã. Gengibre, em chá ou balas, ajuda algumas mulheres. Se os vômitos forem muito frequentes e impedirem a hidratação, é importante avisar o médico.",
    faq: [
      {
        pergunta: "E se o ultrassom desta semana não mostrar os batimentos cardíacos?",
        resposta:
          "Não é motivo imediato de pânico. A margem de erro na estimativa da idade gestacional pode ser de vários dias, especialmente se a data da última menstruação não é totalmente precisa. Nesses casos, o médico costuma pedir para repetir o exame em 1 a 2 semanas antes de tirar qualquer conclusão.",
      },
      {
        pergunta: "É normal a náusea piorar tanto nesta semana?",
        resposta:
          "Sim, é uma das semanas em que os hormônios da gravidez (especialmente o hCG) costumam atingir níveis bem altos, o que está associado ao pico das náuseas para muitas mulheres. Na maioria dos casos, os sintomas tendem a melhorar gradualmente ao longo do primeiro trimestre.",
      },
      {
        pergunta: "Dá para saber se é gravidez de gêmeos no ultrassom desta semana?",
        resposta:
          "Sim, geralmente já é possível identificar mais de um saco gestacional ou embrião no ultrassom desta fase, embora a confirmação definitiva do número de bebês e de placentas costume ficar mais clara nas semanas seguintes.",
      },
    ],
  },
  {
    numero: 7,
    trimestre: 1,
    tamanho: "do tamanho de um mirtilo (blueberry), com cerca de 1 cm",
    resumo:
      "Na 7ª semana, o cérebro do embrião se desenvolve num ritmo impressionante, e os braços e pernas — ainda pequenos brotos — começam a se alongar e a mostrar as primeiras divisões que mais tarde formarão cotovelos, punhos e joelhos.",
    desenvolvimentoBebe:
      "O cérebro cresce tão rápido que a cabeça, proporcionalmente, é a maior parte do corpo do embrião nesta fase. Os brotos dos braços começam a se dividir em regiões que originarão o ombro, o cotovelo e o pulso; os brotos das pernas seguem um pouco atrás em desenvolvimento. Os olhos, ainda sem pálpebras, já têm pigmentação inicial visível, e pequenas narinas começam a se formar no rosto. O intestino, ainda em formação, temporariamente se projeta para dentro do cordão umbilical.",
    mudancasMae:
      "Os sintomas do primeiro trimestre tendem a continuar ou se intensificar: náusea, fadiga, sensibilidade nas mamas e maior necessidade de urinar. Algumas mulheres notam também azia leve e maior sensibilidade emocional. O útero, do tamanho aproximado de um limão nesta fase, ainda não altera visivelmente o formato da barriga.",
    exames:
      "Se o primeiro ultrassom ainda não foi feito, esta é uma semana comum para realizá-lo, já com boas chances de identificar os batimentos cardíacos com clareza. É também um bom momento para tirar dúvidas com o obstetra sobre a rotina de exames das próximas semanas.",
    dicas:
      "Continue priorizando pequenas refeições frequentes e hidratação para lidar com a náusea. Sapatos confortáveis e pausas para descanso ajudam com o cansaço. Evite ficar muito tempo em pé ou exposta a calor excessivo, que pode intensificar o mal-estar em algumas gestantes.",
    faq: [
      {
        pergunta: "É normal sentir cólicas leves na 7ª semana?",
        resposta:
          "Cólicas leves e ocasionais, parecidas com as pré-menstruais, podem ser normais, causadas pelo crescimento do útero. Porém, cólicas fortes, constantes ou acompanhadas de sangramento intenso merecem avaliação médica o quanto antes.",
      },
      {
        pergunta: "O enjoo pode causar perda de peso nesta fase?",
        resposta:
          "Uma perda de peso pequena no início da gravidez, por causa da náusea, é relativamente comum e geralmente não é motivo de preocupação. Se os vômitos forem muito frequentes e a perda de peso for significativa, é importante conversar com o médico para descartar hiperêmese gravídica.",
      },
      {
        pergunta: "Com 7 semanas, o tamanho do útero já corresponde a quê?",
        resposta:
          "Nesta fase, o útero costuma ter aproximadamente o tamanho de um limão — um crescimento perceptível em exame ginecológico, mas ainda pequeno demais para alterar visivelmente o formato da barriga por fora.",
      },
    ],
  },
  {
    numero: 9,
    trimestre: 1,
    tamanho: "do tamanho de uma uva, com cerca de 2,3 cm",
    resumo:
      "Na 9ª semana, o embrião já começa a parecer mais reconhecidamente humano: a cauda embrionária desaparece, os dedos das mãos e dos pés começam a se separar, e o coração já está dividido nas quatro câmaras que terá pelo resto da vida.",
    desenvolvimentoBebe:
      "As mãos e os pés, que antes eram como pás com uma leve palmatória entre os dedos, começam a mostrar dedos individuais, ainda unidos por uma fina membrana que vai se dissolvendo nas semanas seguintes. A cauda embrionária, presente nas semanas anteriores, praticamente desaparece. As pálpebras começam a se formar e a cobrir parcialmente os olhos. Órgãos essenciais como fígado, rins e intestinos continuam amadurecendo, e os primeiros movimentos musculares espontâneos podem começar, embora ainda imperceptíveis para a mãe.",
    mudancasMae:
      "Os sintomas do primeiro trimestre costumam continuar: náusea, fadiga, sensibilidade nas mamas e uma sensibilidade emocional maior que o normal. Algumas mulheres começam a notar que as roupas mais justas na cintura já incomodam um pouco, mesmo sem uma barriga visível — mais por inchaço abdominal do que pelo crescimento do útero em si.",
    exames:
      "Dependendo do protocolo do seu obstetra, este pode ser o período da consulta de pré-natal com revisão dos exames de sangue e urina já solicitados. Também é um momento em que alguns médicos começam a discutir a triagem do primeiro trimestre (incluindo exames como o NIPT, disponível a partir de aproximadamente 10 semanas).",
    dicas:
      "Continue com a suplementação recomendada pelo médico (ácido fólico, e possivelmente outras vitaminas). Uma alimentação equilibrada, mesmo em pequenas porções, ajuda tanto com a náusea quanto com a energia. Se ainda não começou, esse também é um bom momento para pesquisar maternidades e planos de acompanhamento pré-natal, sem pressa.",
    faq: [
      {
        pergunta: "Quando os dedos das mãos e dos pés ficam completamente separados?",
        resposta:
          "O processo começa por volta da 9ª semana e costuma se completar entre a 12ª e a 14ª semana, quando a membrana entre os dedos termina de se dissolver.",
      },
      {
        pergunta: "O bebê já se mexe na 9ª semana?",
        resposta:
          "Sim, já ocorrem os primeiros movimentos musculares espontâneos, mas eles são pequenos e coordenados apenas por reflexos simples do sistema nervoso em formação — a mãe só costuma sentir os primeiros movimentos entre a 16ª e a 25ª semana, dependendo se é a primeira gravidez ou não.",
      },
      {
        pergunta: "O coração com quatro câmaras significa que ele já bate como o de um adulto?",
        resposta:
          "A estrutura já está completa, mas o ritmo é bem diferente: nesta fase o coração fetal costuma bater entre 140 e 170 vezes por minuto, bem mais rápido que o de um adulto em repouso (60 a 100 bpm).",
      },
    ],
  },
  {
    numero: 10,
    trimestre: 1,
    tamanho: "do tamanho de um morango grande (ou kumquat), com cerca de 3,1 cm",
    resumo:
      "A 10ª semana marca uma transição importante: em muitas classificações médicas, é a partir daqui que o embrião passa a ser chamado de feto, já que a fase mais crítica da formação dos órgãos está praticamente completa.",
    desenvolvimentoBebe:
      "Todos os órgãos vitais já se formaram em sua estrutura básica e começam a amadurecer e a assumir suas funções. As unhas começam a se formar nos dedos das mãos, e os primeiros folículos capilares aparecem no couro cabeludo. O feto já consegue abrir e fechar levemente a boca, e as articulações dos cotovelos e joelhos já permitem alguma flexão. A partir desta semana, o risco de aborto espontâneo cai de forma significativa em comparação com as semanas anteriores.",
    mudancasMae:
      "Muitas mulheres começam a notar, a partir de agora, uma leve melhora gradual das náuseas nas semanas seguintes, embora isso varie bastante de gestação para gestação. O útero, do tamanho aproximado de uma toranja, ainda cabe dentro da pelve, mas o abdômen pode começar a parecer discretamente mais inchado.",
    exames:
      "A partir de aproximadamente 10 semanas, exames de triagem não invasivos como o NIPT (teste pré-natal não invasivo, que analisa DNA fetal no sangue materno) já podem ser realizados, caso o médico e a gestante optem por investigar risco de alterações cromossômicas. O ultrassom morfológico do primeiro trimestre, que avalia a translucência nucal, costuma ser agendado entre 11 e 14 semanas.",
    dicas:
      "Continue com os cuidados já estabelecidos: alimentação equilibrada, hidratação, suplementação prescrita e evitar álcool, cigarro e alimentos de risco. Se a náusea ainda for intensa, vale conversar com o médico sobre opções seguras de alívio, já que cada gestação responde de um jeito.",
    faq: [
      {
        pergunta: "Por que o bebê passa a ser chamado de 'feto' agora?",
        resposta:
          "Porque a fase embrionária — quando se formam as estruturas básicas de todos os órgãos — está praticamente completa. A partir daqui, o desenvolvimento é principalmente de crescimento e amadurecimento das estruturas já formadas, e não mais de formação de novos órgãos.",
      },
      {
        pergunta: "O risco de aborto espontâneo realmente diminui muito na 10ª semana?",
        resposta:
          "Sim, estatisticamente. A maior parte dos abortos espontâneos acontece antes da 10ª semana, frequentemente ligados a alterações cromossômicas no embrião. Depois desse ponto, o risco cai de forma expressiva, embora nunca chegue a zero.",
      },
      {
        pergunta: "O que é avaliado no ultrassom de translucência nucal?",
        resposta:
          "Esse exame mede a espessura de uma região atrás do pescoço do feto. Junto com exames de sangue e a idade materna, ajuda a estimar o risco de algumas alterações cromossômicas, como a síndrome de Down. É um exame de rastreamento, não diagnóstico — resultados alterados costumam ser investigados com exames adicionais.",
      },
    ],
  },
  {
    numero: 8,
    trimestre: 1,
    tamanho: "do tamanho de uma framboesa, com cerca de 1,6 cm da cabeça às nádegas",
    resumo:
      "Na 8ª semana, o embrião está na reta final da fase mais delicada da formação: nas próximas semanas ele passará a ser chamado de feto. O coração já bate entre 150 e 170 vezes por minuto, quase o dobro do batimento de um adulto.",
    desenvolvimentoBebe:
      "Os braços e pernas, que até pouco tempo eram apenas pequenos brotos, já mostram cotovelos e a região onde os dedos das mãos e dos pés vão se formar. O rosto começa a ganhar contornos reconhecíveis: pálpebras, a ponta do nariz e o lábio superior estão se formando, e as orelhas internas já se desenvolvem, embora a audição só funcione bem mais adiante. Internamente, o cérebro produz cerca de 250 mil novos neurônios por minuto, e órgãos como o estômago, os rins e o fígado continuam amadurecendo. O embrião já se move espontaneamente dentro do saco gestacional, mas esses movimentos ainda são pequenos demais para serem sentidos pela mãe.",
    mudancasMae:
      "Essa costuma ser uma das semanas com sintomas mais intensos do primeiro trimestre. Náuseas (com ou sem enjoo matinal), fadiga acentuada, sensibilidade nas mamas e vontade de urinar com mais frequência são queixas comuns, causadas pelo aumento rápido dos hormônios hCG, estrogênio e progesterona. Também é normal notar mudanças de humor e um olfato mais sensível a cheiros fortes. A calcinha pode já não fechar tão bem — o útero está do tamanho aproximado de uma laranja pequena, ainda que a barriga geralmente não apareça por fora nesta fase.",
    exames:
      "É um período comum para a primeira consulta de pré-natal, quando ainda não foi feita. Nela, o médico costuma solicitar um ultrassom para confirmar a idade gestacional e verificar os batimentos cardíacos, além de exames de sangue de rotina (tipagem sanguínea, glicemia, sorologias como toxoplasmose, rubéola, HIV, sífilis e hepatites) e exame de urina. Se ainda não começou a tomar ácido fólico, esse é o momento de conversar com o médico sobre suplementação.",
    dicas:
      "Priorize refeições pequenas e frequentes para amenizar a náusea, e mantenha a hidratação em dia. Descansar sempre que possível ajuda a lidar com o cansaço, que tende a ser mais intenso agora. Evite álcool, cigarro e alimentos crus ou mal cozidos (carnes, ovos, peixes), e converse com seu médico antes de continuar ou iniciar qualquer atividade física.",
    faq: [
      {
        pergunta: "É normal não sentir nenhum sintoma na 8ª semana?",
        resposta:
          "Sim. A intensidade dos sintomas varia muito de gestação para gestação. Não sentir náusea ou outros incômodos não é sinal de problema — cada corpo reage de um jeito aos hormônios da gravidez.",
      },
      {
        pergunta: "Dá para saber o sexo do bebê com 8 semanas?",
        resposta:
          "Ainda não pelos métodos convencionais. Os órgãos genitais externos ainda estão em formação e só se diferenciam de forma visível ao ultrassom a partir de aproximadamente 14–16 semanas.",
      },
      {
        pergunta: "O útero já dá para sentir por fora nesta semana?",
        resposta:
          "Geralmente não. Nesta fase o útero ainda está contido na pelve, do tamanho aproximado de uma laranja pequena, e a barriga costuma só ficar visível por fora a partir do segundo trimestre.",
      },
    ],
  },
  {
    numero: 11,
    trimestre: 1,
    tamanho: "do tamanho de um figo, com cerca de 4,1 cm da cabeça às nádegas",
    resumo:
      "Na 11ª semana, praticamente todos os órgãos já existem em sua forma básica e a fase de formação mais delicada está ficando para trás. Daqui em diante, o foco do desenvolvimento passa a ser sobretudo crescimento e amadurecimento.",
    desenvolvimentoBebe:
      "Os dedos das mãos e dos pés já estão completamente separados, e as unhas continuam se formando. O feto já é capaz de soluçar e de fazer pequenos movimentos de sucção com a boca, embora a mãe ainda não sinta nada disso. Os brotos dos dentes de leite começam a se formar dentro das gengivas. Os órgãos genitais externos começam a se diferenciar entre masculino e feminino, mas ainda não são visíveis com clareza em ultrassom.",
    mudancasMae:
      "Para muitas mulheres, esta semana já traz os primeiros sinais de alívio da náusea, embora isso varie bastante — outras ainda sentem os sintomas com força. O útero, que já cresceu bastante, começa a sair da cavidade pélvica, o que pode aliviar um pouco a pressão sobre a bexiga.",
    exames:
      "Esta é uma das semanas mais comuns para o exame de translucência nucal (geralmente realizado entre 11 e 14 semanas), que avalia o risco de alterações cromossômicas junto com exames de sangue específicos do primeiro trimestre.",
    dicas:
      "Se ainda não agendou o exame de translucência nucal, esse é o momento de fazê-lo — ele tem uma janela específica de tempo para ser confiável. Continue com a alimentação equilibrada e a suplementação recomendada pelo médico.",
    faq: [
      {
        pergunta: "É verdade que dá para saber o sexo do bebê com 11 semanas?",
        resposta:
          "Ainda não com confiança pelo ultrassom convencional — os órgãos genitais externos estão se diferenciando, mas geralmente só ficam visíveis com clareza a partir de 14-16 semanas. Exames de sangue como o NIPT, por outro lado, já podem indicar o sexo com boa precisão a partir de aproximadamente 10 semanas.",
      },
      {
        pergunta: "O bebê já soluça nesta semana?",
        resposta:
          "Sim, é possível que o feto já apresente pequenos episódios de soluço, ligados ao desenvolvimento do diafragma, embora isso ainda seja imperceptível para a mãe nesta fase.",
      },
    ],
  },
  {
    numero: 12,
    trimestre: 1,
    tamanho: "do tamanho de uma lima, com cerca de 5,4 cm da cabeça às nádegas",
    resumo:
      "A 12ª semana costuma marcar a reta final do primeiro trimestre. Os reflexos do feto estão cada vez mais ativos, e a medula óssea começa a assumir uma função importante: produzir células de defesa do corpo.",
    desenvolvimentoBebe:
      "Os dedos das mãos já conseguem se curvar levemente, e os reflexos de sucção e deglutição ficam mais coordenados. A medula óssea começa a produzir glóbulos brancos, importantes para o sistema imunológico. Os rins já produzem urina, que é liberada no líquido amniótico. O intestino, que temporariamente se projetava para dentro do cordão umbilical, termina de se recolher para dentro do abdômen nesta fase.",
    mudancasMae:
      "Para boa parte das gestantes, esta é uma semana de transição perceptível: a náusea começa a diminuir de intensidade, a energia começa a voltar aos poucos, e o risco de aborto espontâneo, já baixo desde a 10ª semana, continua caindo. Ainda assim, cada gestação tem seu próprio ritmo.",
    exames:
      "Caso o exame de translucência nucal ainda não tenha sido feito, esta é a última semana da janela recomendada para realizá-lo com boa confiabilidade (o período vai até aproximadamente 13 semanas e 6 dias).",
    dicas:
      "Aproveite a possível melhora dos sintomas para retomar (com liberação médica) atividades físicas leves, se ainda não fez isso. Continue a suplementação e a hidratação, e comece a pensar com calma na escolha da maternidade e do plano de acompanhamento, se ainda não decidiu.",
    faq: [
      {
        pergunta: "A barriga já aparece na 12ª semana?",
        resposta:
          "Em algumas mulheres, principalmente em gestações que não são a primeira, um leve arredondamento pode começar a aparecer. Na maioria dos casos, porém, a barriga só fica visivelmente maior a partir do segundo trimestre.",
      },
      {
        pergunta: "Por que os sintomas de náusea começam a melhorar por volta desta semana?",
        resposta:
          "Um dos motivos é que a placenta, que até aqui estava se formando, passa a assumir de forma mais completa a produção de hormônios que antes era feita pelo corpo lúteo no ovário — essa transição hormonal costuma coincidir com a melhora dos sintomas para muitas mulheres.",
      },
    ],
  },
  {
    numero: 13,
    trimestre: 1,
    tamanho: "do tamanho de uma vagem de ervilha (ou um limão pequeno), com cerca de 7,4 cm",
    resumo:
      "A 13ª semana fecha o primeiro trimestre. A placenta já está totalmente formada e funcional, e o feto começa a desenvolver características cada vez mais individuais, incluindo as primeiras impressões digitais.",
    desenvolvimentoBebe:
      "As pregas únicas da pele que formarão as impressões digitais já começam a aparecer nas pontas dos dedos. As cordas vocais começam a se formar, embora o feto não produza nenhum som audível (não há ar nos pulmões ainda). O baço começa a colaborar na produção de células sanguíneas. A cabeça, que até aqui era desproporcionalmente grande, começa lentamente a ficar mais proporcional ao restante do corpo conforme este cresce mais rápido.",
    mudancasMae:
      "Com o fim do primeiro trimestre, muitas mulheres sentem uma virada de energia perceptível nas próximas semanas. Pode haver ainda alguma sensibilidade nas mamas e leve inchaço abdominal, mas os sintomas mais intensos tendem a ficar para trás a partir daqui, para a maioria das gestações.",
    exames:
      "Esta é a última semana do primeiro trimestre — é comum que o obstetra faça uma consulta de fechamento dessa fase, revisando os resultados de todos os exames feitos até aqui (sangue, urina, translucência nucal) antes de entrar no ciclo de exames do segundo trimestre.",
    dicas:
      "É um bom momento para, com calma, começar a planejar a rotina do segundo trimestre: quando fazer o ultrassom morfológico, quando começar o curso de preparação para o parto (se pretende fazer um) e revisar o guarda-roupa, já que roupas mais confortáveis tendem a fazer falta em breve.",
    faq: [
      {
        pergunta: "O primeiro trimestre termina exatamente na semana 13?",
        resposta:
          "A divisão mais comum considera o primeiro trimestre até a 13ª semana (algumas classificações usam até a 12ª), o segundo da 14ª à 27ª, e o terceiro da 28ª em diante. São faixas aproximadas, não limites rígidos.",
      },
      {
        pergunta: "As impressões digitais do bebê já estão definidas nesta semana?",
        resposta:
          "Elas começam a se formar agora, mas o padrão único de cada impressão digital só fica completamente definido por volta da 24ª semana.",
      },
    ],
  },
  {
    numero: 14,
    trimestre: 2,
    tamanho: "do tamanho de um limão-siciliano, com cerca de 8,7 cm",
    resumo:
      "Bem-vinda ao segundo trimestre — para muitas gestantes, a fase mais confortável da gravidez começa agora, com a energia voltando e os enjoos ficando para trás.",
    desenvolvimentoBebe:
      "O feto já consegue franzir a testa, fazer careta e semicerrar os olhos, graças ao desenvolvimento dos músculos faciais. Uma fina penugem chamada lanugo começa a cobrir o corpo, ajudando a regular a temperatura mais adiante. Os rins já produzem urina de forma constante, e o pescoço se alonga, permitindo que a cabeça fique mais ereta em relação ao corpo.",
    mudancasMae:
      "É comum que a náusea desapareça quase completamente por volta desta semana, dando lugar a mais energia e apetite. O útero, que já saiu da pelve, pode começar a formar um leve volume visível na parte baixa do abdômen, especialmente em gestações que não são a primeira.",
    exames:
      "Geralmente não há um exame específico obrigatório nesta semana exata, mas o obstetra pode aproveitar a consulta de rotina para conversar sobre a agenda de exames do segundo trimestre, incluindo o ultrassom morfológico, geralmente marcado entre 18 e 22 semanas.",
    dicas:
      "Aproveite o possível retorno de energia para caminhar, se exercitar (com liberação médica) e organizar tarefas práticas. Também é um bom momento para começar a hidratar bem a pele da barriga e dos seios, já que o crescimento vai se acelerar nas próximas semanas.",
    faq: [
      {
        pergunta: "Por que o segundo trimestre é considerado o mais tranquilo?",
        resposta:
          "Porque, para a maioria das mulheres, é quando as náuseas e a fadiga extrema do início melhoram bastante, enquanto o desconforto físico do terceiro trimestre (barriga grande, falta de ar, inchaço) ainda não chegou. Não é uma regra para todas, mas é o padrão mais comum.",
      },
      {
        pergunta: "O que é o lanugo e ele permanece até o nascimento?",
        resposta:
          "É uma penugem fina e macia que cobre o corpo do feto a partir de agora, ajudando a proteger a pele e regular a temperatura. Na maioria dos bebês, ele começa a cair ainda dentro do útero, por volta do final da gravidez, embora alguns recém-nascidos ainda tenham um pouco de lanugo residual ao nascer.",
      },
    ],
  },
  {
    numero: 15,
    trimestre: 2,
    tamanho: "do tamanho de uma maçã, com cerca de 10,1 cm",
    resumo:
      "Na 15ª semana, os ossos do feto começam a acumular cálcio e a ficar mais firmes, um processo que já pode começar a ser observado em exames de imagem mais detalhados.",
    desenvolvimentoBebe:
      "Os ossos, que até aqui eram principalmente cartilagem flexível, começam o processo de ossificação (endurecimento). As pernas já são mais longas que os braços, proporção que vai se manter daqui em diante. As papilas gustativas continuam se formando, e o feto já é capaz de perceber luz através da parede abdominal, mesmo com as pálpebras ainda fechadas.",
    mudancasMae:
      "O útero continua subindo em direção ao umbigo, e para muitas mulheres a barriga começa a ficar mais evidente nesta fase. É comum sentir mais apetite, e algumas mulheres notam uma leve congestão nasal, causada pelo aumento do volume sanguíneo que afeta também os vasos do nariz.",
    exames:
      "Dependendo do protocolo do pré-natal, este pode ser o período de um novo exame de sangue de rotina, incluindo verificação de anemia, já que o volume de sangue da mãe está em expansão acelerada.",
    dicas:
      "Garanta uma boa ingestão de cálcio (leite e derivados, vegetais verde-escuros) e de ferro (carnes magras, leguminosas), já que as demandas do corpo por esses nutrientes aumentam nesta fase. Se a congestão nasal incomodar, soro fisiológico costuma ser uma opção segura.",
    faq: [
      {
        pergunta: "O bebê já consegue enxergar alguma coisa nesta semana?",
        resposta:
          "Não no sentido de 'ver imagens' — as pálpebras ainda estão fechadas —, mas os olhos já são sensíveis à luz e conseguem perceber claridade e escuridão através da parede abdominal e do útero.",
      },
      {
        pergunta: "É normal sentir mais congestão nasal na gravidez?",
        resposta:
          "Sim, é bastante comum, chamada de rinite gestacional. Acontece porque o aumento do volume sanguíneo e dos hormônios afeta também os vasos sanguíneos da mucosa nasal, causando inchaço leve. Costuma melhorar após o parto.",
      },
    ],
  },
  {
    numero: 16,
    trimestre: 2,
    tamanho: "do tamanho de um abacate, com cerca de 11,6 cm",
    resumo:
      "Na 16ª semana, o coração do feto já bombeia uma quantidade impressionante de sangue por dia, e os músculos faciais estão desenvolvidos o suficiente para as primeiras expressões, mesmo que ninguém ainda as veja.",
    desenvolvimentoBebe:
      "O coração já bombeia cerca de 25 litros de sangue por dia, sustentando o crescimento acelerado do corpo. Os músculos faciais permitem pequenas expressões, e os olhos, ainda fechados, já conseguem se mover lentamente. O esqueleto continua endurecendo, e a placenta está totalmente formada e funcional, assumindo por completo a nutrição e a troca de oxigênio do feto.",
    mudancasMae:
      "É por volta desta semana que muitas mulheres — principalmente as que já tiveram outra gravidez — começam a sentir os primeiros movimentos do bebê, uma sensação leve, às vezes descrita como borbulhas ou batidas de asa. Também é comum sentir uma dor leve e pontual do lado da barriga (dor do ligamento redondo), causada pelo estiramento dos ligamentos que sustentam o útero.",
    exames:
      "Consulta de rotina de pré-natal, com verificação de peso, pressão arterial e altura uterina. Dependendo do protocolo, exames de sangue complementares também podem ser solicitados nesta fase.",
    dicas:
      "Se sentir dor do ligamento redondo, mudar de posição devagar e evitar movimentos bruscos costuma ajudar. Preste atenção a qualquer sensação nova na barriga — pode ser o início dos primeiros movimentos do bebê, algo emocionante de acompanhar.",
    faq: [
      {
        pergunta: "Com quantas semanas normalmente se sente o bebê mexer pela primeira vez?",
        resposta:
          "Varia bastante: entre 16 e 20 semanas para quem já teve gravidez antes (que reconhece mais facilmente a sensação), e entre 18 e 25 semanas para a primeira gravidez. Não sentir nada ainda na 16ª semana é perfeitamente normal.",
      },
      {
        pergunta: "O que é a dor do ligamento redondo?",
        resposta:
          "É uma dor aguda e breve, geralmente de um lado da virilha ou da parte baixa da barriga, causada pelo estiramento dos ligamentos que sustentam o útero conforme ele cresce. É comum e geralmente inofensiva, mas dores muito intensas ou persistentes devem ser avaliadas pelo médico.",
      },
    ],
  },
  {
    numero: 17,
    trimestre: 2,
    tamanho: "do tamanho de uma pera, com cerca de 13 cm",
    resumo:
      "Na 17ª semana, o feto começa a acumular as primeiras camadas de gordura corporal, essenciais para a regulação de temperatura depois do nascimento, e o cordão umbilical continua ficando mais forte.",
    desenvolvimentoBebe:
      "Começam a se formar as primeiras camadas de gordura marrom, um tipo especial de gordura que ajudará o bebê a regular a própria temperatura após o parto. O esqueleto, antes majoritariamente cartilagem, continua o processo de transformação em osso. O cordão umbilical fica mais espesso e mais forte, preparado para sustentar a troca crescente de nutrientes.",
    mudancasMae:
      "O aumento do volume de sangue circulante pode causar tontura leve ao levantar rapidamente, então vale o cuidado de mudar de posição aos poucos. A barriga continua crescendo de forma mais visível, e algumas mulheres notam o início de estrias, causadas pelo estiramento da pele.",
    exames:
      "Consulta de rotina, com atenção especial ao ganho de peso e à pressão arterial. Caso ainda não tenha sido feito, este é um bom momento para conversar com o médico sobre o agendamento do ultrassom morfológico do segundo trimestre.",
    dicas:
      "Hidratar bem a pele da barriga, quadris e seios pode ajudar a manter a elasticidade, embora as estrias tenham forte componente genético e nem sempre sejam evitáveis. Levante-se devagar de posições sentadas ou deitadas para evitar tonturas.",
    faq: [
      {
        pergunta: "O que é a gordura marrom e por que ela é importante?",
        resposta:
          "É um tipo de gordura especializada em gerar calor, ajudando o recém-nascido a manter a temperatura corporal nos primeiros dias de vida, já que bebês ainda não conseguem tremer para se aquecer como adultos.",
      },
      {
        pergunta: "É normal sentir tontura na 17ª semana?",
        resposta:
          "Episódios leves e ocasionais são comuns, geralmente ligados a mudanças de posição ou à pressão arterial mais baixa típica do meio da gravidez. Tonturas frequentes, fortes ou acompanhadas de outros sintomas merecem avaliação médica.",
      },
    ],
  },
  {
    numero: 18,
    trimestre: 2,
    tamanho: "do tamanho de um pimentão, com cerca de 14,2 cm",
    resumo:
      "A 18ª semana costuma coincidir com a janela do ultrassom morfológico, um dos exames mais aguardados da gravidez — é quando muitos pais descobrem o sexo do bebê e recebem uma avaliação detalhada da anatomia fetal.",
    desenvolvimentoBebe:
      "As orelhas já estão na posição final na cabeça e começam a responder a sons mais altos vindos de fora do corpo da mãe. Se for uma menina, o útero e as trompas de Falópio já estão formados. O sistema nervoso começa a desenvolver a bainha de mielina, uma camada protetora ao redor dos nervos que acelera a transmissão de impulsos nervosos.",
    mudancasMae:
      "A barriga já costuma estar bem visível nesta fase, e o centro de gravidade do corpo começa a mudar, o que pode afetar o equilíbrio. Alguns desconfortos posturais, como dor lombar leve, começam a aparecer para algumas gestantes.",
    exames:
      "Esta é uma das semanas mais comuns para o ultrassom morfológico do segundo trimestre (a janela recomendada geralmente vai de 18 a 22 semanas), que avalia detalhadamente a anatomia do bebê — coração, cérebro, rins, membros — e permite, na maioria dos casos, identificar o sexo.",
    dicas:
      "Se for fazer o ultrassom morfológico nesta semana, uma boa noite de sono antes e chegar com a bexiga na condição recomendada pela clínica (varia conforme o equipamento) ajudam a ter boas imagens. Aproveite para anotar as perguntas que quiser fazer ao médico durante o exame.",
    faq: [
      {
        pergunta: "O ultrassom morfológico dói ou tem algum risco?",
        resposta:
          "Não. É um exame de imagem por ultrassom, sem radiação e sem desconforto além da pressão leve do aparelho sobre a barriga — o mesmo tipo de exame usado nos ultrassons de rotina, só que mais detalhado e demorado.",
      },
      {
        pergunta: "O bebê já ouve sons nesta semana?",
        resposta:
          "As orelhas já estão posicionadas e o sistema auditivo está avançando, mas a percepção mais nítida de sons, incluindo a voz da mãe, costuma se desenvolver mais claramente a partir de aproximadamente 24 a 26 semanas.",
      },
    ],
  },
  {
    numero: 19,
    trimestre: 2,
    tamanho: "do tamanho de um manga, com cerca de 15,3 cm",
    resumo:
      "Na 19ª semana, a pele do feto ganha uma camada protetora especial (o vérnix caseoso), e o cérebro começa a desenvolver áreas especializadas para cada um dos cinco sentidos.",
    desenvolvimentoBebe:
      "Uma substância branca e cerosa chamada vérnix caseoso começa a cobrir a pele, protegendo-a do contato prolongado com o líquido amniótico. No cérebro, áreas especializadas para olfato, paladar, audição, visão e tato estão se desenvolvendo ativamente. Os braços e as pernas já atingiram proporções mais parecidas com as que terão ao nascer.",
    mudancasMae:
      "É comum que os primeiros movimentos do bebê, se ainda não foram percebidos, comecem a ser sentidos por volta desta semana, especialmente na primeira gravidez. O útero já está na altura do umbigo, e o crescimento da barriga costuma ser bem perceptível para quem convive com a gestante.",
    exames:
      "Consulta de rotina, com medição da altura uterina (que passa a ser acompanhada a cada consulta a partir de agora, como forma de monitorar o crescimento do bebê) e verificação dos batimentos cardíacos fetais.",
    dicas:
      "Comece a prestar atenção aos padrões de movimento do bebê, mesmo que ainda sutis — isso ajuda a criar familiaridade para notar mudanças mais adiante. Dormir de lado, especialmente do lado esquerdo, tende a ficar mais confortável e é geralmente recomendado a partir desta fase.",
    faq: [
      {
        pergunta: "O que é o vérnix caseoso?",
        resposta:
          "É uma substância esbranquiçada e cerosa que cobre a pele do feto, protegendo-a de ressecar por ficar em contato prolongado com o líquido amniótico. Parte dela costuma ainda estar presente na pele do bebê ao nascer, especialmente em partos antes do termo.",
      },
      {
        pergunta: "Por que dormir de lado é recomendado a partir desta fase?",
        resposta:
          "Porque, conforme o útero cresce, deitar de barriga para cima por longos períodos pode comprimir uma veia importante (veia cava inferior), reduzindo o retorno de sangue ao coração. Dormir de lado, principalmente o esquerdo, ajuda a manter a circulação mais eficiente para mãe e bebê.",
      },
    ],
  },
  {
    numero: 20,
    trimestre: 2,
    tamanho: "do tamanho de uma banana, com cerca de 25,6 cm da cabeça aos pés",
    resumo:
      "A 20ª semana marca a metade da gravidez na contagem tradicional de 40 semanas — um marco simbólico importante, que costuma coincidir com a janela final do ultrassom morfológico detalhado.",
    desenvolvimentoBebe:
      "A partir desta semana, é comum medir o bebê da cabeça aos pés (e não mais só da cabeça às nádegas), já que as pernas já se esticam mais. O feto engole quantidades maiores de líquido amniótico, o que ajuda no desenvolvimento do sistema digestivo, e começa a produzir mecônio, a primeira 'evacuação' que normalmente só será eliminada após o nascimento. Os cabelos começam a crescer no couro cabeludo.",
    mudancasMae:
      "O útero atinge a altura do umbigo por volta desta semana, e a barriga costuma estar claramente visível para todos ao redor. Os movimentos do bebê tendem a ficar mais frequentes e reconhecíveis. Também é comum notar mais apetite e, às vezes, os primeiros sinais de azia, conforme o útero pressiona levemente o estômago.",
    exames:
      "Se ainda não foi feito, este costuma ser o limite da janela recomendada para o ultrassom morfológico do segundo trimestre, um dos exames mais completos da gestação, avaliando detalhadamente todos os órgãos e estruturas do bebê.",
    dicas:
      "Aproveite a metade da gravidez para revisar com o médico como está o ganho de peso, a alimentação e a rotina de exercícios. Se a azia começar a incomodar, refeições menores e evitar deitar logo após comer costumam ajudar.",
    faq: [
      {
        pergunta: "20 semanas é realmente a metade da gravidez?",
        resposta:
          "Na contagem tradicional de 40 semanas a partir da DUM, sim — 20 semanas é exatamente a metade. Vale lembrar que a gestação a termo é considerada entre 37 e 42 semanas, então o 'meio' real pode variar um pouco dependendo de quando o parto efetivamente acontecer.",
      },
      {
        pergunta: "Por que o mecônio se forma agora, se só sai depois do parto?",
        resposta:
          "O mecônio é composto por células descamadas, líquido amniótico engolido e outras substâncias digestivas, e vai se acumulando no intestino do bebê ao longo da gestação. Normalmente ele só é eliminado após o nascimento, embora em algumas situações possa ser eliminado ainda dentro do útero, o que o médico avalia no momento do parto.",
      },
    ],
  },
  {
    numero: 21,
    trimestre: 2,
    tamanho: "do tamanho de uma cenoura grande, com cerca de 26,7 cm da cabeça aos pés",
    resumo:
      "Na 21ª semana, o bebê engole mais líquido amniótico, o que ajuda a treinar o sistema digestivo, e os movimentos ficam mais fortes e coordenados — muitas mães já sentem chutes com clareza.",
    desenvolvimentoBebe:
      "O sistema digestivo continua amadurecendo com a prática de engolir e processar o líquido amniótico. A medula óssea passa a assumir cada vez mais a produção de células sanguíneas, função que antes era compartilhada com o fígado e o baço. Os movimentos, antes suaves, ganham força e coordenação, com o bebê já esticando braços e pernas de forma mais deliberada.",
    mudancasMae:
      "Os movimentos do bebê tendem a ficar mais frequentes e reconhecíveis nesta fase, e muitas mulheres já conseguem identificar padrões, como horários em que ele costuma se mexer mais. O apetite geralmente aumenta, e o ganho de peso costuma se tornar mais constante a partir de agora.",
    exames:
      "Consulta de rotina, com medição da altura uterina e ausculta dos batimentos cardíacos. Caso o ultrassom morfológico ainda não tenha sido feito na janela ideal, o médico pode reagendar para garantir a avaliação completa da anatomia fetal.",
    dicas:
      "Comece a prestar atenção nos padrões de movimento do bebê — isso ajuda a notar, mais adiante, qualquer mudança que mereça atenção. Continue com uma alimentação rica em ferro e cálcio, já que as demandas nutricionais seguem aumentando.",
    faq: [
      {
        pergunta: "É normal o bebê ter horários preferidos para se mexer?",
        resposta:
          "Sim, muitos bebês desenvolvem um padrão de sono e atividade já dentro do útero, sendo comum ficarem mais ativos à noite, quando a mãe está mais quieta e relaxada, tornando os movimentos mais perceptíveis.",
      },
      {
        pergunta: "O bebê já sente gosto do que a mãe come?",
        resposta:
          "As papilas gustativas já estão formadas, e o líquido amniótico carrega traços dos sabores da alimentação da mãe. Alguns estudos sugerem que essa exposição precoce a sabores pode influenciar preferências alimentares do bebê mais adiante.",
      },
    ],
  },
  {
    numero: 22,
    trimestre: 2,
    tamanho: "do tamanho de um mamão papaia, com cerca de 27,8 cm da cabeça aos pés",
    resumo:
      "Na 22ª semana, os traços do rosto do bebê já estão praticamente todos definidos: sobrancelhas, pálpebras e lábios ganham contornos nítidos, e o sentido do tato continua se refinando.",
    desenvolvimentoBebe:
      "Sobrancelhas e pálpebras estão completamente formadas, e os lábios ficam mais definidos. Pequenos brotos dos dentes permanentes começam a se formar por baixo dos brotos dos dentes de leite, nas gengivas. O sentido do tato se desenvolve o suficiente para o bebê explorar o próprio rosto e segurar o cordão umbilical com as mãozinhas.",
    mudancasMae:
      "O crescimento da barriga costuma continuar de forma constante, e algumas mulheres começam a notar a chamada linha nigra, uma linha escura vertical que pode aparecer no meio do abdômen, causada por alterações hormonais na pigmentação da pele. Dores lombares leves também podem começar a aparecer.",
    exames:
      "Consulta de rotina, com atenção ao peso, pressão arterial e batimentos cardíacos fetais. Este também costuma ser um bom momento para o médico revisar com a gestante o calendário de exames até o final da gestação.",
    dicas:
      "Se notar a linha nigra ou manchas na pele (melasma), saiba que costumam ser temporárias e tendem a clarear após o parto. Usar protetor solar no rosto pode ajudar a reduzir o escurecimento de manchas relacionadas à exposição solar durante a gravidez.",
    faq: [
      {
        pergunta: "A linha nigra desaparece depois do parto?",
        resposta:
          "Na maioria dos casos, sim — ela costuma clarear gradualmente nos meses seguintes ao parto, embora em algumas mulheres um traço mais sutil possa permanecer por mais tempo.",
      },
      {
        pergunta: "O bebê já consegue segurar o cordão umbilical de propósito?",
        resposta:
          "O sentido do tato já está desenvolvido o suficiente para que o bebê toque e segure o cordão como parte da exploração natural do próprio corpo e do ambiente ao redor, embora isso não tenha uma 'intenção' no sentido consciente como entendemos em uma criança maior.",
      },
    ],
  },
  {
    numero: 23,
    trimestre: 2,
    tamanho: "do tamanho de uma manga grande (ou toranja), com cerca de 28,9 cm da cabeça aos pés",
    resumo:
      "Na 23ª semana, os pulmões do bebê começam a produzir surfactante, uma substância essencial para permitir que os pulmões se expandam corretamente após o nascimento — um passo importante rumo à viabilidade fora do útero.",
    desenvolvimentoBebe:
      "Os vasos sanguíneos dos pulmões continuam se desenvolvendo, e as células pulmonares começam a produzir surfactante, substância que reduz a tensão superficial dentro dos pulmões e evita que eles colapsem ao respirar — ainda em quantidade insuficiente para sustentar uma respiração independente, mas o processo já começou. A audição continua se refinando, e o bebê já reage a sons mais altos vindos de fora do corpo da mãe.",
    mudancasMae:
      "É comum começar a notar contrações de treinamento (Braxton Hicks) nesta fase — endurecimentos leves e indolores da barriga, que preparam o útero para o trabalho de parto real, mas não indicam parto iminente. Estrias também podem começar a aparecer com mais frequência conforme a pele se estica.",
    exames:
      "Consulta de rotina, com medição da altura uterina, peso e pressão. Dependendo do protocolo, este pode ser o início da janela para o teste de tolerância à glicose, que rastreia diabetes gestacional (geralmente realizado entre 24 e 28 semanas).",
    dicas:
      "Se sentir as contrações de treinamento, hidratar-se bem e mudar de posição costuma aliviar. Elas geralmente são irregulares e não aumentam em intensidade — contrações regulares, dolorosas ou que aumentam de frequência merecem contato com o médico.",
    faq: [
      {
        pergunta: "As contrações de Braxton Hicks significam que o parto está próximo?",
        resposta:
          "Não necessariamente. Elas são contrações de treinamento normais, que podem começar já no segundo trimestre para algumas mulheres e ocorrem de forma irregular, sem abrir o colo do útero. O trabalho de parto real envolve contrações regulares e cada vez mais intensas.",
      },
      {
        pergunta: "O que é o surfactante pulmonar e por que ele é tão importante?",
        resposta:
          "É uma substância que reveste o interior dos pulmões e impede que os alvéolos (pequenos sacos de ar) colabem durante a respiração. Sem surfactante suficiente, um bebê que nasce muito prematuro tem dificuldade para respirar por conta própria — por isso sua produção, que começa por volta desta semana, é um marco importante.",
      },
    ],
  },
  {
    numero: 24,
    trimestre: 2,
    tamanho: "do tamanho de uma espiga de milho, com cerca de 30 cm da cabeça aos pés",
    resumo:
      "A 24ª semana costuma ser citada como um marco de viabilidade: com cuidados médicos intensivos, bebês nascidos a partir deste ponto já têm alguma chance de sobrevivência fora do útero, embora o ideal seja sempre completar a gestação.",
    desenvolvimentoBebe:
      "O rosto do bebê já está completamente formado, faltando principalmente ganhar gordura e volume nas próximas semanas. Os pulmões continuam amadurecendo e produzindo surfactante em quantidade crescente. A pele ainda é fina e enrugada, com aparência avermelhada devido aos vasos sanguíneos visíveis por baixo dela.",
    mudancasMae:
      "É comum sentir mais cansaço a partir desta fase, junto com dores nas costas e pernas conforme o peso do bebê aumenta. O teste de tolerância à glicose para rastrear diabetes gestacional costuma ser realizado por volta desta semana, caso ainda não tenha sido feito.",
    exames:
      "Teste oral de tolerância à glicose (curva glicêmica), geralmente realizado entre 24 e 28 semanas, para rastrear diabetes gestacional. Consulta de rotina com verificação de peso, pressão e altura uterina.",
    dicas:
      "Para o teste de glicose, siga as orientações de jejum e preparo passadas pelo laboratório. Continue com pausas para descanso ao longo do dia e evite ficar muito tempo na mesma posição, seja sentada ou em pé.",
    faq: [
      {
        pergunta: "O que significa exatamente 'viabilidade' na 24ª semana?",
        resposta:
          "Significa que, em caso de parto muito prematuro a partir deste ponto, com suporte médico intensivo em UTI neonatal, existe alguma chance real de sobrevivência do bebê — chance que aumenta consideravelmente a cada semana adicional de gestação. Não é, de forma alguma, um objetivo a se buscar; o ideal é sempre seguir até o mais próximo possível do termo.",
      },
      {
        pergunta: "O teste de glicose é obrigatório?",
        resposta:
          "É fortemente recomendado como parte do pré-natal de rotina, já que o diabetes gestacional muitas vezes não apresenta sintomas claros, mas pode afetar tanto a mãe quanto o bebê se não for identificado e tratado. Converse com seu médico sobre a importância desse rastreamento na sua gestação.",
      },
    ],
  },
  {
    numero: 25,
    trimestre: 2,
    tamanho: "do tamanho de uma couve-flor, com cerca de 34,6 cm da cabeça aos pés",
    resumo:
      "Na 25ª semana, o bebê começa a ganhar mais gordura sob a pele, o que deixa a aparência menos enrugada e translúcida, e as narinas, que até aqui estavam tampadas, começam a se abrir.",
    desenvolvimentoBebe:
      "A gordura corporal continua se acumulando sob a pele, o que gradualmente deixa a aparência do bebê mais preenchida e menos transparente. As narinas, antes tampadas por um tecido temporário, começam a se abrir, embora a respiração pelo nariz só comece de verdade após o nascimento. Os cabelos, quando presentes, começam a mostrar cor e textura, embora ambas ainda possam mudar bastante depois do nascimento. As mãos já são totalmente funcionais, e o bebê consegue fechar os punhos.",
    mudancasMae:
      "O útero já está bem acima do umbigo, e o ganho de peso costuma se tornar mais evidente. Cãibras nas pernas, especialmente à noite, são queixas comuns nesta fase, assim como um leve inchaço nos pés e tornozelos ao final do dia.",
    exames:
      "Consulta de rotina, com atenção especial à pressão arterial (para rastrear sinais precoces de pré-eclâmpsia) e ao ganho de peso. Caso o teste de glicose ainda não tenha sido feito, esta é uma das últimas semanas da janela recomendada.",
    dicas:
      "Para aliviar cãibras nas pernas, alongamentos leves antes de dormir e boa hidratação costumam ajudar. Elevar os pés durante o dia pode reduzir o inchaço. Sapatos confortáveis fazem cada vez mais diferença nesta fase.",
    faq: [
      {
        pergunta: "Por que as cãibras nas pernas são tão comuns nesta fase?",
        resposta:
          "As causas exatas não são totalmente claras, mas fatores como o peso extra, alterações na circulação e possíveis mudanças nos níveis de cálcio e magnésio são apontados como contribuintes. Alongamento, hidratação e, se necessário, suplementação orientada pelo médico costumam ajudar.",
      },
      {
        pergunta: "A cor do cabelo do bebê ao nascer é definitiva?",
        resposta:
          "Não necessariamente. É comum que bebês nasçam com uma cor e textura de cabelo que muda bastante nos primeiros meses ou anos de vida, então o que se vê no ultrassom ou ao nascer não é garantia da cor final.",
      },
    ],
  },
  {
    numero: 26,
    trimestre: 2,
    tamanho: "do tamanho de uma alface grande, com cerca de 35,6 cm da cabeça aos pés",
    resumo:
      "Na 26ª semana, os olhos do bebê começam a se abrir pela primeira vez — até aqui, ficavam fundidos e fechados — e ele já reage de forma mais perceptível a estímulos de luz e som.",
    desenvolvimentoBebe:
      "As pálpebras, fundidas desde o início da gestação, começam a se separar, permitindo que o bebê abra e feche os olhos. Os cílios já estão formados. Os pulmões continuam amadurecendo, produzindo cada vez mais surfactante. O bebê já responde a estímulos externos, podendo se mexer em resposta a sons altos ou súbitos.",
    mudancasMae:
      "É comum sentir mais dor nas costas conforme o centro de gravidade continua mudando. Para quem ainda não fez, esta é uma das últimas semanas recomendadas para o teste de tolerância à glicose. Algumas mulheres notam também um leve aumento do inchaço nas extremidades.",
    exames:
      "Se ainda não foi feito, é importante realizar o teste de tolerância à glicose nesta janela. Consulta de rotina com acompanhamento de peso, pressão arterial e batimentos cardíacos fetais.",
    dicas:
      "Boas posturas ao sentar e usar um travesseiro entre os joelhos ao dormir de lado podem aliviar a dor lombar. Aproveite para começar a pesquisar sobre planos de parto e cursos de preparação, se pretende fazer algum, já que o terceiro trimestre está próximo.",
    faq: [
      {
        pergunta: "O bebê consegue enxergar alguma coisa ao abrir os olhos dentro do útero?",
        resposta:
          "A visão ainda é muito limitada — dentro do útero há pouca luz, então o bebê consegue perceber principalmente variações de claridade e escuridão, não formas ou detalhes. A visão continua se desenvolvendo bastante após o nascimento.",
      },
      {
        pergunta: "É normal sentir o bebê reagir a barulhos altos?",
        resposta:
          "Sim, a partir desta fase a audição já está bem desenvolvida, e é comum o bebê se mexer em resposta a sons repentinos e altos, como um barulho de porta batendo ou uma buzina.",
      },
    ],
  },
  {
    numero: 27,
    trimestre: 2,
    tamanho: "do tamanho de uma couve-flor grande, com cerca de 36,6 cm da cabeça aos pés",
    resumo:
      "A 27ª semana fecha o segundo trimestre. O bebê já tem ciclos mais definidos de sono e vigília, e a retina dos olhos termina de se formar, completando as estruturas básicas necessárias para a percepção visual.",
    desenvolvimentoBebe:
      "As camadas da retina terminam de se formar, permitindo uma percepção mais completa de luz e sombra. O cérebro segue em um ritmo acelerado de crescimento, com o tecido cerebral se tornando cada vez mais complexo. É comum o bebê já ter soluços perceptíveis pela mãe, sentidos como pequenos espasmos rítmicos na barriga.",
    mudancasMae:
      "Com o fim do segundo trimestre, muitas gestantes sentem o corpo mudando de ritmo: o cansaço pode começar a voltar, e o tamanho da barriga passa a interferir mais na rotina, no sono e na respiração. É um bom momento para revisar com calma os planos para o terceiro trimestre.",
    exames:
      "Consulta de rotina, geralmente marcando a transição para consultas mais frequentes no terceiro trimestre (muitos protocolos passam a ser quinzenais a partir de 28 semanas). É um bom momento para tirar dúvidas sobre a reta final da gestação.",
    dicas:
      "Aproveite para organizar, aos poucos, a mala da maternidade e itens do enxoval, sem pressa. Se ainda não fez, considere pesquisar cursos de preparação para o parto, já que muitos são voltados justamente para o terceiro trimestre.",
    faq: [
      {
        pergunta: "Sentir soluços do bebê é normal e frequente?",
        resposta:
          "Sim, é bastante comum a partir desta fase, e para muitas mulheres esses episódios se tornam mais frequentes ao longo do terceiro trimestre. Costumam ser inofensivos e simplesmente refletem o desenvolvimento do diafragma do bebê.",
      },
      {
        pergunta: "Por que as consultas de pré-natal ficam mais frequentes a partir de agora?",
        resposta:
          "Porque o terceiro trimestre é quando o risco de algumas complicações (como pré-eclâmpsia) aumenta, e o acompanhamento mais próximo ajuda a identificar qualquer alteração precocemente, além de monitorar o crescimento e a posição do bebê conforme o parto se aproxima.",
      },
    ],
  },
  {
    numero: 28,
    trimestre: 3,
    tamanho: "do tamanho de uma berinjela, com cerca de 37,6 cm da cabeça aos pés",
    resumo:
      "Bem-vinda ao terceiro trimestre! A 28ª semana marca a reta final da gravidez, com o bebê já abrindo e fechando os olhos regularmente e o cérebro em pleno desenvolvimento acelerado.",
    desenvolvimentoBebe:
      "O bebê já consegue piscar, e alguns estudos sugerem que períodos parecidos com sono REM (a fase do sono associada a sonhos) já começam a aparecer nesta fase, embora não seja possível saber se há de fato algo parecido com sonhar. Os anticorpos da mãe continuam sendo transferidos pela placenta, fortalecendo o sistema imunológico do bebê para os primeiros meses após o nascimento.",
    mudancasMae:
      "É comum que o cansaço volte com mais força no terceiro trimestre, junto com dores nas costas mais frequentes. Se você tem fator Rh negativo, esta costuma ser a semana em que se aplica uma dose preventiva de imunoglobulina anti-D, caso indicado pelo médico.",
    exames:
      "A partir desta semana, muitos protocolos de pré-natal passam a agendar consultas quinzenais (a cada duas semanas) em vez de mensais. Gestantes com fator Rh negativo costumam receber a imunoglobulina anti-D nesta fase, se ainda não foi feita antes.",
    dicas:
      "Comece a prestar atenção aos movimentos do bebê de forma mais sistemática — alguns médicos recomendam contar os chutes diariamente a partir desta fase. Descanse sempre que possível e não hesite em pedir ajuda com tarefas mais pesadas do dia a dia.",
    faq: [
      {
        pergunta: "Por que as consultas passam a ser a cada duas semanas agora?",
        resposta:
          "Porque o terceiro trimestre é quando o acompanhamento mais frequente ajuda a monitorar de perto o crescimento do bebê, a posição, a pressão arterial da mãe e outros sinais que podem indicar a necessidade de intervenção mais cedo, se necessário.",
      },
      {
        pergunta: "O que é a imunoglobulina anti-D e quem precisa dela?",
        resposta:
          "É uma injeção preventiva indicada para gestantes com fator Rh negativo (quando o do bebê é desconhecido ou positivo), que evita que o corpo da mãe desenvolva anticorpos contra o sangue do bebê. Se você tem Rh negativo, seu médico vai orientar sobre a necessidade e o momento certo de aplicá-la.",
      },
    ],
  },
  {
    numero: 29,
    trimestre: 3,
    tamanho: "do tamanho de uma abóbora butternut, com cerca de 38,6 cm da cabeça aos pés",
    resumo:
      "Na 29ª semana, o cérebro do bebê continua crescendo em ritmo acelerado, os músculos e pulmões seguem amadurecendo, e a gordura acumulada já ajuda a regular melhor a própria temperatura.",
    desenvolvimentoBebe:
      "O cérebro segue em rápido desenvolvimento, formando cada vez mais conexões neurais. Os músculos e os pulmões continuam amadurecendo, se preparando gradualmente para a vida fora do útero. Os ossos já estão totalmente formados, mas ainda são macios e flexíveis — inclusive os ossos do crânio, que permanecem assim propositalmente até depois do parto, para facilitar a passagem pelo canal de parto.",
    mudancasMae:
      "Os movimentos do bebê tendem a ficar mais fortes e frequentes, e algumas gestantes começam a sentir falta de ar leve, conforme o útero pressiona o diafragma. Idas mais frequentes ao banheiro também costumam voltar, já que a bexiga tem cada vez menos espaço.",
    exames:
      "Consulta de rotina, com verificação de peso, pressão arterial, altura uterina e posição do bebê. O médico pode começar a perguntar sobre a frequência dos movimentos fetais percebidos pela mãe.",
    dicas:
      "Se a falta de ar incomodar, dormir com o tronco um pouco mais elevado (com travesseiros extras) pode ajudar. Continue com uma alimentação rica em ferro, já que a anemia é mais comum nesta fase devido ao aumento do volume sanguíneo.",
    faq: [
      {
        pergunta: "Por que os ossos do crânio do bebê permanecem moles até o nascimento?",
        resposta:
          "Essa flexibilidade permite que a cabeça do bebê se molde levemente ao passar pelo canal de parto, o que seria impossível se os ossos já estivessem completamente rígidos e fundidos. Eles continuam se fechando gradualmente nos primeiros meses e anos de vida.",
      },
      {
        pergunta: "É normal sentir falta de ar na 29ª semana?",
        resposta:
          "Uma falta de ar leve é comum, causada pelo útero pressionando o diafragma e pela maior demanda de oxigênio do corpo. Falta de ar súbita, intensa ou acompanhada de dor no peito, porém, deve ser avaliada por um médico imediatamente.",
      },
    ],
  },
  {
    numero: 30,
    trimestre: 3,
    tamanho: "do tamanho de um repolho grande, com cerca de 39,9 cm da cabeça aos pés",
    resumo:
      "Na 30ª semana, o cérebro do bebê ganha cada vez mais dobras e sulcos, aumentando sua área de superfície para acomodar o crescimento acelerado do tecido cerebral nas próximas semanas.",
    desenvolvimentoBebe:
      "A superfície do cérebro, antes lisa, começa a formar dobras e sulcos característicos, um processo que aumenta bastante a área disponível para o desenvolvimento neural sem precisar de um crânio proporcionalmente maior. A produção de glóbulos vermelhos, que vinha sendo compartilhada com o baço, passa a se concentrar cada vez mais na medula óssea. O líquido amniótico está próximo do seu volume máximo, e o espaço para o bebê se mexer começa a ficar mais restrito.",
    mudancasMae:
      "É comum sentir mais falta de ar e necessidade de urinar com frequência, já que o útero pressiona tanto o diafragma quanto a bexiga. Muitas mulheres começam, por volta desta fase, a considerar ou iniciar a licença-maternidade e a organizar os últimos preparativos antes do parto.",
    exames:
      "Consulta de rotina quinzenal, com acompanhamento de peso, pressão, altura uterina e posição do bebê. Alguns protocolos incluem uma nova avaliação de hemoglobina para rastrear anemia nesta fase.",
    dicas:
      "Como os movimentos do bebê podem ficar um pouco mais contidos pela falta de espaço (embora não devam parar ou diminuir muito), continue de olho no padrão de chutes e avise o médico se notar uma redução perceptível. Descansar com os pés elevados ajuda a aliviar o inchaço, cada vez mais comum nesta fase.",
    faq: [
      {
        pergunta: "É normal sentir menos espaço para os movimentos do bebê agora?",
        resposta:
          "Sim, conforme o bebê cresce e o espaço dentro do útero fica relativamente mais apertado, os movimentos podem mudar de caráter — menos giros amplos e mais chutes e cotoveladas. A frequência geral dos movimentos, porém, não deve diminuir de forma perceptível; qualquer redução clara vale uma ligação para o médico.",
      },
      {
        pergunta: "Por que o cérebro do bebê forma dobras e sulcos?",
        resposta:
          "As dobras (giros) e sulcos aumentam enormemente a área de superfície do córtex cerebral sem exigir um crânio muito maior — é a mesma razão pela qual o cérebro humano adulto tem essa aparência enrugada característica, diferente de um cérebro liso.",
      },
    ],
  },
  {
    numero: 31,
    trimestre: 3,
    tamanho: "do tamanho de um coco, com cerca de 41,1 cm da cabeça aos pés",
    resumo:
      "Na 31ª semana, o cérebro do bebê segue em desenvolvimento acelerado, formando novas conexões neurais a todo momento, enquanto o corpo continua acumulando a gordura que vai ajudar na regulação da temperatura após o nascimento.",
    desenvolvimentoBebe:
      "O cérebro está em uma das fases mais intensas de crescimento, com o número de conexões neurais aumentando rapidamente. Os órgãos, com exceção dos pulmões, já estão praticamente maduros. O bebê também já processa informações sensoriais com mais sofisticação, reagindo a luz, som e toque de forma mais coordenada.",
    mudancasMae:
      "É comum notar pequenos vazamentos de colostro (o primeiro leite, mais espesso e amarelado) nos seios a partir desta fase, embora isso não aconteça com todas as gestantes nem seja sinal de nada errado. O volume de líquido amniótico está próximo do máximo, e o espaço mais apertado pode deixar os movimentos do bebê mais perceptíveis, ainda que menos amplos.",
    exames:
      "Consulta de rotina quinzenal, com verificação de peso, pressão arterial e altura uterina. O médico costuma perguntar sobre a percepção dos movimentos fetais e pode discutir os primeiros sinais de trabalho de parto para você já ir se familiarizando.",
    dicas:
      "Se notar vazamento de colostro, protetores de seio (absorventes para amamentação) podem ajudar a manter o conforto. Aproveite para revisar o plano de parto com o médico e tirar dúvidas sobre o que esperar nas próximas semanas.",
    faq: [
      {
        pergunta: "É normal vazar colostro antes do parto?",
        resposta:
          "Sim, é bastante comum a partir do terceiro trimestre, embora nem toda gestante perceba isso antes do nascimento do bebê. Não indica nada sobre a produção futura de leite nem exige nenhuma ação especial, a não ser o uso de protetores de seio se o vazamento incomodar.",
      },
      {
        pergunta: "Os movimentos do bebê devem ficar mais fracos agora que há menos espaço?",
        resposta:
          "Os movimentos tendem a mudar de caráter (menos giros amplos, mais chutes e pressões), mas a frequência geral não deve diminuir de forma perceptível. Qualquer redução clara nos movimentos deve ser comunicada ao médico o quanto antes.",
      },
    ],
  },
  {
    numero: 32,
    trimestre: 3,
    tamanho: "do tamanho de uma jaca pequena, com cerca de 42,4 cm da cabeça aos pés",
    resumo:
      "Na 32ª semana, o bebê já pratica movimentos respiratórios regularmente e a maioria já está de cabeça para baixo, se posicionando para o parto, embora ainda haja tempo para virar até mais perto do fim da gestação.",
    desenvolvimentoBebe:
      "Os movimentos respiratórios de prática continuam ficando mais regulares, preparando os pulmões para a primeira respiração fora do útero. As unhas das mãos já chegaram até a ponta dos dedos, e por volta desta semana a maioria dos bebês já se posiciona de cabeça para baixo (posição cefálica), embora ainda seja comum mudar de posição algumas vezes antes do parto.",
    mudancasMae:
      "O peso extra e o centro de gravidade alterado podem deixar o equilíbrio um pouco mais instável, então cuidado redobrado com quedas é importante. Azia e indigestão tendem a se intensificar, já que o útero comprime cada vez mais o estômago.",
    exames:
      "Consulta de rotina, com avaliação da posição do bebê (cefálica, pélvica ou transversa), já que isso passa a ser um ponto de atenção crescente a partir de agora. Peso, pressão arterial e altura uterina continuam sendo checados normalmente.",
    dicas:
      "Refeições menores e mais frequentes, evitando deitar logo após comer, costumam ajudar a controlar a azia. Se o médico mencionar que o bebê está em posição pélvica (sentado), não se preocupe agora — ainda há tempo de sobra para ele virar antes do parto.",
    faq: [
      {
        pergunta: "Até quando o bebê pode virar de posição antes do parto?",
        resposta:
          "A maioria dos bebês em posição pélvica ainda vira espontaneamente até por volta da 36ª semana, então descobrir a posição agora não é motivo de preocupação. Caso ele continue sentado mais perto do fim da gestação, o médico vai discutir as opções disponíveis com você.",
      },
      {
        pergunta: "Por que a azia piora no terceiro trimestre?",
        resposta:
          "O útero maior pressiona o estômago para cima, e os hormônios da gravidez relaxam o músculo que normalmente impede o refluxo do ácido estomacal. A combinação dos dois fatores torna a azia mais frequente e intensa nesta fase.",
      },
    ],
  },
  {
    numero: 33,
    trimestre: 3,
    tamanho: "do tamanho de um abacaxi, com cerca de 43,7 cm da cabeça aos pés",
    resumo:
      "Na 33ª semana, o sistema imunológico do bebê continua recebendo anticorpos importantes da mãe, os ossos (com exceção dos do crânio) seguem endurecendo, e as pupilas já respondem à luz.",
    desenvolvimentoBebe:
      "A transferência de anticorpos maternos pela placenta continua a todo vapor, fortalecendo o sistema imunológico do bebê para os primeiros meses de vida. A maioria dos ossos já está mais rígida, exceto os do crânio, que permanecem flexíveis propositalmente. As pupilas já conseguem se dilatar e contrair em resposta à luz.",
    mudancasMae:
      "O volume de líquido amniótico está próximo do pico e deve começar a se estabilizar relativamente nas próximas semanas. Inchaço nos pés e tornozelos, dores lombares e dificuldade para encontrar posições confortáveis para dormir costumam se intensificar nesta fase.",
    exames:
      "Consulta de rotina quinzenal, com os acompanhamentos habituais de peso, pressão arterial e altura uterina. O médico pode começar a conversar sobre sinais de trabalho de parto e quando procurar a maternidade.",
    dicas:
      "Dormir de lado, com um travesseiro entre os joelhos, costuma aliviar a pressão na lombar. Se o inchaço for repentino e vier acompanhado de dor de cabeça forte ou alterações na visão, procure atendimento médico imediatamente, pois pode ser sinal de pré-eclâmpsia.",
    faq: [
      {
        pergunta: "É normal o inchaço piorar bastante nesta fase?",
        resposta:
          "Um inchaço leve a moderado nos pés e tornozelos, especialmente no fim do dia, é comum no terceiro trimestre. Já um inchaço repentino, principalmente no rosto e nas mãos, acompanhado de dor de cabeça ou alterações visuais, deve ser avaliado com urgência, pois pode indicar pré-eclâmpsia.",
      },
      {
        pergunta: "Por que os anticorpos da mãe são transferidos para o bebê?",
        resposta:
          "Essa transferência, chamada de imunidade passiva, ajuda a proteger o recém-nascido contra diversas infecções nos primeiros meses de vida, período em que o próprio sistema imunológico dele ainda está amadurecendo.",
      },
    ],
  },
  {
    numero: 34,
    trimestre: 3,
    tamanho: "do tamanho de um melão cantaloupe, com cerca de 45 cm da cabeça aos pés",
    resumo:
      "Na 34ª semana, os pulmões do bebê estão quase totalmente maduros, e bebês que nascem por volta desta fase costumam ter bons resultados, embora o ideal seja a gestação seguir até mais perto do termo.",
    desenvolvimentoBebe:
      "Os pulmões continuam amadurecendo rapidamente e já produzem quantidade significativa de surfactante, a substância que evita que os alvéolos colabem. O sistema nervoso central também segue amadurecendo. A vérnix caseosa (a camada esbranquiçada que protege a pele) e a lanugem (pelos finos) começam a diminuir.",
    mudancasMae:
      "A pressão na bexiga tende a aumentar ainda mais conforme o bebê desce um pouco em direção à pelve em algumas gestantes. Contrações de Braxton Hicks (contrações de treinamento, indolores ou pouco desconfortáveis) podem ficar mais frequentes e perceptíveis.",
    exames:
      "Consulta de rotina, com verificação da posição do bebê, peso, pressão arterial e altura uterina. Caso ainda não tenha sido feito, o médico pode agendar o exame de rastreamento para Estreptococo do Grupo B (GBS) para as próximas semanas.",
    dicas:
      "Aprenda a diferenciar contrações de treinamento (irregulares, que somem com repouso ou mudança de posição) de contrações de trabalho de parto (regulares, que aumentam em intensidade e frequência). Na dúvida, sempre vale ligar para o médico ou maternidade.",
    faq: [
      {
        pergunta: "Bebês que nascem com 34 semanas têm boas chances?",
        resposta:
          "Sim, de forma geral, bebês nascidos por volta desta fase (considerados prematuros tardios) costumam ter bons resultados, especialmente com o suporte neonatal adequado, embora ainda possam precisar de cuidados extras em relação à respiração e à temperatura corporal. Mesmo assim, o ideal é que a gestação continue o mais próximo possível do termo completo.",
      },
      {
        pergunta: "Como diferenciar contrações de treinamento das de trabalho de parto real?",
        resposta:
          "As contrações de Braxton Hicks costumam ser irregulares, não aumentam de intensidade e geralmente somem com repouso, hidratação ou mudança de posição. Contrações de trabalho de parto real tendem a ser regulares, ficam mais fortes e frequentes com o tempo e não passam com repouso.",
      },
    ],
  },
  {
    numero: 35,
    trimestre: 3,
    tamanho: "do tamanho de um melão honeydew, com cerca de 46,2 cm da cabeça aos pés",
    resumo:
      "Na 35ª semana, os rins do bebê já estão totalmente desenvolvidos e o fígado já processa alguns produtos residuais, enquanto o ganho de peso segue firme, com cerca de 250 g por semana nesta fase.",
    desenvolvimentoBebe:
      "Os rins já estão completamente desenvolvidos, e o fígado já processa alguns produtos residuais, embora a maior parte ainda seja eliminada pela placenta. O bebê continua ganhando peso rapidamente, cerca de 250 g por semana, e o espaço no útero fica cada vez mais restrito para movimentos amplos.",
    mudancasMae:
      "Entre a 35ª e a 37ª semana, é comum que o médico solicite o exame de rastreamento para Estreptococo do Grupo B (GBS), uma bactéria comum que geralmente não causa problemas para a mãe, mas que pode ser tratada com antibiótico durante o parto caso o resultado seja positivo, para proteger o bebê.",
    exames:
      "Exame de rastreamento para Estreptococo do Grupo B (GBS), coletado por swab vaginal e retal, geralmente realizado nesta janela entre 35 e 37 semanas. Consulta de rotina com os acompanhamentos habituais.",
    dicas:
      "Não se preocupe caso o resultado do GBS venha positivo — é uma situação comum e bem manejada com antibiótico durante o trabalho de parto. Continue de olho no padrão de movimentos do bebê e comunique ao médico qualquer redução perceptível.",
    faq: [
      {
        pergunta: "O que é o exame de Estreptococo do Grupo B (GBS) e por que é feito?",
        resposta:
          "É um exame que detecta a presença de uma bactéria comum na região vaginal e retal, que normalmente não causa problemas para a mãe, mas que pode ser transmitida ao bebê durante o parto. Quando o resultado é positivo, o antibiótico é administrado durante o trabalho de parto para proteger o recém-nascido.",
      },
      {
        pergunta: "É normal o bebê ganhar tanto peso nesta fase?",
        resposta:
          "Sim, o ganho de peso acelerado nas últimas semanas de gestação é esperado e importante, já que o bebê está acumulando a gordura que vai ajudar na regulação da temperatura corporal e fornecer reservas de energia após o nascimento.",
      },
    ],
  },
  {
    numero: 36,
    trimestre: 3,
    tamanho: "do tamanho de uma alface romana, com cerca de 47,4 cm da cabeça aos pés",
    resumo:
      "Na 36ª semana, os pulmões do bebê continuam amadurecendo e, em algumas gestantes, o bebê começa a 'descer' em direção à pelve, um processo chamado de encaixe, que pode trazer mais pressão, mas também mais facilidade para respirar.",
    desenvolvimentoBebe:
      "Os pulmões seguem amadurecendo, se aproximando da maturidade completa. A maioria dos outros órgãos já está pronta para a vida fora do útero. Em algumas gestantes, o bebê começa a se encaixar mais para baixo, na pelve, se preparando para o parto — processo às vezes chamado de 'aliviar' ou 'descer a barriga'.",
    mudancasMae:
      "Se o encaixe do bebê acontecer, é comum sentir mais pressão na pelve e mais vontade de urinar, mas, em compensação, pode ficar mais fácil respirar, já que a pressão sobre o diafragma diminui um pouco. A partir desta semana, muitos protocolos de pré-natal passam a agendar consultas semanais.",
    exames:
      "Consulta de rotina, geralmente marcando a transição para acompanhamento semanal até o parto. O médico verifica posição do bebê, encaixe, peso, pressão arterial e pode discutir o plano para o trabalho de parto.",
    dicas:
      "Se ainda não preparou a mala da maternidade, esta é uma boa semana para finalizar os preparativos, já que o parto pode acontecer a qualquer momento a partir de agora. Revise com o médico os sinais de trabalho de parto e quando procurar a maternidade.",
    faq: [
      {
        pergunta: "O que significa o bebê 'encaixar' ou 'descer' na pelve?",
        resposta:
          "É quando a cabeça do bebê (ou outra parte apresentada) se posiciona mais para baixo, dentro da pelve materna, se preparando para o parto. Isso pode aliviar a pressão sobre o diafragma e os pulmões, mas costuma aumentar a pressão sobre a bexiga.",
      },
      {
        pergunta: "Por que as consultas passam a ser semanais a partir de agora?",
        resposta:
          "Porque a reta final da gestação é quando o acompanhamento mais próximo ajuda a monitorar sinais de trabalho de parto, a posição do bebê, o colo do útero e o bem-estar geral da mãe e do bebê conforme o parto se aproxima.",
      },
    ],
  },
  {
    numero: 37,
    trimestre: 3,
    tamanho: "do tamanho de um maço de acelga, com cerca de 48,6 cm da cabeça aos pés",
    resumo:
      "A 37ª semana marca o início do chamado 'termo precoce' — o bebê já é considerado pronto para nascer, embora os últimos dias de gestação ainda tragam benefícios importantes para o amadurecimento dos pulmões e do cérebro.",
    desenvolvimentoBebe:
      "O bebê continua acumulando gordura e aperfeiçoando reflexos importantes, como o de sucção coordenada com a deglutição e a respiração, essencial para a amamentação logo após o nascimento. O reflexo de preensão (segurar objetos com força na mão) também já está bem desenvolvido.",
    mudancasMae:
      "É comum sentir mais pressão pélvica, cólicas leves e, para algumas mulheres, a perda do tampão mucoso (um sinal de que o colo do útero está começando a se preparar para o parto, embora o trabalho de parto ainda possa demorar dias ou até semanas para começar).",
    exames:
      "Consulta de rotina semanal, com verificação da dilatação e do apagamento do colo do útero em alguns protocolos, além dos acompanhamentos habituais de peso, pressão arterial e posição do bebê.",
    dicas:
      "Fique atenta aos sinais de trabalho de parto: contrações regulares que aumentam em intensidade, ruptura da bolsa (bolsa d'água) ou sangramento. Na dúvida sobre qualquer sintoma, ligue para o médico ou a maternidade — é sempre melhor perguntar do que esperar.",
    faq: [
      {
        pergunta: "O bebê já nasce 'pronto' a partir da 37ª semana?",
        resposta:
          "A 37ª semana marca o início do chamado 'termo precoce', quando o bebê já é considerado maduro o suficiente para nascer com boas chances de bons resultados. Ainda assim, cada semana adicional até o termo completo (a partir de 39 semanas) traz benefícios extras para o amadurecimento dos pulmões e do cérebro, quando não há indicação médica para o parto antes disso.",
      },
      {
        pergunta: "Perder o tampão mucoso significa que o parto vai começar logo?",
        resposta:
          "Não necessariamente. A perda do tampão mucoso é um sinal de que o colo do útero está se preparando, mas o trabalho de parto pode começar horas, dias ou até algumas semanas depois. Vale observar outros sinais, como contrações regulares, para saber quando procurar a maternidade.",
      },
    ],
  },
  {
    numero: 38,
    trimestre: 3,
    tamanho: "do tamanho de um alho-poró, com cerca de 49,8 cm da cabeça aos pés",
    resumo:
      "Na 38ª semana, o bebê se aproxima cada vez mais do termo completo, com o cérebro continuando seu rápido desenvolvimento e a maior parte da lanugem e da vérnix caseosa já tendo desaparecido.",
    desenvolvimentoBebe:
      "O cérebro continua se desenvolvendo rapidamente, embora ainda vá amadurecer bastante nos primeiros anos de vida após o nascimento. A maior parte da lanugem (pelos finos) e da vérnix caseosa (a camada protetora esbranquiçada) já foi eliminada, embora alguns bebês ainda nasçam com vestígios visíveis.",
    mudancasMae:
      "A ansiedade pela espera costuma aumentar nesta fase, junto com desconfortos físicos como dores pélvicas, dificuldade para dormir e cansaço. Contrações de treinamento podem ficar mais frequentes, às vezes dificultando saber se é hora de ir para a maternidade.",
    exames:
      "Consulta de rotina semanal, com os acompanhamentos habituais. O médico pode discutir com mais detalhes o plano para caso a gestação ultrapasse o termo completo sem sinais de trabalho de parto espontâneo.",
    dicas:
      "Tente manter a rotina o mais normal possível e descansar sempre que sentir necessidade — o corpo está se preparando para um esforço grande. Revisar o caminho até a maternidade e os documentos necessários pode trazer mais tranquilidade nesta reta final.",
    faq: [
      {
        pergunta: "É normal a ansiedade aumentar tanto nesta fase?",
        resposta:
          "Sim, é bastante comum sentir uma mistura de ansiedade e expectativa conforme a data provável do parto se aproxima. Conversar com o médico, a doula (se houver) ou pessoas de confiança sobre essas sensações pode ajudar bastante nesta reta final.",
      },
      {
        pergunta: "O bebê continua se desenvolvendo mesmo tão perto do parto?",
        resposta:
          "Sim, especialmente o cérebro, que segue em desenvolvimento acelerado até o nascimento e continuará amadurecendo intensamente nos primeiros anos de vida. Por isso, cada semana adicional de gestação, quando não há indicação médica para antecipar o parto, segue trazendo benefícios.",
      },
    ],
  },
  {
    numero: 39,
    trimestre: 3,
    tamanho: "do tamanho de uma minimelancia, com cerca de 50,7 cm da cabeça aos pés",
    resumo:
      "A 39ª semana marca o início do chamado 'termo completo' da gestação, quando o bebê é considerado plenamente desenvolvido e pronto para a vida fora do útero.",
    desenvolvimentoBebe:
      "O bebê é considerado a termo completo a partir desta semana, com todos os órgãos prontos para funcionar de forma independente. A maior parte da vérnix caseosa já foi eliminada, e a gordura acumulada nas últimas semanas ajuda na regulação da temperatura corporal após o nascimento.",
    mudancasMae:
      "A espera pode parecer interminável nesta fase, com desconfortos físicos variados e, para muitas mulheres, uma mistura de ansiedade e empolgação. Contrações de treinamento tendem a ficar mais frequentes e intensas, o que pode gerar dúvidas sobre quando é realmente hora de ir para a maternidade.",
    exames:
      "Consulta de rotina semanal, com verificação de peso, pressão arterial, posição do bebê e, em alguns protocolos, avaliação do colo do útero. O médico reforça os sinais de trabalho de parto a observar.",
    dicas:
      "Mantenha a calma e confie no processo — a grande maioria dos partos começa espontaneamente até a 41ª ou 42ª semana. Se tiver dúvida sobre se as contrações são reais ou de treinamento, cronometrar a frequência e a duração delas costuma ajudar a esclarecer, e ligar para a maternidade nunca é exagero.",
    faq: [
      {
        pergunta: "O que significa o bebê estar 'a termo completo'?",
        resposta:
          "É a classificação usada para gestações entre 39 semanas e 40 semanas e 6 dias, período em que o bebê é considerado plenamente maduro, com os menores riscos de complicações relacionadas à prematuridade ou a órgãos ainda não totalmente desenvolvidos.",
      },
      {
        pergunta: "É normal o parto não começar exatamente na data prevista?",
        resposta:
          "Sim, é extremamente normal. A data provável do parto é apenas uma estimativa, e a maioria dos bebês nasce em algum momento entre 1 a 2 semanas antes ou depois dessa data, sem que isso indique qualquer problema.",
      },
    ],
  },
  {
    numero: 40,
    trimestre: 3,
    tamanho: "do tamanho de uma pequena abóbora, com cerca de 51,2 cm da cabeça aos pés",
    resumo:
      "A 40ª semana é tradicionalmente conhecida como a 'data provável do parto', embora apenas uma pequena parte dos bebês nasça exatamente nesta semana — a maioria chega um pouco antes ou depois.",
    desenvolvimentoBebe:
      "O bebê está totalmente desenvolvido e pronto para nascer a qualquer momento. Os pulmões, o cérebro e os demais órgãos completaram seu amadurecimento essencial, embora o cérebro continue se desenvolvendo intensamente por anos após o nascimento.",
    mudancasMae:
      "A espera pela data provável do parto costuma ser um dos momentos mais ansiosos da gestação. É normal sentir uma mistura de impaciência, expectativa e até frustração caso o trabalho de parto ainda não tenha começado. Contrações de treinamento tendem a ser bem frequentes nesta fase.",
    exames:
      "Consulta de rotina, com avaliação detalhada do bem-estar do bebê caso a gestação se aproxime do fim sem sinais de trabalho de parto. O médico costuma conversar sobre os próximos passos caso a data prevista seja ultrapassada.",
    dicas:
      "Lembre-se de que apenas uma pequena parcela dos bebês (estimativas variam, mas geralmente bem menos de 10%) nasce exatamente na data prevista — isso é absolutamente normal e não deve ser motivo de preocupação. Continue de olho nos movimentos do bebê e mantenha contato próximo com o médico.",
    faq: [
      {
        pergunta: "É preocupante se o parto não começar na data prevista?",
        resposta:
          "Não, isso é extremamente comum. A data provável do parto é uma estimativa baseada em médias, e a maioria dos nascimentos acontece dentro de uma janela de cerca de duas semanas antes ou depois dela. O médico vai acompanhar de perto caso a gestação ultrapasse essa data.",
      },
      {
        pergunta: "O que acontece se o bebê não nascer até a data prevista?",
        resposta:
          "O médico costuma intensificar o monitoramento do bem-estar do bebê e da placenta a partir dessa fase, e vai conversar com você sobre as opções disponíveis, incluindo aguardar o início espontâneo do trabalho de parto ou considerar a indução, dependendo da avaliação individual.",
      },
    ],
  },
  {
    numero: 41,
    trimestre: 3,
    tamanho: "do tamanho de uma jaca grande, com cerca de 51,5 cm da cabeça aos pés",
    resumo:
      "Na 41ª semana, a gestação é considerada 'pós-termo', e o acompanhamento médico costuma se intensificar, com exames adicionais para monitorar de perto o bem-estar do bebê e o funcionamento da placenta.",
    desenvolvimentoBebe:
      "O bebê continua totalmente desenvolvido e, em algumas gestações, a pele pode começar a descamar levemente por ter passado mais tempo em contato com o líquido amniótico. As unhas costumam já ultrapassar a ponta dos dedos nesta fase.",
    mudancasMae:
      "É natural sentir uma mistura de cansaço físico e ansiedade emocional conforme a espera se prolonga além da data prevista. O médico costuma intensificar o acompanhamento, com exames para verificar o volume de líquido amniótico e o bem-estar geral do bebê.",
    exames:
      "Nesta fase, é comum a solicitação de exames como a cardiotocografia (que monitora os batimentos cardíacos do bebê) e o perfil biofísico fetal (que avalia movimentos, tônus muscular, respiração e volume de líquido amniótico), realizados com mais frequência para garantir que tudo continua bem.",
    dicas:
      "Compareça a todas as consultas e exames agendados nesta fase, já que eles ajudam a confirmar que o bebê continua bem enquanto se aguarda o início espontâneo do trabalho de parto. Converse abertamente com o médico sobre suas dúvidas e sobre o plano caso a gestação continue avançando.",
    faq: [
      {
        pergunta: "O que significa a gestação ser considerada 'pós-termo'?",
        resposta:
          "Gestações que ultrapassam 41 semanas completas são classificadas como pós-termo. Isso não significa necessariamente um problema, mas costuma levar a um acompanhamento mais próximo, com exames adicionais para confirmar que o bebê e a placenta continuam bem.",
      },
      {
        pergunta: "Para que servem a cardiotocografia e o perfil biofísico fetal?",
        resposta:
          "São exames usados para avaliar o bem-estar do bebê, verificando os batimentos cardíacos, os movimentos, o tônus muscular, a respiração e o volume de líquido amniótico. Eles ajudam o médico a decidir se é seguro continuar aguardando o trabalho de parto espontâneo ou se é hora de considerar a indução.",
      },
    ],
  },
  {
    numero: 42,
    trimestre: 3,
    tamanho: "do tamanho de uma melancia pequena, com cerca de 51,7 cm da cabeça aos pés",
    resumo:
      "A 42ª semana é o limite considerado pela maioria dos protocolos médicos para aguardar o início espontâneo do trabalho de parto — a partir daqui, a indução costuma ser recomendada para reduzir riscos associados a gestações muito prolongadas.",
    desenvolvimentoBebe:
      "O bebê está plenamente desenvolvido, e o principal cuidado nesta fase passa a ser o monitoramento da placenta, que pode começar a perder um pouco de sua eficiência em fornecer oxigênio e nutrientes conforme a gestação se prolonga além do esperado.",
    mudancasMae:
      "A espera prolongada tende a trazer cansaço físico e emocional significativo. É essa a razão pela qual a maioria dos protocolos médicos recomenda a indução do parto até esta fase, caso o trabalho de parto ainda não tenha começado espontaneamente.",
    exames:
      "Acompanhamento intensivo, com cardiotocografia e perfil biofísico fetal frequentes para monitorar o bem-estar do bebê. O médico costuma discutir ativamente o plano de indução do parto nesta fase, caso ainda não tenha sido iniciado.",
    dicas:
      "Converse abertamente com o médico sobre o plano de indução e tire todas as suas dúvidas sobre o processo. Embora a espera possa ser desgastante, o acompanhamento próximo nesta fase existe justamente para garantir a segurança tanto sua quanto do bebê.",
    faq: [
      {
        pergunta: "Por que a indução costuma ser recomendada a partir da 42ª semana?",
        resposta:
          "Porque, a partir desta fase, o funcionamento da placenta pode começar a ficar menos eficiente, e o volume de líquido amniótico tende a diminuir, o que pode aumentar certos riscos para o bebê. Por isso, a maioria dos protocolos médicos recomenda não aguardar além desse ponto sem intervenção.",
      },
      {
        pergunta: "Esta calculadora considera gestações além de 42 semanas?",
        resposta:
          "Não — 42 semanas (294 dias) é o limite máximo considerado por esta calculadora, alinhado com a prática médica padrão, já que gestações que ultrapassam esse ponto quase sempre já estão em conduta ativa de indução, e não mais em acompanhamento expectante.",
      },
    ],
  },
].sort((a, b) => a.numero - b.numero);

export function getSemana(numero: number): SemanaGravidez | undefined {
  return semanas.find((s) => s.numero === numero);
}
