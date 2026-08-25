import { getSemana } from "@/data/semanas";

const SITE_URL = "https://semanasdegravidez.com.br";
const SITE_NAME = "Calculadora Gestacional";

export interface RouteMeta {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function siteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function getHomeMeta(): RouteMeta {
  return {
    title: "Calculadora Gestacional - Semanas de Gravidez e Data do Parto",
    description:
      "Calcule a idade gestacional, descubra de quantas semanas você está, o trimestre atual e a data provável do parto (DPP) a partir da DUM.",
    path: "/",
  };
}

export function getSemanaMeta(numero: number): RouteMeta {
  const semana = getSemana(numero);
  const title = `${numero} Semanas de Gravidez: o que esperar | ${SITE_NAME}`;
  const description = semana
    ? truncate(semana.resumo, 155)
    : `Descubra o que esperar na semana ${numero} de gravidez: desenvolvimento do bebê, sintomas e dicas.`;
  return {
    title,
    description,
    path: `/semana/${numero}`,
    noindex: !semana,
  };
}

export function getHubMeta(): RouteMeta {
  return {
    title: `Semanas de Gravidez: guia completo semana a semana | ${SITE_NAME}`,
    description:
      "Acompanhe o desenvolvimento do bebê e as mudanças no seu corpo em cada uma das semanas de gravidez, do 1º ao 3º trimestre.",
    path: "/semanas-de-gravidez",
  };
}

export function getSobreMeta(): RouteMeta {
  return {
    title: `Sobre | ${SITE_NAME}`,
    description:
      "Conheça a metodologia da Calculadora Gestacional, como calculamos a idade gestacional e nossa política editorial.",
    path: "/sobre",
  };
}

export function getPoliticaPrivacidadeMeta(): RouteMeta {
  return {
    title: `Política de Privacidade | ${SITE_NAME}`,
    description:
      "Saiba como o Calculadora Gestacional trata cookies, dados de navegação e links de afiliados, em conformidade com a LGPD.",
    path: "/politica-de-privacidade",
  };
}

export function getTermosDeUsoMeta(): RouteMeta {
  return {
    title: `Termos de Uso | ${SITE_NAME}`,
    description:
      "Termos de uso do site e da calculadora gestacional: escopo do serviço, isenção médica e responsabilidades.",
    path: "/termos-de-uso",
  };
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}
