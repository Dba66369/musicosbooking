# MusicosBooking - Sistema Completo de Email

## 🌟 Status: COMPLETO E TESTADO

Este é o guia completo para usar o sistema de email do MusicosBooking.

## 📄 Documentação

Todos os arquivos que você precisa:

1. **EMAIL_TESTING_GUIDE.md** - Como testar o sistema
2. **DOMAIN_VALIDATION.md** - Como validar o domínio
3. **INTEGRATION_GUIDE.md** - Como integrar com seu site
4. **.env.example** - Template de configuração
5. **server.js** - Backend Node.js
6. **public/contact.html** - Formulário pronto para usar
7. **tests/email.test.js** - Suite de testes

## ⚡ Início Rápido (5 minutos)

### Passo 1: Preparar Ambiente

```bash
# Clonar repositório
git clone https://github.com/Dba66369/musicosbooking.git
cd musicosbooking

# Instalar dependências
npm install
```

### Passo 2: Configurar Credenciais

```bash
# Copiar template
cp .env.example .env

# Editar com suas credenciais
nano .env  # ou vi .env
```

**Opção A: Gmail (mais fácil)**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_app_password
```

**Opção B: Mailtrap (para testes)**
```env
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=465
EMAIL_USER=sua_credencial
EMAIL_PASS=sua_senha
```

### Passo 3: Rodar e Testar

```bash
# Terminal 1: Iniciar servidor
npm run dev

# Resultado esperado:
# [TIMESTAMP] Servidor rodando na porta 3000
```

**Em outro terminal:**
```bash
# Terminal 2: Rodar testes
npm test

# Resultado esperado:
# Email Endpoint Tests
#   ✓ Deve enviar email com sucesso
#   ✓ Deve retornar erro quando campos faltam
#   ...
```

### Passo 4: Testar Formulário

1. Abra seu navegador: `http://localhost:3000/contact.html`
2. Preencha o formulário
3. Clique em "Enviar Mensagem"
4. Verifique sua caixa de entrada

## 📚 Guias Detalhados

### Ver email sendo enviado?
```bash
npm run dev  # Ver logs
```

Procure por:
```
[TIMESTAMP] Tentando enviar email de ...
[TIMESTAMP] Email enviado com sucesso: message_id
```

### Email vai para spam?
Ver: **DOMAIN_VALIDATION.md**

### Integrar no meu site?
Ver: **INTEGRATION_GUIDE.md**

### Problemas?
Ver: **EMAIL_TESTING_GUIDE.md** (seção Troubleshooting)

## 🚀 Deploy em Produção

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

Configure variáveis no Vercel Dashboard.

### Heroku

```bash
heroku create seu_projeto
heroku config:set SMTP_HOST=smtp.mailtrap.io
heroku config:set EMAIL_USER=user
heroku config:set EMAIL_PASS=pass
git push heroku main
```

### Seu Servidor

```bash
ssh seu_servidor
git clone seu_repo
cd seu_repo
npm install
npm install -g pm2
pm2 start server.js
```

## ✅ Checklist Final

Antes de usar em produção:

- [ ] Arquivo `.env` criado e configurado
- [ ] `npm install` executado
- [ ] Servidor rodando sem erros (`npm run dev`)
- [ ] Testes passando (`npm test`)
- [ ] Formulário enviando dados com sucesso
- [ ] Email recebido na caixa de entrada
- [ ] SPF/DKIM/DMARC validados (se usar domínio próprio)
- [ ] Deploy testado em staging
- [ ] Botão de contato integrado no site
- [ ] Email de confirmação implementado (opcional)

## 🔐 Segurança

**IMPORTANTE: NUNCA commite o arquivo `.env`**

```bash
# Verificar
cat .gitignore
# Deve conter: .env
```

## 📌Résumen da Solução

| Componente | Status | Arquivo |
|------------|--------|----------|
| Backend Express | ✅ Pronto | `server.js` |
| Formulário HTML | ✅ Pronto | `public/contact.html` |
| Testes Jest | ✅ Pronto | `tests/email.test.js` |
| Configuração SMTP | ✅ Pronto | `.env.example` |
| Documentação | ✅ Completa | `*.md` |
| Validação Domínio | ✅ Guia | `DOMAIN_VALIDATION.md` |
| Integração | ✅ Guia | `INTEGRATION_GUIDE.md` |

## 👥 Suporte

Dúvidas? Consulte:
1. `EMAIL_TESTING_GUIDE.md` - Guia de Testes
2. `DOMAIN_VALIDATION.md` - Validação
3. `INTEGRATION_GUIDE.md` - Integração
4. GitHub Issues: seu_repo/issues

## 🚀 Próximos Passos

1. Configurar `.env` com suas credenciais
2. Executar `npm run dev`
3. Acessar `http://localhost:3000/contact.html`
4. Testar envio de email
5. Integrar no seu site
6. Deploy em produção

---

**Data:** 26/01/2026
**Versão:** 1.0.0
**Status:** ✅ Completo e Testado

