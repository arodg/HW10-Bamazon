var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

initialMessage();

function initialMessage() {
  inquirer.prompt([
    {
      type: "confirm",
      name: "listMessage",
      message: "Welcome to Bamazon! There are great offers today! Enter y to see a list of items for sale."
    }
]).then(function(answer) {
    if (answer.listMessage === true) {
      connection.connect(function(err) {
        if (err) throw err;
      });
      
      connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
        if (err) throw err;

        //from npm cli-table docs
        var table = new Table({
          head: ["Item ID", "Product Name", "Price"], 
          colWidths: [9, 25, 9]
        });
	
        for (var i = 0; i < res.length; i++) {
		      table.push([res[i].item_id, res[i].product_name, res[i].price]);
	       }
      
        console.log(table.toString() + "\n");
        start();
      });
    }
  });
}

    
function start() {
  inquirer.prompt([
    {
      type: "confirm",
      name: "startMessage",
      message: "Would you like to purchase any items?"
    }
]).then(function(answer) {
    if (answer.startMessage === true) {
      customerOrder();
    }
    else {
    process.exit(); //Stack Overflow, "How to exit Node JS"
    }
  });
}

function customerOrder() {
  inquirer.prompt([
    {
      name: "itemID",
      message: "What is the item ID of the product?"
    },
    {
      name: "orderQuantity",
      message: "How many would you like to order?"
    }
]).then(function(answer) {
    connection.query("SELECT * FROM products WHERE item_id=?", answer.itemID, function(err, res) {
      for (var i =0; i < res.length; i ++) {
        if (answer.orderQuantity > res[i].stock_quantity) {
          console.log("Sorry, there are only " + res[i].stock_quantity + " items left. Please submit a new order.\n");
          start();
        }
        else {
          var updatedQuantity = res[i].stock_quantity - answer.orderQuantity;
          var id = answer.itemID;
          connection.query("UPDATE products SET ? WHERE ?", [
            {
              stock_quantity: updatedQuantity
            },
            {
              item_id: id
            }
          ], function(err, res) {});
          
          console.log("Success! Your order will be processed. You have ordered \n");
          console.log("Quantity: " + answer.orderQuantity + "\n" + "Item: " + res[i].product_name + "\n");
          console.log("Your total price for this order is $" + answer.orderQuantity * res[i].price + "\n");
          console.log("Thank you for your order!");
          console.log("If interested, you may place additional orders below.\n");
          start();
        }
      }
    });
  });
}



