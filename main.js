const calculadora = new Calculadora ();

function dividir () {
    const valor1 = document.getElementById("valor1").value; 
    const valor2 = document.getElementById("valor2").value; 

    const resultado = calculadora.dividir (valor1, valor2);
    const elementoTextoResultado = document.getElementById ("textoResultado");
    elementoTextoResultado.textContent = "resultado:" + resultado;
}

const botaoDividir = document.getElementById("botaoDividir");
botaoDividir.addEventListener ("click", () => dividir());