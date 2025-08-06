const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "kya-haal-h";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("wow");

  // the following code examples can be pasted here...
//   const insertResult = await collection.insertMany([
//     {
//       name: "pratu ka son",
//       class: "good boi",
//       roll_no: "4",
//     },
//     {
//       name: "son -> div greg",
//       class: "fuddu jvaak",
//       roll_no: "5",
//     },
//     {
//       name: "daughter -> sustik",
//       class: "noice gal",
//       roll_no: "6",
//     },
//   ]);
//   console.log("Inserted documents =>", insertResult);


// const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);


// const filteredDocs = await collection.find({ name : "pratu" }).toArray();
// console.log('Found documents filtered by { a: 3 } =>', filteredDocs);


const updateResult = await collection.updateOne({ name : "daughter -> sustik" }, { $set: { name : "grandson -> sustik" } });
console.log('Updated documents =>', updateResult);


  return "done.";
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
