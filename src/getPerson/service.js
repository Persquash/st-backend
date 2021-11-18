const createError = require('http-errors');
const ConnectionService = require('../common/ConnectionDynamoDB');

const getPersonById = async(id) => {
    try {
        // ==== (1)Ejecutar Consulta  ====
        const params = {
            TableName: process.env.PEOPLE_TABLE_NAME,
            Key: { id },
        };
        
        const result =  await ConnectionService.obtener(params);

        if (!result.data) {
            return {
                statusCode: 502,
                body: JSON.stringify({error: `Person with ID "${id}" not found!`}),
            };
        }
        
        return {
            statusCode: 200,
            body: JSON.stringify(result.data),
        };
    } catch (error) {
        console.error(error);
        throw new createError.InternalServerError(error);
    }  
}

export {
    getPersonById
} 