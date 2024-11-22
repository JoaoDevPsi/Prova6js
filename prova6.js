function calcularIMC() {

    const peso = parseFloat(document.getElementById('peso').value);

    const altura = parseFloat(document.getElementById('altura').value);

    const alturaEmMetros = altura / 100;

  
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
    }

    const imc = peso / (alturaEmMetros * alturaEmMetros);
  
    const resultadoElemento = document.getElementById('resultado');

    resultadoElemento.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
  }