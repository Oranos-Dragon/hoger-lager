//constants
const winOrLose = document.getElementById("winOrLose");
const punten = document.getElementById('punten');
// zet hier alle document elements

let playerScore = 10

//random getal voor het begin
function gegeven(max) {
        return Math.floor(Math.random() * max); //genereerd een random getal voor de spelemn
     }
     let playerNumber = (gegeven(10))
     document.getElementById('gegevenNummer').innerHTML = (playerNumber)   //laat het nummer op de site zien

//hoger button
document.getElementById("hoger").onclick = function() {hogerFunction()};
    
function hogerFunction() {
     gegeven     
          let computerNumber = (gegeven(10)) //pakt een random getal
          console.log(computerNumber)
         if (playerNumber < computerNumber) {
            winOrLose.innerHTML = 'win'      //laat zien of je hebt gewonnen
            playerScore += 5
            punten.innerHTML = playerScore
         }
         if (playerNumber > computerNumber) {
            winOrLose.innerHTML = 'lose'     //laat zien of je hebt verlorren
            playerScore -= 5
            punten.innerHTML = playerScore
         }
         if (playerNumber == computerNumber) {
            winOrLose.innerHTML = 'tie'      //laat zien of het gelijk is
         }

         document.getElementById('antwoordNummer').innerHTML = (computerNumber)  //laat het nummer op de site zien

         playerNumber = (gegeven(10))
          document.getElementById('gegevenNummer').innerHTML = (playerNumber)    //laat het nummer op de site zien
          console.log(playerNumber)
          console.log('refresh')
    }

//lager button
    document.getElementById("lager").onclick = function() {lagerFunction()}; 

function lagerFunction() {
    gegeven
          let computerNumber = (gegeven(10))
          console.log(computerNumber)
         if (playerNumber > computerNumber) {
            winOrLose.innerHTML = 'win'      //laat zien of je hebt gewonnen
            playerScore += 5
            punten.innerHTML = playerScore
         }
         if (playerNumber < computerNumber) {
            winOrLose.innerHTML = 'lose'     //laat zien of je hebt verlorren
            playerScore -= 5
            punten.innerHTML = playerScore
         }
         if (playerNumber == computerNumber) {
            winOrLose.innerHTML = 'tie'      //laat zien of het gelijk is
         }

         document.getElementById('antwoordNummer').innerHTML = (computerNumber) //laat het nummer op de site zien

         playerNumber = (gegeven(10))
          document.getElementById('gegevenNummer').innerHTML = (playerNumber)   //laat het nummer op de site zien
          console.log(playerNumber);
          console.log('refresh')
}