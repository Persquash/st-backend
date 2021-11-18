const {default: commonMiddleware} = require('../supports/commonMiddleware');
const Service = require('./service'); 

async function getPeople(event, context) {
    console.info('----- request getPeople -----'); 
   
    const result = await Service.getPeople();
    return result;
}
 

export const handler = commonMiddleware(getPeople); 