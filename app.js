// Recuperer élément du DOM
const touches = [...document.querySelectorAll('.bouton')];//On récupere tout les boutons. Les crochets servent a convertir une NodeListe en tableau, ce qui sera plus pratique.

//Recuperer Data-Key défini.
const listeKeycode = touches.map(touche => touche.dataset.key);//Grace a la fonction map, on recupere tout les keycode en utilisant touche .dataset.key (comme défini dans l'html).

//Recuperer div ecran du DOM.
const ecran = document.querySelector('.ecran');


//On va définir l'élément keydown qui permet de reconnaitre a l'appui de la touche.
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();//Recupere le keycode en nombre, et en applicant la fonction toString on le converti en chaine.
    calculer(valeur)//lancement de la fonction avec le keycode associé

})

//On va définir l'élément click qui permet de reconnaitre au clique de la souris.
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;//On récupere la touche au click, (target cible la ou on a cliquer).
    calculer(valeur);
})

//Création d'une fonction qui va récuperer le keycode de la touche ou du bouton appuyer, et en faire quelque chose.
const calculer = (valeur) => {
    //Verifier si le keycode appuyer sur le clavier est inclu dans les touches défini grace a la fonction includes.
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            //2 exceptions dans ces boutons, le keycode 8 signifie effacer, donc quand nous allons utiliser le keycode 8, cela va afficher une chaine vide.
            case '8':
                ecran.textContent = "";
                break;
            //Et le keycode 13 équivaut à égal, donc dans une constante nous allons stocker le calcul.
            case '13':
                const calcul = eval(ecran.textContent)//Prend en parametre du contenu et renvoie un résultat.
                ecran.textContent = calcul;//On met a l'intérieur de l'écran le résultat du calcul.
                break;

                //Pour toutes les autres touches
                default:
                    const indexKeycode = listeKeycode.indexOf(valeur)//Recuperer l'index du keycode dans le tableau avec la fonction indexOf
                    const touche = touches[indexKeycode];//On réuitilise cet index dans le tableau touche pour recuperer la touche appuyé.
                    ecran.textContent += touche.innerHTML;//Afficher la valeur a l'écran.
        }
    }
}

//En cas d'erreur, l'afficher afin d'avertir l'utilisateur
window.addEventListener('error', (e) => {
    alert('Une erreur est survenu dans votre calcule :' + e.message)
})
