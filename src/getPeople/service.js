const createError = require('http-errors');
const ConnectionService = require('../common/ConnectionDynamoDB');

const getPeople = async() => {
    try {
        // ==== (1)Ejecutar Consulta  ====
        const params = {
            TableName: process.env.PEOPLE_TABLE_NAME
        };
        
        const result =  await ConnectionService.escanear(params, 'all');
        return {
            statusCode: 200,
            body: JSON.stringify(result.data),
        };
    } catch (error) {
        // console.error(error);
        throw new createError.InternalServerError(error);
    }  
}

export {
    getPeople
} 