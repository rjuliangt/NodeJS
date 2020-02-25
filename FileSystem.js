const fs = require('fs');
console.log('Started \n')
// fs.readFile('data.txt','utf-8', (error, data) => {
//     if(error){
//         console.log(`Error ${error}`);
//     }else{
//         console.log(data);    
//     }
// });

var arch = fs.readFileSync('data_renamed.txt','utf-8'); //sincrono 
// console.log(arch);


/*RENOMBRAR ARCHIVOS
fs.rename('data.txt','data_renamed.txt', (error) => {
    if(error) throw error;
    console.log('Renowned successfully!!');
}
);*/

//AGREGAR MAS TEXTO 
// fs.appendFile('data_renamed.txt','\n Agregando mas texto al archivo', (error)=>{
//     if (error) console.log(`Error al agregar el texto ${error}`);
    
// });

//ELIMINAR ARCHIVOS 
// fs.unlink('data2.txt', (error)=>{
//     if(error) throw error;
//     console.log('Removed');
// });

//COPIAR INFORMACION DE ARCHIVOS
// fs.createReadStream('data_renamed.txt').pipe(fs.createWriteStream('data3.txt'));

//LECTURA DE DIRECTORIOS
// fs.readdir('./.././NodeJS/', (error, files)=> {
//     files.forEach(file => {
//         console.log(file)
//     });
// });

//LECTURA DE FORMA ASINCRONA

fs.readdirSync('./.././NodeJS/').forEach(files =>{
   console.log(files); 
});

console.log('Finish');