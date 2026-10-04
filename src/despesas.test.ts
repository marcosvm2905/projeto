import { describe, it, expect } from 'vitest';
import { adicionarDespesa } from './despesas.js';
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