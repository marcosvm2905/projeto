import { Despesa, Categoria, CATEGORIAS } from './tipos.js';

export function totalPorCategoria(despesas: Despesa[]): Record<Categoria, number> {
  const resultado = CATEGORIAS.reduce((acc, cat) => {
    acc[cat] = 0;
    return acc;
  }, {} as Record<Categoria, number>);

  for (const despesa of despesas) {
    resultado[despesa.categoria] += despesa.valor;
  }

  return resultado;
}

export function gerarMatrizGastos(despesas: Despesa[]): number[][] {
  throw new Error("não implementado");
}