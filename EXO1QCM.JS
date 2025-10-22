function reinit() {

  document.getElementById("Qcm").reset();
}



function corriger() {
  let score = 0;

  // Question 1
  if (document.getElementById("q1a").checked) score++;

  // Question 2
  if (document.getElementById("q2b").checked) score++;

  // Question 3
  if (document.getElementById("q3c").checked) score++;

  // Question 4 
  if (
    document.getElementById("q4a").checked &&
    document.getElementById("q4b").checked &&
    document.getElementById("q4c").checked &&
    !document.getElementById("q4d").checked
  ) {
    score++;
  }

  // Question 5 
  if (
    document.getElementById("q5a").checked &&
    document.getElementById("q5c").checked &&
    document.getElementById("q5d").checked &&
    !document.getElementById("q5b").checked
  ) {
    score++;
  }

  alert("Ton score est : " + score + " / 5");
}

function corrigeComplet() {
  alert(
'1. France → Paris\n' +
'2. Maroc → Rabat\n' +
'3. Espagne → Madrid\n' +
'4. Langages web → HTML, CSS, JavaScript\n' +
'5. Pays d’Europe → France, Espagne, Belgique'
  
  );
}

