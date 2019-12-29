const chalk = require('chalk');
const yargs = require('yargs');
const anotacoes = require('./notas.js');

yargs.version('1.0.1');
//console.log(yargs.argv);
yargs.command({
    command: 'adicionar',
    describe: 'Adicionar nova anotação',
    builder: {
        titulo:{
            describe: 'Título da anotação',
            demandOption: true,
            type: 'string'
        },
        conteudo: {
            describe: 'Conteúdo da anotação',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        anotacoes.inserirAnotacao(argv.titulo, argv.conteudo);
        // console.log('+1 nota \nTítulo: ' + argv.titulo + '\nCorpo: ' + argv.corpo);
        // const dados = {
        //     titulo: argv.titulo,
        //     conteudo: argv.conteudo
        // };
        // const dadosJson = JSON.stringify(dados);
        // console.log(dados.titulo + ' ' + dados.conteudo + '\n' + dadosJson);
        // fs.writeFileSync(`${dados.titulo}.json`, dadosJson);
    }
});
yargs.command({
    command: 'remover',
    describe: 'Removar anotação',
    handler: function(){
        console.log('-1 nota');
    }
});
yargs.command({
    command: 'listar',
    describe: 'Listar anotações salvas',
    handler: function(){
        console.log('sei contar até M');
    }
});
yargs.command({
    command: 'ler',
    describe: 'Ler uma anotação salva',
    builder:{
        titulo:{
            describe: 'Título da anotação',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        const anotacao = anotacoes.carregarAnotacoes(argv.titulo);
        console.log(anotacao);
    }
});

yargs.parse();