const nome = "Douglas Rosa";
let nome2 = "";
let pessoaDefault = {
    nome: "Douglas Rosa",
    idade: "30",
    profissão: "Advogado"
}
let nomes = ["Douglas Rosa", "Liliana Rosa", "Maria Silva"];
let pessoas = [
    {
        nome: "Douglas Rosa",
        idade: "30",
        profissão: "Advogado"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        profissão: "UX/UI Designer"
    }
];

function alterarNome() {
    nome2 = "Maria Silva";
    console.log("valor alterado:");
    console.log(nome2);
}

function RecebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:")
    console.log(nome2);
}


function imprimirPessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);

    console.log("idade:");
    console.log(pessoa.idade);

    console.log("profissão:");
    console.log(pessoa.profissão);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("-------IMPRIMIR PESSOAS---------")
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Profissão:");
        console.log(item.profissão);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    profissão: "Porteiro"
});

imprimirPessoas();







// imprimirPessoa({
//     nome: "Maria Silva",
//     idade: "25",
//     profissão: "UX/UI Designer"
// })

//RecebeEalteraNome("João Silva Pereira");
//RecebeEalteraNome("Maria Silva")

//alterarNome();
