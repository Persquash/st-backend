// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require('aws-sdk'); 
const docClient = new AWS.DynamoDB.DocumentClient();

const escanear = async(param, type) => {
  console.log(`Escanear registros en tabla dynamo: ${param.TableName}`);
  return new Promise((resolve) => docClient.scan(param, (err, data) => {
    if (err) {
      console.error('No se encontraron registros', err);
      resolve({ err });
    } else {
      console.log('Se encontraron', data);
      let newData = type === 'first' ? {} : [];
      if (data.Items.length > 0) {
        newData = type === 'first' ? data.Items[0] : data.Items;
      }
      resolve({ data: newData });
    }
  }));
}

const insertar = async(param) => {
  console.log(`Insertar registro en tabla dynamo: ${param.TableName}`);
  return new Promise((resolve) => docClient.put(param, (err, data) => {
    if (err) {
      console.error('No insertó correctamente', err);
      resolve({ err: err.message });
    } else {
      console.log('Insertó correctamente', data);
      resolve({ data });
    }
  }));
}

const obtener = async(param) => {
  console.log(`Obtener registro en tabla dynamo: ${param.TableName}`);
  return new Promise((resolve) => docClient.get(param, (err, data) => {
    if (err) {
      console.error('No se encontró registro', err);
      resolve({ err });
    } else {
      console.log('Se encontró', data);
      resolve({ data: data.Item });
    }
  }));
}

export {
  escanear,
  obtener,
  insertar
}