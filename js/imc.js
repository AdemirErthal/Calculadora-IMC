const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorImc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (valorImc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (valorImc < 25) {
      classificacao = "Com pessoa ideal, Parabens!!!";
    } else if (valorImc < 30) {
      classificacao = "Levemente acima do peso";
    } else if (valorImc < 35) {
      classificacao = "Com obesidade grau I";
    } else if (valorImc < 40) {
      classificacao = "Com obesidade grau II";
    } else {
      classificacao = "Com obesidade grau III, Cuidado!!!";
    }

    resultado.textContent = `${nome} seu IMC é ${valorImc} e você esta ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos!!";
  }
}

calcular.addEventListener("click", imc);
