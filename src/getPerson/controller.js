const {default: commonMiddleware} = require('../supports/commonMiddleware');
const Service = require('./service'); 

async function getPerson(event, context) {
    console.info('----- request getPerson -----'); 

    const { id } = event.pathParameters;
   
    const result = await Service.getPersonById(id);
    return result;
}
 

export const handler = commonMiddleware(getPerson);