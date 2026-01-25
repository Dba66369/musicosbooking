-- MúsicosBooking.pt - Esquema de Banco de Dados Atualizado

-- 1. MODIFICAÇÃO NA TABELA usuarios_empresas
-- Adicionar campos de verificação automática
ALTER TABLE usuarios_empresas 
ADD COLUMN email_verificado BOOLEAN DEFAULT TRUE,
ADD COLUMN pode_entrar_imediatamente BOOLEAN DEFAULT TRUE;

-- 2. TABELA: listas_musica (SEED DATA para sugestões)
CREATE TABLE listas_musica (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    tipo_evento VARCHAR(50), -- Casamento, Corporativo, Restaurante, Social
    categoria VARCHAR(50), -- Entrada, Jantar, Dança, Cerimônia, Saída
    genero VARCHAR(100), -- Pop Rock, Clássica, Romântica, etc.
    musicas JSONB, -- Array de objetos {artista, musica, duracao}
    icone VARCHAR(255), -- Emoji ou URL
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. TABELA: pagamentos
CREATE TABLE pagamentos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pedido_id UUID REFERENCES pedidos(id),
    empresa_id UUID REFERENCES usuarios_empresas(id),
    musico_id UUID REFERENCES usuarios_musicos(id),
    valor DECIMAL(10, 2) NOT NULL,
    metodo_pagamento VARCHAR(50) CHECK (metodo_pagamento IN ('transferencia_bancaria', 'mbway')),
    status VARCHAR(20) DEFAULT 'pendente', -- pendente, confirmado, cancelado
    detalhes_pagamento JSONB, -- {iban, bic, titular} ou {numero_mbway}
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. TABELA: curriculos_musicos
CREATE TABLE curriculos_musicos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    musico_id UUID REFERENCES usuarios_musicos(id) UNIQUE,
    descricao_profissional TEXT, -- até 500 caracteres
    experiencia TEXT,
    educacao TEXT,
    certificacoes TEXT[], -- Array de strings
    discografia JSONB, -- Array de {album, ano, link}
    videos_desempenho TEXT[], -- URLs YouTube
    imagens_eventos TEXT[], -- URLs Fotos
    referencias JSONB, -- Array de {cliente, evento, data}
    texto_completo_biografia TEXT, -- até 1000 caracteres
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SEED DATA EXEMPLO para listas_musica
INSERT INTO listas_musica (nome, descricao, tipo_evento, categoria, genero, musicas, icone) VALUES 
('Entrada dos Noivos', 'Músicas clássicas e românticas para o momento mais especial.', 'Casamento', 'Entrada', 'Clássica', 
 '[{"artista": "Johann Pachelbel", "musica": "Canon in D", "duracao": "5:00"}, 
   {"artista": "Mendelssohn", "musica": "Wedding March", "duracao": "4:30"}]', '👰'),
('Jantar Romântico', 'Ambiente sofisticado e acolhedor.', 'Restaurante', 'Jantar', 'Romântica', 
 '[{"artista": "Tom Jobim", "musica": "Águas de Março", "duracao": "3:32"}, 
   {"artista": "Coldplay", "musica": "The Scientist", "duracao": "5:09"}]', '🍷');
