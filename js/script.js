// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// var gruppoBici = [
//     {
//      nome: 'graziella',
//      peso : 6.5
//     },

//     {
//      nome: 'pippo',
//     peso : 3
//     },
    
//     {
//      nome: 'bmx',
//      peso : 1
//     },
    
// ];

// let pesoMinimo = gruppoBici[0];

// for (let i = 1; i< gruppoBici.length; i++){
    
//     if (gruppoBici[i].peso < pesoMinimo.peso){
//         pesoMinimo = gruppoBici[i];
//     }
// }

// const {nome,peso} = pesoMinimo
// console.log(peso);

// document.getElementById('stampa').innerHTML =

// `
// <ul>
// <li> nome:  ${nome}</li>

// <li> peso: ${peso}</li>

// </ul>
// `
// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti e stampiamo tutto in console


var squadre = [
    {
        nome : 'milan',
        punti : 0,
        falli : 0

    },
    {
        nome : 'juventus',
        punti : 0,
        falli : 0

    },
    {
        nome : 'inter',
        punti : 0,
        falli : 0

    },
];

const nomePunti = [];
console.log(nomePunti);
for(let i =0; i<squadre.length; i++){
    
    
    const random = () => Math.floor(Math.random() * 11);
    
};
random(punti);
random(falli);

console.log(squadre);






