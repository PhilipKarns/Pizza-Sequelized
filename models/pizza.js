module.exports = function(sequelize, DataTypes) {
  var Pizza = sequelize.define("pizza", {
    pizza_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    }
  });//define
  return Pizza;
};//exports

// // Import the ORM to create functions that will interact with the database.
// var database = require("../config/config.json");

// //var pizzaFunctions = {
// 		//CODE GOES HERE: inside `pizza.js`, create the code that will call the ORM functions using pizza specific input for the ORM.
// //};

// var pizza = {
//   // selectAll: function(cb) {
//   //   orm.selectAll("pizza", function(res) {
//   //     cb(res);
//   //   });
//   },
//   // The variables cols and vals are arrays.
//   insertOne: function(cols, vals, cb) {
//     // orm.insertOne("pizza", cols, vals, function(res) {
//     //   cb(res);
//     // });
//   },
//   updateOne: function(objColVals, condition, cb) {
//     // orm.updateOne("pizza", objColVals, condition, function(res) {
//     //   cb(res);
//     // });
//   }
// };

// // Export the database functions for the controller (pizza_controller.js).
// module.exports = pizza;