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
  const matriz: number[][] = Array.from({ length: CATEGORIAS.length }, () =>
    Array(12).fill(0)
  );

  for (const despesa of despesas) {
    const linha = CATEGORIAS.indexOf(despesa.categoria);
    const coluna = despesa.mes - 1;

    if (linha !== -1 && coluna >= 0 && coluna < 12) {
      matriz[linha][coluna] += despesa.valor;
    }
  }

  return matriz;
}