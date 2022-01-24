// calcolo prezzo

let prezzoBase = (km * 0,21);


if  (eta < 18) { 
    var prezzo = prezzoBase - prezzoBase * 20/100

} else if (eta > 65) {
    var prezzo = prezzoBase - prezzoBase * 40/100

} else {
    var prezzo = prezzoBase

}

document.getElementById('prezzo').innerHTML=prezzo


// funzione bottoni

let Genera = document.getElementById('Genera');
let Annulla = document.getElementById('Annulla');

Genera.addEventListener('dblclick'), 
    function() {
        
    }
);

Annulla.addEventListener('dblclick'), 
    function() {
        
    }
);