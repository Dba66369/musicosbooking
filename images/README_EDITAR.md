# 📖 GUIA COMPLETO: COMO EDITAR O SEU SITE

## 1. EDITAR TEXTOS E CONTEÚDO

### Onde estão os textos no site?
Todos os textos estão no arquivo `index.html` no GitHub:
- **GitHub:** https://github.com/Dba66369/musicosbooking
- **Seu site ao vivo:** https://musicosbooking.pt

### Como editar textos:
1. Aceda a: https://github.com/Dba66369/musicosbooking/edit/main/index.html
2. Procure o texto que quer mudar (use Ctrl+F para procurar)
3. Mude o texto
4. Clique em "Commit changes..." para guardar
5. Espere 1-2 minutos e o site atualiza automaticamente

### Exemplo: Mudar o título da página
Procure por: `<title>` e mude o texto lá dentro

---

## 2. ADICIONAR FOTOS

### Passo 1: Upload de Fotos para GitHub
1. Vá para: https://github.com/Dba66369/musicosbooking/tree/main/images
2. Clique no botão "Add file" → "Upload files"
3. Arraste as suas fotos para a caixa (ou clique para seleccionar)
4. Clique "Commit changes" para guardar

### Passo 2: Adicionar a Foto no HTML
1. Edite o `index.html` (clique no botão edit)
2. Procure o local onde quer adicionar a foto
3. Adicione este código HTML:

```html
<img src="images/nome-da-sua-foto.jpg" alt="Descrição da foto">
```

**Exemplo prático:**
```html
<!-- Adicionar foto do João, músico -->
<img src="images/joao-musico.jpg" alt="João - Músico Profissional">
```

### Passo 3: Fazer commit e pronto!
O site atualiza automaticamente em 1-2 minutos.

---

## 3. ADICIONAR NOVOS MÚSICOS À PÁGINA

O seu site tem uma secção para mostrar músicos. Para adicionar um novo:

### Código HTML para um músico:
```html
<div class="musico-card">
  <img src="images/nome-musico.jpg" alt="Nome do Músico">
  <h3>Nome do Músico</h3>
  <p class="genero">Género: Jazz, Clássico</p>
  <p class="descricao">Breve descrição do músico e experiência</p>
  <p class="tarifa">€50 - €100 por hora</p>
  <button onclick="document.getElementById('musicoForm').style.display='block'">
    Contactar
  </button>
</div>
```

### Passos:
1. Faça upload da foto para a pasta `images`
2. Edite o `index.html`
3. Procure pela secção de músicos
4. Copie e cole o código acima, mude os dados
5. Commit e pronto!

---

## 4. CORES E DESIGN

### Mudar cores
Procure por `<style>` no index.html. As cores principais estão definidas como:
- `background`: cor de fundo
- `color`: cor do texto
- `border-color`: cor das bordas

**Exemplo:** Mudar a cor principal de azul para verde
```css
.btn-primary {
  background: #2ecc71; /* verde ao invés de azul */
}
```

---

## 5. ADICIONAR NOVOS ELEMENTOS

### Adicionar um novo botão
```html
<button class="btn-primary">Clique aqui</button>
```

### Adicionar um novo parágrafo
```html
<p>Este é um novo parágrafo com texto importante.</p>
```

### Adicionar um link
```html
<a href="https://www.google.com">Clique para ir ao Google</a>
```

---

## 6. FORMULÁRIOS (JÁ CONFIGURADOS!)

✅ Os dois formulários já estão funcionando:

### Formulário de Empresa (clientes)
- Pessoas preenchem com dados da sua empresa
- Clicam em "Enviar"
- **Você recebe um email** em brunovivo26@gmail.com

### Formulário de Músico (artistas)
- Músicos preenchem com dados deles
- Clicam em "Enviar"
- **Você recebe um email** em brunovivo26@gmail.com

**Para mudar o email que recebe:**
No index.html, procure por `brunovivo26@gmail.com` e mude para o email que quer.

---

## 7. CHECKLIST FINAL

✅ Site ao vivo em musicosbooking.pt
✅ Formulários de Empresa e Músico funcionando
✅ Emails a chegar à sua caixa
✅ Pasta de imagens criada
✅ Pronto para adicionar fotos e conteúdo

---

## 8. PROBLEMAS COMUNS

### P: Fiz uma mudança mas o site não mudou
**R:** Espere 2-3 minutos. O site atualiza automaticamente. Clique F5 para recarregar.

### P: Como mudo o domínio musicosbooking.pt?
**R:** O domínio está registado na Site.PT. Precisa de aceder a clientes.site.pt para mudar as configurações de DNS.

### P: Posso mudar o design todo?
**R:** Sim! Tudo está no index.html. Mas cuidado para não danificar o HTML. Se estragar, eu posso restaurar do backup.

---

## 9. RECURSOS ÚTEIS

- **Imagens grátis:** unsplash.com, pexels.com
- **Ícones:** fontawesome.com
- **Cores:** colorpicker.com
- **Fontes:** fonts.google.com

---

## 10. PRÓXIMOS PASSOS OPCIONAIS

- Adicione fotos dos seus músicos
- Escreva descrições profissionais
- Adicione mais informações nos formulários
- Configure o Google Analytics para ver quantas pessoas visitam
- Configure SEO para aparecer no Google

---

**Dúvidas? Contacte-me! O site está pronto para usar! 🎵**
