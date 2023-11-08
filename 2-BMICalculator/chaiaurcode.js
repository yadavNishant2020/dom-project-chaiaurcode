const Form = document.querySelector("form");

Form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if(height === " " || height <= 0 || isNaN(height) ){
        result.innerHTML = ("Please give valid height");
    }else if(weight === " " || weight <= 0 || isNaN(weight)){
        result.innerHTML = ("Please give valid weight");
    }else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);

        let weightResult = "";

        if(BMI < 18.6){
            weightResult = "you are under weight."
        } else if(BMI >= 18.6 && BMI <= 24.9){
            weightResult = "you are normal weight."
        } else{
            weightResult = "you are over weight."
        }

        result.innerHTML = `Your BMI is ${BMI} ${weightResult}`;

    }
})