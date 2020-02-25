console.log('Accion de otro archivo, uno externo');
let varExample = 'Datos de una Funcion 851';

function saludar(){
    console.log('Hola, soy una funcion de otro archivo');
}


// module.exports.varExample = varExample; //exportar variables o funciones
// module.exports.saludar = saludar();     // esta froma es de exportar de manera individual

module.exports = {
    varExample : varExample,
    saludar : saludar(),
    suma : (a,b)=> a + b, // entran 2 parametros y solo devuelve una accion
    mostrar : a => a * a,  // entra un solo parametro entonces ya no se usa parentesis
    tablamul : a => {
        console.log('Tabla de Multiplicacion de: ' + a );
        console.log(a*1);
        console.log(a*2);
        console.log(a*3);
        console.log(a*4); 
    }
 }