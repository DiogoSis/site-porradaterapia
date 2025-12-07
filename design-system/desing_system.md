# Design System — Porrada Terapia

## Sumário

1. [Visão Geral](#1-visão-geral)
2. [Fundamentos da Marca](#2-fundamentos-da-marca)
    * [2.1. Essência](#21-essência)
    * [2.2. Arquétipos](#22-arquétipos)
    * [2.3. Tom de Voz](#23-tom-de-voz)
3. [Identidade Visual](#3-identidade-visual)
    * [3.1. Marca / Logo](#31-marca--logo)
    * [3.2. Paleta de Cores](#32-paleta-de-cores)
    * [3.3. Tipografia](#33-tipografia)
    * [3.4. Iconografia](#34-iconografia)
    * [3.5. Fotografia e Tratamento de Imagem](#35-fotografia-e-tratamento-de-imagem)
4. [Componentes de Interface & Layouts](#4-componentes-de-interface--layouts)
    * [4.1. Banner — “Grade de Aulas”](#41-banner----grade-de-aulas)
    * [4.2. Banner — “Agende uma Aula Experimental”](#42-banner----agende-uma-aula-experimental)
    * [4.3. Banner — “Venha fazer parte dessa família”](#43-banner----venha-fazer-parte-dessa-família)
    * [4.4. Botão de WhatsApp](#44-botão-de-whatsapp)
5. [Diretrizes de Conteúdo & Tom de Voz](#5-diretrizes-de-conteúdo--tom-de-voz)
    * [5.1. Linguagem](#51-linguagem)
    * [5.2. Estrutura de chamada](#52-estrutura-de-chamada)
6. [Aplicações](#6-aplicações)
    * [6.1. Instagram](#61-instagram)
    * [6.2. Materiais físicos](#62-materiais-físicos)
7. [Manutenção do Design System](#7-manutenção-do-design-system)

---

### 1. Visão Geral

**Nome da marca:** Porrada Terapia  
**Tipo de negócio:** Centro de treinamento de lutas e performance (Boxe, Muay-Thai, Judô, Kickboxing Kids etc.)  
**Objetivo do design system:**  
Padronizar a comunicação visual em todos os pontos de contato (Instagram, banners, materiais físicos, site) mantendo a identidade forte, de impacto e acolhedora da Porrada Terapia.

---

### 2. Fundamentos da Marca

#### 2.1. Essência

* **Propósito:** Transformar dor em força por meio da luta, disciplina e comunidade.  
* **Promessa:** Treino duro, ambiente de família, cuidado com o aluno.  
* **Personalidade:**  
  * Direta, intensa, motivadora  
  * De rua, autêntica, sem frescura  
  * Acolhedora: “família de luta”

#### 2.2. Arquétipos

* **Guerreiro:** força, coragem, superação.  
* **Cuidador/Guia:** acolhimento, orientação, construção de comunidade.

#### 2.3. Tom de Voz

* **Características:**
  * Imperativo: “VENHA FAZER PARTE”, “AGENDE UMA AULA”
  * Motivacional: foco em conquista, superação, disciplina.
  * Simples e direto: frases curtas, linguagem popular.

* **Frase‑mantra sugerida:**  
    > “Por dentro terapia, por fora porrada.”

---

### 3. Identidade Visual

#### 3.1. Marca / Logo

**Descrição do logo atual:**

* Formato circular.
* Faixa circular laranja com texto: “CENTRO DE TREINAMENTO” (superior) e “PORRADA TERAPIA” (inferior), em branco.
* Centro com luva vermelha/alaranjada e fundo laranja.
* Borda externa preta.

**Versões recomendadas:**

1. **Logo Principal (Full Color):**
    * Fundo: `color-primary-orange`
    * Tipografia: `color-white`
    * Luva: `color-red-glove` (vermelho/laranja), contornos `color-black`

2. **Logo Monocromático Claro:**
    * Todo em `color-white` sobre fundo escuro (`color-black` ou `color-dark-gray`)

3. **Logo Monocromático Escuro:**
    * Todo em `color-black` sobre fundo claro (`color-white` ou `color-light-gray`)

**Regras de uso:**

* Não distorcer (esticar, inclinar, girar).  
* Manter área de respiro mínima = ½ do diâmetro interno do círculo, sem encostar texto/imagem.  
* Não aplicar sobre fundos muito poluídos. Se necessário, usar círculo sólido de fundo (`color-black` ou `color-primary-orange`) atrás do logo.  
* Não alterar cores oficiais.

---

#### 3.2. Paleta de Cores

> **Tokens de Cor:**  
> Os códigos HEX são aproximados e devem ser refinados com o designer para garantir a fidelidade exata.

| Papel              | Nome                | Token               | HEX       | Uso principal                                           |
|--------------------|---------------------|---------------------|-----------|--------------------------------------------------------|
| Primária 1         | Laranja Porrada     | `color-primary-orange` | `#F97316` | Faixas, elementos ligados à marca, detalhes, rodapés   |
| Primária 2         | Amarelo Impacto     | `color-secondary-yellow` | `#FACC15` | Títulos grandes, palavras de destaque                  |
| Fundo principal    | Preto Profundo      | `color-black`       | `#020617` | Fundos de banners, posts, materiais físicos            |
| Fundo secundário   | Cinza Escuro        | `color-dark-gray`   | `#111827` | Gradientes, sombras, áreas secundárias                 |
| Neutro             | Branco              | `color-white`       | `#FFFFFF` | Textos, ícones, elementos sobre fundo escuro           |
| Acento funcional   | Verde WhatsApp      | `color-whatsapp-green` | `#25D366` | Botões e ícones de contato (WhatsApp)                  |
| Detalhe da Luva    | Vermelho Luva       | `color-red-glove`   | `#E3242B` | Cor específica da luva no logo (se diferente do laranja) |

**Regras:**

* Dominante: `color-black` / `color-dark-gray` como fundo.  
* Destaques: `color-secondary-yellow` em títulos, `color-primary-orange` nas áreas que remetem à marca (barras, faixas, rodapés).  
* `color-whatsapp-green` é **exclusivo** para elementos de contato (número de telefone/WhatsApp).  
* Evitar misturar muitas cores no mesmo bloco de informação para não poluir.

---

#### 3.3. Tipografia

**Famílias recomendadas (Google Fonts):**

* **Heading (títulos / impacto):**
  * `Anton` **ou** `Bebas Neue`
  * Uso: títulos principais em banners, chamadas, nomes de seções.
  * Características: caixa alta, bold, condensada.

* **Texto Corrido / Subtítulos / Listas:**
  * `Montserrat` **ou** `Inter`
  * Pesos: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold).
  * Uso: listas de modalidades, horários, endereço, legendas.

**Tokens de Tipografia:**

| Papel              | Token               | Família             | Peso      | Tamanho (ex. em px para 1080x1350) | Cor padrão          |
|--------------------|---------------------|---------------------|-----------|------------------------------------|---------------------|
| Título Principal   | `font-heading-1`    | Anton / Bebas Neue  | Bold      | 80-120px                           | `color-secondary-yellow` ou `color-white` |
| Título Secundário  | `font-heading-2`    | Montserrat / Inter  | Bold      | 40-60px                            | `color-white`       |
| Corpo do Texto     | `font-body`         | Montserrat / Inter  | Regular/Medium | 24-32px                            | `color-white` ou `color-light-gray` |
| Detalhes/Legendas  | `font-caption`      | Montserrat / Inter  | Regular   | 18-22px                            | `color-light-gray`  |

**Boas práticas:**

* Usar **no máximo duas famílias** tipográficas em toda a identidade.  
* Títulos sempre em **caixa alta**.  
* Evitar excesso de contornos e sombras; usar efeitos apenas em palavras principais.

---

#### 3.4. Iconografia

* Estilo: ícones simples, preenchidos ou de traço grosso, com cantos levemente arredondados.
* Exemplos:  
  * ✔ (check) para itens de grade e modalidades;  
  * Ícone de WhatsApp;  
  * Luva de boxe, cronômetro, escudo (caso necessário).
* Cores: `color-white` ou `color-secondary-yellow` sobre fundo escuro; `color-primary-orange` para ícones da marca.

---

#### 3.5. Fotografia e Tratamento de Imagem

**Estilo geral:**

* Fundos de academia escuros com iluminação de teto, criando clima de luta e performance.  
* Pessoas recortadas em primeiro plano, com bom contraste em relação ao fundo.  
* Efeito de brilho/sombra suave nas bordas das pessoas, para destacá-las.

**Tipos de foto prioritários:**

1. **Ação:** golpes, defesas, movimento.  
2. **Turma:** foto de grupo em guarda, reforçando comunidade (“família”).  
3. **Retrato de aluno/professor:** em posição de luta, olhando para a câmera.  

**Regras:**

* Evitar fotos tremidas ou com expressão desmotivada.  
* Preferir fotos da **própria academia** para construir identidade.  
* Manter coerência de contraste: fundos escuros com pessoas bem iluminadas.

---

### 4. Componentes de Interface & Layouts

#### 4.1. Banner — “Grade de Aulas”

**Objetivo:** comunicar horários e modalidades de forma clara e organizada.

**Estrutura:**

1. **Topo:**
    * Fundo: `color-black` / `color-dark-gray`.
    * Logo circular centralizado no alto.
    * Título:
        * Linha 1: “Grade de” — `color-white` (`font-heading-2`)
        * Linha 2: “Aulas” — `color-secondary-yellow` (`font-heading-1`)

2. **Subfaixa (categorias):**
    * Faixa: `color-primary-orange`
    * Texto: `color-black` ou `color-white` (`font-body`)
    * Ex.: “BOXE, MUAY‑THAY, JUDÔ, KICKBOXING KIDS”

3. **Corpo (cards de modalidades):**
    * Cada modalidade dentro de um card `color-primary-orange` ou bloco com bordas:
        * Cabeçalho com ✔ + nome da modalidade (`color-white`, `font-heading-2`).
        * Abaixo, texto com dias da semana e horários, `color-white` (`font-body`).

4. **Rodapé:**
    * Barra: `color-black` ou `color-dark-gray`
    * Endereço: `color-white` (`font-body`)
        * Ex.: “R. JOSÉ ÁLVARES, 102 – LUZ – N. IGUAÇU – RJ / RJ”.
    * Caixa: `color-whatsapp-green`
    * Ícone: WhatsApp `color-white`
    * Número: `color-white` (`font-body`)
        * Ex.: “(21) 99076‑0880”.

**Regras:**

* Todos os cards de modalidade com **mesma largura/altura** para manter organização.  
* Ícone ✔ sempre alinhado à esquerda, mesmo tamanho em todos os cards.  
* Evitar muito texto por card; se necessário, dividir por categorias.

#### 4.2. Banner — “Agende uma Aula Experimental”

**Objetivo:** conversão (atrair novos alunos).

**Estrutura:**

1. **Lado esquerdo – Texto:**
    * Título principal em 3 linhas (`font-heading-1`):
        * “AGENDE” — `color-secondary-yellow`  
        * “UMA AULA” — `color-white`  
        * “EXPERIMENTAL” — `color-white` ou `color-secondary-yellow`.
    * Lista de modalidades (`font-heading-2` menor) em bullet `color-white`:
        * “JUDÔ KIDS”  
        * “KICKBOXING KIDS”  
        * “JIU‑JITSU”  
        * “MMA”  
        * “BOXE”  
        * “MUAY‑THAY”  
        * “PERFORMANCE TRAINING”

2. **Lado direito – Foto:**
    * Atleta em primeiro plano, recortado, em posição de ataque/guarda.  
    * Fundo com academia desfocada ou escurecida.

3. **Rodapé:**
    * Faixa: `color-primary-orange` com logo à esquerda.  
    * Botão: `color-whatsapp-green` com número `color-white`, centralizado ou à direita.  
    * Endereço: `color-white` (`font-body`) na base, sobre barra `color-black`.

**Regras:**

* Título deve ser o elemento mais forte visualmente.  
* Lista de modalidades alinhada à esquerda, mantendo espaçamento consistente.  
* Foto do atleta nunca deve cobrir o título principal.

#### 4.3. Banner — “Venha fazer parte dessa família”

**Objetivo:** reforçar pertencimento e comunidade.

**Estrutura:**

1. **Topo:**
    * Logo circular centralizado ou ligeiramente acima do título.
2. **Título (`font-heading-1` grande):**
    * “VENHA” — `color-secondary-yellow`  
    * “FAZER PARTE” — `color-secondary-yellow`  
    * “DESSA FAMÍLIA” — `color-secondary-yellow` com leve gradiente para `color-primary-orange` (opcional).
3. **Foto de grupo:**
    * Turma posicionada em linha, recortada e aplicada sobre fundo da academia.  
4. **Rodapé:**
    * Igual aos demais banners: barra com endereço + botão WhatsApp.

**Regras:**

* Título nunca deve competir com o grupo em contraste; manter boa leitura.  
* Garantir que a foto do grupo tenha boa iluminação e expressão positiva.

#### 4.4. Botão de WhatsApp

**Componente padrão:**

* Fundo: `color-whatsapp-green`  
* Bordas: cantos levemente arredondados, raio ~ 12px  
* Ícone: logo WhatsApp `color-white` à esquerda  
* Texto: número em `color-white`, `font-body` (Bold), caixa alta opcional.

Exemplo de texto: `WHATSAPP (21) 99076-0880`

---

### 5. Diretrizes de Conteúdo & Tom de Voz

#### 5.1. Linguagem

* **Usar:**  
  * Frases curtas: “VENHA TREINAR”, “AGENDE SUA AULA HOJE”  
  * Verbos de ação: “LUTE”, “SUPERE”, “APRENDA”, “EVOLUA”.
  * Vocabulário popular, próximo da realidade do aluno.

* **Evitar:**  
  * Jargão técnico em excesso sem explicação.  
  * Tom agressivo negativo (ataques pessoais, humilhação).

#### 5.2. Estrutura de chamada

* Padrão 1 — Convite:  
    > “VENHA FAZER PARTE DESSA FAMÍLIA.”  

* Padrão 2 — Oferta clara:  
    > “AGENDE UMA AULA EXPERIMENTAL AGORA MESMO.”  

* Padrão 3 — Benefício:  
    > “MAIS CONFIANÇA, DISCIPLINA E PERFORMANCE DENTRO E FORA DO TATAME.”

---

### 6. Aplicações

#### 6.1. Instagram

* **Formato principal:** 1080x1350px (portrait).  
* **Elementos fixos em todos os banners:**
  * Logo Porrada Terapia  
  * Endereço  
  * Telefone/WhatsApp

* **Tipos de post padronizados:**
    1. **Grade de Aulas** (template fixo, só troca horário/modo)  
    2. **Chamada para Aula Experimental**  
    3. **Banner de Comunidade (“Venha fazer parte dessa família”)**  
    4. **Depoimento de aluno** (foto do aluno + frase em card `color-primary-orange`/`color-black`).

#### 6.2. Materiais físicos

* **Camisetas / Regatas:**
  * Frente: logo no peito (monocromático `color-white` ou full color).  
  * Costas: frase curta em `color-secondary-yellow` ou `color-white`.
    * Ex.: “PORRADA TERAPIA – FAMÍLIA DE LUTA”.

* **Faixas e cartazes:**
  * Fundo `color-black` / `color-dark-gray`.  
  * Título em `color-secondary-yellow` (`font-heading-1`) grande.  
  * Logo e contato sempre na parte inferior.

---

### 7. Manutenção do Design System

* **Responsável:** Definir uma pessoa (ou equipe) que valida peças antes de publicar/imprimir.  
* **Atualizações:** Revisar a cada 6–12 meses para incluir novos templates, ajustes de cores ou fontes.  
* **Arquivos‑base recomendados:**  
  * Pasta com logos em PNG/SVG (full color e versões monocromáticas).  
  * Templates editáveis (Canva, Photoshop, Figma) dos principais banners.  
  * Documento com as fontes instaladas ou links para download.
