## Ajustes finais da Landing Page

### 1. Logo do cabeçalho maior
Em `src/routes/index.tsx` (Navbar):
- Aumentar de `h-10` (40 px) para `h-14` no mobile e `h-20` no desktop.
- Ajustar `width/height` do atributo para `220x72` (proporção correta).
- Adicionar `self-center` para alinhamento vertical perfeito.

Também tentar gerar uma versão com fundo transparente da logo em `src/assets/vetta-logo.png` via `imagegen--edit_image`. Se falhar, manter a atual (o header em graphite já disfarça bem).

### 2. Destaque na headline
No Hero, envolver apenas "Vamos criar a sua?" em um `<span>` com:
- `color: var(--terracotta)` (mantido)
- `font-style: italic` (mantido)
- `textShadow: "0 0 18px rgba(255,255,255,0.45), 0 1px 2px rgba(255,255,255,0.35)"` — suave brilho branco para dar foco.

O restante da frase ("Cada detalhe da sua casa conta uma história.") permanece na cor bege padrão, sem sombra.

### 3. Corrigir link do WhatsApp
Todos os CTAs já usam a constante `WHATSAPP` centralizada (Menu, Hero, MidCTA, FinalCTA, Environments, Footer, FloatingWhatsApp). Basta atualizar `WHATSAPP_TEXT` para:

```
"Olá! Gostaria de solicitar um orçamento."
```

Isso garante que o link final seja exatamente:
`https://wa.me/5547988271864?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.`

(o `encodeURIComponent` já produz o mesmo resultado do link solicitado)

### 4. Verificação
Após aplicar, rodar Playwright para conferir o header em desktop e mobile e clicar num botão de WhatsApp para confirmar o `href`.

### Arquivos afetados
- `src/routes/index.tsx`
- `src/assets/vetta-logo.png` (tentativa de fundo transparente)

Nenhuma outra parte da identidade visual, estrutura ou conteúdo será alterada.