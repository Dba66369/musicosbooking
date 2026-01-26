require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Configurar transportador de email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Rota para enviar email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nome, email e mensagem são obrigatórios' });
  }
  
  try {
    console.log(`[${new Date().toISOString()}] Tentando enviar email de ${email}`);
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || `${name} <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Mensagem de Contato - MusicosBooking - ${name}`,
      html: `
        <h2>Nova Mensagem de Contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log(`[${new Date().toISOString()}] Email enviado com sucesso: ${info.messageId}`);
    
    res.status(200).json({ 
      success: true, 
      message: 'Email enviado com sucesso!',
      messageId: info.messageId
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Erro ao enviar email:`, error);
    res.status(500).json({ 
      error: 'Erro ao enviar email',
      details: error.message
    });
  }
});

// Rota de saúde
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Servidor rodando na porta ${PORT}`);
  console.log(`[${new Date().toISOString()}] Email configured: ${process.env.EMAIL_USER || 'NO EMAIL CONFIGURED'}`);
});

module.exports = app;
