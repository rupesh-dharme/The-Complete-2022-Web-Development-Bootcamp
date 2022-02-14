const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number, 
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const pineapple = new Fruit({
  name: 'Pineapple', 
  rating: 10,
  review: 'A great fruit.'
});

// pineapple.save()

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: "Angela", 
  age: 32,
  favouriteFruit: pineapple
});

// person.save();

// mongoose.connection.close();

// Person.updateOne({name: 'Rupesh'}, {
//   favouriteFruit: pineapple
// }, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated!");
//   }
// });

// const kiwi = new Fruit({
//   name: 'kiwi', 
//   rating: 5,
//   review: 'Best one.'
// });

// const banana = new Fruit({
//   name: 'banana',
//   rating: 10,
//   review: 'Best fruit ever'
// });

// Fruit.insertMany([kiwi, banana], function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully inserted the fruits.");
//   }
// });


// Fruit.updateOne({_id: "61f2990f6f1cfa75dd48f2f3"}, {name: "Mango"}, function(err) {
//   if(err ){
//     console.log(err);
//   } else {
//     console.log("Successfully updated.");
//   }
// });

// Fruit.deleteOne({name: "kiwi"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the entry.");
//   }
// });

// Person.insertMany([person, person, person], function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully inserted into people.");
//   }
// });


// Fruit.find(function(err, fruits) {
//   if(err) {
//     console.log(err);
//   } else {
//     for (const fruit of fruits) {
//       console.log(fruit.name);
//     }
//   }
// })

// Person.deleteMany({name: 'Rupesh'}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted.");
//   }
// })

// Person.find({}, function(err, people){
//   if(err) {
//     console.log(err);
//   } else {
//     people.forEach(function(person) {
//       mongoose.connection.close();
//       console.log(person.name);
//     })
//   }
// });