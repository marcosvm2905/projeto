import { describe, it, expect } from 'vitest';
import { adicionarDespesa, despesasDaCategoria, totalGasto } from './despesas.js';
import { Despesa } from './tipos.js';

describe('adicionarDespesa', () => {
  it('deve adicionar uma nova despesa e retornar um novo array sem alterar o original', () => {
    const despesasIniciais: Despesa[] = [
      { id: '1', descricao: 'Mercado', valor: 150, categoria: 'alimentacao', mes: 3 }
    ];
    const nova: Despesa = { id: '2', descricao: 'Ônibus', valor: 20, categoria: 'transporte', mes: 3 };

    const resultado = adicionarDespesa(despesasIniciais, nova);

    expect(resultado).toHaveLength(2);
    expect(resultado).toContainEqual(nova);
    expect(despesasIniciais).toHaveLength(1);
  });

  it('deve lançar erro se o valor for menor ou igual a zero', () => {
    const despesasIniciais: Despesa[] = [];
    const despesaInvalida: Despesa = { id: '1', descricao: 'Teste', valor: 0, categoria: 'lazer', mes: 5 };

    expect(() => adicionarDespesa(despesasIniciais, despesaInvalida)).toThrow();
  });

  it('deve lançar erro se o mês for menor que 1 ou maior que 12', () => {
    const despesasIniciais: Despesa[] = [];
    const despesaMesInvalido: Despesa = { id: '1', descricao: 'Teste', valor: 50, categoria: 'lazer', mes: 13 };

    expect(() => adicionarDespesa(despesasIniciais, despesaMesInvalido)).toThrow();
  });
});

describe('despesasDaCategoria', () => {
  it('deve retornar apenas as despesas da categoria informada', () => {
    const despesas: Despesa[] = [
      { id: '1', descricao: 'Almoço', valor: 30, categoria: 'alimentacao', mes: 2 },
      { id: '2', descricao: 'Busã', valor: 5, categoria: 'transporte', mes: 2 },
      { id: '3', descricao: 'Janta', valor: 45, categoria: 'alimentacao', mes: 2 }
    ];

    const resultado = despesasDaCategoria(despesas, 'alimentacao');

    expect(resultado).toHaveLength(2);
    expect(resultado.every(d => d.categoria === 'alimentacao')).toBe(true);
  });

  it('deve retornar um array vazio se não houver despesas da categoria', () => {
    const despesas: Despesa[] = [
      { id: '1', descricao: 'Almoço', valor: 30, categoria: 'alimentacao', mes: 2 }
    ];

    const resultado = despesasDaCategoria(despesas, 'moradia');

    expect(resultado).toEqual([]);
  });
});

describe('totalGasto', () => {
  it('deve calcular a soma total de todas as despesas', () => {
    const despesas: Despesa[] = [
      { id: '1', descricao: 'Almoço', valor: 30.5, categoria: 'alimentacao', mes: 1 },
      { id: '2', descricao: 'Internet', valor: 100, categoria: 'moradia', mes: 1 }
    ];

    const resultado = totalGasto(despesas);

    expect(resultado).toBe(130.5);
  });

  it('deve retornar 0 para uma lista de despesas vazia', () => {
    const despesas: Despesa[] = [];

    const resultado = totalGasto(despesas);

    expect(resultado).toBe(0);
  });
});