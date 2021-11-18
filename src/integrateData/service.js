const createError = require('http-errors');
const swpeople = require('../../swapi/people');
const swplanets = require('../../swapi/planets');
const ConnectionService = require('../common/ConnectionDynamoDB');
const {
    generatePerson,
    generatePlanet,
    generatePersonES,
    generatePlanetES
} = require('./supports/service.support');

const integrateData = async(nameTable) => {   
    switch (nameTable) {
        case "people":
            return await fillData_tblPeople(); 
        case "planets":
            return await fillData_tblPlanets();     
        default:
            return await fillData_tblPeople();
    }  
}

const fillData_tblPeople = async() => { 
    try {
        const list = await swpeople.getPeople();
        
        for (let i = 0; i < list.length; i++) {  
            const person = generatePerson(list[i]);
            const personES = generatePersonES(person);
            // console.log(".....")
            // console.log(list[i])
            // console.log(".....")
            // console.log(person)
            // console.log(".....")
            // console.log(personES)

            const params = {
                TableName: process.env.PEOPLE_TABLE_NAME,
                Item: personES,
            };

            await ConnectionService.insertar(params); 
        }
        return {
            statusCode: 201,
            body: JSON.stringify({ results : 'OK', numberResults: list.length}),
        };
    } catch(error) {
        //console.error(error);
        throw new createError.InternalServerError(error);
    } 
}

const fillData_tblPlanets = async() => { 
    try {
        const list = await swplanets.getPlanets();

        for (let i = 0; i < list.length; i++) {
            const planet = generatePlanet(list[i]);
            const planetES = generatePlanetES(planet);

            // console.log(".....")
            // console.log(list[i])
            // console.log(".....")
            // console.log(planet)
            // console.log(".....")
            // console.log(planetES)

            const params = {
                TableName: process.env.PLANETS_TABLE_NAME,
                Item: planetES,
            };

            await ConnectionService.insertar(params);
        }
        return {
            statusCode: 201,
            body: JSON.stringify({ results : 'OK', numberResults: list.length }),
        };
    } catch(error) {
        //console.error(error);
        throw new createError.InternalServerError(error);
    } 
}

export {
    integrateData
} 