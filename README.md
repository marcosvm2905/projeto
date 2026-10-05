# Controle de Gastos Pessoais

Projeto individual desenvolvido em TypeScript com foco em Programação Funcional, Imutabilidade e Testes Automatizados (TDD) utilizando Vitest.

## Tecnologias Utilizadas

- Node.js (Ambiente de execução)
- TypeScript (Linguagem com tipagem estática rigorosa)
- Vitest (Framework de testes unitários)
- TSX (Execução direta em desenvolvimento)

Pré-requisitos e Instalação

1. Clone o repositório:
   git clone https://github.com/marcosvm2905/projeto.git
2. cd projeto

3. Instale as dependências:
   npm install

## Como Executar

- Modo Desenvolvimento (TypeScript direto):
  npm run dev

- Executar Testes (Vitest em modo único):
  npm test

- Verificação de Tipagem (sem gerar arquivos):
  npx tsc --noEmit

- Compilar e Executar em JavaScript:
  npx tsc
  node dist/index.js

---

## Tabela de Transparência do Uso de IA (Pair Programming)

| Etapa / Função | Prompt do Desenvolvedor | Resposta / Código da IA |
| :--- | :--- | :--- |
| Etapa 0 - Setup | Solicitação de ajuste das configurações do tsconfig.json e scripts no package.json. | Definição das configurações de build para a pasta dist/, ativação do strict: true e configuração do script vitest run. |
| Etapa 1 - Modelagem | Solicitação da definição dos tipos Categoria, CATEGORIAS e da interface Despesa. | Criação e exportação dos tipos em src/tipos.ts com readonly id e o campo opcional observacao. |
| adicionarDespesa | Envio dos testes para validar a adição de despesas, imutabilidade do array e erros para valor inválido ou mês fora do intervalo de 1 a 12. | Implementação da função utilizando o operador spread [...despesas, nova] e validações das regras de negócio. |
| removerDespesa | Envio do teste para remoção de despesa por ID garantindo a preservação do array original. | Implementação da função utilizando despesas.filter(d => d.id !== id). |
| despesasDaCategoria | Envio do teste para filtragem das despesas pertencentes a uma categoria específica. | Implementação da função utilizando despesas.filter(d => d.categoria === categoria). |
| totalGasto | Envio do teste para cálculo da soma de todas as despesas e tratamento de listas vazias. | Implementação da função utilizando despesas.reduce((acc, d) => acc + d.valor, 0). |
| maiorDespesa | Envio do teste para identificação da despesa de maior valor ou retorno de null caso o array esteja vazio. | Implementação da função utilizando reduce para comparação dos valores e tratamento de lista vazia. |
| totalPorCategoria | Envio do teste para mapeamento dos totais gastos, garantindo o valor 0 para categorias sem despesas. | Implementação da função utilizando reduce para inicializar todas as categorias com zero e laço para somar os valores. |
| gerarMatrizGastos | Envio do teste para validação da matriz 4x12 organizada por categoria e mês. | Implementação da função utilizando Array.from para instanciar a matriz e mapeamento dos meses (1-12) para os índices (0-11). |
