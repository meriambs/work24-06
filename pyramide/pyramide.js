
const SYMBOLE = "#";
const RETOUR_LIGNE = "\n";
 
function lireNombre (id) {
   
    var elNombre = document.getElementById(id);
     
    var strNombre = elNombre.value;
     
    var nNombre = parseInt(strNombre);
     
    return nNombre; 
} 
 
function forgerTriangle(n) {

    let prmd = '';
            for (var i = 1; i <= n; i++) { 
              var s = ""; 
              for (var j = 1; j <= (2 * n - 1); j++) {
                 (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " "; 
               } 
              prmd+=`${s}\n`
             }
            return prmd;

} 

function onClickDessineTriangle() {
    
    var nbLignes = lireNombre("nbLignes");
      if (nbLignes>25){
        alert('Attention le nombre de ligne ne doit pas etre supérieur a 25 ');
    
    } else {
        
        var strTriangle = forgerTriangle(nbLignes);
        console.log(strTriangle);

    }   
} 

   