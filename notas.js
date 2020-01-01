const fs = require('fs');

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
        // if(anotacoes.includes(titulo)){
        //     delete anotacoes;
        //     console.log('Anotação deletada com sucesso.');
        // }
        // else{
        //     console.log('Nenhuma anotação existe com este título.');
        // }
        //console.log(anotacoes[`${titulo}`]);
        //console.log(`Anotação ${titulo} deletada`); //delete anotacoes[`${titulo}`];
    }
    catch(e){
        console.log('Não existe nenhuma anotação com este título.');
    }
}

//ideia pra melhora: se for implementada a possibilidade de criar um arquivo específico pra cada anotação e o título dela ser o título do
//arquivo, deixar todas dentro de uma pasta "anotações" e ler todos os nomes de arquivos dentro para listar
const listarAnotacoes = function(titulo){
    const dados = carregarAnotacoes(titulo);
    let ct = 0;
    for(anotacao in dados){
        console.log(dados[ct].titulo);
        ct++;
    }
}

const lerAnotacao = function(titulo){
    const anotacoes = carregarAnotacoes(titulo);
    const anotacaoL = anotacoes.filter(function(titulo){
        return anotacoes.titulo === titulo;
    });
    if(anotacaoL.length > 0){
        return anotacaoL;
    }
    else{
        return 'Não existe nenhuma anotação com o título inserido.';
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
    removerAnotacao: removerAnotacao,
    listarAnotacoes: listarAnotacoes,
    lerAnotacao: lerAnotacao
}


