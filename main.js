// initialise timoeut variable
let timeout =  null;

// store HTML elements in JS variables
let searchInput = document.querySelector('#search-id');
let sprite = document.querySelector('#sprite-normal');
let name = document.querySelector('#name');
let abilities = document.querySelector('#abilites');
let type = document.querySelector('#type');
let pokeNumber = document.querySelector('#number');
// function to grab info from api
async function getPokeInfo() {

    // assign searchID to be what is typed
    let searchID = searchInput.value;

    // store info in a variable
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchID}`);
    // convert that info into a JSON
    let pokeInfo  = await response.json()
     console.log(pokeInfo)
    //  get sprite picture
     sprite.src = pokeInfo.sprites.front_default;
    //  get pokemon name 
    name.textContent = pokeInfo.name
        // get pokemon number
        pokeNumber.textContent = pokeInfo.id
        console.log(pokeInfo.id)
  
    // get pokemon type
    // TODO display multiple types, appendChild & createElement Method? 
    let typesArray = pokeInfo.types
    for(let i = 0; i < typesArray.length; i++){
        type.textContent = typesArray[i].type.name
    }

    // get pokemon abilities
      // TODO display multiple abilities, appendChild & createElement Method? 
    let abilitiesArray = pokeInfo.abilities
    for(let i = 0; i < abilitiesArray.length; i++){
        abilities.textContent = abilitiesArray[i].ability.name
    }
    

}

/* getPokeInfo(); */

// use setTimeout and clearTimeout function to onle send request when user has stopped typing
searchInput.addEventListener('keyup', function() {
    clearTimeout(timeout);
    timeout = setTimeout(getPokeInfo,1000);
});