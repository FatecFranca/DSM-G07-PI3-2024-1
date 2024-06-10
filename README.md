# DSM-G07-PI3-2024-1
Repositório do GRUPO 07 do Projeto Interdisciplinar do 3º semestre DSM 2024/1.

Alunos: Felipe Ferreira Rezende, Gian Carlo Fava, Samuel Santos Souza, Silvio Alves da Silva Junior

# Detalhes do código - Front-End

https://confiance.netlify.app/

### **1. NavBar.js**

Este componente representa a barra de navegação que inclui:

- **Campo de Busca**: Permite ao usuário pesquisar imóveis. A função `handleSearchChange` captura as mudanças no campo de busca e chama a função `onSearch` passada via props.
- **Menu de Perfil**: Inclui opções para acessar a conta do usuário, configurações e logout.
- **Ícones de Navegação**: Como chat, notificações e perfil do usuário.

**Detalhes Importantes**:

- `AppBar`, `Toolbar`, e outros componentes do MUI são usados para a estrutura.
- `styled` e `alpha` do MUI são usados para estilizar componentes.
- Estado gerencia o menu aberto e o estado de login.

### **2. PropertyList.js**

Este componente lista os imóveis e inclui a lógica de filtragem baseada na busca do usuário.

**Componentes e Funções**:

- **Estado**: Mantém a lista de imóveis (`properties`) e a consulta de busca (`searchQuery`).
- **Filtro de Busca**: Filtra os imóveis exibidos com base no texto da busca (`filteredProperties`).
- **Função de Busca**: `handleSearch` atualiza `searchQuery` conforme o usuário digita no campo de busca.

**Renderização**:

- Itera sobre `filteredProperties` e renderiza `ImovelCard` para cada imóvel.

### **3. ImovelCard.js**

Representa cada imóvel individualmente.

**Estrutura**:

- **Carousel**: Exibe imagens do imóvel usando `react-material-ui-carousel`.
- **Informações do Imóvel**: Mostra tipo, código, localização, descrição e preço.

**Detalhes**:

- Links para páginas de detalhes de propriedades.
- Usa `Card`, `CardContent`, `CardMedia` do MUI para a estrutura visual.

### Fluxo Geral

1. **NavBar**: Captura a consulta de busca do usuário.
2. **PropertyList**: Filtra e exibe os imóveis com base na consulta.
3. **ImovelCard**: Exibe os detalhes de cada imóvel.

### Exemplos de Interações

- **Busca**: Usuário digita no campo de busca → `NavBar` chama `onSearch` → `PropertyList` atualiza `searchQuery` e filtra imóveis.
- **Navegação de Imóvel**: Usuário clica em um imóvel → Redireciona para a página de detalhes do imóvel.

### Considerações Finais

O código é modular e usa componentes do MUI para estilização e estrutura, o que facilita a manutenção e a expansão do aplicativo. A funcionalidade de busca é implementada de maneira eficiente, permitindo ao usuário encontrar imóveis rapidamente com base nos critérios fornecidos.


# Detalhes do código - Back-End

https://dsm-g07-pi3-2024-1.onrender.com

## Tecnologias utilizadas na construção do projeto back-end:

1. **cors** (**`^2.8.5`**): Um middleware para habilitar a política de mesma origem (CORS) em aplicativos Express. Ele permite que um servidor restrinja ou permita solicitações de diferentes origens (domínios).
2. **bcryptjs** (**`^2.4.3`**): Uma biblioteca para hash de senhas. Ela é usada para criptografar senhas antes de armazená-las no banco de dados, tornando-as mais seguras contra ataques de força bruta.
3. **chalk** (**`^5.3.0`**): Uma biblioteca para colorir e estilizar o texto no terminal. É útil para melhorar a legibilidade das mensagens de log e saída do console.
4. **cookie-parser** (**`^1.4.6`**): Um middleware para processar cookies em aplicativos Express. Ele analisa os cookies enviados pelo cliente e os torna acessíveis no objeto **`req.cookies`**.
5. **dotenv** (**`^16.4.5`**): Uma biblioteca para carregar variáveis de ambiente de um arquivo **`.env`**. Isso é útil para armazenar configurações sensíveis (como chaves de API) fora do código-fonte.
6. **express** (**`^4.19.2`**): Um framework web para Node.js. Ele simplifica a criação de APIs e aplicativos da web, gerenciando rotas, middlewares e solicitações HTTP.
7. **jsonwebtoken** (**`^9.0.2`**): Uma biblioteca para criar e verificar tokens JWT (JSON Web Tokens). É comumente usado para autenticação e autorização em aplicativos.
8. **mongoose** (**`^8.2.3`**): Uma biblioteca ODM (Object-Document Mapper) para MongoDB. Ela facilita a interação com bancos de dados MongoDB, mapeando objetos JavaScript para documentos no banco de dados.
9. **morgan** (**`^1.10.0`**): Um middleware para registrar solicitações HTTP no console. É útil para depuração e monitoramento de tráfego.

