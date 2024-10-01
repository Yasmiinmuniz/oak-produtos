# Gerenciamento de produtos

Este projeto é uma aplicação de gerenciamento de produtos, permitindo aos usuários cadastrar, listar e editar informações de produtos de forma fácil e intuitiva. 

## Descrição

A aplicação possui duas funcionalidades principais:

1. **Cadastro de Produtos**: Permite o registro de novos produtos através de um formulário que inclui os seguintes campos:
   - Nome do produto (campo de texto)
   - Descrição do produto (campo de texto)
   - Valor do produto (campo numérico)
   - Disponível para venda (campo com duas opções: Sim / Não)

2. **Listagem de Produtos**: Exibe uma tabela com os produtos cadastrados, permitindo que os usuários:
   - Visualizem os detalhes dos produtos (Nome e Valor)
   - Ordenem os produtos por valor do menor para o maior
   - Acessem um botão para cadastrar um novo produto diretamente da listagem

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **JavaScript**: Linguagem de programação utilizada para a lógica do aplicativo.
- **CSS**: Para estilização da interface.

## Funcionalidades

- **Modal para Cadastro/Editar Produto**: O usuário pode adicionar ou editar produtos utilizando um modal. Validações são realizadas para garantir que o valor do produto seja um número válido e maior que zero, além de verificar se já existe um produto com o mesmo nome.
  
- **Filtro de Busca**: Permite que o usuário busque produtos por nome ou descrição.
  
- **Confirmação de Exclusão**: Um modal de confirmação é exibido antes da exclusão de um produto para evitar remoções acidentais.

## Informações do Desenvolvedor

Nome: Yasmin da Silva Muniz
E-mail: yasmindasilvamuniz@gmail.com
GitHub: [Yasmiinmuniz](https://github.com/Yasmiinmuniz)
LinkedIn: [Yasmin Muniz](https://www.linkedin.com/in/yasmin-muniz-28b820298/)

## Instruções de Uso

1. **Instalação**:
   - Clone este repositório:
     ```bash
     git clone https://github.com/Yasmiinmuniz
     ```
   - Navegue até o diretório do projeto:
     ```bash
     cd product-list-management
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```

2. **Execução**:
   - Inicie o servidor de desenvolvimento:
     ```bash
     npm start
     ```
   - Acesse a aplicação em seu navegador em `http://localhost:3000`.

## Observações
Este projeto está em desenvolvimento e foi concebido como uma versão inicial para a candidatura na vaga de estágio em desenvolvimento. A decisão de implementar a aplicação diretamente no front-end, sem a utilização de um banco de dados ou back-end, foi baseada em limitações de tempo. Esta abordagem permitiu que eu concentrasse meus esforços na construção da interface e na lógica de gerenciamento de produtos de forma rápida e eficiente.

A implementação de um sistema mais robusto com banco de dados e back-end é um próximo passo que pretendo realizar assim que houver mais tempo disponível. Agradeço pela compreensão e estou aberto a feedbacks e sugestões para aprimorar este projeto.

As atualizações e melhorias podem ser encontradas no repositório do GitHub [Yasmiinmuniz](https://github.com/Yasmiinmuniz).
