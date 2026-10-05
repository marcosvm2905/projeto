import { Despesa, Categoria } from './tipos.js';

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  if (nova.valor <= 0) {
    throw new Error("O valor da despesa deve ser maior que zero.");
  }

  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error("O mês da despesa deve estar entre 1 e 12.");
  }

  return [...despesas, nova];
}

export function despesasDaCategoria(
  despesas: Despesa[],
  categoria: Categoria
): Despesa[] {
  return despesas.filter((d) => d.categoria === categoria);
}

export function totalGasto(despesas: Despesa[]): number {
  throw new Error("não implementado");
}