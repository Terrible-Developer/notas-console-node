Este é um programa simples feito para uso em terminal, compatível com sistemas GNU/Linux. Seu objetivo é fornecer um acesso rápido e simples à anotações, tanto para criar, ler, ou remover elas. Se baseia no módulo Yargs para seu funcionamento. As ações são chamadas por executar o comando anotacoes seguido pelo tipo de ação. As ações disponíveis são:
adicionar, com as informações obrigatorias --titulo e --conteudo para adicionar a anotação ao arquivo
EX: anotacoes adicionar --titulo="anotacao1" --conteudo="conteúdo da anotação";
remover, com a informação --titulo sendo obrigatória, removendo a anotação com o título inserido
EX: anotacoes remover --titulo="anotacao1";
listar, que não recebe nenhuma informação adicional, para listar os títulos de todas as anotações guardadas
EX: anotacoes listar;
ler, com a informação --titulo, para ler o conteúdo da anotação com o título inserido
EX: anotacoes ler --titulo="anotacao1";


Este programa foi feito para aprendizado em Node.js, e seu funcionamento não apresenta muita complexidade e funcionalidade: todas as anotações são salvas em um mesmo arquivo JSON.
