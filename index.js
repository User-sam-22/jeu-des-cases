document.addEventListener("DOMContentLoaded", () => {
    let carre = document.querySelectorAll(".tile");
  
    // Colorer une ou plusieurs cases du tableau au hasard
    // let compteur = 0;
  
    function display(elemCliked) {
      if (elemCliked != 0) {
        console.log("clicked");
  
        //on genere un chiffre aleatoire en fonction de la taille du tableau
        let newRnd = Math.floor(Math.random() * carre.length);
  
        //On selectionne le carre au hasard
        let newIndex = carre[newRnd];
  
        //ici un while pour le pas generer un nb aleatoire qui existe deja
        while (newIndex.classList.contains("caseColor")) {
          newRnd = Math.floor(Math.random() * carre.length);
          newIndex = carre[newRnd];
        }
  
        //on colorie le carre
        newIndex.classList.add("caseColor");
  
        //on color la cellule cliquée
        elemCliked.classList.toggle("caseColor");
      } else {
        let rnd1 = Math.floor(Math.random() * carre.length);
        let rnd2 = Math.floor(Math.random() * carre.length);
        while (rnd1 == rnd2) {
          rnd2 = Math.floor(Math.random() * carre.length);
        }
        let rnd3 = Math.floor(Math.random() * carre.length);
        while (rnd2 == rnd3 || rnd1 == rnd3) {
          rnd3 = Math.floor(Math.random() * carre.length);
        }
  
        let rnd = [rnd1, rnd2, rnd3];
        console.log(rnd);
        let rndIndex = carre[rnd[0]];
        let rndIndex1 = carre[rnd[1]];
        let rndIndex2 = carre[rnd[2]];
        //   rndIndex.style.backgroundColor = "black"
        //   rndIndex1.style.backgroundColor = "black"
        //   rndIndex2.style.backgroundColor = "black"
        // .classList.add("selecteur CSS") permet d'ajouter des propiétés CSS à un élément HTML qui se trouve dans un tableau
        rndIndex.classList.add("caseColor");
        rndIndex1.classList.add("caseColor");
        rndIndex2.classList.add("caseColor");
      }
    }
    display(0);
    let vrai = true;
    let scr = document.getElementById("score");
    let score = 0;
    scr.innerHTML = "Score:" + score;
    for (let i of carre) {
      console.log(score);
      i.addEventListener("click", jeu);
  
      function jeu(e) {
        //(e) contient les informations sur l'évènement qui a été opéré
        // console.log(e.target.classList.contains("caseColor"));
        //e.target se réfère à la liste des éléments cliqués
        //permet de savoir si sur ce qu'on a cliqué contient une classe en occurence la classe caseColor si oui = true sinon = false
        //contains() = Method qui renvoit vrai ou faux si la liste contient bel et bien une classe
        if (vrai == true) {
          if (e.target.classList.contains("caseColor")) {
            score++;
            scr.innerHTML = "Score:" + score;
            // e.target.classList.remove("caseColor");
  
            // if (e.target.classList.contains("caseColor") != true) {
            // let carre = document.querySelectorAll(".tile");
            // let newRnd = Math.floor(Math.random() * carre.length);
            // let newTab = [newRnd];
            // let newIndex = carre[newTab[0]];
            // newIndex.classList.add("caseColor");
  
            // }
            console.log(
              "element clique contient la classe caseColor ? " +
                e.target.classList.contains("caseColor")
            );
  
            display(e.target);
            // console.log(e.target.id);
            console.log(score);
          } else {
            console.log(
              "element clique contient la classe caseColor ? " +
                e.target.classList.contains("caseColor")
            );
            e.target.classList.add("wrongCase");
  
            if (e.target.classList.contains("wrongCase")) {
              vrai = false;
               scr.innerHTML = "F5 pour rejouer"
              document.querySelector("#message").innerHTML = `Votre score est de: ${score}.`
              clearInterval(delais)
            }
          }
        }
      }
    }
    let secondes = 30;
  timer.innerHTML = secondes + "sec"
  
  function decompte(){
    secondes--
    timer.innerHTML = secondes +"sec"
    
    
    if (secondes<10){
      // secondes--;
      timer.innerHTML = "0" + secondes +"sec";
     }
     
     if (secondes < 1){
      clearInterval(delais)
      vrai = false
      document.querySelector("#message").innerHTML = `Votre score est de: ${score}.`
       scr.innerHTML = "F5 pour rejouer"
    }
  }
  // start.addEventListener("click", temps)
  function temps(){
    delais = setInterval(decompte,1000)
  }
  temps()
  });
  
