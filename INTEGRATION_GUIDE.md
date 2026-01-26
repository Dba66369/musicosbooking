# Guia de Integração - Sistema de Email com Site MusicosBooking

## 1. Estrutura de Pastas

Adicione as seguintes pastas ao seu site:

```
musicosbooking/
├── email-backend/          # Novo: Sistema de emails
├── public/
├── tests/
├── server.js               # Backend Node.js
├─┠ package.json
├─┠ .env                   # Credenciais (não commitar)
├─┠ .env.example           # Template
├─┠ .gitignore
├┠ EMAIL_TESTING_GUIDE.md
├┠ DOMAIN_VALIDATION.md
├┠ INTEGRATION_GUIDE.md
```

## 2. Integração do Formulário

### 2.1 Adicionar Botão de Contato no Site

Adicione um botão no seu site que aponte para o formulário:

```html
<!-- No seu HTML do site -->
<a href="/contact.html" class="btn btn-primary">Entrar em Contato</a>
<!-- OU -->
<a href="/email-backend/contact.html" class="btn btn-primary">Enviar Email</a>
```

### 2.2 Integração HTML/CSS

Se quiser integrar melhor com seu design atual:

```html
<!-- Formulário inline no seu site -->
<form id="emailForm" style="max-width: 500px; margin: 20px auto;">
  <div class="form-group">
    <label for="name">Nome:</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="message">Mensagem:</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Enviar</button>
  <div id="response"></div>
</form>

<script>
  document.getElementById('emailForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    try {
      const res = await fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        document.getElementById('response').innerHTML = 
          '<p style="color: green;">Email enviado com sucesso!</p>';
        document.getElementById('emailForm').reset();
      } else {
        document.getElementById('response').innerHTML = 
          `<p style="color: red;">Erro: ${data.error}</p>`;
      }
    } catch (error) {
      document.getElementById('response').innerHTML = 
        `<p style="color: red;">Erro: ${error.message}</p>`;
    }
  });
</script>
```

## 3. Configuração do Backend

### 3.1 Instalar Dependencias

```bash
cd musicosbooking
npm install
```

### 3.2 Configurar .env

```bash
cp .env.example .env
# Editar .env com suas credenciais SMTP
```

### 3.3 Rodar o Servidor

**Desenvolvimento:**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

## 4. Deploy

### Opção 1: Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

Configure variáveis de ambiente:
1. Vá para Vercel Dashboard
2. Project Settings → Environment Variables
3. Adicione: SMTP_HOST, SMTP_PORT, EMAIL_USER, EMAIL_PASS

### Opção 2: Heroku

```bash
heroku login
heroku create musicosbooking-email
heroku config:set SMTP_HOST=smtp.mailtrap.io
heroku config:set EMAIL_USER=seu_user
heroku config:set EMAIL_PASS=sua_pass
git push heroku main
```

### Opção 3: Seu Servidor

```bash
# SSH no servidor
ssh seu_usuario@seu_servidor

# Clonar repo
git clone https://github.com/seu_user/musicosbooking.git
cd musicosbooking

# Instalar PM2 (process manager)
npm install -g pm2

# Criar .env com credenciais
echo "SMTP_HOST=..." > .env

# Iniciar com PM2
pm2 start server.js --name musicosbooking-email

# Salvar processo
pm2 save
```

## 5. Testes

### 5.1 Teste Local

```bash
# Terminal 1: Rodar servidor
npm run dev

# Terminal 2: Rodar testes
npm test
```

### 5.2 Teste via cURL

```bash
curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "message": "Teste de email"
  }'
```

### 5.3 Teste via Formulário

1. Acesse http://localhost:3000/contact.html
2. Preencha o formulário
3. Clique em "Enviar Mensagem"
4. Verifique caixa de entrada

## 6. Monitoramento

### 6.1 Logs

```bash
# Ver logs em tempo real
npm run dev

# OU com PM2
pm2 logs musicosbooking-email
```

### 6.2 Métricas Importantes

- Emails enviados: Check `/send-email` logs
- Taxa de sucesso: Emails chegando na caixa de entrada
- Tempo de resposta: < 1 segundo
- Erros de autenticação: Verificar credenciais .env

## 7. Troubleshooting

| Problema | Solução |
|----------|----------|
| "SMTP authentication failed" | Verificar EMAIL_USER e EMAIL_PASS no .env |
| "Connection refused" | Verificar SMTP_HOST e SMTP_PORT |
| "Port already in use" | Mudar PORT no .env ou matar processo anterior |
| Emails em spam | Configurar SPF/DKIM/DMARC corretamente |
| Formulário não funciona | Verificar se servidor está rodando |
| Testes falhando | Executar `npm install` novamente |

## 8. Próximos Passos

1. ✓ Integrar formulário no site
2. ✓ Configurar credenciais SMTP
3. ✓ Deploy em produção
4. ✓ Adicionar retry logic
5. ✓ Implementar rate limiting
6. ✓ Adicionar verificação de CAPTCHA
7. ✓ Integrar com banco de dados
8. ✓ Enviar confirmação ao usuário

