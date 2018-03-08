var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "sq0atp-bYUJlthiPglnw9M_6x1Hiw";

var apiInstance = new SquareConnect.TransactionsApi();

//this is the location id of the SquareApp I created for generating transactions
//and testing, but should be location ID of Pop Parlour Square App
var locationId = "0CBXVKTXNKCD1";

var transaction_queue = [];
var opts; // required parameter to list transactions with Square TransactionsApi

//getAllTransactions receives all transactions from Square TransactionsApi and populates the queue
function getAllTransactions(beginTime, callback) {
    opts = {
        'beginTime':beginTime //the beginning of the requested reporting period, in RFC 3339 format
    };

    apiInstance.listTransactions(locationId, opts).then(function(data) {
        populateQueue(data.transactions); //populate queue
        callback(transaction_queue); //callback defined in main.js prints all transactions
    });
}

//populateQueue gets called once to fill the transaction queue.
function populateQueue(list) {
    for(var i = 0; i < list.length; i++) {
        var transaction_json = transactionToJSON(list[i]);
        transaction_queue.unshift(transaction_json);
    }
}

//getLastTransaction executes every x seconds, where x is defined in main.js
function getLastTransaction() {
    apiInstance.listTransactions(locationId, opts).then(function(data) {
        var last_transaction_id = data.transactions[0].id;
        var last_transaction_in_queue = JSON.parse(transaction_queue[transaction_queue.length-1]).id;

        //if last transaction received doesn't have the same id than the last transaction in queue, then add a new transaction to queue
        if(last_transaction_id !== last_transaction_in_queue) {
            console.log('new transaction...'); //for debugging purposes..
            var json = transactionToJSON(data.transactions[0]);
            transaction_queue.push(json);
            console.log(transaction_queue);
        } else {
            //console.log('no new transaction...');
        }
      }, function(error) {
        console.error(error);
      });
}

// transactionToJSON creates a Json object from the transaction received from Square TransactionApi
// trasactionToJSON reduces the trasaction object to only the fields needed in the front-end (id, total price, currency)
function transactionToJSON(transaction) {
    var price = transaction.tenders[0].amount_money.amount/100;
    var json = {
        "id":transaction.id,
        // "created_at":transaction.tenders[0].created_at,
        "total":price,
        "currency":transaction.tenders[0].amount_money.currency
    }
    return JSON.stringify(json);
}

module.exports = {getAllTransactions, getLastTransaction, transaction_queue}
