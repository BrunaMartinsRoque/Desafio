function cotacaoSeguro(valorBase,idade,sexo,parcela){


if(valorBase > 0){
    valorBaseRes = valorBase * (3/100)
}else{
    return null
}

console.log("O Valor do Seguro é de R$: " + valorBaseRes);


if(idade >= 18 && idade <= 25){
    idade =  valorBaseRes * (10/100);
}else if(idade >=26 && idade <= 30){
    idade =  valorBaseRes * (5/100);
    }else if(idade >= 31 && idade <= 35){
        idade =  valorBaseRes * (2/100);
    }else if(idade >= 35)
        idade = (valorBaseRes - valorBaseRes);

console.log("O Valor do Seguro mais a idade é de R$: " + idade);
    

if(sexo == "masculino"){
    sexo = valorBaseRes * (10/100);
}else if(sexo == "feminino"){
    sexo = (valorBaseRes - valorBaseRes);
}

console.log("O Valor do Seguro mais o sexo é de R$: " + sexo);



if(parcela >= 1 && parcela <=5){
    parcela = (valorBaseRes  + idade + sexo);
} else if (parcela >= 6 && parcela <= 9){
    parcela =  (valorBaseRes  + idade + sexo) * (3/100);
} else if(parcela >=10 && parcela <=12){
    parcela =  (valorBaseRes  + idade + sexo) * (5/100);
}

console.log("O Valor do Seguro mais a parcela é de R$: " + parcela);



console.log("o Valor total do seguro a ser pago é de: " + (valorBaseRes+sexo+idade+parcela));

console.log("o Valor total do seguro a ser pago em 1 parcela é de: " + (valorBaseRes+sexo+idade+parcela));
console.log("o Valor total do seguro a ser pago em 2 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 2)));
console.log("o Valor total do seguro a ser pago em 3 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 3)));
console.log("o Valor total do seguro a ser pago em 4 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 4)));
console.log("o Valor total do seguro a ser pago em 5 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 5)));
console.log("o Valor total do seguro a ser pago em 6 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 6)));
console.log("o Valor total do seguro a ser pago em 7 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 7)));
console.log("o Valor total do seguro a ser pago em 8 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 8)));
console.log("o Valor total do seguro a ser pago em 9 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 9)));
console.log("o Valor total do seguro a ser pago em 10 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 10)));
console.log("o Valor total do seguro a ser pago em 11 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 11)));
console.log("o Valor total do seguro a ser pago em 12 parcelas é de: " + (((valorBaseRes+sexo+idade+parcela) / 12)));

};

cotacaoSeguro(40000,18,"masculino",5);

