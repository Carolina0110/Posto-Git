let precoF = 0

//function continuar(){
//var entrada = document.getElementById('txttipo')
var litros = document.getElementById('txtlitro')
var res = document.getElementById('res')
var selecao = document.getElementById('selecao')

document.querySelectorAll('button').forEach(button => {
button.addEventListener('click', event =>{
const id = event.target.id;

if(id === 'alcool') {
  precoF = 5.39;
  selecao.innerHTML = 'O combustível selecionado: Àlcool!'
}
if(id === 'gasolina'){
    precoF = 6.94;
    selecao.innerHTML = 'O combustível selecionado: Gasolina!'
}
if(id === 'diesel'){
    precoF = 5.68;
    selecao.innerHTML = 'O combustível selecionado: Diesel!'
}

if (id === "continuar") {
  //result(precoF);
  const finalResult = precoF * litros.value;
  const showResult = document.getElementById("result");
  showResult.innerHTML = `O valor a pagar será R$ ${finalResult.toLocaleString("pt-br", { minimumFractionDigits: 2 })}`;
}
});
});
