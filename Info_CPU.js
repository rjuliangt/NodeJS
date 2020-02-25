//EXPORTAMOS FUNCIONES QUE USAREMOS.
const os = require('os');
const fs = require('fs');
//OBTENEMOS INFORMACION DEL CPU Y DE LA MAQUINA 
var userPC = os.hostname();
var infoCPU = os.cpus();
var InfoSO = os.platform();

//IMPRESION DE INFORMACION 
console.log(cpu);
console.log(sistema);
console.log(usuario);

let cpu_String = JSON.stringify(cpu); // convertimos a un formato lejible
//CREACION DE ARCHIVOS
fs.appendFile('InfoCPU.txt',`Informacion del cpu:  ${cpu_String} `, function(error){
    if(error){
        console.log('Error al crear el achivo de prueba');
    }
});