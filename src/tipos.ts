export type Categoria = 'alimentacao' | 'transporte' | 'lazer' | 'moradia';

export const CATEGORIAS: Categoria[] = [
  'alimentacao',
  'transporte',
  'lazer',
  'moradia',
];

export interface Despesa {

  readonly id: string;
  descricao: string;
  valor: number;
  categoria: Categoria;
  mes: number;
  // Campo opcional, pois nem toda despesa exige notas ou detalhes adicionais
  observacao?: string;
}