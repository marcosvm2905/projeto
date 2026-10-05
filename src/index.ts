import { Despesa, CATEGORIAS } from './tipos.js';
import {
  adicionarDespesa,
  totalGasto,
  maiorDespesa,
} from './despesas.js';
import { totalPorCategoria, gerarMatrizGastos } from './relatorios.js';

let despesas: Despesa[] = [];

despesas = adicionarDespesa(despesas, {
  id: '1',
  descricao: 'Supermercado',
  valor: 450.5,
  categoria: 'alimentacao',
  mes: 1,
});
despesas = adicionarDespesa(despesas, {
  id: '2',
  descricao: 'Uber para faculdade',
  valor: 35.0,
  categoria: 'transporte',
  mes: 1,
});
despesas = adicionarDespesa(despesas, {
  id: '3',
  descricao: 'Cinema e pipoca',
  valor: 60.0,
  categoria: 'lazer',
  mes: 2,
});
despesas = adicionarDespesa(despesas, {
  id: '4',
  descricao: 'Conta de Luz',
  valor: 180.0,
  categoria: 'moradia',
  mes: 2,
});
despesas = adicionarDespesa(despesas, {
  id: '5',
  descricao: 'Feira quinzenal',
  valor: 120.0,
  categoria: 'alimentacao',
  mes: 2,
});

const formatarMoeda = (val: number) =>
  val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log('=== SISTEMA DE CONTROLE DE GASTOS ===\n');

console.log(`Total Geral Gasto: ${formatarMoeda(totalGasto(despesas))}`);

const maior = maiorDespesa(despesas);
if (maior) {
  console.log(
    `Maior Despesa: ${maior.descricao} (${formatarMoeda(
      maior.valor
    )}) - Categoria: ${maior.categoria}`
  );
}

console.log('\n--- Gastos por Categoria ---');
const porCat = totalPorCategoria(despesas);
for (const cat of CATEGORIAS) {
  console.log(`${cat.toUpperCase()}: ${formatarMoeda(porCat[cat])}`);
}

console.log('\n--- Matriz de Gastos (4x12) ---');
const matriz = gerarMatrizGastos(despesas);

const mesesCabecalho = Array.from({ length: 12 }, (_, i) =>
  `M${i + 1}`.padStart(8)
).join('');
console.log(`${'Categoria'.padEnd(14)}${mesesCabecalho}`);

CATEGORIAS.forEach((cat, idx) => {
  const valoresMeses = matriz[idx]
    .map((v) => formatarMoeda(v).padStart(8))
    .join('');
  console.log(`${cat.padEnd(14)}${valoresMeses}`);
});