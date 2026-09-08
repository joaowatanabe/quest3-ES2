# 🚗 Simulação de Veículo — Prática de Git & TypeScript

Projeto acadêmico desenvolvido para a disciplina de **Engenharia de Software II** no **SENAC**, sob orientação do **Prof. Wagner Loch**. O objetivo principal é exercitar o fluxo de trabalho com controle de versão via **Git** (commits atômicos, rastreabilidade de requisitos e branches) aliado a conceitos de **Programação Orientada a Objetos (POO)** em **TypeScript**.

---

## 📌 Sobre o Projeto

O projeto consiste em uma aplicação interativa de linha de comando (CLI) que simula o estado e comportamento de um veículo (marca, modelo, potência, marchas e velocidade). Através de um menu no terminal, o usuário cadastra o veículo e interage executando ações como acelerar, frear, gerenciar marchas e visualizar os atributos do veículo.

---

## 🛠️ Tecnologias Utilizadas

- **[TypeScript](https://www.typescriptlang.org/)** (v5.5.4) — Superset tipado do JavaScript
- **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript
- **[ts-node](https://typestrong.org/ts-node/)** (v10.9.2) — Executor direto de TypeScript sem compilação prévia manual
- **[prompt-sync](https://www.npmjs.com/package/prompt-sync)** (v4.2.0) — Leitura síncrona de entradas do usuário via terminal

---

## 📁 Estrutura do Projeto

```plaintext
quest3-ES2/
├── Veiculo.ts        # Definição da classe Veiculo e seus atributos
├── index.ts          # Ponto de entrada, menu interativo e lógica das operações
├── requisitos.MD     # Checklist de requisitos e acompanhamento da prática
├── package.json      # Dependências e scripts de execução/build
├── tsconfig.json     # Configuração do compilador TypeScript
└── README.md         # Documentação oficial do projeto
```

---

## 📋 Status dos Requisitos

Com base no planejamento definido em [`requisitos.MD`](requisitos.MD), o andamento da implementação está distribuído da seguinte forma:

| # | Requisito | Status | Descrição |
|---|---|:---:|---|
| 1 | Criar objeto a partir da classe Veículo | Concluído | Instanciação e manipulação da classe `Veiculo` |
| 2 | Criar veículo (entrada de dados) | Concluído | Função `criaVeiculo()` capturando dados via terminal |
| 3 | Imprimir dados do veículo | Concluído | Exibição formatada dos atributos do veículo durante a execução |
| 4 | Acelerar | Concluído | Função `acelerar()` (aumenta velocidade proporcional à potência quando engrenado) |
| 5 | Frear | Concluído | Redução controlada da velocidade atual |
| 6 | Subir marcha | Pendente | Incremento da marcha respeitando o limite máximo |
| 7 | Reduzir marcha | Pendente | Decremento da marcha até o ponto morto (`0`) |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Gerenciador de pacotes `npm`

### Passo a passo

1. **Clonar o repositório:**
   ```bash
   git clone git@github.com:joaowatanabe/quest3-ES2.git
   cd quest3-ES2
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Executar a aplicação:**
   ```bash
   npm start
   ```

4. **Compilar para JavaScript (opcional):**
   ```bash
   npm run build
   ```

---

## 🎮 Como Funciona a Aplicação

1. Ao iniciar, o sistema solicita o preenchimento dos dados do veículo:
   - **Marca** (ex: `Toyota`)
   - **Modelo** (ex: `Corolla`)
   - **Potência** (ex: `150`)
   - **Número de marchas** (ex: `6`)

2. Em seguida, é exibido o menu interativo:
   ```text
   ########### MENU ###########
   1 - Acelerar
   2 - Frear
   3 - Subir marcha
   4 - Descer marcha
   5 - Imprimir dados do veículo
   0 - Sair
   Escolha uma opção:
   ```

3. **Regras de negócio implementadas:**
   - O veículo só acelera se a `marchaAtual` for diferente de `0` (ponto morto).
   - O ganho de velocidade é calculado por:
     $$\text{velocidade} = \text{velocidade} + (\text{potencia} \times 0.1)$$

---

## 👨‍💻 Autor e Créditos

- **Aluno:** [João Watanabe](https://github.com/joaowatanabe)
- **Orientação:** Prof. Wagner Loch
- **Disciplina:** Engenharia de Software II — Faculdade SENAC
