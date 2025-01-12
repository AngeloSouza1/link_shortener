# Encurtador de Links

Este projeto é um **Encurtador de Links** desenvolvido com **Ruby on Rails** e utilizando **PostgreSQL** como banco de dados. O objetivo da aplicação é permitir aos usuários encurtar links longos para versões curtas e mais fáceis de compartilhar.

## Funcionalidades

- Encurtamento de links.
- Geração de um link curto para cada URL fornecida.
- Capacidade de copiar o link encurtado para a área de transferência.
- Exibição do link original e do link encurtado.

## Tecnologias Usadas

- **Ruby on Rails**: Framework para desenvolvimento da aplicação.
- **PostgreSQL**: Banco de dados utilizado para armazenamento das URLs.
- **Bootswatch**: Tema utilizado para a estilização da interface.
- **Docker**: Utilizado para a criação de containers para a aplicação.

## Instalação

### Pré-requisitos

- **Ruby** (3.3.4)
- **Rails** (7.x)
- **PostgreSQL** (Para produção)
- **Docker** (Opcional, para usar containers)

### Passo a Passo para Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu_usuario/seu_repositorio.git
   cd seu_repositorio

Claro! Aqui está o README.md atualizado sem a seção de Deploy:

# Encurtador de Links

Este projeto é um **Encurtador de Links** desenvolvido com **Ruby on Rails** e utilizando **PostgreSQL** como banco de dados. O objetivo da aplicação é permitir aos usuários encurtar links longos para versões curtas e mais fáceis de compartilhar.

## Funcionalidades

- Encurtamento de links.
- Geração de um link curto para cada URL fornecida.
- Capacidade de copiar o link encurtado para a área de transferência.
- Exibição do link original e do link encurtado.

## Tecnologias Usadas

- **Ruby on Rails**: Framework para desenvolvimento da aplicação.
- **PostgreSQL**: Banco de dados utilizado para armazenamento das URLs.
- **Bootswatch**: Tema utilizado para a estilização da interface.
- **Docker**: Utilizado para a criação de containers para a aplicação.

## Instalação

### Pré-requisitos

- **Ruby** (3.3.4)
- **Rails** (7.x)
- **PostgreSQL** (Para produção)
- **Docker** (Opcional, para usar containers)

### Passo a Passo para Instalação

1. Clone o repositório:
   
 ```
     git clone https://github.com/seu_usuario/seu_repositorio.git
     cd seu_repositorio
```

2. Configure o banco de dados:
Se você estiver usando PostgreSQL, edite o arquivo .env com as variáveis de ambiente necessárias e configure as credenciais no arquivo config/database.yml.
 
```
    rails db:create
    rails db:migrate
```

3.Execute a aplicação:

```
   rails server
```
A aplicação estará disponível em http://localhost:3000.


Como Usar

   - Acesse a página inicial do Encurtador de Links.
   - Insira o link que deseja encurtar na caixa de entrada.
   - Clique no botão Encurtar para gerar o link curto.
   - Copie o link encurtado clicando no botão Copiar Link.

Contribuindo

   - Fork este repositório.
   - Crie uma nova branch (git checkout -b feature-xyz).
   - Faça suas alterações e faça commit delas (git commit -am 'Add new feature').
   - Faça o push para a branch (git push origin feature-xyz).
   - Crie um pull request para a branch principal do repositório original.

Licença

Este projeto é licenciado sob a MIT License.

Contato
Para mais informações ou para relatar problemas, entre em contato pelo angeloafdesouza@gmail.com








