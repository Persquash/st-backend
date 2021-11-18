const {default: commonMiddleware} = require('../supports/commonMiddleware');
const validator = require( '@middy/validator');
const {default: integrateDataSchema} = require( './schemas/integrateDataSchema');
const Service = require('./service'); 

async function integrateData(event, context) {
    console.info('----- request integrateData -----'); 
    const { nameTable } = event.body ; 
   
    const result = await Service.integrateData(nameTable);
    return result;
}

export const handler = commonMiddleware(integrateData)
.use(validator({inputSchema: integrateDataSchema})); 