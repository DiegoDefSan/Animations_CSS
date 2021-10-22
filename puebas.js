const request = require('request');

function getObjPokemon (id) {
    request.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
        (error, response, body) => {
            let pokemon = JSON.parse(body);
            let name = pokemon.name;
            let ps = pokemon.stats[0].base_stat;
            let types = getTypes(pokemon);
            let abilities = getAttacks(pokemon);

            let obj = {
                name: name,
                ps: ps,
                tipo: types,
                abilities: abilities
            }

            console.log(obj);
        }
    )
}

function getTypes(JSONfile) {
    let arr = [];
    for (let i=0; i<JSONfile.types.length; i++) {
        arr.push(JSONfile.types[i].type.name);
    }
    return arr;
}

function getAttacks (JSONfile) {
    let arr=[];
    let file = JSONfile.abilities;
    for (let i=0; i<file.length; i++) {
        arr.push(file[i].ability.name);
    }
    return arr;
}

console.log(getObjPokemon(1))

