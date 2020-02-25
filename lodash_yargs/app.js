const loda = require('lodash');
const argv = require('yargs').argv;

if(argv.usuario === 'Julian'){
    let x = {"Nombre" : "Jaime"};
    let y = {"Apodo" : "Yimi"};
    let z = [
        { nombre: "Jaime", apellido : "Tax", edad : 26},
        { nombre: "Marta", apellido : "Paz", edad : 35}
    ]
    
    let resultado =  loda.assign(x,y); // concatena archivos JSON
    console.log(resultado);
    console.log('\n');
    //loda.times(4,()=> console.log('Hola mundo'));//relizar una misma tareas en una sola linea
    let resul = loda.find(z, {nombre: "Marta"});
    console.log(resul);
}else{
    console.log('Usuario Inavlido')
}


//debugger
// node inspect archivo.js
