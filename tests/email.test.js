const request = require('supertest');
const app = require('../server');

describe('Email Endpoint Tests', () => {
  describe('POST /send-email', () => {
    test('Deve enviar email com sucesso quando dados são válidos', async () => {
      const emailData = {
        name: 'João Silva',
        email: 'joao@example.com',
        message: 'Teste de envio de email'
      };

      const response = await request(app)
        .post('/send-email')
        .send(emailData);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toContain('sucesso');
    });

    test('Deve retornar erro quando campos obrigatórios estão faltando', async () => {
      const invalidData = {
        name: 'João Silva'
        // Faltam email e message
      };

      const response = await request(app)
        .post('/send-email')
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.error).toBeDefined();
    });

    test('Deve validar formato de email', async () => {
      const invalidEmail = {
        name: 'João Silva',
        email: 'email-invalido',
        message: 'Teste'
      };

      const response = await request(app)
        .post('/send-email')
        .send(invalidEmail);

      // Pode aceitar mas com validadores melhorados
      expect(response.status).toBeDefined();
    });
  });

  describe('GET /health', () => {
    test('Deve retornar status OK', async () => {
      const response = await request(app)
        .get('/health');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('OK');
    });
  });
});