Os dados da aplicação serão armazenados no MongoDB, um banco de dados NoSQL de código aberto e orientado a documentos. Ele foi projetado para oferecer flexibilidade, escalabilidade e desempenho para aplicações modernas.

## Estrutura do Projeto:

1. **Configurações e Dependências:**
    - `.env`: Arquivo de variáveis de ambiente.
    - `.env.example`: Exemplo do arquivo de variáveis de ambiente.
    - `.gitignore`: Arquivo para ignorar certos arquivos e diretórios no controle de versão Git.
    - `package.json`: Define as dependências e scripts do projeto Node.js.
    - `package-lock.json`: Trava as versões exatas das dependências instaladas.
2. **Código Fonte:**
    - `src/app.js`: Arquivo principal da aplicação.
    - `src/bin/server.js`: Script para iniciar o servidor.
3. **Controladores:**
    - `src/controllers/corretor.js`: Lida com a lógica de negócio relacionada aos corretores.
    - `src/controllers/funcionario.js`: Lida com a lógica de negócio relacionada aos funcionários.
    - `src/controllers/imobiliaria.js`: Lida com a lógica de negócio relacionada às imobiliárias.
    - `src/controllers/imovel.js`: Lida com a lógica de negócio relacionada aos imóveis.
4. **Middlewares:**
    - `src/middlewares/autenticacao.js`: Lida com a autenticação de usuários.
5. **Modelos:**
    - `src/models/Corretor.js`
    - `src/models/Funcionario.js`
    - `src/models/Imobiliaria.js`
    - `src/models/Imovel.js`
    
    Estes arquivos definem os esquemas e interações com o banco de dados para corretores, funcionários, imobiliárias e imóveis.
    
6. **Rotas:**
    - `src/routes/corretor.js`
    - `src/routes/funcionario.js`
    - `src/routes/imobiliaria.js`
    - `src/routes/imovel.js`
    
    Estes arquivos definem as rotas da API para corretores, funcionários, imobiliárias e imóveis.
    

## Rotas definidas no projeto:

### Rota: `corretor`

- `POST /`: Criar um novo corretor.
- `GET /`: Obter todos os corretores.
- `GET /:id`: Obter um corretor específico pelo ID.
- `PUT /:id`: Atualizar um corretor específico pelo ID.
- `DELETE /:id`: Deletar um corretor específico pelo ID.

### Rota: `funcionario`

- `POST /`: Criar um novo funcionário.
- `GET /`: Obter todos os funcionários.
- `GET /:id`: Obter um funcionário específico pelo ID.
- `POST /login`: Login de um funcionário.
- `PUT /:id`: Atualizar um funcionário específico pelo ID.
- `DELETE /:id`: Deletar um funcionário específico pelo ID.

### Rota: `imobiliaria`

- `POST /`: Criar uma nova imobiliária.
- `GET /`: Obter todas as imobiliárias.
- `GET /:id`: Obter uma imobiliária específica pelo ID.
- `PUT /:id`: Atualizar uma imobiliária específica pelo ID.
- `DELETE /:id`: Deletar uma imobiliária específica pelo ID.

### Rota: `imovel`

- `POST /`: Criar um novo imóvel.
- `GET /`: Obter todos os imóveis.
- `GET /search`: Pesquisar imóveis.
- `GET /:id`: Obter um imóvel específico pelo ID.
- `PUT /:id`: Atualizar um imóvel específico pelo ID.
- `DELETE /:id`: Deletar um imóvel específico pelo ID.
- `POST /:id/imagens`: Adicionar imagens a um imóvel específico pelo ID.
- `GET /:id/imagens`: Obter todas as imagens de um imóvel específico pelo ID.
- `GET /:id/imagens/:imagemId`: Obter uma imagem específica de um imóvel pelo ID da imagem.
- `PUT /:id/imagens/:imagemId`: Atualizar uma imagem específica de um imóvel pelo ID da imagem.
- `DELETE /:id/imagens/:imagemId`: Deletar uma imagem específica de um imóvel pelo ID da imagem.
