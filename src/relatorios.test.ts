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

describe('gerarMatrizGastos', () => {
  it('deve montar a matriz 4x12 corretamente com os gastos acumulados por categoria e mês', () => {
    const despesas: Despesa[] = [
      { id: '1', descricao: 'Almoço', valor: 50, categoria: 'alimentacao', mes: 1 },
      { id: '2', descricao: 'Uber', valor: 25, categoria: 'transporte', mes: 3 }
    ];

    const matriz = gerarMatrizGastos(despesas);

    expect(matriz).toHaveLength(4);
    expect(matriz[0]).toHaveLength(12);
    expect(matriz[0][0]).toBe(50); 
    expect(matriz[1][2]).toBe(25);
    expect(matriz[2][0]).toBe(0); 
  });

  it('deve retornar uma matriz 4x12 zerada quando não houver despesas', () => {
    const matriz = gerarMatrizGastos([]);

    expect(matriz).toHaveLength(4);
    const matrizZerada = Array.from({ length: 4 }, () => Array(12).fill(0));
    expect(matriz).toEqual(matrizZerada);
  });
});