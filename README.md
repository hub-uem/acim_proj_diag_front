# Projeto Diagnóstico

O objetivo do Sistema de Diagnóstico é fornecer uma análise da empresa, permitindo que ela identifique áreas de melhoria e oportunidades de desenvolvimento através dos cursos oferecidos em parceria com o Hub de Inovação Fronteira da UEM. 

O sistema visa facilitar o processo de coleta de dados e geração de relatórios a fim de apoiar a tomada de decisão estratégica.

## Tecnologias Utilizadas
- React
- Next.js
- Tailwind CSS
- TypeScript

## Funcionalidades
- Análise empresarial detalhada.
- Questionário desenvolvido por especialistas.
- Interface responsiva e amigável.

## Como Executar o Projeto

### Pré-requisitos
- Node.js (22.14.0)
- npm (11.3.0)

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/hub-uem/acim_proj_diag_front.git
   ```
   
2. Navegue até o diretório do projeto:
   ```bash
   cd acim_proj_diag_front
   ```
   
3. Instale as dependências:
   ```bash
   npm install
   ```

4. Faça uma auditoria de segurança no projeto:
   ```bash
   npm audit fix
   ```

5. Crie um .env.local e adicione:
   ```bash
   NEXT_PUBLIC_HOST=http://localhost:8000
   ```
   
6. Inicie o servidor de desenvolvimento (apenas para desenvolvedores):
   ```bash
   npm run dev
   ```

7. Inicie o servidor de produção:
   ```bash
   npm build:prod
   npm start:prod
   ```
