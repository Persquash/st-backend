import {
  generatePerson,  
  generatePersonES,
  generatePlanet,
  generatePlanetES} from '../../../src/integrateData/supports/service.support';
import {PersonModel} from '../../../src/integrateData/models/person.model';
import {PlanetModel} from '../../../src/integrateData/models/planet.model';

describe('Test de generacion del objeto "Persona" que se guardara en dynamoDB', () => {
    let persona = null;
    it('Generar el objeto "Persona" usando el objeto "Person" que se obtiene de Swapi', async () => {
        expect.assertions(1); 
        const expectedResult =  personResult;
        persona = generatePerson(personSwapi);
        // eslint-disable-next-line jest/no-try-expect
        expect(persona).toEqual(expectedResult); 
    });
    it('Convertir el objeto "Persona" a otro objeto "PersonaES" cuyos campos deben estar en español', async () => {
      expect.assertions(1); 
      const expectedResult =  personESResult;
      const result = generatePersonES(persona);
      // eslint-disable-next-line jest/no-try-expect
      expect(result).toEqual(expectedResult); 
  });
});

describe('Test de generacion del objeto "Planeta" que se guardara en dynamoDB', () => {
  let planeta = null;
  it('Generar el objeto "Planeta" usando el objeto "Planet" que se obtiene de Swapi', async () => {
      expect.assertions(1); 
      const expectedResult =  planetResult;
      planeta = generatePlanet(planetSwapi);
      // eslint-disable-next-line jest/no-try-expect
      expect(planeta).toEqual(expectedResult); 
  });
  it('Convertir el objeto "Planeta" a otro objeto "PlanetaES" cuyos campos deben estar en español', async () => {
      expect.assertions(1); 
      const expectedResult =  planetESResult;
      const result = generatePlanetES(planeta);
      // eslint-disable-next-line jest/no-try-expect
      expect(result).toEqual(expectedResult); 
  });
});

const personSwapi = {   name: 'Luke Skywalker',   height: '172',   mass: '77',   hair_color: 'blond',   skin_color: 'fair',   eye_color: 'blue',   birth_year: '19BBY',   gender: 'male',   homeworld: 'https://swapi.py4e.com/api/planets/1/',   films: [     'https://swapi.py4e.com/api/films/1/',     'https://swapi.py4e.com/api/films/2/',     'https://swapi.py4e.com/api/films/3/',     'https://swapi.py4e.com/api/films/6/',     'https://swapi.py4e.com/api/films/7/'   ],   species: [ 'https://swapi.py4e.com/api/species/1/' ],   vehicles: [     'https://swapi.py4e.com/api/vehicles/14/',     'https://swapi.py4e.com/api/vehicles/30/'   ],   starships: [     'https://swapi.py4e.com/api/starships/12/',     'https://swapi.py4e.com/api/starships/22/'   ],   created: '2014-12-09T13:50:51.644000Z',   edited: '2014-12-20T21:17:56.891000Z',   url: 'https://swapi.py4e.com/api/people/1/' } ;
const personResult = {   name: 'Luke Skywalker',   height: '172',   mass: '77',   hair_color: 'blond',   skin_color: 'fair',   eye_color: 'blue',   birth_year: '19BBY',   gender: 'male',   homeworld: 'https://swapi.py4e.com/api/planets/1/',   films: [ '1', '2', '3', '6', '7' ],   species: [ '1' ],   vehicles: [ '14', '30' ],   starships: [ '12', '22' ],   created: '2014-12-09T13:50:51.644000Z',   edited: '2014-12-20T21:17:56.891000Z',   url: 'https://swapi.py4e.com/api/people/1/' } ;
const personESResult = new PersonModel( {   id: '1',   nombre: 'Luke Skywalker',   tamano: '172',   masa: '77',   color_cabello: 'blond',   color_piel: 'fair',   color_ojos: 'blue',   anio_nacimiento: '19BBY',   genero: 'male',   mundoNatal: '1',   peliculas: '["1","2","3","6","7"]',   especies: '["1"]',   vehiculos: '["14","30"]',   naves: '["12","22"]',   creado: '2014-12-09T13:50:51.644000Z',   editado: '2014-12-20T21:17:56.891000Z' }  );  

const planetSwapi = {   name: 'Tatooine',   rotation_period: '23',   orbital_period: '304',   diameter: '10465',   climate: 'arid',   gravity: '1 standard',   terrain: 'desert',   surface_water: '1',   population: '200000',   residents: [     'https://swapi.py4e.com/api/people/1/',     'https://swapi.py4e.com/api/people/2/',     'https://swapi.py4e.com/api/people/4/',     'https://swapi.py4e.com/api/people/6/',     'https://swapi.py4e.com/api/people/7/',     'https://swapi.py4e.com/api/people/8/',     'https://swapi.py4e.com/api/people/9/',     'https://swapi.py4e.com/api/people/11/',     'https://swapi.py4e.com/api/people/43/',     'https://swapi.py4e.com/api/people/62/'   ],   films: [     'https://swapi.py4e.com/api/films/1/',     'https://swapi.py4e.com/api/films/3/',     'https://swapi.py4e.com/api/films/4/',     'https://swapi.py4e.com/api/films/5/',     'https://swapi.py4e.com/api/films/6/'   ],   created: '2014-12-09T13:50:49.641000Z',   edited: '2014-12-20T20:58:18.411000Z',   url: 'https://swapi.py4e.com/api/planets/1/' };
const planetResult = {   name: 'Tatooine',   rotation_period: '23',   orbital_period: '304',   diameter: '10465',   climate: 'arid',   gravity: '1 standard',   terrain: 'desert',   surface_water: '1',   population: '200000',   residents: [     '1',  '2',  '4',     '6',  '7',  '8',     '9',  '11', '43',     '62'   ],   films: [ '1', '3', '4', '5', '6' ],   created: '2014-12-09T13:50:49.641000Z',   edited: '2014-12-20T20:58:18.411000Z',   url: 'https://swapi.py4e.com/api/planets/1/' } ;
const planetESResult = new PlanetModel({   id: '1',   nombre: 'Tatooine',   periodo_rotacion: '23',   periodo_orbital: '304',   diametro: '10465',   gravedad: '1 standard',   terreno: 'desert',   superficie_agua: '1',   poblacion: '200000',   residentes: '["1","2","4","6","7","8","9","11","43","62"]',   peliculas: '["1","3","4","5","6"]',   creado: '2014-12-09T13:50:49.641000Z',   editado: '2014-12-20T20:58:18.411000Z' });
