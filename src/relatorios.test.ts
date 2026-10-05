import { describe, it, expect } from 'vitest';
import { totalPorCategoria, gerarMatrizGastos } from './relatorios.js';
import { Despesa } from './tipos.js';

describe('totalPorCategoria', () => {

  it('deve calcular o total gasto para cada uma das categorias', () => {
    const despesas: Despesa[] = [
      { id: '1', descricao: 'Almoço', valor: 40, categoria: 'alimentacao', mes: 1 },
      { id: '2', descricao: 'Jantar', valor: 60, categoria: 'alimentacao', mes: 1 },
      { id: '3', descricao: 'Uber', valor: 30, categoria: 'transporte', mes: 2 }
    ];

    const resultado = totalPorCategoria(despesas);

    expect(resultado).toEqual({
      alimentacao: 100,
      transporte: 30,
      lazer: 0,
      moradia: 0
    });
  });

  it('deve retornar todas as categorias zeradas se a lista de despesas estiver vazia', () => {
    const despesas: Despesa[] = [];

    const resultado = totalPorCategoria(despesas);

    expect(resultado).toEqual({
      alimentacao: 0,
      transporte: 0,
      lazer: 0,
      moradia: 0
    });
  });
});