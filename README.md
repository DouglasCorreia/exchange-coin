# Exchange Coin

Aplicacao de conversao de moedas desenvolvida com React, TypeScript e Vite. O projeto permite informar um valor, selecionar a moeda de origem e destino, consultar a conversao em uma API externa e exibir o resultado formatado no padrao da moeda escolhida.

## 🌐 Link de visualização

[https://exchange-coin-tau.vercel.app/](https://exchange-coin-tau.vercel.app/)

## Funcionalidades

- Conversao de moedas usando a API Frankfurter.
- Lista de moedas disponiveis em ordem alfabetica.
- Resultado formatado com `Intl.NumberFormat`.
- Tema claro e escuro.
- Feedback visual com loading e mensagens de erro.
- Interface baseada em componentes do shadcn/ui.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI
- TanStack Query
- Axios
- Sonner
- Lucide React
- next-themes

## Requisitos

Antes de comecar, tenha instalado:

- Node.js
- npm

## Instalacao

Clone o repositorio:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd exchange-coin
```

Instale as dependencias:

```bash
npm install
```

## Como Rodar

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a URL exibida no terminal, normalmente:

```txt
http://localhost:5173
```

## Scripts

Rodar em desenvolvimento:

```bash
npm run dev
```

Gerar build de producao:

```bash
npm run build
```

Visualizar o build localmente:

```bash
npm run preview
```

Executar o lint:

```bash
npm run lint
```

## Estrutura

```txt
src/
  components/       Componentes da interface
  data/             Lista local de moedas
  hooks/            Hooks customizados
  services/         Configuracao da API e funcoes de requisicao
  types/            Tipos TypeScript compartilhados
```

## API

O projeto utiliza a API Frankfurter para buscar taxas de cambio:

```txt
https://api.frankfurter.dev/v1
```
