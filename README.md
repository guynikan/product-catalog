# product-catalog

## vue cli

Escolhi por utilizar o boilerplate do vue CLI por ser mais prático e me possibilita focar no que realmente importa - o código.

Algumas grandes vantagens que o Vue CLI me trás é:
- eslint já configurado com prettier.
- a utlização fácil de vue plugins.
- configuração do webpack já com tudo que eu preciso (hot reloading, loaders que preciso e o polyfills do babel)
- npm scripts já montados.

## vuex
Por se tratar de um projeto simples, com poucos componentes, não era realmente necessário ter um state management, porém, como o objetivo é avaliar minhas habilidades, achei importante usá-lo.
Além de que utilizando o vuex eu consigo demonstrar um pouco mais como costumo organizar meu código, claro, levando em consideração o tempo disponibilizado.

## Miragejs
Decidi por utilizar o mirageJs pois assim eu consigo manter minha aplicação focada naquilo que me proponho, que é o frontend.
Além disso, tenho um gosto pessoal por essa ferramenta, principalmente pelas características framework-agnostic e por possibilitar ter uma aplicação production-ready.

## Modal
A escolha de utilizar modais não foi pensando em questões de usabilidade. Em projetos reais eu particulamente prefiro outras abordagens. Porém pra proposta serviu bem, pois consegui trabalhar um pouco mais a parte de componentização e tambem integrar uma interface diferente a uma rota diferente.

## Bootstrap
A parte de estilização eu tentei manter o mais minimalista possível. Pra mim é um pouco difícil ter uma concepção de interface sem antes investir um tempo com protótipos, sejam eles de baixa ou alta fidelidade.

Sendo assim, tendo em vista o tempo disponível, optei por deixar essa parte o mais simples possível.
Pra isso, eu acabei usando o bootstrap, por ser uma tecnologia de fácil aplicação.

Entendo que talvez essa minha escolha não possibilite muito avaliar minhas habilidades com estilos e as tecnologias para tal, mas aqui faço um convite para que vocês possam levar em consideração um outro projeto meu, onde tive um tempo maior pra me dedicar e assim conseguir fazer algo com maior apreço.

O projeto em questão pode ser visto aqui: https://github.com/jreeeedd/torcidaqueluta

## Minimalismo
Como eu disse anteriormente, decidi manter a aparência do projeto simples, para que assim eu pudesse focar mais no código. Porém simples não quer dizer vazio, então utlizei de alguns ícones a fim de preencher melhor a visualização, assim como o contraste.

## Agradecimento
Primeiramente queria agradecer a oportunidade e dizer que me diverti bastante fazendo esse teste. Eu aproveitei pra aprender muitas coisas novas enquanto o fiz.

Tentei ao máximo realizar um teste consistente, que por mais que não esteja completo, aquilo que entrego tento entregar "fechado", focando bastante nos testes manuais para entregar uma aplicação com menos bugs possíveis.

Abaixo deixo as instruções do Vue CLI de como executar a aplicação:

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
