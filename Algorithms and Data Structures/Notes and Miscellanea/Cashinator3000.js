var Cashinator3000 = function(startingBalance, salesTax, priceList) {
  // Set balance to startingBalance or 0

  // Set sales tax to salesTax or a default value

  // Set price list to priceList or an empty hash table, priceList must be a hash table of objects
  // The key for price list will be the SKU
  // Example object: {
    //  SKU: SKU
    //  name: productNameString,
    //  price: priceNumber,
    //  taxable: boolean
  // }

  // Set an 'inTransaction' boolean to false

  // Create a transactionHistory hash table 
  // key will be transaction id
  // Example object: {
    // id: transactionId
    // transactionAmount: totalAmount,
    // itemsPurchased: numberPurchased,
    // transaction: reference to the entire transaction object
  // }

  // Create a currentTransaction blank object
}

Cashinator3000.prototype.viewBalance = function() {
  // return balance if not currently in a a transaction
};

Cashinator3000.prototype.startTransaction = function() {
  // set inTransaction to true
  // generate new unique id and set it to current transaction
  // generate a new datetime and set it to current transaction
  // generate a total and set it to 0
  // generate an empty array to keep track of items they add to the transaction
  // Example object: {
  //   id: idNumber,
  //   time: Date,
  //   subtotal: 0,
  //   grandTotal: 0,
  //   items: []
  // }
};

Cashinator3000.prototype.addItem = function(SKU) {
  // if inTransaction is true
    // Search price list for the sku
    // add it to the items array
    // add the price to total (and display it)
    // set last item scanned to the current item (ie the last item in the array)
};

Cashinator3000.prototype.endTransaction = function(amountPaid) {
  // if inTransaction is true
    // var calculateChange = function(total, amountPaid) {
    //   return the bills and coins to use to make change
    // }
    // display the change to be received to the customer
    // display the grand total (plus tax) to the customer
    // generate a receipt that lists all the items in the items array, subtotal, grand total
    // add the grand total to the balance of the cash register (including tax)
    // add currentTransaction to the transactionHistory hash table and set currentTransaction to an empty object
    // set inTransaction to false
};

Cashinator3000.prototype.searchHistory = function(productName) {
  // Search the transaction history of products by product name
  // Very very naive implementation:
  // for each transaction
    // for each item in that transaction
    // check to see if productName is a substring of the product name of the item
  // return results
};












