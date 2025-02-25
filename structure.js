const ressources = {
    Germany: {
        link: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
        population: 83100000
    },
    France: {
        link: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
        population: 67500000
    },
    Italy: {
        link: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
        population: 59000000
    },
    Spain: {
        link: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
        population: 47400000
    },
    Poland: {
        link: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
        population: 38000000
    },
    Netherlands: {
        link: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
        population: 17500000
    },
    Belgium: {
        link: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
        population: 11700000
    },
    Sweden: {
        link: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
        population: 10500000
    },
    Austria: {
        link: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
        population: 9000000
    },
    Switzerland: {
        link: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
        population: 8700000
    }
};

let score = 0; 
let highscore = 0; 
let obj1; 
let obj2; 

function resetScore(){
    score = 0; 
    const scoreText = document.getElementById('score');
    scoreText.textContent('Score: 0'); 
}

function getRandomRessource(){
    const item = Object.keys(ressources); 
    const randomKey = item[Math.floor(Math.random() * item.length)]; 
    return ressources[randomKey]; 
}

function updateImage(imageNumber, textVisible) {
    // Die richtige Bild-, Namens- und Attribut-Elemente auswählen
    const random = getRandomRessource();

    const img = document.getElementById(`img-${imageNumber}`);
    const ressourceName = document.getElementById(`ressource-name-${imageNumber}`);
    const attributeName = document.getElementById(`attribute-name-${imageNumber}`);

    // show image
    img.src = random.link;
    img.alt = "Flagge";

    if(textVisible == true){
    ressourceName.textContent = Object.keys(ressources).find(key => ressources[key] === random);
    attributeName.textContent = 'Population: ' + random.population;
    }else{
        ressourceName.textContent =""; 
        attributeName.textContent =""; 
    }
    return random;
}

function showText(imageNumber, obj){
    const ressourceName = document.getElementById(`ressource-name-${imageNumber}`);
    const attributeName = document.getElementById(`attribute-name-${imageNumber}`);
    ressourceName.textContent = Object.keys(ressources).find(key => ressources[key] === obj);
    attributeName.textContent = 'Population: ' + obj.population;
}

function update(){
   // resetScore(); 
    obj1 = updateImage(1, true);
    do {
        obj2 = updateImage(2, false);
    } while (obj1 === obj2);
}

// to-do: zum laufen bringen
function clicked1(){
    if(obj1.population > obj2.population){
        score++; 
        showText(2,obj2);
        // setTimeout(500); 
        updateImage(2,false);
    }else{
        score=0; 
        alert("Restart the game!"); 
        setTimeout(500);
        if(score>highscore){
            const highscoreText = document.getElementById(`highscore`);
            highscoreText.textContent(highscore); 
        }
        update();
    }
}




// To-Do:     
// const questionAttribute = document.getElementById("attribute");
update();
//to-do
document.getElementById("content-box-1").addEventListener("click", clicked1);
// document.getElementById("content-box-2").addEventListener("click", clicked2);

document.getElementById("reload").addEventListener("click", update); 
