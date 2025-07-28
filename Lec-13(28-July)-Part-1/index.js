const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'Mongodb-demo';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Students');

  const dataAdd = await collection.insertMany([
    {
        name:"Yashita",
        empId:2210990980,
        class:"G5"
    },
    {
        name:"Pulkit",
        empId:2210992594,
        class:"G5"
    },
    
  ]);
  console.log(dataAdd);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());