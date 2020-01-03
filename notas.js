const fs = require('fs');
const chalk = require('chalk');

//Cria uma nova anotação
const inserirAnotacao = function(titulo, conteudo){
    const anotacoes = carregarAnotacoes(titulo);
    const duplicadas = anotacoes.filter(function(anotacao){
        return anotacao.titulo === titulo;
    });
    if(duplicadas.length === 0){
        anotacoes.push({
            titulo: titulo,
            conteudo: conteudo
        });
        salvarAnotacoes(anotacoes);
        console.log(chalk.green.inverse('Anotação salva com sucesso!'));
    }
    else{
        console.log(chalk.red.inverse('O título da anotação já existe! \nPor favor, insira outro título.'));
    }
}
//Salva uma anotação ao arquivo
const salvarAnotacoes = function(anotacoes){
    const anJson = JSON.stringify(anotacoes);
    fs.writeFileSync('anotacoes.json', anJson);
}
//Remove uma anotação salva
const removerAnotacao = function(titulo){
    const anotacoes = carregarAnotacoes(titulo);
    const checarTitulo = anotacoes.filter(function(anotacao){
        return anotacao.titulo === titulo;
    })
    try{
        if(checarTitulo.length > 0){
            const anotacoesAposRemocao = anotacoes.filter(anotacao => anotacao.titulo !== titulo);
            const jsonAnotacoes = JSON.stringify(anotacoesAposRemocao);
            fs.writeFileSync('anotacoes.json',jsonAnotacoes);
            console.log(chalk.green.inverse(('Anotação removida com sucesso.')));
        }
        else{
            console.log(chalk.red.inverse('Não existe nenhuma anotação com este título.'));
        }
    }
    catch(e){
        throw new Error('Houve um erro ao tentar remover esta anotação.');
    }
}

//ideia pra melhora: se for implementada a possibilidade de criar um arquivo específico pra cada anotação e o título dela ser o título do
//arquivo, deixar todas dentro de uma pasta "anotações" e ler todos os nomes de arquivos dentro para listar
//Lista as anotações salvas
const listarAnotacoes = function(titulo){
    const dados = carregarAnotacoes(titulo);
    let ct = 0;
    for(anotacao in dados){
        console.log(dados[ct].titulo);
        ct++;
    }
    if(ct === 0){
        console.log(chalk.red.inverse('Não há nenhuma anotação salva.'));
    }
}
//Lê uma anotação específica à partir de seu título.
const lerAnotacao = function(titulo){
    const anotacoes = carregarAnotacoes(titulo);
    const anotacaoL = anotacoes.filter(anotacao => anotacao.titulo === titulo);
    if(anotacaoL.length > 0){
        return anotacaoL;
    }
    else{
        return chalk.red.inverse('Não existe nenhuma anotação com o título inserido.');
    }
}
//Carrega todas as anotações existentes no arquivo
const carregarAnotacoes = function(titulo){
    try{
        const buffer = fs.readFileSync('anotacoes.json');
        const dadosJson = buffer.toString();
        return JSON.parse(dadosJson);
    }
    catch(e){
        return [];
    }
}

//Exporta um objeto com os métodos
module.exports = {
    lerAnotacao: lerAnotacao,
    inserirAnotacao: inserirAnotacao,
    carregarAnotacoes: carregarAnotacoes,
    removerAnotacao: removerAnotacao,
    listarAnotacoes: listarAnotacoes,
    lerAnotacao: lerAnotacao
}


