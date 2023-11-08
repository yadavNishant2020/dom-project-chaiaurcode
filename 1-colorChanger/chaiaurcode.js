const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((btn)=>{
  btn.addEventListener("click", function(e){
    const ID = e.target.id;
    switch (ID){
      case "grey":
        body.style.backgroundColor = (`${ID}`);
        break;
    
      case "white":
        body.style.backgroundColor = (`${ID}`);
        break;
    
      case "blue":
        body.style.backgroundColor = (`${ID}`);
        break;
    
      case "yellow":
        body.style.backgroundColor = (`${ID}`);
        break;
      
      default:
        body.style.backgroundColor = ("white");
        break;
    }

  })
})