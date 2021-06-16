// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

var gruppoBici = [
    {
     nome: 'graziella',
     peso : 6.5
    },

    {
     nome: 'pippo',
    peso : 3
    },
    
    {
     nome: 'bmx',
     peso : 1
    },
    
];

let pesoMinimo = gruppoBici[0];

for (let i = 1; i< gruppoBici.length; i++){
    
    if (gruppoBici[i].peso < pesoMinimo.peso){
        pesoMinimo = gruppoBici[i];
    }
}

const {peso} = pesoMinimo
console.log(peso);


