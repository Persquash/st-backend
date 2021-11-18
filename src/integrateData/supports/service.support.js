const {PersonModel} = require('../models/person.model');
const {PlanetModel} = require('../models/planet.model');

const breakCode = (url) => {
    let tblock = url.substring(0, url.length - 1);
    return tblock.substring(tblock.lastIndexOf('/') + 1,tblock.length);
}

const generatePerson = (entity) => {
    const person = {
        ...entity,
        films :[],
        species :[],
        vehicles :[],
        starships :[],
    };

    for (let j = 0; j < entity.films.length; j++) { 
        person.films.push(breakCode(entity.films[j]));
    }
    for (let j = 0; j < entity.species.length; j++) { 
        person.species.push(breakCode(entity.species[j]));
    }
    for (let j = 0; j < entity.vehicles.length; j++) { 
        person.vehicles.push(breakCode(entity.vehicles[j]));
    }
    for (let j = 0; j < entity.starships.length; j++) { 
        person.starships.push(breakCode(entity.starships[j]));
    }

    return person;
}
const generatePlanet = (entity) => {
    const planet = {
        ...entity,
        residents :[],
        films :[],
    };
    
    for (let j = 0; j < entity.residents.length; j++) { 
        planet.residents.push(breakCode(entity.residents[j]));
    } 
    for (let j = 0; j < entity.films.length; j++) { 
        planet.films.push(breakCode(entity.films[j]));
    }

    return planet;
}

const generatePersonES = (pers) => {
    const personES = new PersonModel({
        id: breakCode(pers.url),
        nombre: pers.name,
        tamano: pers.height,
        masa: pers.mass,
        color_cabello: pers.hair_color,
        color_piel: pers.skin_color,
        color_ojos: pers.eye_color,
        anio_nacimiento: pers.birth_year,
        genero: pers.gender,
        mundoNatal: breakCode(pers.homeworld),
        peliculas: JSON.stringify(pers.films) ,
        especies: JSON.stringify(pers.species) ,
        vehiculos: JSON.stringify(pers.vehicles) ,
        naves: JSON.stringify(pers.starships) ,
        creado: pers.created,
        editado: pers.edited,
    });
    return personES;
}

const generatePlanetES = (planet) => {
    const planetES = new PlanetModel({
        id: breakCode(planet.url),
        nombre: planet.name,
        periodo_rotacion: planet.rotation_period,
        periodo_orbital: planet.orbital_period,
        diametro:planet.diameter,
        gravedad: planet.gravity,
        terreno: planet.terrain,
        superficie_agua: planet.surface_water, 
        poblacion: planet.population,
        residentes: JSON.stringify(planet.residents), 
        peliculas: JSON.stringify(planet.films) ,
        creado: planet.created,
        editado: planet.edited,
    })
    return planetES;
} 

export {
    generatePlanet,
    generatePerson,
    generatePersonES,
    generatePlanetES
}