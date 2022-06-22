let listaDePecas = ["Filtro de Ar", "Disco de Freio", "Correia dentada", "Vela", "Escapamento", "Radiador", "Chicote", "Junta do cabeçote"]

if (listaDePecas.length < 2)
{
    console.log("É possivel cadastrar mais peças!!!")
}
else
{
    console.log("Capacidade insuficiente, não é possivel cadastrar")
}

let peso = 50

if (peso < 100) 
{
    console.log("A peça deve pesar no minimo 100g")
}
else
{
    console.log("A peça possui o peso adequado")
}

let nomePeca = ""

if (nomePeca.length >= 3) 
{
    console.log("Nome de peça adequado para o cadastro")
}
else if(nomePeca.length == 0)
{
    console.log("Nome da peça não pode ser vazio")
}
else
{
    console.log("O nome deve ter ao menos 3 caracteres para ser cadastrado")
}