/* var nota1 = 8.0;
var nota2 = 6.2;
var nota3 = 7.2; */

//var media = (nota1 + nota2 + nota3) /3;
/* 
function media(n1, n2, n3) {
    const resultado = (n1 + n2 + n3) / 3
    if (resultado < 5) {
        console.log("reprovado");
    } else if (resultado >= 5 && resultado <= 7) {
        console.log("recuperação");
    } else {
        console.log("aprovado");
    }
}
console.log(media(7, 8, 7));
console.log(media(5.2, 6.6, 7));
console.log(media(5, 4, 8)); */

/* if (media < 5){
    console.log("reprovado");
} else if (media >=5 && media <= 7) {
    console.log("recuperação");
} else {
    console.log("aprovado");
} 
----------------------------  */

/* var peso = 70.2;
var altura = 1.62;
var imc = peso / (altura * altura);

if (imc < 18.5 ) {
    console.log("Abaixo do peso")
} else if (imc >=18.5 && imc <=25) {
    console.log("Peso normal");
} else if(imc >=25 && imc <=30) {
    console.log("Acima do peso");
}  else if (imc >=30 && imc <=40) {
    console.log("Obeso");
} else {
    console.log("Obesidade grave");
} */

/* -------------------------------------- */

/* const notaAluno = 90;

function getConceito(notaAluno) {
    let conceitoA = notaAluno >= 90 && notaAluno <= 100;
    let conceitoB = notaAluno >= 80 && notaAluno <= 89;
    let conceitoC = notaAluno >= 70 && notaAluno <= 179;
    let conceitoD = notaAluno >= 60 && notaAluno <= 69;
    let conceitoF = notaAluno <= 60 && notaAluno >= 0;

    let conceitoFinal;

    if (conceitoA) {
        conceitoFinal = "A"
    } else if (conceitoB) {
        conceitoFinal = "B"
    } else if (conceitoC) {
        conceitoFinal = "C"
    } else if (conceitoD) {
        conceitoFinal = "D"
    } else {
        conceitoFinal = "F"
    }
    return conceitoFinal;
}
console.log(getConceito(78));
console.log(getConceito(90));
console.log(getConceito(60));
console.log(getConceito(75)); */

/* ----------------------------- */

/* function farenheitParaCelsius(temperatura) {
    return (temperatura - 32) * 5 / 9
}

function celsiusParaFarenheit(temperatura) {
    return temperatura * 9 / 5 + 32
}
console.log(farenheitParaCelsius(52));
console.log(celsiusParaFarenheit(11)); */

/* -------------------------------- */
/* 
function isPar(numero) {
const ehNumeroPar = (numero % 2) === 0;

if (ehNumeroPar) {
    console.log("O número é par");
} else {
    console.log("O número é impar");
}
}
-------------------------------------- */