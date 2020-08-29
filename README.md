# SpaceJobs

## Índice

* [1. Definiçao de Produto](#1-definição-de-produto)
* [2. Usuário](#2-usuário)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Prototipação](#4-prototipação)
* [5. Instalação do projeto](#5-Instalação-do-projeto)
* [6. Considerações técnicas](#6-considerações-técnicas)
* [7. Implementações Futuras](#7-Implementações-Futuras)
* [Autoras](#Autoras)

## 1. Definição do produto
SpaceJobs é uma plataforma para profissionais divulgarem os seus trabalhos, podendo ser contatados caso outra pessoa tenha interesse no seu serviço . No SpaceJobs, o usuario tambem poderá encontrar os profissionais que deseja e ver seus trabalhos antes de contratá-los, tendo assim uma maior confiança em seu serviço, podendo tambem compartilhar e indicar os profissionais que conhece para outras pessoas da rede. Pensando na acessibilidade desenvolvemos um site responsivo, no conceito mobile first, o qual é possível ser acessado por vários tipos de dispositivos, como computador, celular, tablet, etc.

 [Clique aqui para acessar o SpaceJobs.](https://rede-social-sap004.web.app/)

## 2. Usuário

O Projeto foi pensado e desenvolvido para todos os profissionais que desejam divulgar seus trabalhos e projetos, bem como para os usuarios que estão buscando por algum profissional de determinada área. 

## 3. Funcionalidades
* Novos usuários podem se cadastrar na rede através do cadastro do próprio site ou pelo login do Google;
* Usuários já cadastrados podem acessar a plataforma através de email e senha ou pelo login do Google;
* No feed de postagens é possível visualizar todas as postagens, tanto do usuario logado quanto de outros usuários, ordenadas das mais recentes às mais antigas. O usuario pode escolher se quer visualizar somente suas postagens ou todas as postagens;
* O usuário pode publicar texto e imagens em seus posts, pode escolher a privacidade do post se deseja deixar privado(só o usuário que postou pode ver) ou público(todos os usuários podem ver) e tambem podem editar e deletar seus posts após publicado;
* Os usuarios podem dar like ou desfazê-lo, além de comentar um post e editar ou deletar o seu proprio comentário;
* No perfil o usuário pode editar as informações do seu perfil, tais como foto, nome, profissão, local e se desejar adicionar uma pequena biografia.

## 4.  Prototipação

Para esse projeto, nos foi fornecido um layout pronto, para ser usado como parametro para o desenvolvimento do site.

* Telas mobile 

  <img src="./public/img/layoutMobile.png" alt="" width="200px">

  * Telas Web

  <img src="./public/img/layoutWeb.png" alt="" width="200px">


Com base no layout fornecido, criamos um protótipo no Figma de como ficaria nossa pagina para então começarmos a desenvolvê-la. 


* Telas Mobile

  <img src="./public/img/slide1.png" alt="" width="200px">

* Telas Web

  <img src="./public/img/Desktop - 2.png" alt="" width="200px">
  <img src="./public/img/Desktop - 1.png" alt="" width="200px">


## 5. Instalação do projeto

Caso deseje baixar o projeto para sua máquina, é possível criar um fork desse repositório, e em segida clonar em sua máquina executando o seguinte comando no seu terminal:

```sh
git clone (link-do-repositório)
```

Caso não possua o Node.js instalado, basta clicar nesse link [aqui](https://nodejs.org/pt-br/download/) e fazer o download, pois, para executar ele em seu computador, será necessário realizar a instalação da pasta node modules, com o uso do NPM (nativo do Node.js).

Assim que a instalação tiver sido concluída, basta digitar em seu terminal:

```sh
npm install
```
Se ainda não possui uma conta no Firebase, você deve criar uma e um projeto novo onde ficará seu banco de dados.

Para instalar o Firebase, utilize o comando:

```sh
npm install -g firebase-tools
```

Para conectar sua máquina local a sua conta no Firebase é necessário fazer o login, digitando o seguinte comando em seu treminal:

```sh
firebase login
```

Inicialize seu projeto utilizando o comando:

  ```sh
  firebase init
  ```

Para abrir um servidor a fim de executar o projeto em seu navegador, é só digitar:
  
  ```sh
  firebase serve
  ```

Para realizar um deploy, utilize o seguinte comando:

```sh
firebase deploy
```


## 6. Considerações técnicas

Ferramentas utilizadas no projeto:

* HTML, CSS, JavaScript, Node.js, Npm, VS Code, Firebase, Figma, Git e GitHub.


## 7. Implementações Futuras

- Implementar os testes.
- Possibilidade de seguir perfis de outros usuários para acompanhar suas publicações públicas.
- Enviar email com nova senha para o usuário que esqueceu sua senha. 
-  Refatoração do código.
-  Novos testes de usabilidade para futuras melhorias.


## Autoras

[Karine Sardela](https://github.com/kfsardela), [Luana Aredes](https://github.com/luana-aredes) e [Aline Rozetti ](https://github.com/alinerozetti).

Projeto desenvolvido para fins de aprendizado no Bootcamp da [Laboratória Brasil](https://www.laboratoria.la/br). 



