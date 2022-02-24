const chess = document.getElementById("chess");

for (i = 0; i < 101; i++){
    // creo un nuovo div
    let newDiv = document.createElement('div');
    // inserisco delle classi al nuovo div;
    newDiv.classList.add('bg-secondary', 'm-2', 'col-2', 'p-5', 'text-center');
    // inserisco del contenuto nel div appena creato
    newDiv.innerHTML = i;

    if (i % 3 == 0) {
        newDiv.innerHTML = "Fuzz"
        newDiv.classList.add('text-white', 'fs-5')
        console.log('Fuzz');
    }else if (i % 5== 0){
        newDiv.innerHTML = "Buzz"
        newDiv.classList.add('text-warning', 'fs-3')
        console.log("Buzz");
    };
    if ((i % 3==0) && (i % 5== 0)){
        newDiv.innerHTML = "FuzzBuzz"
        newDiv.classList.add('text-alert', 'fs-3')
        console.log("FuzzBuzz")
    };
    console.log(i);
    chess.append(newDiv);
};

