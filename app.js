//const request = require('request');

const pokemons = [
    {
        name: 'Bulbasur',
        id: 1,
        ps: 45,
        tipo: [
            'plant',
            'poison'
        ],
        abilities: [
            'overgrow',
            'chlorophyll'
        ]
    },
    {
        name: 'Charmander',
        id: 4,
        ps: 39,
        tipo: [
            'fire'
        ],
        abilities: [
            'blaze',
            'solar-power'
        ]
    },
    {
        name: 'Squirtle',
        id: 7,
        ps: 44,
        tipo: [
            'water'
        ],
        abilities: [
            'torrent',
            'rain-dish'
        ]
    }
]

var p1 = pokemons[2];

var fondo = document.getElementById('c-in');

var tag = document.getElementById('name');
var ps = document.getElementById('ps');
var types = document.getElementById('tipos');
var pokeImg = document.getElementById('pokemon-img');

tag.innerHTML = p1.name;
ps.innerHTML = `PS ${p1.ps}`;
types.innerHTML = p1.tipo.map(function(e) {
    return capitalize(e);
}).join(' / ');

pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p1.id}.png`;

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function setBGImage () {
    if (p1.tipo[0] == 'plant') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(141, 175, 130), rgb(175, 207, 164), rgb(9, 126, 79), rgb(12, 155, 98))";
    }
    else if (p1.tipo[0]=='fire') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(240, 60, 24),  rgb(248, 177, 119),rgb(255, 122, 63), rgb(233, 139, 65))";
    }
    else if (p1.tipo[0]=='water') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(54, 116, 176), rgb(113, 167, 225), rgb(71, 125, 187) , rgb(178, 206, 243))";
    }
    else if (p1.tipo[0]=='normal') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(161, 161, 161),  rgb(210,207,198),rgb(205,199,193), rgb(225, 226, 225))";
    }
    else if (p1.tipo[0]=='electric') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(252, 205, 37), rgb(224, 218, 147), rgb(244,228,116), rgb(241,223,74))";
    }
    else if (p1.tipo[0]=='ice') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(15, 157, 212), rgb(115,199,238),rgb(40, 178, 233), rgb(94, 190, 231), rgb(115,199,238), rgb(15, 157, 212))";
    }
    else if (p1.tipo[0]=='fighting') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(205,120,51), rgb(214,132,49),rgb(231,165,41),rgb(215,122,49),rgb(205,120,51))";
    }
    else if (p1.tipo[0]=='poison'||p1.tipo[0]=='ghost') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(106, 64, 151),rgb(208,154,197),rgb(148,103,172),rgb(180,122,180))";
    }
    else if (p1.tipo[0]=='ground') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(206,119,67),rgb(237,179,118),rgb(209,122,58),rgb(226,154,100))";
    }
    else if (p1.tipo[0]=='psychic') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(179, 83, 163),rgb(236,172,193),rgb(220,130,186),rgb(228,131,173), rgb(179, 83, 163))";
    }
    else if (p1.tipo[0]=='bug') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(120,184,82),rgb(220,231,66),rgb(172,214,74),rgb(165,198,75))";
    }
    else if (p1.tipo[0]=='rock') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(160,81,49),rgb(187,116,67),rgb(220,177,116),rgb(226,205,178))";
    }
    else if (p1.tipo[0]=='dragon') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(142,127,59),rgb(111,103,54),rgb(232,207,57),rgb(215,167,59),rgb(234,203,57))";
    }
    else if (p1.tipo[0]=='fairy') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(122, 45, 54),rgb(218,58,112),rgb(218,58,112),rgb(236,114,147))";
    }
}

function setAbilities () {
    for (let i =0; i<p1.abilities.length; i++) {
        let ub = `a${i+1}`;
        let abl = document.getElementById(ub);
        
        abl.innerHTML = capitalize(p1.abilities[i]);
        abl.style.border = "solid 1px black";
        abl.style.borderRadius = '10px';
    }
}

setBGImage()
setAbilities()

