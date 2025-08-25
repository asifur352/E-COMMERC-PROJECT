let personcolor=document.querySelector(".color")
function getRandomColor(){
    let letters="0123456789abcdef"
    let color="#"
    for(let i=0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}
personcolor.addEventListener("click",function(){
    let color=getRandomColor();
    document.body.style.color = color;
    personcolor.innerHTML=color;
})



 const carditems = document.querySelectorAll(".card");
const cardtitel=document.querySelector(".card-title");

 function getRandomColor() {
     const letters = '0123456789ABCDEF';
     let color = '#';
     for (let i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
 }
 
 carditems.forEach(function(card) {
     card.addEventListener("click", function() {
         card.style.backgroundColor = getRandomColor();
         cardtitel.style.color=getRandomColor();
         cardtitel.style.fontsize="30px";
     });

 });

