const fs = require('fs');

const lerAnotacao = function(){
    return 'Anotação';
}
const inserirAnotacao = function(titulo, conteudo){ //titulo, conteudo
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
        console.log('Anotação salva com sucesso!');
    }
    else{
        console.log('O título da anotação já existe! \nPor favor, insira outro título.');
    }
}

const salvarAnotacoes = function(anotacoes){
    const anJson = JSON.stringify(anotacoes);
    fs.writeFileSync('nomearquivo.json', anJson);
}

const removerAnotacao = function(titulo){
    const anotacoes = carregarAnotacoes(titulo);
    const checarTitulo = anotacoes.filter(function(anotacao){
        return anotacao.titulo === titulo;
    })
    try{
        if(checarTitulo.length > 0){
            const anotacoesAposRemocao = anotacoes.filter(anotacao => anotacao.titulo !== titulo);
            const jsonAnotacoes = JSON.stringify(anotacoesAposRemocao);
            fs.writeFileSync('nomearquivo.json',jsonAnotacoes);
            console.log('Anotação removida com sucesso.');
        }
        else{
            console.log('Não existe nenhuma anotação com este título.');
        }
    }
    catch(e){
        console.log('Não existe nenhuma anotação com este título.');
    }
}

const carregarAnotacoes = function(titulo){
    try{
        const buffer = fs.readFileSync('nomearquivo.json');
        const dadosJson = buffer.toString();
        return JSON.parse(dadosJson);
    }
    catch(e){
        return [];
    }
}


module.exports = {
    lerAnotacao: lerAnotacao,
    inserirAnotacao: inserirAnotacao,
    carregarAnotacoes: carregarAnotacoes,
    removerAnotacao: removerAnotacao
}


