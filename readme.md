# Emanudash
    
Olá a todos, este projeto foi um desafio proposto pela empresa hublocal. Nele, criei um dashboard simples que conecta com uma api Nestjs.
Entre as funcionalidades estão: 

## Criação de um usuário (SIGNUP)
    - Informar um email com formato válido: Ex: emanuel@gmail.com
    - Informar uma senha forte: Deve conter números, letras maiúsculas, minúsculas e caracter especial: Exemplo: 18Champions@

## login com o usuaŕio criado (SIGNIN)
    - Aqui, basta informar os dados fornecidos na página de signUp, e se tudo estiver correto você será encaminhado para a página de empresas.
    - O usuário poderá permanecer na página por 15 minutos que é o tempo de expiração do JSON WEB TOKEN.

## Pages (Company, Ticket, Local)

    No formulário de criação de qualquer uma das 3 entidades basta informar os dados corretamente, a única exceção é o campo de CEP, nele, deve ser informado um CEP válido.
    
    Exemplo de CEP válido: 38445128

## Signout

    Ao clicar em signOut, o usuário terá o token destruído, e, posteriormente, será encaminhado de volta para página home.


## Principais tecnologias usadas

    - React
    - Typescript
    - Mui material
    - Polished
    - Styled-components
    - Axios
    - yarn
    - localStorage
    - Apex Charts
    - React router DOM

## Deploy

    - O deploy foi feito na vercel e voce pode acessá-lo no seguinte link: https://frontdash.vercel.app/