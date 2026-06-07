# IEDV — Style Guide para Website
**@iedvglobal** · Igreja Encontro de Vidas

---

## 1. Paleta de Cores

Paleta **exclusivamente preto e branco** — sem cores de destaque. A sofisticação vem do contraste e da fotografia.

### Escala de cinzas

| Nome | Hex | Uso |
|---|---|---|
| Preto IEDV | `#111111` | Background principal, hero, seções escuras |
| Carvão | `#1C1C1C` | Background de cards em seções escuras |
| Surface | `#333333` | Hover states, borders, inputs em dark |
| Cinza médio | `#888888` | Textos secundários em fundo escuro |
| Cinza claro | `#E0E0E0` | Bordas e divisores em fundo claro |
| Off-white | `#F5F5F5` | Background de seções claras |
| Branco | `#FFFFFF` | Tipografia principal em dark · fundo de cards |

### Ramp completo (escuro → claro)
`#111111` → `#1C1C1C` → `#333333` → `#555555` → `#888888` → `#BBBBBB` → `#E0E0E0` → `#F5F5F5` → `#FFFFFF`

### Transparências frequentes
- Bordas em dark: `rgba(255, 255, 255, 0.08)`
- Texto muted em dark: `rgba(255, 255, 255, 0.40)`
- Overlay sobre foto: `rgba(17, 17, 17, 0.65)`
- Bordas em light: `rgba(0, 0, 0, 0.10)`

---

## 2. Tipografia

### Hierarquia de fontes

**Display — Bebas Neue**
- Uso: Hero titles, headlines de impacto, seções principais
- Tamanho: 48px–96px em desktop · 32px–56px em mobile
- Estilo: Caixa ALTA obrigatório, letter-spacing: 0.04em
- Exemplos de uso: "MINHA FAMÍLIA.", "EU NASCI DE NOVO", "AMAR SERVIR E ADORAR"

**Subtítulos e Seções — Inter 700**
- Uso: Labels de seção, subtítulos, calls-to-action em texto
- Tamanho: 14px–22px
- Estilo: UPPERCASE, letter-spacing: 0.08–0.12em
- Cor: Ouro `#EDB100` sobre fundo escuro, ou `#111111` sobre fundo claro

**Corpo — Inter 400/500**
- Uso: Parágrafos, descrições, informações práticas
- Tamanho: 15px–16px
- Line-height: 1.7
- Cor: `#FFFFFF` (principal) · `#A0A0A0` (secundário)

**Emocional — Playfair Display Italic**
- Uso: Momentos de emoção, citações, títulos de ministérios femininos
- Tamanho: 18px–32px
- Estilo: Itálico sempre
- Exemplos: "Encontro de Vidas", "Até te Encontrar", "minha família."

### Escala tipográfica (desktop)

```
H1 Display:   Bebas Neue · 80px · tracking 0.04em · UPPERCASE
H2 Display:   Bebas Neue · 56px · tracking 0.04em · UPPERCASE
H3 Section:   Inter 700  · 20px · tracking 0.10em · UPPERCASE
H4 Sub:       Inter 500  · 16px · tracking 0.06em
Body:         Inter 400  · 15px · line-height 1.7
Caption:      Inter 400  · 12px · color #A0A0A0
Emotional:    Playfair Display Italic · 24–28px
```

---

## 3. Design Tokens

```css
:root {
  /* Cores — preto e branco puro */
  --bg-dark:         #111111;
  --bg-surface:      #1C1C1C;
  --bg-elevated:     #333333;
  --bg-light:        #F5F5F5;
  --bg-white:        #FFFFFF;
  --text-on-dark:    #FFFFFF;
  --text-muted-dark: rgba(255, 255, 255, 0.40);
  --text-on-light:   #111111;
  --text-muted-light:#888888;
  --border-dark:     rgba(255, 255, 255, 0.08);
  --border-light:    rgba(0, 0, 0, 0.10);
  --overlay:         rgba(17, 17, 17, 0.65);

  /* Tipografia */
  --font-display:    'Bebas Neue', 'Arial Black', sans-serif;
  --font-body:       'Inter', system-ui, sans-serif;
  --font-emotion:    'Playfair Display', Georgia, serif;

  /* Espaçamento */
  --section-gap:     96px;
  --card-radius:     12px;
  --btn-radius:      4px;

  /* CTAs */
  --cta-bg:          #FFFFFF;
  --cta-text:        #111111;
  --cta-hover:       #E0E0E0;
  --cta-ghost-border:rgba(255, 255, 255, 0.25);
  --cta-ghost-text:  #FFFFFF;
}
```

---

## 4. Componentes Visuais

### Botão Primário
```
Background: #EDB100
Texto: #111111 · Inter 700 · 12px · UPPERCASE · tracking 0.10em
Padding: 12px 28px
Border-radius: 4px
Hover: background #D4A300
```

### Botão Secundário (Ghost)
```
Background: transparent
Border: 1px solid rgba(255,255,255,0.3)
Texto: #FFFFFF · Inter 500 · 12px · UPPERCASE
Padding: 12px 28px
Hover: border-color #FFFFFF
```

### Card de Ministério
```
Background: #1C1C1C
Border: 0.5px solid rgba(255,255,255,0.08)
Border-radius: 12px
Ícone/thumbnail no topo
Título: Bebas Neue 28px
Descrição: Inter 400 14px #A0A0A0
CTA link: Inter 500 12px #EDB100
```

### Tag / Badge de Evento
```
Background: #EDB100 (principal) | #00B4D8 (PULSE) | #E8620A (música)
Texto: #111111 · Inter 700 · 10px · UPPERCASE · tracking 0.12em
Padding: 4px 12px
Border-radius: 4px
```

---

## 5. Regras de Uso

### Sobre o fundo escuro (#111111)
- Texto principal: sempre `#FFFFFF`
- Destaque de palavra: `#EDB100` (ouro)
- Nunca usar cinza médio — pouco contraste
- Bordas: `rgba(255,255,255,0.08)` — suficiente para definição sem pesar

### Fotografia
- Preferir fotos escuras e cinematográficas
- Overlay `rgba(17,17,17,0.5–0.7)` sobre fotos de fundo para garantir leitura do texto
- Momentos de adoração com mãos levantadas têm papel central
- Batismos = editorial importante, sempre de alta qualidade

### Ícone da marca (chama/fogo)
- Usar apenas em branco ou ouro
- Nunca deformar nem recolorir com outras cores
- Manter área de respiro mínima de 1x a altura do ícone

### Hierarquia visual de uma seção
1. Label de seção (Inter 700 · UPPERCASE · ouro · 11px)
2. Título (Bebas Neue · 48–64px · branco)
3. Subtítulo emocional (Playfair Italic · 20px · branco 70%)
4. Corpo (Inter · 15px · #A0A0A0)
5. CTA

---

## 6. Identidade por Submarca

### IEDV Global (principal)
Preto + Ouro + Branco · Bebas Neue · Austero e impactante

### PULSE (evento de sábado)
Azul `#00B4D8` + Preto + Branco · Tipografia moderna e geométrica · Energia jovem

### Mais Perto Music
Laranja `#E8620A` + Preto · Atmosfera de palco, calor, fogo

### Mulheres Raízes
Tons terrosos (off-white, areia, verde musgo) · Playfair Display · Orgânico e acolhedor

### Homens de Valor
Preto + Branco + Cinza · Bold · Mascu linidade saudável e propósito

### Kids IEDV
Colorido, vibrante · Inter Rounded ou similar · Alegre e seguro

---

*Style Guide gerado com base no logo @iedvglobal e análise do Instagram — junho de 2026.*
