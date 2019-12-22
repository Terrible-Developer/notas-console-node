const chalk = require('chalk');
const yargs = require('yargs');

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
        corpo: {
            describe: 'Corpo da anotação',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('+1 nota \nTítulo: ' + argv.titulo + '\nCorpo: ' + argv.corpo);
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
    handler: function(){
        console.log('Tá tentando enganar quem, tu não sabe ler');
    }
});

yargs.parse();