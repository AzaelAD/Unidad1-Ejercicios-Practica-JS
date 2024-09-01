function operacion(num1, num2, callback){
    callback(num1,num2);
}

function operaciones(num1,num2){
    return num1+num2;
}

console.log(operacion(5,2,operaciones));