CONFIGURACAO_EMAILJS.md# 🔧 CONFIGURACAO EMAILJS - DADOS TECNICOS

## STATUS: ✅ COMPLETAMENTE ATIVADO E FUNCIONANDO

---

## 1. DADOS EMAILJS

### Conta EmailJS
- **Email:** brunovivo26@gmail.com
- **Senha:** Dba66369*
- **Dashboard:** https://dashboard.emailjs.com

### Chaves de API
- **Public Key:** `WsTHhr1WSMPzRqlpO`
- **Service ID:** `service_k9c6pdj`

---

## 2. TEMPLATES DE EMAIL CRIADOS

### Template 1: EMPRESA (Clientes)
- **Template ID:** `template_8jf2sc8`
- **Nome:** "Empresa Booking"
- **Descricao:** Email que chega quando uma empresa preenche o formulario
- **Email destinatario:** brunovivo26@gmail.com
- **Campos recebidos:**
  - nome_empresa
  - contacto
  - email
  - telefone
  - tipo_evento
  - data_evento
  - descricao

### Template 2: MUSICO (Artistas)
- **Template ID:** `template_1759rog`
- **Nome:** "Músico Booking"
- **Descricao:** Email que chega quando um musico preenche o formulario
- **Email destinatario:** brunovivo26@gmail.com
- **Campos recebidos:**
  - nome_musico
  - genero_musical
  - biografia
  - disponibilidade
  - tarifa
  - email
  - telefone

---

## 3. COMO FUNCIONA

### Fluxo dos Formularios:

1. **Pessoa preenche formulario no site** (musicosbooking.pt)
2. **Clica no botao "Enviar"**
3. **EmailJS recebe os dados** usando a Public Key
4. **Email é enviado** para brunovivo26@gmail.com
5. **Voce recebe email formatado** com toda a informacao

### Exemplo de Email Recebido:
```
Subject: Novo Pedido de Contratacao - Empresa: João's Events

Nome da Empresa: João's Events
Contacto: João Silva
Email: joao@events.com
Telefone: +351 912 345 678
Tipo de Evento: Casamento
Data Desejada: 15/06/2025
Descricao: Procuramos trio de jazz para coquetel
```

---

## 4. MUDANCAS FEITAS NO SITE

### Ficheiro: index.html

**Adicoes feitas:**
1. Importacao da biblioteca EmailJS:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/index.min.js"></script>
   ```

2. Inicializacao do EmailJS:
   ```javascript
   emailjs.init("WsTHhr1WSMPzRqlpO");
   ```

3. Handlers para os dois formularios:
   - empresaForm → envia para template_8jf2sc8
   - musicoForm → envia para template_1759rog

4. Mensagens de confirmacao:
   - ✅ "Pedido enviado com sucesso! Entraremos em contacto em breve."
   - ✅ "Proposta enviada com sucesso! Avaliaremos em breve."

---

## 5. LIMITES E QUOTAS

- **Emails por mes:** 200 (suficiente para comeco)
- **Custo adicional:** Gratis até 200 emails/mes
- **Para mais emails:** Considere upgrade (€ por mes)

---

## 6. COMO MUDAR O EMAIL QUE RECEBE

**IMPORTANTE:** O email atual é brunovivo26@gmail.com

Se quiser mudar para outro email:

1. **Edite o arquivo index.html**
2. **Procure por "brunovivo26@gmail.com"**
3. **Mude para o seu email**
4. **Salve (Commit)**
5. **Pronto! Emails agora vao para o novo email**

---

## 7. TESTES REALIZADOS

✅ EmailJS account criada com sucesso
✅ Gmail service conectado via OAuth
✅ Duas templates de email criadas
✅ Formularios integrados no HTML
✅ Site testado e funcionando
✅ Pasta "images" criada para fotos
✅ Guia de edicao criado

---

## 8. O QUE JA FUNCIONA

✅ Formulario de Empresa (Pedir Musicosv)
✅ Formulario de Musico (Cadastro de Artista)
✅ Envio automatico de emails
✅ Confirmacao visual para usuario
✅ Design profissional
✅ Design responsivo (mobile + desktop)

---

## 9. PROXIMOS PASSOS (OPCIONAIS)

### Melhorias possiveis:
1. Adicionar foto de perfil dos musicosv
2. Integrar pagamentos (Stripe, PayPal)
3. Sistema de avaliacoes
4. Chat integrado
5. Google Analytics
6. SEO melhorado
7. App mobile

---

## 10. SUPORTE

### Problemas comuns:

**P: Nao estou a receber emails**
R: Verifique se o formulario tem todos os campos preenchidos. Verifique a pasta de spam.

**P: Quer mudar a cor do design?**
R: Edite o arquivo index.html, procure por `<style>` e mude as cores.

**P: Quer adicionar mais campos no formulario?**
R: Adicione o campo HTML no index.html e adicione a variavel no JavaScript com mesmo nome.

**P: Como faco para aumentar o limite de emails?**
R: Va a https://dashboard.emailjs.com e faca upgrade na secção Account.

---

## 11. INFORMACOES IMPORTANTES

- **Site ao vivo:** http://musicosbooking.pt
- **GitHub:** https://github.com/Dba66369/musicosbooking
- **Dominio:** musicosbooking.pt (registado na Site.PT)
- **Hospedagem:** GitHub Pages (gratis)
- **Email service:** EmailJS (gratis até 200/mes)
- **Total custo mensal:** €0 (gratis!)

---

**Data de conclusao:** 22 de Janeiro de 2025
**Estado:** 100% Operacional ✅
