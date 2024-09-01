var persona = new Object();
persona.nombre = "Luis";
persona.edad = 14;
persona.ciudad = "Tepic";


function imprimirInfo(persona){
    return `Soy ${persona.nombre}, tengo ${persona.edad} años de edad y vivo en ${persona.ciudad}`;
}
console.log(imprimirInfo(persona));