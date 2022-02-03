function myWeight(weigth, height) {
    resp = "Peso ou Altura não informado!";
    imc = height/(weigth*weigth);

    if(imc < 18.5) resp = "Magreza";
    else if(imc >= 18.5 && imc <= 24.9 ) resp= "Normal";
    else if(imc >= 25 && imc < 30 ) resp= "Sobrepeso";
    else if(imc >= 30) resp= "Obeso";

    alert("Você está nos parâmetros de " + resp); 
}