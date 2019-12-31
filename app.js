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
            describe: 'Título da anotação à ser adicionada',
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
    }
});
yargs.command({
    command: 'remover',
    describe: 'Removar anotação',
    builder: {
        titulo:{
            describe: 'Titulo da anotação à ser removida',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        anotacoes.removerAnotacao(argv.titulo);
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