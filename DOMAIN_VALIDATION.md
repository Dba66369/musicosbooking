# Validação do Domínio musicosbooking.pt

## Status de Validação

Este documento descreve como validar e configurar o domínio `musicosbooking.pt` para envio de emails.

### 1. Verificação de Registros DNS

#### SPF (Sender Policy Framework)
```
Registro TXT: v=spf1 include:_spf.google.com ~all
```

**Como adicionar:**
- Acesse o painel de controle do seu provedor de domínio
- Vá para registros DNS/TXT
- Adicione o registro SPF acima
- Aguarde 24-48 horas para propagação

**Para validar:**
- Acesse: https://mxtoolbox.com
- Procure por "SPF Check"
- Digite: musicosbooking.pt
- Resultado esperado: PASS

#### DKIM (DomainKeys Identified Mail)

**Gerar chave DKIM:**
```bash
# Instale openssl se necessário
openssl genrsa -out private.key 2048
openssl rsa -in private.key -pubout -out public.key
```

**Adicionar ao DNS:**
- Copie o conteúdo de `public.key`
- Crie um registro TXT chamado `default._domainkey.musicosbooking.pt`
- Valor: `v=DKIM1; k=rsa; p=[sua_chave_publica]
- Aguarde propagação

**Para validar:**
- https://mxtoolbox.com → DKIM Lookup
- Resultado esperado: chave encontrada

#### DMARC (Domain-based Message Authentication)

```
Registro TXT: v=DMARC1; p=quarantine; rua=mailto:admin@musicosbooking.pt
```

**Como adicionar:**
- Crie registro TXT: `_dmarc.musicosbooking.pt`
- Valor: acima
- Aguarde propagação

**Para validar:**
- https://mxtoolbox.com → DMARC Lookup
- Resultado esperado: PASS

### 2. Teste de Entrega de Email

**Ferramenta: Mail Tester**
1. Acesse: https://www.mail-tester.com
2. Copie o endereço de teste fornecido
3. Envie um email de teste via formulário
4. Verifique a pontuação (meta: 8+/10)
5. Identifique e corrija problemas

### 3. Teste em Múltiplos Provedores

Envie emails de teste para:
- Gmail: seu_email@gmail.com
- Outlook: seu_email@outlook.com
- Yahoo: seu_email@yahoo.com

**Verificação:**
- Email chega na caixa de entrada?
- Email vai para spam?
- Headers estão corretos?

### 4. Configuração para Gmail/Outlook

Se usar Gmail para envio:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_app_password
```

**Para obter App Password:**
1. Ative 2FA no Google Account
2. Vá para: https://myaccount.google.com/apppasswords
3. Selecione: Mail + Windows Computer (ou seu dispositivo)
4. Copie a senha gerada
5. Use no `.env`

### 5. Logs de Validação

Verifique os logs do servidor:

```bash
npm run dev  # Inicia servidor com logs
```

Procure por mensagens:
- `[TIMESTAMP] Servidor rodando na porta 3000`
- `[TIMESTAMP] Email enviado com sucesso: [message_id]`
- `[TIMESTAMP] Erro ao enviar email` (se houver)

### 6. Checklist de Validação

- [ ] SPF registrado e validado
- [ ] DKIM configurado
- [ ] DMARC implementado
- [ ] Mail Tester score 8+/10
- [ ] Email testado em Gmail
- [ ] Email testado em Outlook
- [ ] Email testado em Yahoo
- [ ] Servidor Node.js rodando
- [ ] Formulário enviando dados
- [ ] Emails chegando em caixa de entrada

### 7. Próximos Passos

1. Configurar credenciais reais no `.env`
2. Executar testes de email
3. Monitorar logs
4. Implementar retry logic
5. Adicionar notificações de erro
6. Integrar com site atual

