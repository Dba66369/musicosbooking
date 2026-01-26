# Guia Completo de Teste de Email - MusicosBooking

## 📬 Introdução

Este guia fornece instruções práticas para testar o funcionamento do sistema de envio de emails do site MusicosBooking utilizando o domínio configurado (musicosbooking.pt).

## 🔒 Configuração Inicial

### 1. **Instalar Dependências**
```bash
npm install
```

### 2. **Configurar Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto (não fazer commit desta arquivo - usar `.env.example` como referência):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=admin@musicosbooking.pt
EMAIL_PASS=sua_senha_ou_app_password
EMAIL_FROM=noreply@musicosbooking.pt
NODE_ENV=development
PORT=3000
```

## 🎯 DNS/Email Validation

### Verificar Registros SPF, DKIM e DMARC

1. **MXToolbox** (https://mxtoolbox.com)
   - Teste SPF: Seu domínio deve passar no teste
   - Teste DKIM: Valide a chave pública
   - Teste DMARC: Verifique a política

2. **Google Admin Toolbox** (https://toolbox.googleapps.com/apps/dig)
   - Execute: `dig musicosbooking.pt MX`
   - Verifique os registros MX

3. **Mail Tester** (https://www.mail-tester.com)
   - Envie um email de teste
   - Obtenha uma pontuação (meta: 8+/10)

## 🚀 Executar o Servidor

```bash
# Modo desenvolvimento
npm run dev

# Modo produção
npm start
```

O servidor estará disponível em: `http://localhost:3000`

## ✍️ Testar Envio de Email

### Opção 1: Usar o Formulário HTML
Acesse: `http://localhost:3000/contact.html`

Preencha com:
- Nome: João Silva
- Email: seu_email@example.com
- Mensagem: Teste de envio

### Opção 2: Usar Postman/Insomnia

**URL:** `POST http://localhost:3000/send-email`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "message": "Teste de envio de email"
}
```

### Opção 3: Usar cURL
```bash
curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "message": "Teste de envio"
  }'
```

## 🛶 Executar Testes Automatizados

```bash
# Rodar todos os testes
npm test

# Rodar com cobertura
npm test -- --coverage
```

Os testes verificam:
- Envio de email com dados válidos
- Rejeição de dados inválidos
- Validação de formato de email
- Rota de saúde do servidor

## 📄 Verificação Final

1. **Verifique os Logs do Servidor**
   - Procure por mensagens como: "[TIMESTAMP] Email enviado com sucesso: message_id"

2. **Verifique a Caixa de Entrada**
   - Email deve chegar em admin@musicosbooking.pt
   - Verifique pasta de spam se não chegar

3. **Teste em Múltiplos Provedores**
   - Gmail
   - Outlook
   - Yahoo

## 🛠 Ferramentas Recomendadas

- **Mailtrap** (https://mailtrap.io) - Para testes sem enviar emails reais
- **MailHog** - Servidor SMTP local para testes
- **SendGrid** - Serviço profissional de email
- **GitHub Actions** - Automação de testes

## ⚠️ Troubleshooting

| Problema | Solução |
|----------|----------|
| Email vai para spam | Verifique SPF/DKIM/DMARC |
| "SMTP authentication failed" | Verifique credenciais no .env |
| "Connection refused" | Certifique-se que SMTP_HOST e PORT estão corretos |
| Teste falha | Execute `npm install` novamente |

## 📇 Estrutura do Projeto

```
musicosbooking/
├── server.js                 # Backend Express
├── package.json              # Dependências
├── .env.example              # Template de variáveis
├── .gitignore                # Arquivos ignorados
├── tests/
├──    └── email.test.js        # Testes automáticos
├── public/
├──    └── contact.html         # Formulário HTML
├── README.md                 # Documentação
└── EMAIL_TESTING_GUIDE.md    # Este arquivo
```

## 🎆 Próximos Passos

1. Implantar em produção (Vercel, Heroku, etc)
2. Configurar variáveis de ambiente em produção
3. Implementar autenticação de formulário
4. Adicionar validadores mais robustos
5. Implementar rate limiting
6. Adicionar logs estruturados

## 👤 Suporte

Para dúvidas sobre o sistema de emails, consulte:
- [Documentação do Nodemailer](https://nodemailer.com/)
- [Express.js Docs](https://expressjs.com/)
- [Jest Testing Docs](https://jestjs.io/)
