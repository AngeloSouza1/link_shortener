# Encurtador de Links

**Encurtador de Links** é uma aplicação desenvolvida em **Ruby on Rails** com **PostgreSQL**. O objetivo é permitir que os usuários encurtem links longos, facilitando o compartilhamento de URLs de maneira rápida e simples.


## Funcionalidades
- Encurtamento de links.
- Geração de um link curto para cada URL fornecida.
- Capacidade de copiar o link encurtado para a área de transferência.
- Exibição do link original e do link encurtado.



## Tecnologias Utilizadas
- **Ruby on Rails**: Framework utilizado para desenvolvimento da aplicação.
- **PostgreSQL**: Banco de dados utilizado para armazenar as URLs.
- **Bootswatch**: Tema utilizado para a estilização da interface.
- **HTML/CSS/JavaScript**: Interface interativa para o usuário.



## Requisitos
Certifique-se de ter os seguintes itens instalados no seu ambiente:
- Ruby 3.3.4 ou superior
- Rails 7.x
- PostgreSQL
- Docker (opcional, para rodar o projeto em container)



## Instalação e Execução

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/encurtador-de-links.git
   cd encurtador-de-links
   ```

2. Instale as dependências do Ruby on Rails

   ```
   bundle install
   ```
3. Configure o banco de dados: Certifique-se de configurar as variáveis de ambiente para o PostgreSQL no seu arquivo .env, e em seguida, crie e migre o banco de dados:
   ```
   rails db:create
   rails db:migrate
   ```
4. Execute o servidor Rails localmente:
   ```
   rails server
   ```
5. Acesse a aplicação em: http://localhost:3000



## Como Usar

   - Acesse a página inicial do Encurtador de Links.
   - Insira o link que deseja encurtar no campo apropriado.
   - Clique no botão Encurtar para gerar o link curto.
   - Copie o link encurtado clicando no botão Copiar Link.
    


## Estrutura do Projeto

   - app/: Contém a lógica da aplicação Rails.
   - config/: Configurações do banco de dados e do Rails.
   - public/: Arquivos estáticos, como o HTML da interface.
   - Gemfile: Arquivo de dependências Ruby.
   - Gemfile.lock: Arquivo que trava as versões das gems.
   - .env: Arquivo de variáveis de ambiente para configuração do banco de dados.



## Contribuições

Contribuições são bem-vindas! Para colaborar:

  -  Faça um fork do projeto.
  -  Crie uma branch para sua feature ou correção:

git checkout -b minha-feature

Envie suas modificações:

  -  git commit -m "Minha nova feature"
  -  git push origin minha-feature

  -  Abra um Pull Request.



## Licença

Este projeto está licenciado sob a MIT License.
Autor

Angelo Souza
LinkedIn
GitHub


   

   


   

   
